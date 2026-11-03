
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Optimal Homecare Services LLC",
  description:
    "Explore career opportunities with Optimal Homecare Services. Join a team dedicated to compassionate homemaker and companion services.",
};

const careerPaths = [
  {
    number: "01",
    title: "Homemaker Support",
    description:
      "Help clients maintain comfortable, organized living environments through dependable everyday household support.",
    qualities: [
      "Dependability and attention to detail",
      "Respect for clients and their homes",
      "A positive, helpful attitude",
    ],
  },
  {
    number: "02",
    title: "Companion Services",
    description:
      "Make a meaningful difference through companionship, social interaction, and friendly everyday support.",
    qualities: [
      "Compassion and patience",
      "Strong communication skills",
      "A genuine interest in helping others",
    ],
  },
  {
    number: "03",
    title: "Administrative Support",
    description:
      "Support the coordination and daily operations that help our homecare services run smoothly.",
    qualities: [
      "Organization and communication",
      "Professionalism and reliability",
      "A team-oriented mindset",
    ],
  },
];

const hiringSteps = [
  {
    number: "01",
    title: "Get in Touch",
    description:
      "Send us your resume and tell us a little about yourself and the opportunity that interests you.",
  },
  {
    number: "02",
    title: "Connect With Our Team",
    description:
      "We'll learn about your experience, interests, and availability.",
  },
  {
    number: "03",
    title: "Next Steps",
    description:
      "We'll discuss relevant opportunities and the requirements for moving forward.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-brand-sand-50 text-brand-ink">

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-blue-900 text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-green-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-brand-blue-500/30 blur-3xl" />

        <div className="wrap relative mx-auto grid min-h-[440px] items-center gap-10 py-20 lg:grid-cols-2">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-brand-green-100">
              CAREERS AT OPTIMAL HOMECARE
            </span>

            <h1 className="font-display text-step-4 font-bold leading-tight">
              Make a Difference.
              <span className="block text-brand-green-500">
                Make It Meaningful.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-step-0 leading-relaxed text-white/80">
              Great care starts with great people. Join a team that values
              compassion, respect, and the difference everyday support can
              make in someone's life.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#career-opportunities"
                className="inline-flex items-center justify-center rounded-brand-md bg-brand-green-600 px-6 py-3 font-semibold text-white shadow-brand-md transition hover:bg-brand-green-700"
              >
                Explore Opportunities
              </a>

              <a
                href="mailto:info@optimalhomecareservices.com?subject=Career%20Inquiry"
                className="inline-flex items-center justify-center rounded-brand-md border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Our Team
              </a>
            </div>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <div className="flex h-80 w-80 items-center justify-center rounded-full border border-white/20 bg-white/10">
              <div className="flex h-64 w-64 items-center justify-center rounded-full border border-brand-green-500/40 bg-brand-green-600/20">
                <span className="text-8xl" aria-hidden="true">💚</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="wrap mx-auto max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-green-700">
            Why Work With Us
          </span>

          <h2 className="mt-4 font-display text-step-3 font-bold text-brand-ink-dark">
            More Than a Job. A Chance to Make an Impact.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-step-0 leading-relaxed text-brand-ink-soft">
            At Optimal Homecare Services, we believe that helping people
            maintain independence and comfort at home begins with a team
            that genuinely cares. We value individuals who bring kindness,
            integrity, and dedication to the work they do.
          </p>

          <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
            {[
              {
                icon: "💚",
                title: "Compassion First",
                description:
                  "Treat every client with kindness, patience, and dignity.",
              },
              {
                icon: "🤝",
                title: "People Matter",
                description:
                  "Build positive relationships through respect and understanding.",
              },
              {
                icon: "🌱",
                title: "Grow Together",
                description:
                  "Contribute your strengths while developing professionally.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-brand-lg border border-brand-line bg-white p-6 shadow-brand-sm"
              >
                <span className="text-3xl" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="mt-4 font-semibold text-brand-ink-dark">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-brand-ink-soft">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section
        id="career-opportunities"
        className="bg-brand-sand-100 py-20"
      >
        <div className="wrap mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green-700">
              Find Your Place
            </span>

            <h2 className="mt-4 font-display text-step-3 font-bold text-brand-ink-dark">
              Explore Career Opportunities
            </h2>

            <p className="mt-5 text-step-0 leading-relaxed text-brand-ink-soft">
              We welcome interest from people who are passionate about
              supporting others. Explore some of the areas in which our
              team may work.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {careerPaths.map((role) => (
              <article
                key={role.number}
                className="flex flex-col rounded-brand-lg border border-brand-line bg-white p-7 shadow-brand-sm transition hover:-translate-y-1 hover:shadow-brand-md"
              >
                <span className="text-sm font-bold text-brand-green-700">
                  CAREER PATH {role.number}
                </span>

                <h3 className="mt-4 font-display text-step-2 font-bold text-brand-ink-dark">
                  {role.title}
                </h3>

                <p className="mt-4 leading-relaxed text-brand-ink-soft">
                  {role.description}
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-bold text-brand-ink-dark">
                    Qualities We Value
                  </h4>

                  <ul className="mt-3 space-y-3">
                    {role.qualities.map((quality) => (
                      <li
                        key={quality}
                        className="flex items-start gap-2 text-sm text-brand-ink-soft"
                      >
                        <span className="mt-1 text-brand-green-700">✓</span>
                        <span>{quality}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`mailto:info@optimalhomecareservices.com?subject=${encodeURIComponent(
                    `Career Inquiry - ${role.title}`
                  )}`}
                  className="mt-8 inline-flex items-center font-semibold text-brand-blue-700 hover:text-brand-green-700 hover:underline"
                >
                  Ask About This Opportunity →
                </a>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-brand-muted">
            These are potential career areas, not a list of confirmed
            vacancies. Contact our team to ask about current openings.
          </p>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-20">
        <div className="wrap mx-auto grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green-700">
              The People Behind the Care
            </span>

            <h2 className="mt-4 font-display text-step-3 font-bold text-brand-ink-dark">
              Are You Someone Who Makes a Difference?
            </h2>

            <p className="mt-6 leading-relaxed text-brand-ink-soft">
              Experience is valuable, but the right attitude matters too.
              We appreciate individuals who take pride in their work and
              understand the importance of treating people with dignity.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Dependable and responsible",
                "Patient, compassionate, and respectful",
                "Professional and trustworthy",
                "Comfortable communicating with different people",
                "Committed to providing quality everyday support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green-100 font-bold text-brand-green-800">
                    ✓
                  </span>
                  <span className="text-brand-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-brand-lg border border-brand-line bg-brand-blue-100 p-8 sm:p-12">
            <div className="text-5xl" aria-hidden="true">🏡</div>
            <h3 className="mt-6 font-display text-step-2 font-bold text-brand-blue-900">
              Care Begins at Home.
            </h3>
            <p className="mt-4 leading-relaxed text-brand-ink-soft">
              Small acts of kindness can have a lasting impact. Whether
              supporting everyday household needs or providing companionship,
              your contribution can help make someone's day better.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-white py-20">
        <div className="wrap mx-auto">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green-700">
              Getting Started
            </span>

            <h2 className="mt-4 font-display text-step-3 font-bold text-brand-ink-dark">
              How to Join Our Team
            </h2>

            <p className="mt-5 text-brand-ink-soft">
              Interested in working with us? Here is how to get started.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {hiringSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-green-100 text-xl font-bold text-brand-green-800">
                  {step.number}
                </div>
                <h3 className="mt-5 font-semibold text-brand-ink-dark">
                  {step.title}
                </h3>
                <p className="mx-auto mt-3 max-w-sm leading-relaxed text-brand-ink-soft">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brand-blue-900 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-green-500">
            Your Next Opportunity Starts Here
          </span>

          <h2 className="mt-4 font-display text-step-3 font-bold">
            Let's Make a Difference Together.
          </h2>

          <p className="mt-5 leading-relaxed text-white/80">
            We'd love to hear from you. Reach out to our team to learn
            about current opportunities and how you can become part of
            Optimal Homecare Services.
          </p>

          <a
            href="mailto:info@optimalhomecareservices.com?subject=Career%20Application"
            className="mt-8 inline-flex items-center justify-center rounded-brand-md bg-brand-green-600 px-8 py-4 font-semibold text-white shadow-brand-md transition hover:bg-brand-green-700"
          >
            Send Your Resume
          </a>

          <p className="mt-5 text-sm text-white/60">
            info@optimalhomecareservices.com
          </p>
        </div>
      </section>

      {/* Employment Notice */}
      <section className="bg-brand-sand-100 py-6">
        <div className="wrap mx-auto text-center">
          <p className="text-sm leading-relaxed text-brand-muted">
            Optimal Homecare Services LLC is an equal-opportunity provider
            and employer. Employment opportunities are subject to applicable
            qualifications, screening, and regulatory requirements.
          </p>
        </div>
      </section>
    </main>
  );
}
