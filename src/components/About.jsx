import React from "react";

const aboutData = [
  {
    title: "Our Vision",
    description:
      "To become a global leader in upskilling by nurturing talent and creating opportunities for every learner to succeed in the dynamic world of business with technology.",
  },

  {
    title: "Our Mission",
    description:
      "To democratise Career Opportunities for 50,000+ learners by 2026 , providing industry-relevant, cutting-edge courses that equip learners with the skills they need to build successful, sustainable careers. We aim to future-proof our students by fostering innovation, critical thinking, and adaptability, helping them thrive in roles that influence business strategy and impact, far beyond.",
  },
];

function About() {
  return (
    <section className="w-full py-16 md:py-36 px-4">
      <div className="xl:max-w-[1360px] xl:mx-auto flex flex-col items-center gap-y-10 md:gap-y-16">
        <h2 className="text-xl md:text-3xl font-semibold text-center">
          Vision &{" "}
          <span className="text-primary bg-[url('/images/underline.svg')] bg-contain bg-center">
            Mission
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {aboutData.map((data) => (
            <AboutSection key={data.title} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

function AboutSection({ title, description }) {
  return (
    <div className="flex flex-col gap-y-2 items-start mb-12">
      <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>

      <p className="text-base md:text-lg text-gray-600">{description}</p>
    </div>
  );
}
