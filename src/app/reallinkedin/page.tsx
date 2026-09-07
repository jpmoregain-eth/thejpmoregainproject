"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import AuthModal from "./_components/AuthModal";
import HeroHeader from "./_components/HeroHeader";
import InputCard, { type ScreenshotState } from "./_components/InputCard";
import LoadingIndicator from "./_components/LoadingIndicator";
import NavTierIndicator from "./_components/NavTierIndicator";
import OutputCard from "./_components/OutputCard";
import PaywallModal from "./_components/PaywallModal";
import SharePanel from "./_components/SharePanel";
import Toast from "./_components/Toast";
import UpgradePrompt from "./_components/UpgradePrompt";
import { FREE_LIMIT, type Entitlements, type Tier } from "./_lib/constants";

export default function RealLinkedInPage() {
  const [tier, setTier] = useState<Tier>("free");
  const [signedIn, setSignedIn] = useState(false);
  const [used, setUsed] = useState(0);
  const [limit, setLimit] = useState(FREE_LIMIT);

  const [tab, setTab] = useState<"text" | "image">("text");
  const [text, setText] = useState("");
  const [screenshot, setScreenshot] = useState<ScreenshotState | null>(null);

  const [view, setView] = useState<"input" | "loading" | "output">("input");
  const [output, setOutput] = useState("");

  const [share, setShare] = useState(false);
  const [paywall, setPaywall] = useState(false);
  const [auth, setAuth] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "checkout">("signin");
  const [authBusy, setAuthBusy] = useState(false);
  const [pendingPlan, setPendingPlan] = useState<"monthly" | "lifetime">("monthly");

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState("");

  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copiedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previewUrl = useRef<string | null>(null);

  const free = tier === "free";
  const remaining = free ? Math.max(0, limit - used) : limit;
  const locked = free && remaining === 0;

  const flash = useCallback((message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = setTimeout(() => setToast(""), 2200);
  }, []);

  const applyEntitlements = useCallback((data: Partial<Entitlements>) => {
    if (data.tier) setTier(data.tier);
    if (typeof data.signedIn === "boolean") setSignedIn(data.signedIn);
    if (typeof data.used === "number") setUsed(data.used);
    if (typeof data.limit === "number") setLimit(data.limit);
  }, []);

  // Tier and the lifetime free counter are owned by the server. This also
  // handles the two ways a visitor comes back to the page: from Stripe with a
  // checkout session to verify, and from a magic link with a fresh session.
  useEffect(() => {
    let cancelled = false;
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");
    const signin = params.get("signin");
    const cancelled_ = params.get("checkout") === "cancelled";

    const clearQuery = () =>
      window.history.replaceState(null, "", window.location.pathname);

    const load = async () => {
      if (sessionId) {
        clearQuery();
        const response = await fetch("/api/reallinkedin/checkout/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ session_id: sessionId }),
        });
        const data = await response.json();
        if (!cancelled && response.ok) {
          applyEntitlements(data);
          flash("Payment complete — you're Pro");
          return;
        }
        if (!cancelled) flash(data?.error ?? "Could not confirm that payment");
      }

      if (signin) {
        clearQuery();
        if (!cancelled) {
          flash(signin === "ok" ? "You're signed in" : "That link has expired");
        }
      }

      if (cancelled_) {
        clearQuery();
        if (!cancelled) flash("Checkout cancelled");
      }

      const response = await fetch("/api/reallinkedin/usage");
      if (response.ok && !cancelled) applyEntitlements(await response.json());
    };

    load().catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [applyEntitlements, flash]);

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
      if (copiedTimer.current) clearTimeout(copiedTimer.current);
      if (previewUrl.current) URL.revokeObjectURL(previewUrl.current);
    },
    [],
  );

  const clearScreenshot = () => {
    if (previewUrl.current) URL.revokeObjectURL(previewUrl.current);
    previewUrl.current = null;
    setScreenshot(null);
  };

  const handleFile = async (file: File) => {
    if (previewUrl.current) URL.revokeObjectURL(previewUrl.current);
    const url = URL.createObjectURL(file);
    previewUrl.current = url;
    setScreenshot({
      name: file.name,
      previewUrl: url,
      text: "",
      words: 0,
      status: "reading",
    });

    const body = new FormData();
    body.append("image", file);

    try {
      const response = await fetch("/api/reallinkedin/extract", { method: "POST", body });
      const data = await response.json();

      if (response.status === 402) {
        applyEntitlements(data);
        setPaywall(true);
        setScreenshot((current) =>
          current ? { ...current, status: "error", error: "Free limit reached." } : current,
        );
        return;
      }

      if (!response.ok) {
        setScreenshot((current) =>
          current
            ? { ...current, status: "error", error: data?.error ?? "Could not read that screenshot." }
            : current,
        );
        return;
      }

      setScreenshot((current) =>
        current ? { ...current, status: "ready", text: data.text, words: data.words } : current,
      );
    } catch {
      setScreenshot((current) =>
        current ? { ...current, status: "error", error: "Upload failed. Try again." } : current,
      );
    }
  };

  const translate = async () => {
    if (locked) {
      setPaywall(true);
      return;
    }

    const post = tab === "image" ? (screenshot?.text ?? "") : text;
    if (!post.trim()) {
      flash(
        tab === "image" && screenshot?.status === "reading"
          ? "Still reading that screenshot"
          : "Paste a post first",
      );
      return;
    }

    setView("loading");
    setShare(false);
    setCopied(false);

    try {
      const response = await fetch("/api/reallinkedin/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: post }),
      });
      const data = await response.json();

      if (response.status === 402) {
        applyEntitlements(data);
        setView("input");
        setPaywall(true);
        return;
      }

      if (!response.ok) {
        setView("input");
        flash(data?.error ?? "Translation failed");
        return;
      }

      setOutput(data.output);
      applyEntitlements(data);
      setView("output");
    } catch {
      setView("input");
      flash("Translation failed");
    }
  };

  const copyOutput = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      flash("Translation copied");
      if (copiedTimer.current) clearTimeout(copiedTimer.current);
      copiedTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      flash("Clipboard blocked by your browser");
    }
  };

  const choosePlan = (plan: "monthly" | "lifetime") => {
    setPendingPlan(plan);
    setPaywall(false);
    setAuthMode("checkout");
    setAuth(true);
  };

  const submitAuth = async (email: string) => {
    setAuthBusy(true);
    try {
      const endpoint =
        authMode === "signin"
          ? "/api/reallinkedin/auth/magic-link"
          : "/api/reallinkedin/checkout";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          authMode === "signin" ? { email } : { plan: pendingPlan, email },
        ),
      });
      const data = await response.json();

      if (!response.ok) {
        flash(data?.error ?? "Something went wrong");
        return;
      }

      if (authMode === "signin") {
        setAuth(false);
        flash("Check your inbox for the link");
        return;
      }

      // Hand off to Stripe. Pro is granted on the way back, not here.
      window.location.href = data.url;
    } catch {
      flash("Something went wrong");
    } finally {
      setAuthBusy(false);
    }
  };

  return (
    // No stacking context here: the modals and toast need to sit above the
    // root layout's fixed navbar (z-50).
    <div className="mx-auto w-full max-w-[760px] px-6 pt-[136px] pb-24">
      <NavTierIndicator
        tier={tier}
        signedIn={signedIn}
        onSignIn={() => {
          setAuthMode("signin");
          setAuth(true);
        }}
      />

      <HeroHeader />

      <InputCard
        tab={tab}
        onTabChange={setTab}
        text={text}
        onTextChange={setText}
        screenshot={screenshot}
        onFile={handleFile}
        onRemoveScreenshot={clearScreenshot}
        tier={tier}
        usageLabel={locked ? "0 left — limit reached" : `${remaining} of ${limit} left`}
        locked={locked}
        busy={view === "loading"}
        onTranslate={translate}
      />

      {view === "loading" && <LoadingIndicator />}

      {view === "output" && (
        <section className="mt-8" style={{ animation: "fadeInUp 0.5s ease" }}>
          <OutputCard
            output={output}
            tier={tier}
            copied={copied}
            shareOpen={share}
            onCopy={copyOutput}
            onToggleShare={() => setShare((open) => !open)}
          />
          {free && <UpgradePrompt onSeePlans={() => setPaywall(true)} />}
        </section>
      )}

      {!free && share && view === "output" && (
        <SharePanel
          output={output}
          name={name}
          title={title}
          onNameChange={setName}
          onTitleChange={setTitle}
          onToast={flash}
        />
      )}

      {paywall && (
        <PaywallModal
          locked={locked}
          onClose={() => setPaywall(false)}
          onChoosePlan={choosePlan}
        />
      )}

      {auth && (
        <AuthModal
          mode={authMode}
          busy={authBusy}
          onClose={() => setAuth(false)}
          onSubmit={submitAuth}
        />
      )}

      {toast && <Toast message={toast} />}
    </div>
  );
}
