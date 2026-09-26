import { Metadata } from "next";
import Link from "next/link";
import DocPage, { ContactCard, DocSection } from "@/components/site/DocPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for The JPMoreGain Project - how our website, web tools and mobile apps collect, use and protect your personal data.",
};

const EMAIL = "moregainjp@gmail.com";

export default function PrivacyPage() {
  return (
    <DocPage
      label="Legal"
      title="Privacy Policy"
      lede="What we collect across our website, web tools and mobile apps, why we collect it, and the choices you have."
      meta="Last updated: September 26, 2026"
    >
      <DocSection num={1} title="Introduction">
        <p>
          The JPMoreGain Project (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a
          one-person technology lab based in Singapore. This Privacy Policy explains how we
          collect, use, disclose and safeguard your information when you use any of the
          following (together, the &quot;Services&quot;):
        </p>
        <ul>
          <li>
            <strong>Our website</strong>{" "}at thejpmoregainproject.com (the &quot;Site&quot;)
          </li>
          <li>
            <strong>Our web tools</strong>, such as RealLinkedIn, AgentBear Corps, Covfefe,
            Virtual MPS and our other web projects
          </li>
          <li>
            <strong>Our mobile apps</strong> on the App Store and Google Play, including SG
            Lottery 4D TOTO, 4D TOTO MY Lottery Results, Jing, Ayah, Gita, This Is Home and Fork
            This Dragon
          </li>
        </ul>
        <p>
          If a particular app or tool shows its own privacy notice, that notice applies in
          addition to this policy. If you do not agree with this policy, please do not use the
          Services.
        </p>
      </DocSection>

      <DocSection num={2} title="Information we collect">
        <h3>2.1 When you visit our websites</h3>
        <p>
          Like most websites, our servers and hosting providers automatically receive certain
          technical information when you visit, including:
        </p>
        <ul>
          <li>IP address and approximate location (country or region level)</li>
          <li>Browser type, operating system and device type</li>
          <li>Referring website, pages visited, and the date and time of your visit</li>
        </ul>

        <h3>2.2 Information you give us</h3>
        <ul>
          <li>
            <strong>Emails:</strong> if you contact us, we receive your email address and
            whatever you choose to include in your message.
          </li>
          <li>
            <strong>Sign-in:</strong> some tools let you sign in. For example, RealLinkedIn uses
            a one-time email link, so we store your email address and your account status.
          </li>
          <li>
            <strong>Content you submit to AI tools:</strong> text, prompts or screenshots you
            enter into our AI-powered tools are sent to an AI provider to generate a response
            (see section 5).
          </li>
        </ul>

        <h3>2.3 When you use our mobile apps</h3>
        <ul>
          <li>
            <strong>No account needed for most apps.</strong> SG Lottery 4D TOTO, 4D TOTO MY
            Lottery Results, Jing, Ayah, Gita and This Is Home work without signing up.
          </li>
          <li>
            <strong>Details you enter for a feature.</strong> Some features ask for personal
            details to work — for example, 4D TOTO MY asks for your birthday, gender, favourite
            colour and name to generate your daily lucky numbers. These details stay on your
            device and are used only to provide that feature.
          </li>
          <li>
            <strong>Fork This Dragon</strong> uses Google Sign-In. When you sign in we receive
            your name, email address and Google account ID so we can save and sync your
            progress. Your display name, level and dragon kills may appear on the public
            leaderboard, and messages you post in the in-game chat are visible to other players.
          </li>
          <li>
            <strong>Device and advertising data.</strong> Apps that show ads, and the app stores
            themselves, may collect device information such as your device model, operating
            system, app version, crash reports and your device&apos;s advertising identifier
            (see section 4).
          </li>
        </ul>

        <h3>2.4 Payments</h3>
        <p>
          Paid features are processed by third parties. RealLinkedIn Pro payments are handled by
          Stripe, and in-app purchases are handled by Apple (App Store) or Google (Google Play).
          We receive confirmation that you paid, but we never see or store your full card
          details.
        </p>
      </DocSection>

      <DocSection num={3} title="Cookies and similar technologies">
        <p>
          Our websites use cookies and similar technologies (such as local storage) to work
          properly and to show ads. Cookies are small files that may include an anonymous unique
          identifier.
        </p>
        <ul>
          <li>
            <strong>Essential:</strong> keep you signed in and remember things like how many free
            uses of a tool you have left
          </li>
          <li>
            <strong>Advertising:</strong> used by our advertising partners to show and measure
            ads
          </li>
        </ul>
        <p>
          You can set your browser to refuse cookies or to warn you when a cookie is being sent.
          If you block cookies, some parts of the Services may not work.
        </p>
      </DocSection>

      <DocSection num={4} title="Advertising">
        <p>
          Advertising helps keep our websites and apps free. Our advertising partners may use
          cookies (on the web) or your device&apos;s advertising identifier (in apps) to show
          ads, limit how often you see them, and measure how they perform. Depending on your
          settings, these ads may be personalised based on your activity on this and other sites
          and apps.
        </p>
        <ul>
          <li>
            <strong>Website:</strong> the Site shows in-text ads from Infolinks.
          </li>
          <li>
            <strong>Mobile apps:</strong> free apps such as SG Lottery 4D TOTO, 4D TOTO MY and
            Fork This Dragon show ads served by third-party ad networks such as Google AdMob.
            Jing does not show ads.
          </li>
        </ul>
        <h3>Your choices</h3>
        <ul>
          <li>
            <strong>iPhone and iPad:</strong> apps must ask before tracking you across other
            companies&apos; apps and websites. You can change this at any time in Settings →
            Privacy &amp; Security → Tracking.
          </li>
          <li>
            <strong>Android:</strong> you can reset or delete your advertising ID in Settings →
            Google → Ads (or Settings → Privacy → Ads).
          </li>
          <li>
            <strong>Web:</strong> you can opt out of personalised ads from Google at{" "}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>
            , and from many other ad companies at{" "}
            <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">
              aboutads.info/choices
            </a>
            .
          </li>
        </ul>
      </DocSection>

      <DocSection num={5} title="Third-party services">
        <p>
          We rely on trusted service providers to run the Services. They only receive the
          information they need to do their job:
        </p>
        <ul>
          <li>
            <strong>Hosting and infrastructure:</strong> our hosting providers serve our websites
            and store data on our behalf
          </li>
          <li>
            <strong>Accounts and data storage:</strong> Supabase (sign-in and account data for
            RealLinkedIn)
          </li>
          <li>
            <strong>AI providers:</strong> content you submit to our AI tools is sent to AI model
            providers such as Anthropic and Groq to generate a response
          </li>
          <li>
            <strong>Payments:</strong> Stripe, Apple and Google
          </li>
          <li>
            <strong>Sign-in:</strong> Google Sign-In (Fork This Dragon)
          </li>
          <li>
            <strong>Advertising:</strong> Infolinks, Google AdMob and other ad networks
          </li>
          <li>
            <strong>App distribution:</strong> the Apple App Store and Google Play, which have
            their own privacy policies
          </li>
        </ul>
      </DocSection>

      <DocSection num={6} title="How we use your information">
        <ul>
          <li>Provide, operate and maintain the Services</li>
          <li>Save your progress, preferences and account status</li>
          <li>Process payments and unlock paid features</li>
          <li>Respond to your questions and support requests</li>
          <li>Show ads that keep the Services free</li>
          <li>Understand what works, fix bugs and prevent abuse</li>
          <li>Comply with legal obligations</li>
        </ul>
      </DocSection>

      <DocSection num={7} title="Disclosure of your information">
        <p>We may share information in the following situations:</p>
        <ul>
          <li>
            <strong>Service providers:</strong> with the providers listed in section 5, so they
            can perform services for us
          </li>
          <li>
            <strong>Other users:</strong> information you choose to make public, such as your
            leaderboard name or chat messages in Fork This Dragon
          </li>
          <li>
            <strong>Legal requirements:</strong> where required by law or in response to valid
            legal requests
          </li>
          <li>
            <strong>Business transfers:</strong> in connection with a sale, merger or transfer of
            a project
          </li>
        </ul>
        <p>We do not sell, rent or lease your personal information.</p>
      </DocSection>

      <DocSection num={8} title="Data retention and deletion">
        <p>
          We keep personal information only as long as we need it to provide the Services or to
          meet legal, accounting or reporting requirements. Anything an app keeps only on your
          device is removed when you clear the app&apos;s data or uninstall it.
        </p>
        <p>
          To delete an account (for example, your RealLinkedIn or Fork This Dragon account) and
          the data linked to it, email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> from the
          email address on the account and tell us which app it is. We will confirm once it is
          done, normally within 30 days.
        </p>
      </DocSection>

      <DocSection num={9} title="Your privacy rights">
        <p>
          Depending on where you live, you may have rights over your personal information,
          including:
        </p>
        <ul>
          <li>The right to access the personal information we hold about you</li>
          <li>The right to correct inaccurate information</li>
          <li>The right to have your information deleted</li>
          <li>The right to opt out of personalised advertising</li>
          <li>The right to withdraw consent at any time</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          .
        </p>
      </DocSection>

      <DocSection num={10} title="Singapore PDPA">
        <p>
          As we are based in Singapore, we comply with the Personal Data Protection Act 2012
          (PDPA). In particular:
        </p>
        <ul>
          <li>
            We only collect, use and disclose personal data for purposes a reasonable person
            would consider appropriate in the circumstances
          </li>
          <li>We obtain consent before collecting, using or disclosing personal data where required</li>
          <li>We make reasonable efforts to keep personal data accurate and complete</li>
          <li>We protect personal data with reasonable security arrangements</li>
          <li>We keep personal data only as long as necessary for legal or business purposes</li>
        </ul>
      </DocSection>

      <DocSection num={11} title="Security">
        <p>
          We use reasonable administrative and technical measures to protect your information,
          such as encrypted connections (HTTPS). However, no method of transmission over the
          internet or electronic storage is 100% secure, and we cannot guarantee absolute
          security.
        </p>
      </DocSection>

      <DocSection num={12} title="Children">
        <p>
          The Services are not directed at children under 13, and we do not knowingly collect
          personal information from them. Our lottery results apps (SG Lottery 4D TOTO and 4D
          TOTO MY) are intended for adults aged 18 and over only.
        </p>
        <p>
          If you are a parent or guardian and believe your child has given us personal
          information, please contact us and we will delete it.
        </p>
      </DocSection>

      <DocSection num={13} title="Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time, for example when we launch a new
          app. We will post the updated policy on this page and change the &quot;Last
          updated&quot; date above. Please also read our <Link href="/terms">Terms of Service</Link>.
        </p>
      </DocSection>

      <DocSection num={14} title="Contact us">
        <p>If you have any questions about this Privacy Policy, please get in touch:</p>
        <ContactCard />
      </DocSection>
    </DocPage>
  );
}
