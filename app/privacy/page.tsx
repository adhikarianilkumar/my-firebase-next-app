
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Optimal Homecare Services, LLC",
  description:
    "Learn how Optimal Homecare Services, LLC collects, uses, shares, and protects information through its website and online forms.",
};

const sectionClass = "scroll-mt-24";

const headingClass =
  "font-display text-step-2 font-bold text-brand-ink-dark";

const paragraphClass =
  "mt-4 text-step-0 leading-relaxed text-brand-ink-soft";

export default function PrivacyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-white px-6 pt-10 pb-5 text-brand-ink-dark sm:pt-12 sm:pb-6">
        <div className="wrap mx-auto max-w-4xl">
          <h1 className="font-display text-step-4 font-bold">
            Privacy Policy
          </h1>

          <p className="mt-4 text-black">
            Effective 11/11/2026
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="wrap mx-auto max-w-4xl px-4 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-16">
        <div className="space-y-10">

          {/* Introduction */}
          <p className="text-step-0 leading-relaxed text-brand-ink-soft">
            This Privacy Policy explains how Optimal Homecare Services,
            LLC ("OHS," "we," "us") collects, uses, shares, and protects
            information through www.optimalhomecareservices.com (the "Website") and
            its online forms.{" "}
            <strong>We do not sell your personal information.</strong>
          </p>

          {/* 1. What this policy covers */}
          <section id="what-this-policy-covers" className={sectionClass}>
            <h2 className={headingClass}>
              1. What this policy covers
            </h2>

            <p className={paragraphClass}>
              This policy covers information collected through the Website,
              its forms, and our email and phone follow-up to those forms.
              Information about clients' services and care is handled
              under each client's Service Agreement and our confidentiality
              policies, and, where federal HIPAA rules apply to OHS, under
              the Notice of Privacy Practices provided at admission.
              If that notice differs from this policy for client service
              information, the notice controls.
            </p>
          </section>

          {/* 2. Information we collect */}
          <section id="information-we-collect" className={sectionClass}>
            <h2 className={headingClass}>
              2. Information we collect
            </h2>

            <h3 className="mt-6 font-semibold text-brand-ink-dark">
              Information you give us
            </h3>

            <ul className="mt-4 list-disc space-y-4 pl-6 text-step-0 leading-relaxed text-brand-ink-soft">
              <li>
                <strong>Inquiries and consultation requests:</strong>{" "}
                name, phone number, email address, the city or county
                where services are needed, your relationship to the
                person needing help, the services you are interested in,
                and the best time to reach you.
              </li>

              <li>
                <strong>Errand requests:</strong>{" "}
                contact details, the requested date, and your list of
                items or errands.
              </li>

              <li>
                <strong>Job applications:</strong>{" "}
                contact details, work history, availability, and other
                information you choose to include.
              </li>

              <li>
                <strong>Messages:</strong>{" "}
                anything you write to us by email, form, or phone.
              </li>
            </ul>

            <h3 className="mt-8 font-semibold text-brand-ink-dark">
              Information collected automatically
            </h3>

            <p className={paragraphClass}>
              When you visit the Website, our website host and analytics
              tools may collect your IP address, browser and device type,
              pages viewed, time on the site, and the site that referred
              you, using cookies and similar technologies (Section 7).
            </p>

            <h3 className="mt-8 font-semibold text-brand-ink-dark">
              Health information.
            </h3>

            <p className={paragraphClass}>
              The Website is not designed to collect medical or health
              information. Please do not include diagnoses, medications,
              Social Security numbers, or account numbers in Website
              forms. We collect only the information needed for services
              during a private intake.
            </p>
          </section>

          {/* 3. How we use information */}
          <section id="how-we-use-information" className={sectionClass}>
            <h2 className={headingClass}>
              3. How we use information
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 text-step-0 leading-relaxed text-brand-ink-soft">
              <li>To respond to inquiries and arrange consultations</li>
              <li>To schedule and confirm requested services and errands</li>
              <li>To review job applications and contact applicants</li>
              <li>To operate, secure, and improve the Website</li>
              <li>
                To send information you ask for, and, with your permission,
                occasional updates about our services
              </li>
              <li>
                To meet legal, regulatory, insurance, and record-keeping
                obligations
              </li>
            </ul>
          </section>

          {/* 4. How we share information */}
          <section id="how-we-share-information" className={sectionClass}>
            <h2 className={headingClass}>
              4. How we share information
            </h2>

            <p className={paragraphClass}>
              We share information only as described here:
            </p>

            <ul className="mt-4 list-disc space-y-4 pl-6 text-step-0 leading-relaxed text-brand-ink-soft">
              <li>
                <strong>Service providers</strong> that help us run our
                business, such as our website host, email and document
                storage provider, scheduling and client-care software,
                phone system, after-hours answering service, payroll
                provider, and payment processor. They may use the
                information only to provide services to OHS and must
                protect it.
              </li>

              <li>
                <strong>Legal requirements and safety:</strong>{" "}
                when required by law, subpoena, or court order; to report
                suspected abuse, neglect, or exploitation as Florida law
                requires; or to protect the safety of a client, our staff,
                or the public.
              </li>

              <li>
                <strong>Regulators and insurers:</strong>{" "}
                when required for AHCA oversight, inspections, insurance,
                or claims.
              </li>

              <li>
                <strong>Business transfers:</strong>{" "}
                if OHS is sold or merged, information may transfer to the
                new owner under the same protections.
              </li>

              <li>
                <strong>With your consent:</strong>{" "}
                for example, sharing updates with family members you
                designate.
              </li>
            </ul>

            <p className={paragraphClass}>
              We do not sell personal information, and we do not share it
              with other companies for their own marketing.
            </p>
          </section>

          {/* 5. Text messages and calls */}
          <section id="text-messages-and-calls" className={sectionClass}>
            <h2 className={headingClass}>
              5. Text messages and calls
            </h2>

            <p className={paragraphClass}>
              If you give us your mobile number and agree to receive
              texts, we may send appointment confirmations, schedule
              updates, and responses to your requests. Message frequency
              varies, and message and data rates may apply. Reply STOP
              to opt out or HELP for help. Agreeing to texts is not a
              condition of receiving services. We do not share mobile
              numbers or text-messaging consent with third parties for
              their marketing.
            </p>
          </section>

          {/* 6. Email */}
          <section id="email" className={sectionClass}>
            <h2 className={headingClass}>6. Email</h2>

            <p className={paragraphClass}>
              If you receive updates from us by email, you can unsubscribe
              at any time using the link in the email or by contacting us.
              We will still send messages needed for services you receive.
            </p>
          </section>

          {/* 7. Cookies and analytics */}
          <section id="cookies-and-analytics" className={sectionClass}>
            <h2 className={headingClass}>
              7. Cookies and analytics
            </h2>

            <p className={paragraphClass}>
              The Website uses cookies and similar tools to remember
              preferences and understand how visitors use the site.
              You can block or delete cookies in your browser settings, though some features
              may not work. Because there is no common standard for
              "Do Not Track" browser signals, the Website does not
              respond to them.
            </p>
          </section>

          {/* 8. Children */}
          <section id="children" className={sectionClass}>
            <h2 className={headingClass}>8. Children</h2>

            <p className={paragraphClass}>
              The Website is not directed to children or teens under 18, and
              we do not knowingly collect their personal information.
              If you believe a child has sent us information, contact
              us and we will delete it.
            </p>
          </section>

          {/* 9. How we protect information */}
          <section id="how-we-protect-information" className={sectionClass}>
            <h2 className={headingClass}>
              9. How we protect information
            </h2>

            <p className={paragraphClass}>
              We use reasonable administrative, technical, and physical
              safeguards, including encrypted website connections,
              multi-factor authentication on business accounts, access
              limited to staff who need it, and agreements requiring
              our service providers to protect information. No website
              or transmission is completely secure, so please do not
              send sensitive information through Website forms.
            </p>
          </section>

          {/* 10. If a data breach occurs */}
          <section id="data-breach" className={sectionClass}>
            <h2 className={headingClass}>
              10. If a data breach occurs
            </h2>

            <p className={paragraphClass}>
              If a breach affects your personal information, we will
              notify you and the appropriate authorities as required
              by Florida law (section 501.171, Florida Statutes) and,
              where it applies, federal law.
            </p>
          </section>

          {/* 11. How long we keep information */}
          <section id="information-retention" className={sectionClass}>
            <h2 className={headingClass}>
              11. How long we keep information
            </h2>

            <p className={paragraphClass}>
              We keep information only as long as needed for the
              purposes above or as required by law. Inquiries that
              do not become clients and job applications that do not
              lead to employment are kept for a limited period and
              then securely deleted, as set out in our records policy.
            </p>
          </section>

          {/* 12. Your choices */}
          <section id="your-choices" className={sectionClass}>
            <h2 className={headingClass}>12. Your choices</h2>

            <p className={paragraphClass}>
              You may ask us to show you, correct, or delete personal
              information you submitted through the Website, or to stop
              marketing messages. Contact us using the details below.
              We may need to keep some information to meet legal or
              record-keeping requirements, and we will tell you if so.
            </p>
          </section>

          {/* 13. Changes to this policy */}
          <section id="changes-to-this-policy" className={sectionClass}>
            <h2 className={headingClass}>
              13. Changes to this policy
            </h2>

            <p className={paragraphClass}>
              We may update this policy. The updated version takes
              effect when posted, with a new effective date at the top.
            </p>
          </section>

          {/* 14. Contact us */}
          <section id="contact" className={sectionClass}>
            <h2 className={headingClass}>14. Contact us</h2>

            <div className="mt-5 rounded-brand-lg border border-brand-line bg-white p-6 shadow-brand-sm sm:p-8">
              <h3 className="font-display text-step-1 font-bold text-brand-ink-dark">
                Optimal Homecare Services, LLC
              </h3>

              <div className="mt-5 space-y-4 text-step-0 leading-relaxed text-brand-ink-soft">
                <p>
                  3168 Peppertree Drive, Middleburg, FL 32068
                </p>

                <p>
                  Office: (904) 872-6116
                </p>

                <p>
                  Email: 
info@optimalhomecareservices.com
                </p>

                <p className="border-t border-brand-line pt-4">
                  Florida AHCA Homemaker and Companion Services License
                  No. 242388
                </p>
              </div>
            </div>
          </section>

        </div>
      </section>
    </>
  );
}
