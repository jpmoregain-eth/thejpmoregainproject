import * as THREE from "three";

export type SceneOptions = {
  a?: string;
  b?: string;
  speed?: number;
  amp?: number;
  count?: number;
};

export type SceneHandle = {
  set: (opts: SceneOptions) => void;
  dispose: () => void;
};

const vert = `
uniform float uTime; uniform vec2 uMouse; uniform float uScroll; uniform float uAmp;
attribute float aRand;
varying float vGlow; varying vec3 vPos;
vec3 hash3(vec3 p){ p=fract(p*vec3(.1031,.1030,.0973)); p+=dot(p,p.yxz+33.33); return fract((p.xxy+p.yxx)*p.zyx)*2.-1.; }
float noise(vec3 p){ vec3 i=floor(p), f=fract(p); vec3 u=f*f*(3.-2.*f);
  return mix(mix(mix(dot(hash3(i),f),dot(hash3(i+vec3(1,0,0)),f-vec3(1,0,0)),u.x),
                 mix(dot(hash3(i+vec3(0,1,0)),f-vec3(0,1,0)),dot(hash3(i+vec3(1,1,0)),f-vec3(1,1,0)),u.x),u.y),
             mix(mix(dot(hash3(i+vec3(0,0,1)),f-vec3(0,0,1)),dot(hash3(i+vec3(1,0,1)),f-vec3(1,0,1)),u.x),
                 mix(dot(hash3(i+vec3(0,1,1)),f-vec3(0,1,1)),dot(hash3(i+vec3(1,1,1)),f-vec3(1,1,1)),u.x),u.y),u.z); }
void main(){
  vec3 p = position;
  float n = noise(p*1.4 + uTime*.25) + .5*noise(p*3.1 - uTime*.35);
  float r = 1. + n*.45*uAmp + uScroll*.9*aRand;
  p *= r;
  vec3 m = vec3(uMouse*2.2, .9);
  float d = distance(p, m);
  p += normalize(p - m) * smoothstep(1.1, 0., d) * .55;
  vGlow = smoothstep(.1,.7,n) + smoothstep(1.1,0.,d)*.8;
  vPos = p;
  vec4 mv = modelViewMatrix * vec4(p,1.);
  gl_PointSize = (1.6 + aRand*2.4 + vGlow*2.) * (5. / -mv.z);
  gl_Position = projectionMatrix * mv;
}`;

const frag = `
uniform vec3 uA; uniform vec3 uB;
varying float vGlow; varying vec3 vPos;
void main(){
  float d = length(gl_PointCoord-.5); if(d>.5) discard;
  float a = smoothstep(.5,0.,d);
  vec3 c = mix(uA, uB, clamp(vPos.y*.5+.5,0.,1.)) + vGlow*.35;
  gl_FragColor = vec4(c, a*(.35+vGlow*.65));
}`;

export function init(canvas: HTMLCanvasElement, opts: SceneOptions = {}): SceneHandle {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(0, 0, 5.2);

  // orb: Fibonacci sphere of points
  const N = opts.count || 22000;
  const pos = new Float32Array(N * 3);
  const rnd = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const rad = Math.sqrt(1 - y * y);
    const th = i * 2.39996323;
    pos.set([Math.cos(th) * rad, y, Math.sin(th) * rad], i * 3);
    rnd[i] = Math.random();
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("aRand", new THREE.BufferAttribute(rnd, 1));
  const uniforms = {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2() },
    uScroll: { value: 0 },
    uAmp: { value: opts.amp ?? 1 },
    uA: { value: new THREE.Color(opts.a || "#3cf0c8") },
    uB: { value: new THREE.Color(opts.b || "#7a5cff") },
  };
  const mat = new THREE.ShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const orb = new THREE.Points(geo, mat);
  scene.add(orb);

  // orbit rings
  const rings = new THREE.Group();
  const disposables: { dispose: () => void }[] = [geo, mat];
  [1.9, 2.35, 2.9].forEach((r, i) => {
    const g = new THREE.BufferGeometry().setFromPoints(new THREE.EllipseCurve(0, 0, r, r).getPoints(256));
    const m = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.07 + i * 0.03 });
    const l = new THREE.Line(g, m);
    l.rotation.x = Math.PI / 2 + (i - 1) * 0.35;
    l.rotation.y = i * 0.4;
    rings.add(l);
    disposables.push(g, m);
  });
  scene.add(rings);

  // stars
  const sN = 1500;
  const sp = new Float32Array(sN * 3);
  for (let i = 0; i < sN * 3; i++) sp[i] = (Math.random() - 0.5) * 40;
  const sg = new THREE.BufferGeometry();
  sg.setAttribute("position", new THREE.BufferAttribute(sp, 3));
  const sm = new THREE.PointsMaterial({ size: 0.03, color: 0x8899aa, transparent: true, opacity: 0.6 });
  const stars = new THREE.Points(sg, sm);
  scene.add(stars);
  disposables.push(sg, sm);

  const target = new THREE.Vector2();
  const mouse = uniforms.uMouse.value;
  const onMove = (e: PointerEvent) => {
    const r = canvas.getBoundingClientRect();
    target.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  };
  addEventListener("pointermove", onMove);

  const resize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    orb.position.x = w > 900 ? 1.3 : 0;
    rings.position.x = orb.position.x;
    if (!raf) render(); // keep a paused (reduced-motion / hidden) frame in sync
  };

  let raf = 0;
  let speed = opts.speed ?? 1;
  let t = 0;
  let last = performance.now();

  const render = () => {
    uniforms.uTime.value = t;
    mouse.lerp(target, 0.06);
    const s = Math.min(scrollY / innerHeight, 1.5);
    uniforms.uScroll.value += (s - uniforms.uScroll.value) * 0.08;
    orb.rotation.y = t * 0.12 + mouse.x * 0.4;
    orb.rotation.x = -mouse.y * 0.3;
    rings.rotation.z = t * 0.05;
    rings.rotation.x = mouse.y * 0.15;
    stars.rotation.y = t * 0.01;
    camera.position.z = 5.2 + uniforms.uScroll.value * 1.2;
    renderer.render(scene, camera);
  };

  const tick = () => {
    const now = performance.now();
    t += ((now - last) / 1000) * speed;
    last = now;
    render();
    raf = requestAnimationFrame(tick);
  };

  const start = () => {
    if (raf) return;
    last = performance.now();
    raf = requestAnimationFrame(tick);
  };
  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };
  const onVisibility = () => (document.hidden ? stop() : start());
  document.addEventListener("visibilitychange", onVisibility);

  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();
  if (!document.hidden) start();

  return {
    set({ a, b, speed: sp2, amp }) {
      if (a) uniforms.uA.value.set(a);
      if (b) uniforms.uB.value.set(b);
      if (sp2 != null) speed = sp2;
      if (amp != null) uniforms.uAmp.value = amp;
    },
    dispose() {
      stop();
      removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      ro.disconnect();
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
    },
  };
}
