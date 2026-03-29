import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for The JPMoreGain Project - how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <header className="mb-12">
          <p className="section-title mb-2">// Legal</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#E5E5E5] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#E5E5E5]/50 text-sm font-mono">
            Last Updated: March 29, 2026
          </p>
        </header>

        {/* Content */}
        <div className="glass-card p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              1. Introduction
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              The JPMoreGain Project (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website
              thejpmoregainproject.com (the &quot;Site&quot;).
            </p>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              Site.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              2. Information We Collect
            </h2>

            <h3 className="font-semibold text-[#E5E5E5] mb-2 mt-4">
              2.1 Automatically Collected Information
            </h3>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              When you visit our Site, we may automatically collect certain
              information about your device and usage patterns, including:
            </p>
            <ul className="list-disc list-inside text-[#E5E5E5]/70 space-y-2 ml-4">
              <li>
                IP address and approximate geographic location (country/region
                level)
              </li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website or source</li>
              <li>Pages visited and time spent on each page</li>
              <li>Date and time of your visit</li>
              <li>Device type (desktop, mobile, tablet)</li>
            </ul>

            <h3 className="font-semibold text-[#E5E5E5] mb-2 mt-6">
              2.2 Analytics Data
            </h3>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              We use analytics services such as Google Analytics to help us
              understand how visitors use our Site. These services collect
              information sent by your browser, including your IP address and
              the pages you visit. This information is used to improve our Site
              and content.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              3. Cookies and Tracking Technologies
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity
              on our Site and hold certain information. Cookies are files with a
              small amount of data which may include an anonymous unique
              identifier.
            </p>

            <h3 className="font-semibold text-[#E5E5E5] mb-2 mt-4">
              Types of Cookies We Use:
            </h3>
            <ul className="list-disc list-inside text-[#E5E5E5]/70 space-y-2 ml-4">
              <li>
                <strong>Essential Cookies:</strong> Required for the Site to
                function properly
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors interact with our Site
              </li>
              <li>
                <strong>Advertising Cookies:</strong> Used by our advertising
                partners to deliver relevant advertisements
              </li>
            </ul>

            <p className="text-[#E5E5E5]/80 leading-relaxed mt-4">
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our Site.
            </p>
          </section>

          {/* Third-Party Advertising */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              4. Third-Party Advertising
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              We may use third-party advertising companies, including Google
              AdSense, to serve ads when you visit our Site. These companies may
              use information about your visits to this and other websites to
              provide advertisements about goods and services of interest to
              you.
            </p>

            <h3 className="font-semibold text-[#E5E5E5] mb-2 mt-4">
              Google AdSense and DoubleClick Cookie
            </h3>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              Google, as a third-party vendor, uses cookies to serve ads on our
              Site. Google&apos;s use of the DoubleClick cookie enables it and
              its partners to serve ads based on your visit to our Site and/or
              other sites on the Internet.
            </p>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              You may opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4A843] hover:underline"
              >
                Google Ads Settings
              </a>
              . Alternatively, you can opt out of a third-party vendor&apos;s
              use of cookies for personalized advertising by visiting{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4A843] hover:underline"
              >
                www.aboutads.info/choices
              </a>
              .
            </p>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              5. How We Use Your Information
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-[#E5E5E5]/70 space-y-2 ml-4">
              <li>Operate and maintain our Site</li>
              <li>Improve, personalize, and expand our Site</li>
              <li>
                Understand and analyze how you use our Site and which pages are
                most popular
              </li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Display relevant advertisements through our advertising partners
              </li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              6. Disclosure of Your Information
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              We may share information we have collected about you in certain
              situations:
            </p>
            <ul className="list-disc list-inside text-[#E5E5E5]/70 space-y-2 ml-4">
              <li>
                <strong>Service Providers:</strong> We may share your
                information with third-party service providers that perform
                services for us (e.g., analytics, advertising)
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your
                information where required by law or in response to valid legal
                requests
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with any
                merger, sale of company assets, or acquisition
              </li>
            </ul>
            <p className="text-[#E5E5E5]/80 leading-relaxed mt-4">
              We do not sell, rent, or lease your personal information to third
              parties.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              7. Your Privacy Rights
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information:
            </p>
            <ul className="list-disc list-inside text-[#E5E5E5]/70 space-y-2 ml-4">
              <li>
                The right to access personal information we hold about you
              </li>
              <li>
                The right to request correction of inaccurate personal
                information
              </li>
              <li>
                The right to request deletion of your personal information
              </li>
              <li>The right to opt out of personalized advertising</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p className="text-[#E5E5E5]/80 leading-relaxed mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:moregainjp@gmail.com"
                className="text-[#D4A843] hover:underline"
              >
                moregainjp@gmail.com
              </a>
              .
            </p>
          </section>

          {/* PDPA Compliance */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              8. Singapore Personal Data Protection Act (PDPA) Compliance
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              As we are based in Singapore, we comply with the Personal Data
              Protection Act 2012 (PDPA). Under the PDPA:
            </p>
            <ul className="list-disc list-inside text-[#E5E5E5]/70 space-y-2 ml-4">
              <li>
                We only collect, use, and disclose personal data for purposes
                that a reasonable person would consider appropriate in the
                circumstances
              </li>
              <li>
                We obtain consent before collecting, using, or disclosing
                personal data (where required)
              </li>
              <li>
                We make reasonable efforts to ensure that personal data
                collected is accurate and complete
              </li>
              <li>
                We protect personal data in our possession by making reasonable
                security arrangements
              </li>
              <li>
                We retain personal data only as long as necessary for legal or
                business purposes
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              9. Security of Your Information
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that no method of transmission over the
              Internet or method of electronic storage is 100% secure. We cannot
              guarantee absolute security.
            </p>
          </section>

          {/* Children */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              10. Children&apos;s Privacy
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              Our Site is not intended for children under 13 years of age. We do
              not knowingly collect personal information from children under 13.
              If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us
              immediately.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last Updated&quot; date at the top of this
              Privacy Policy. You are advised to review this Privacy Policy
              periodically for any changes.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              12. Contact Us
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="bg-[#0A0A0F] rounded-lg p-4 border border-[#D4A843]/20">
              <p className="text-[#E5E5E5]/80 font-mono text-sm">
                <strong className="text-[#D4A843]">Email:</strong>{" "}
                <a
                  href="mailto:moregainjp@gmail.com"
                  className="text-[#00FF88] hover:underline"
                >
                  moregainjp@gmail.com
                </a>
              </p>
              <p className="text-[#E5E5E5]/80 font-mono text-sm mt-2">
                <strong className="text-[#D4A843]">Location:</strong> Singapore
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
