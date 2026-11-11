
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Optimal Homecare Services, LLC",
  description:
    "Optimal Homecare Services, LLC Website Terms of Use.",
};

const sectionClass = "scroll-mt-24";
const headingClass =
  "font-display text-step-2 font-bold text-brand-ink-dark";
const paragraphClass =
  "mt-4 text-step-0 leading-relaxed text-brand-ink-soft";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-brand-sand-50 text-brand-ink">
      <section className="bg-brand-blue-900 px-6 py-16 text-white sm:py-20">
        <div className="wrap mx-auto max-w-4xl">
          <h1 className="font-display text-step-4 font-bold">
            Terms of Use
          </h1>
          <p className="mt-4 text-step-1 font-semibold">
            Optimal Homecare Services, LLC — Website Terms of Use
          </p>
          <p className="mt-4 text-white/80">
            Effective [EFFECTIVE DATE]
          </p>
        </div>
      </section>

      <section className="wrap mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="space-y-10">

          {/* Introduction */}
          <p className="text-step-0 leading-relaxed text-brand-ink-soft">
            These Terms of Use govern your use of [WEBSITE ADDRESS] (the
            "Website"), operated by Optimal Homecare Services, LLC ("OHS,"
            "we," "us"). By using the Website, you agree to these Terms. If
            you do not agree, please do not use the Website.
          </p>

          {/* 1. Who we are */}
          <section id="who-we-are" className={sectionClass}>
            <h2 className={headingClass}>1. Who we are</h2>
            <p className={paragraphClass}>
              OHS is a Florida Homemaker and Companion Services Provider
              registered with the Florida Agency for Health Care
              Administration (AHCA), <strong>License No. 242388</strong>.
              We are authorized to serve Baker, Clay, Duval, Flagler,
              Nassau, St. Johns, and Volusia counties.
            </p>
          </section>

          {/* 2. Non-medical services only */}
          <section id="non-medical-services" className={sectionClass}>
            <h2 className={headingClass}>2. Non-medical services only</h2>
            <p className={paragraphClass}>
              OHS provides non-medical homemaker and companion services,
              such as companionship, light housekeeping, meal preparation,
              shopping, errands, and respite for family members. OHS is
              not a home health agency. Our staff do not provide nursing,
              personal care (such as bathing, toileting, transferring, or
              feeding), medication administration, therapy, or any other
              medical or clinical service, and they do not transport clients.
            </p>
            <p className={paragraphClass}>
              Nothing on this Website is medical, legal, or financial
              advice. Talk with a qualified professional about your
              health, legal, or financial needs.
            </p>
          </section>

          {/* 3. Not for emergencies */}
          <section id="emergencies" className={sectionClass}>
            <h2 className={headingClass}>3. Not for emergencies</h2>

            <div
              className="mt-5 rounded-brand-lg border border-red-200 bg-red-50 p-5"
              role="alert"
            >
              <p className="font-bold leading-relaxed text-red-900">
                This Website and its forms are not monitored for emergencies.
                If you or someone else is in danger or having a medical
                emergency, call 911.
              </p>
            </div>

            <p className={paragraphClass}>
              To report suspected abuse, neglect, or exploitation of a
              vulnerable adult, call the Florida Abuse Hotline at
              1-800-96-ABUSE (1-800-962-2873).
            </p>
          </section>

          {/* 4. Information on this Website */}
          <section id="website-information" className={sectionClass}>
            <h2 className={headingClass}>
              4. Information on this Website
            </h2>
            <p className={paragraphClass}>
              We work to keep Website information accurate and current,
              but it is provided for general information and may change
              without notice. Service descriptions, rates, availability,
              and staffing on the Website are not an offer or a guarantee
              of service. Services begin only after an intake assessment
              and a signed Service Agreement, and the Service Agreement
              controls if it differs from anything on the Website.
            </p>
          </section>

          {/* 5. Service requests submitted online */}
          <section id="online-requests" className={sectionClass}>
            <h2 className={headingClass}>
              5. Service requests submitted online
            </h2>
            <p className={paragraphClass}>
              Submitting an inquiry, an errand request, or any other form
              does not create a client relationship or schedule a service.
              A request is confirmed only when OHS confirms it with you
              directly.{" "}
              <strong>
                Please do not include medical information, Social Security
                numbers, account numbers, or passwords in Website forms;
              </strong>{" "}
              we will collect what we need securely during intake.
            </p>
          </section>

          {/* 6. Holiday closures and scheduling */}
          <section id="holidays" className={sectionClass}>
            <h2 className={headingClass}>
              6. Holiday closures and scheduling
            </h2>
            <p className={paragraphClass}>
              OHS is closed on all federal holidays, the day after
              Thanksgiving, and December 26 through December 31. Clients
              may request a session on a closure day at least 3 weeks
              (21 days) in advance; approved sessions are confirmed in
              writing and billed at the holiday rate. Our after-hours
              line, 1-866-328-9181, remains available during closures.
            </p>
          </section>

          {/* 7. Employment information */}
          <section id="employment" className={sectionClass}>
            <h2 className={headingClass}>7. Employment information</h2>
            <p className={paragraphClass}>
              Job postings on the Website are not an offer or a guarantee
              of employment. OHS is an equal opportunity employer. Every
              position with client contact requires Level 2 background
              screening under Florida law, and applicants must be at
              least 18 years old.
            </p>
          </section>

          {/* 8. Acceptable use */}
          <section id="acceptable-use" className={sectionClass}>
            <h2 className={headingClass}>8. Acceptable use</h2>
            <p className={paragraphClass}>
              You agree not to:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-step-0 leading-relaxed text-brand-ink-soft">
              <li>
                use the Website for any unlawful purpose or to submit
                false information;
              </li>
              <li>
                try to access accounts, systems, or data you are not
                authorized to use;
              </li>
              <li>
                upload viruses or harmful code, or interfere with the
                Website's operation;
              </li>
              <li>
                collect information about other users or our staff; or
              </li>
              <li>
                copy or reuse Website content except as these Terms allow.
              </li>
            </ul>
          </section>

          {/* 9. Client portal, payments, and third-party links */}
          <section id="third-party-services" className={sectionClass}>
            <h2 className={headingClass}>
              9. Client portal, payments, and third-party links
            </h2>
            <p className={paragraphClass}>
              The Website may link to services run by other companies,
              such as our client portal and online payment processor.
              Those services have their own terms and privacy policies,
              which govern your use of them. OHS is not responsible for
              the content or practices of websites we do not control.
            </p>
          </section>

          {/* 10. Our content and trademarks */}
          <section id="intellectual-property" className={sectionClass}>
            <h2 className={headingClass}>
              10. Our content and trademarks
            </h2>
            <p className={paragraphClass}>
              The Website's text, design, and graphics, including the OHS
              name and logo, belong to OHS or its licensors and are
              protected by law. You may view and print pages for personal,
              non-commercial use. Any other use requires our written
              permission.
            </p>
          </section>

          {/* 11. Accessibility */}
          <section id="accessibility" className={sectionClass}>
            <h2 className={headingClass}>11. Accessibility</h2>
            <p className={paragraphClass}>
              We want the Website to be usable by everyone. If you have
              trouble using any part of it, call (904) 872-6116 or email
              [CONTACT EMAIL], and we will provide the information
              another way.
            </p>
          </section>

          {/* 12. Disclaimer */}
          <section id="disclaimer" className={sectionClass}>
            <h2 className={headingClass}>12. Disclaimer</h2>
            <p className={paragraphClass}>
              The Website is provided "as is" and "as available." To the
              fullest extent the law allows, OHS disclaims all warranties
              about the Website, including warranties that it will be
              uninterrupted, error-free, or free of harmful components.
            </p>
          </section>

          {/* 13. Limitation of liability */}
          <section id="liability" className={sectionClass}>
            <h2 className={headingClass}>
              13. Limitation of liability
            </h2>
            <p className={paragraphClass}>
              To the fullest extent the law allows, OHS and its owners,
              staff, and contractors are not liable for any indirect,
              incidental, special, or consequential damages arising from
              your use of, or inability to use, the Website. This section
              applies to the Website only; services are governed by your
              Service Agreement. Nothing in these Terms limits any right
              you have under Florida or federal law that cannot be waived.
            </p>
          </section>

          {/* 14. Indemnification */}
          <section id="indemnification" className={sectionClass}>
            <h2 className={headingClass}>14. Indemnification</h2>
            <p className={paragraphClass}>
              You agree to hold OHS harmless from claims arising from
              your misuse of the Website or your violation of these Terms.
            </p>
          </section>

          {/* 15. Governing law */}
          <section id="governing-law" className={sectionClass}>
            <h2 className={headingClass}>15. Governing law</h2>
            <p className={paragraphClass}>
              These Terms are governed by the laws of the State of Florida.
              Any dispute about the Website will be brought in the state
              or federal courts serving Clay County, Florida.
            </p>
          </section>

          {/* 16. Complaints */}
          <section id="complaints" className={sectionClass}>
            <h2 className={headingClass}>16. Complaints</h2>
            <p className={paragraphClass}>
              We want to hear about any concern. Contact us at
              (904) 872-6116. You may also contact AHCA about a registered
              provider at 1-888-419-3456.
            </p>
          </section>

          {/* 17. Changes to these Terms */}
          <section id="changes" className={sectionClass}>
            <h2 className={headingClass}>
              17. Changes to these Terms
            </h2>
            <p className={paragraphClass}>
              We may update these Terms at any time. The updated version
              takes effect when posted, with a new effective date at
              the top.
            </p>
          </section>

          {/* 18. Contact us */}
          <section id="contact" className={sectionClass}>
            <h2 className={headingClass}>18. Contact us</h2>

            <div className="mt-5 rounded-brand-lg border border-brand-line bg-white p-6 shadow-brand-sm sm:p-8">
              <h3 className="font-display text-step-1 font-bold text-brand-ink-dark">
                Optimal Homecare Services, LLC
              </h3>

              <div className="mt-5 space-y-4 text-step-0 leading-relaxed text-brand-ink-soft">
                <p>
                  [MAILING ADDRESS]
                </p>

                <p>
                  Office: (904) 872-6116 (Monday–Thursday 8:00 a.m.–5:00
                  p.m.; Friday 8:00 a.m.–12:00 p.m.)
                </p>

                <p>
                  After hours: 1-866-328-9181
                </p>

                <p>
                  Email: [CONTACT EMAIL]
                </p>

                <p>
                  Florida AHCA Homemaker and Companion Services License
                  No. 242388
                </p>
              </div>
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}
