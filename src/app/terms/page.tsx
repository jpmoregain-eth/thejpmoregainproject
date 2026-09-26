import { Metadata } from "next";
import Link from "next/link";
import DocPage, { Callout, ContactCard, DocSection } from "@/components/site/DocPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for The JPMoreGain Project - the rules for using our website, web tools and mobile apps.",
};

export default function TermsPage() {
  return (
    <DocPage
      label="Legal"
      title="Terms of Service"
      lede="The rules for using our website, web tools and mobile apps."
      meta="Last updated: September 26, 2026"
    >
      <DocSection num={1} title="Agreement to terms">
        <p>
          Welcome to The JPMoreGain Project. These Terms of Service (&quot;Terms&quot;) govern
          your access to and use of our website at thejpmoregainproject.com (the
          &quot;Site&quot;), our web tools, and our mobile apps on the App Store and Google Play
          (together, the &quot;Services&quot;).
        </p>
        <p>
          By accessing or using the Services, you agree to be bound by these Terms and our{" "}
          <Link href="/privacy">Privacy Policy</Link>. If you do not agree, you must not use the
          Services.
        </p>
      </DocSection>

      <DocSection num={2} title="Using the Services">
        <h3>2.1 Permitted use</h3>
        <p>
          You may use the Services for lawful, personal purposes only, in line with all
          applicable laws and regulations. Some Services have age limits — see section 6.
        </p>

        <h3>2.2 Prohibited activities</h3>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Services in any way that breaks any applicable law or regulation</li>
          <li>
            Attempt to gain unauthorised access to any part of the Services or the systems
            connected to them
          </li>
          <li>Interfere with or disrupt the Services, or the servers and networks behind them</li>
          <li>
            Use bots, scrapers or other automated means to access the Services without our
            permission
          </li>
          <li>
            Get around usage limits, paywalls or other restrictions, for example by creating
            multiple accounts
          </li>
          <li>
            Use our AI tools to create content that is illegal, hateful, harassing or that
            infringes someone else&apos;s rights
          </li>
          <li>
            Reverse engineer, copy, sell or resell any part of the Services without our written
            permission
          </li>
          <li>Transmit viruses, malware or other harmful code</li>
          <li>Impersonate us or any other person or entity</li>
        </ul>
      </DocSection>

      <DocSection num={3} title="Accounts, community and content">
        <p>
          Some Services let you create an account, such as RealLinkedIn (email sign-in) and Fork
          This Dragon (Google Sign-In). You are responsible for keeping access to your account
          secure and for everything done through it.
        </p>
        <p>
          Anything you post where other people can see it — such as your leaderboard name or
          messages in the Fork This Dragon chat — must be respectful and lawful. You keep
          ownership of what you submit, but you give us permission to host and display it so the
          Services can work. We may remove content, or suspend or close accounts, that break
          these Terms.
        </p>
      </DocSection>

      <DocSection num={4} title="Paid features and in-app purchases">
        <ul>
          <li>
            <strong>Web tools:</strong> paid plans such as RealLinkedIn Pro are billed through
            Stripe. The price and what you get are shown before you pay.
          </li>
          <li>
            <strong>Mobile apps:</strong> in-app purchases are made through the App Store or
            Google Play and are subject to Apple&apos;s or Google&apos;s terms. Refunds for
            in-app purchases are handled by Apple or Google under their refund policies.
          </li>
          <li>
            <strong>Ads:</strong> many of our Services are free because they show ads. Rewarded
            ads (for example, watching an ad for an extra turn in Fork This Dragon) are optional.
          </li>
        </ul>
        <p>
          We may change prices or features in the future. Changes will not affect anything you
          have already paid for.
        </p>
      </DocSection>

      <DocSection num={5} title="Intellectual property">
        <h3>5.1 Our content</h3>
        <p>
          The Services and their contents, features and functionality (including software, text,
          designs, graphics and the selection and arrangement of them) are owned by The
          JPMoreGain Project or its licensors and are protected by Singapore and international
          copyright, trademark and other intellectual property laws. Projects we publish as open
          source are licensed under the licence in their repository.
        </p>
        <h3>5.2 Limited licence</h3>
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable licence to use the
          Services for personal, non-commercial purposes. This does not include the right to
          modify, copy, distribute, publish, create derivative works from, or sell any part of
          the Services except where an open-source licence allows it.
        </p>
      </DocSection>

      <DocSection num={6} title="Lottery results apps">
        <p>
          SG Lottery 4D TOTO and 4D TOTO MY Lottery Results show lottery results and related
          information for Singapore and Malaysia.
        </p>
        <Callout title="Please note">
          <ul>
            <li>
              We are not affiliated with, endorsed by or connected to Singapore Pools, Magnum,
              Sports Toto, Da Ma Cai or any other lottery operator
            </li>
            <li>
              Results are provided for information only and may be delayed or contain errors.
              Always check results with the official operator before claiming a prize
            </li>
            <li>
              Lucky numbers, generators and bet scores are for entertainment only and cannot
              predict winning numbers
            </li>
            <li>The apps do not sell tickets, accept bets or handle any money</li>
            <li>
              You must be 18 or older (or the legal age where you live) to take part in any
              lottery. Please play responsibly
            </li>
          </ul>
        </Callout>
      </DocSection>

      <DocSection num={7} title="AI-generated content">
        <p>
          Many of our Services use artificial intelligence to generate content, such as news
          articles, translations and video summaries. AI-generated content is provided for
          information and entertainment only.
        </p>
        <Callout title="Important">
          <ul>
            <li>AI-generated content may be inaccurate, incomplete or out of date</li>
            <li>It is not a substitute for professional advice</li>
            <li>We do not guarantee the accuracy or reliability of AI-generated content</li>
            <li>Please check information independently before acting on it</li>
            <li>
              Satire and parody tools (such as RealLinkedIn) are for humour and do not
              represent the views of any real person
            </li>
          </ul>
        </Callout>
      </DocSection>

      <DocSection num={8} title="No professional advice">
        <p>
          Despite the finance-themed name &quot;JPMoreGain,&quot; nothing in the Services is
          financial, investment, legal, medical or other professional advice.
        </p>
        <ul>
          <li>
            The &quot;gains&quot; in our name refer to knowledge and technology, not financial
            returns
          </li>
          <li>
            Property news, listings and market trends in This Is Home are for general
            information only and are not investment advice
          </li>
          <li>
            Jing is a wellness app for relaxation, sleep and focus; it is not a medical device
            and does not diagnose or treat any condition
          </li>
          <li>
            Verbum, Ayah and Gita share verses and translations for daily reflection and are not
            a substitute for guidance from religious scholars
          </li>
          <li>Always consult qualified professionals for advice on your own situation</li>
        </ul>
      </DocSection>

      <DocSection num={9} title="Third-party links and services">
        <p>
          The Services may link to or rely on third-party websites and services, including app
          stores, payment providers, ad networks and AI providers. We do not control them and
          are not responsible for their content, policies or practices. Your use of them is at
          your own risk and subject to their own terms.
        </p>
      </DocSection>

      <DocSection num={10} title="App Store terms">
        <p>
          If you download one of our apps from the Apple App Store, you acknowledge that these
          Terms are between you and The JPMoreGain Project only, not Apple. Apple is not
          responsible for the app or its content, has no obligation to provide maintenance or
          support, and is not responsible for any claims relating to the app. Apple and its
          subsidiaries are third-party beneficiaries of these Terms and may enforce them against
          you. Your use of the app must also comply with the App Store&apos;s usage rules.
        </p>
        <p>Apps downloaded from Google Play are also subject to the Google Play Terms of Service.</p>
      </DocSection>

      <DocSection num={11} title="Disclaimer of warranties">
        <p>
          THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS,
          WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES,
          INCLUDING BUT NOT LIMITED TO:
        </p>
        <ul>
          <li>
            Implied warranties of merchantability, fitness for a particular purpose and
            non-infringement
          </li>
          <li>That the Services will be uninterrupted, timely, secure or error-free</li>
          <li>That results, draw data or other information will be accurate or reliable</li>
          <li>That any errors will be corrected</li>
        </ul>
      </DocSection>

      <DocSection num={12} title="Limitation of liability">
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, THE JPMOREGAIN PROJECT AND ITS OWNER, AGENTS
          AND AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL
          OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
        </p>
        <ul>
          <li>Loss of profits, revenue, winnings or data</li>
          <li>Business interruption or loss of goodwill</li>
          <li>Any damages from your use of, or inability to use, the Services</li>
          <li>Any reliance on content, results or information available through the Services</li>
        </ul>
        <p>
          This applies whether the claim is based on warranty, contract, tort, statute or any
          other legal theory.
        </p>
      </DocSection>

      <DocSection num={13} title="Indemnification">
        <p>
          You agree to defend, indemnify and hold harmless The JPMoreGain Project, its owner,
          agents and affiliates from any claims, liabilities, damages, losses, costs or fees
          (including reasonable legal fees) arising from your breach of these Terms or your use
          of the Services.
        </p>
      </DocSection>

      <DocSection num={14} title="Changes to the Services and these Terms">
        <p>
          We may change, suspend or discontinue any part of the Services at any time — this is a
          one-person lab, and projects come and go. We may also update these Terms. When we do,
          we will post the new Terms here and change the &quot;Last updated&quot; date. If you
          keep using the Services after that, you accept the updated Terms.
        </p>
      </DocSection>

      <DocSection num={15} title="Governing law">
        <p>
          These Terms are governed by the laws of the Republic of Singapore, without regard to
          its conflict of law rules. Any legal action relating to these Terms or the Services
          must be brought in the courts of Singapore, and you agree to their jurisdiction.
        </p>
      </DocSection>

      <DocSection num={16} title="Severability and entire agreement">
        <p>
          If any part of these Terms is found invalid or unenforceable, the rest stays in full
          effect, and the invalid part will be changed only as much as needed to make it
          enforceable. These Terms, together with our Privacy Policy, are the entire agreement
          between you and The JPMoreGain Project about the Services.
        </p>
      </DocSection>

      <DocSection num={17} title="Contact us">
        <p>If you have any questions about these Terms, please get in touch:</p>
        <ContactCard />
      </DocSection>
    </DocPage>
  );
}
