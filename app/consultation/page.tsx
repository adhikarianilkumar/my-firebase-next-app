
import type { Metadata } from "next";
import Link from "next/link";
import CalBookingEmbed from "@/components/booking/CalBookingEmbed";

// export const metadata: Metadata = {
//   title: "Book a Consultation | Optimal Homecare Services",
//   description:
//     "Schedule a complimentary introductory consultation with Optimal Homecare Services.",
// };

export default function ConsultationPage() {
  const calLink = "https://cal.com/brandis-ruise-test/coonsultation"; // Replace with your actual Calendly username and event type

  return (
    <>
      <section className="bg-brand-blue-900 px-6 py-16 text-center text-white">
        <div className="wrap mx-auto max-w-3xl">

          <span className="font-semibold uppercase tracking-widest text-brand-green-500">
            Let's Talk
          </span>

          <h1 className="mt-4 font-display text-step-4 font-bold">
            Schedule a Free Consultation
          </h1>

          <p className="mt-5 text-step-0 leading-relaxed text-white/80">
            Every family's needs are different. Let's discuss how
            Optimal Homecare Services can support your everyday
            living needs.
          </p>

        </div>
      </section>

      {/* Booking Calendar */}
      <section className="wrap mx-auto max-w-6xl px-4 py-12 sm:px-6">

        <div className="mb-8 text-center">
          <h2 className="font-display text-step-2 font-bold text-brand-ink-dark">
            Choose a Convenient Time
          </h2>

          <p className="mt-3 text-brand-ink-soft">
            Select an available date and time to connect with our team.
          </p>
        </div>

        <div className="overflow-hidden rounded-brand-lg border border-brand-line bg-white p-2 shadow-brand-md sm:p-5">

          {calLink ? (
            <CalBookingEmbed calLink={calLink} />
          ) : (
            <div className="p-8 text-center">
              <p className="font-semibold text-brand-ink-dark">
                Online scheduling is temporarily unavailable.
              </p>

              <p className="mt-3 text-brand-ink-soft">
                Please contact our team to schedule your consultation.
              </p>
            </div>
          )}

        </div>

        {/* Contact Information */}
        <div className="mt-8 rounded-brand-lg bg-brand-sand-100 p-6 text-center">

          <h3 className="font-semibold text-brand-ink-dark">
            Need Help Scheduling?
          </h3>

          <p className="mt-2 text-brand-ink-soft">
            We're happy to help you find a convenient time.
          </p>

          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">

            <a
              href="tel:9048726116"
              className="font-semibold text-brand-blue-700 hover:text-brand-green-700"
            >
              (904) 872-6116
            </a>

            <a
              href="mailto:info@optimalhomecareservices.com"
              className="font-semibold text-brand-blue-700 hover:text-brand-green-700"
            >
              info@optimalhomecareservices.com
            </a>

          </div>

        </div>

        {/* Privacy Notice */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-brand-muted">
          Please do not submit medical records, diagnoses, medications,
          or other sensitive health information through this scheduling
          form. Scheduling is intended for introductory consultations only.
          Please contact our team for information about secure intake procedures.
        </p>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm font-semibold text-brand-blue-700 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

      </section>

    </>
  );
}
