import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for The JPMoreGain Project - the rules and guidelines for using our website and services.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <header className="mb-12">
          <p className="section-title mb-2">// Legal</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#E5E5E5] mb-4">
            Terms of Service
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
              1. Agreement to Terms
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              Welcome to The JPMoreGain Project. These Terms of Service
              (&quot;Terms&quot;) govern your access to and use of our website
              at thejpmoregainproject.com (the &quot;Site&quot;), including any
              content, functionality, and services offered on or through the
              Site.
            </p>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              By accessing or using the Site, you agree to be bound by these
              Terms. If you do not agree to these Terms, you must not access or
              use the Site.
            </p>
          </section>

          {/* Use of the Site */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              2. Use of the Site
            </h2>

            <h3 className="font-semibold text-[#E5E5E5] mb-2 mt-4">
              2.1 Permitted Use
            </h3>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              You may access and use the Site for lawful purposes only. You
              agree to use the Site in accordance with all applicable laws,
              rules, and regulations.
            </p>

            <h3 className="font-semibold text-[#E5E5E5] mb-2 mt-4">
              2.2 Prohibited Activities
            </h3>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-[#E5E5E5]/70 space-y-2 ml-4">
              <li>
                Use the Site in any way that violates any applicable law or
                regulation
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the Site
                or any systems connected to the Site
              </li>
              <li>
                Interfere with or disrupt the operation of the Site or servers
                or networks connected to the Site
              </li>
              <li>
                Use any automated means (including bots, scrapers, or spiders)
                to access the Site without our express permission
              </li>
              <li>
                Reproduce, duplicate, copy, sell, resell, or exploit any portion
                of the Site without express written permission
              </li>
              <li>
                Transmit any viruses, malware, or other harmful code through the
                Site
              </li>
              <li>
                Impersonate or attempt to impersonate us, our employees, another
                user, or any other person or entity
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              3. Intellectual Property Rights
            </h2>

            <h3 className="font-semibold text-[#E5E5E5] mb-2 mt-4">
              3.1 Our Content
            </h3>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              The Site and its entire contents, features, and functionality
              (including but not limited to all information, software, text,
              displays, images, graphics, design, and the selection and
              arrangement thereof) are owned by The JPMoreGain Project, its
              licensors, or other providers of such material and are protected
              by Singapore and international copyright, trademark, patent, trade
              secret, and other intellectual property or proprietary rights
              laws.
            </p>

            <h3 className="font-semibold text-[#E5E5E5] mb-2 mt-4">
              3.2 Limited License
            </h3>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              We grant you a limited, non-exclusive, non-transferable, revocable
              license to access and use the Site for personal, non-commercial
              purposes. This license does not include the right to modify, copy,
              distribute, transmit, display, perform, reproduce, publish,
              license, create derivative works from, transfer, or sell any
              content obtained from the Site.
            </p>
          </section>

          {/* AI-Generated Content */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              4. AI-Generated Content Disclaimer
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              Certain content on the Site and our related projects may be
              generated or assisted by artificial intelligence (AI) systems.
              This AI-generated content is provided for informational and
              entertainment purposes only.
            </p>
            <div className="bg-[#D4A843]/10 border border-[#D4A843]/30 rounded-lg p-4 mb-4">
              <p className="text-[#D4A843] font-semibold mb-2">
                Important Notice:
              </p>
              <ul className="list-disc list-inside text-[#E5E5E5]/80 space-y-2">
                <li>
                  AI-generated content may not be accurate, complete, or current
                </li>
                <li>
                  AI-generated content should not be relied upon as a substitute
                  for professional advice
                </li>
                <li>
                  We do not guarantee the accuracy or reliability of any
                  AI-generated content
                </li>
                <li>
                  Users should independently verify any information before
                  acting on it
                </li>
              </ul>
            </div>
          </section>

          {/* Not Financial Advice */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              5. No Financial or Professional Advice
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              Despite the financial-themed branding of &quot;JPMoreGain,&quot;
              nothing on this Site constitutes financial, investment, legal, or
              professional advice of any kind.
            </p>
            <div className="bg-[#00FF88]/10 border border-[#00FF88]/30 rounded-lg p-4">
              <p className="text-[#00FF88] font-semibold mb-2">Disclaimer:</p>
              <ul className="list-disc list-inside text-[#E5E5E5]/80 space-y-2">
                <li>
                  The Site is a technology portfolio and showcase, not a
                  financial services platform
                </li>
                <li>
                  No content on this Site should be construed as investment
                  advice or financial guidance
                </li>
                <li>
                  The &quot;gains&quot; referred to in our branding relate to
                  knowledge and technological advancement, not financial returns
                </li>
                <li>
                  Always consult qualified professionals for financial,
                  investment, legal, or other professional matters
                </li>
              </ul>
            </div>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              6. Third-Party Links and Content
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              The Site may contain links to third-party websites, applications,
              or services that are not owned or controlled by us. We have no
              control over, and assume no responsibility for, the content,
              privacy policies, or practices of any third-party websites or
              services.
            </p>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              Your use of third-party websites is at your own risk. We encourage
              you to review the terms of service and privacy policies of any
              third-party websites you visit.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              7. Disclaimer of Warranties
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              THE SITE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
              AVAILABLE&quot; BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER
              EXPRESS OR IMPLIED.
            </p>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc list-inside text-[#E5E5E5]/70 space-y-2 ml-4">
              <li>
                The implied warranties of merchantability, fitness for a
                particular purpose, and non-infringement
              </li>
              <li>
                That the Site will be uninterrupted, timely, secure, or
                error-free
              </li>
              <li>
                That the results obtained from the use of the Site will be
                accurate or reliable
              </li>
              <li>
                That any errors in the Site will be corrected
              </li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE JPMOREGAIN
              PROJECT AND ITS OWNER, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT
              BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc list-inside text-[#E5E5E5]/70 space-y-2 ml-4">
              <li>Loss of profits, revenue, or data</li>
              <li>Business interruption</li>
              <li>Loss of goodwill</li>
              <li>
                Any damages resulting from your access to, use of, or inability
                to access or use the Site
              </li>
              <li>
                Any reliance on any content, information, or materials available
                on or through the Site
              </li>
            </ul>
            <p className="text-[#E5E5E5]/80 leading-relaxed mt-4">
              This limitation applies regardless of whether the damages are
              based on warranty, contract, tort, statute, or any other legal
              theory.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              9. Indemnification
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              You agree to defend, indemnify, and hold harmless The JPMoreGain
              Project, its owner, employees, agents, and affiliates from and
              against any claims, liabilities, damages, judgments, awards,
              losses, costs, expenses, or fees (including reasonable
              attorneys&apos; fees) arising out of or relating to your violation
              of these Terms or your use of the Site.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              10. Changes to These Terms
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. We will provide notice of any material
              changes by posting the new Terms on the Site and updating the
              &quot;Last Updated&quot; date. Your continued use of the Site
              following the posting of revised Terms means you accept and agree
              to the changes.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              11. Governing Law and Jurisdiction
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with
              the laws of the Republic of Singapore, without regard to its
              conflict of law provisions.
            </p>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              Any legal action or proceeding arising out of or relating to these
              Terms or your use of the Site shall be brought exclusively in the
              courts of Singapore, and you consent to the personal jurisdiction
              of such courts.
            </p>
          </section>

          {/* Severability */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              12. Severability
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              If any provision of these Terms is held to be invalid, illegal, or
              unenforceable, the remaining provisions shall continue in full
              force and effect. The invalid, illegal, or unenforceable provision
              shall be modified to the minimum extent necessary to make it
              valid, legal, and enforceable while preserving its original intent
              as much as possible.
            </p>
          </section>

          {/* Entire Agreement */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              13. Entire Agreement
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the
              entire agreement between you and The JPMoreGain Project regarding
              your use of the Site and supersede all prior and contemporaneous
              understandings, agreements, representations, and warranties, both
              written and oral, regarding the Site.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              14. Contact Us
            </h2>
            <p className="text-[#E5E5E5]/80 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please
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
