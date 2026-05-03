import type { Metadata } from 'next';
import { Header } from '~/components/header';
import { NavLinks } from '~/components/nav-links';

export const metadata: Metadata = {
  title: 'Resume | Nathaniel Abegunde',
  description: 'Resume of Nathaniel Abegunde',
};

const experiences = [
  {
    company: 'Spacemap',
    jobTitle: 'Software Engineer Intern (Backend and LLM)',
    period: 'Sep 2025 — Feb 2026',
    location: 'Seoul, South Korea',
    icon: <img src="https://www.spacemap42.com/logo-white.svg" alt="Spacemap" className="size-6 object-contain" />,
    iconBg: 'bg-black',
    achievements: [
      'Fine-tuned multiple time-series LLM architectures (Llama 3.2 1B, ChatTS) on 4.4M satellite conjunction events using Unsloth, PEFT and QLoRA techniques with 8GB VRAM constraints.',
      'Optimised SpaceTube\'s post ranking algorithm, reducing response time from 257ms to 109ms (58% improvement) with TypeScript.',
      'Implemented real-time error monitoring system using Google Chat webhooks to alert on payment and API errors with FastAPI and NestJS.',
      'Developed RAG system using HuggingFace embeddings and ChromaDB retrieval to improve responses for space domain queries.',
    ],
  },
  {
    company: 'Aidall Inc.',
    jobTitle: 'AI Engineer / Research Intern',
    period: 'Jul 2024 — Sep 2024',
    location: 'Seoul, South Korea',
    icon: <img src="https://cdn.imweb.me/thumbnail/20260404/0f854752cfdb0.png" alt="Aidall" className="size-6 object-contain" />,
    iconBg: 'bg-white',
    achievements: [
      'Implemented ETL pipeline for livestock data processing, extracted 10+ hours of real-world audio and transformed through various denoising techniques for ML classification.',
      'Experimented with band-pass filtering and autoencoder-based denoising to optimise audio quality, achieving over 90% model convergence.',
    ],
  },
  {
    company: 'British Airways',
    jobTitle: 'Junior Data Scientist Intern (Virtual)',
    period: 'May 2023 — Jun 2024',
    location: 'London, United Kingdom',
    icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/britishairways.svg" alt="British Airways" className="size-6 object-contain" />,
    iconBg: 'bg-white',
    achievements: [
      'Developed ML pipeline that scraped and analysed over 75,000 customer reviews for sentiment analysis.',
      'Using Random Forest and XGBoost, customer booking prediction achieved 85% accuracy.',
    ],
    note: 'NOTE: This was a virtual internship, and the duration for the internship is not in actual reality the time it took me to complete the tasks required to obtain a certificate.',
  },
] as const;

const education = [
  {
    institution: 'Hanyang University',
    degree: 'BSc in Computer Software Engineering',
    period: '',
    location: 'Seoul, South Korea',
    details: ['GKS (Korean Government) Scholar', 'Hanyang University Cycling Team'],
  },
] as const;

const skills = [
  { label: 'Programming Languages', value: 'C/C++, Python, JavaScript, TypeScript' },
  { label: 'Frameworks & Libraries', value: 'NestJS, FastAPI, PyTorch, TensorFlow, LangChain, Scikit-Learn, OpenCV, Unsloth' },
  { label: 'Database & Storage', value: 'MongoDB, ChromaDB, Vector Databases' },
  { label: 'ML / AI', value: 'LLM Fine-tuning (QLoRA), RAG Pipelines, Computer Vision, NeRF, 3D Gaussian Splatting' },
  { label: 'Platforms & Tools', value: 'Git, Ubuntu/Linux, Docker, AWS (EC2, S3), COLMAP, nerfStudio, Streamlit' },
  { label: 'Languages', value: 'English (Native), Korean (TOPIK Level 4 – Professional Proficiency)' },
] as const;

const certifications = [
  { title: 'Palantir: Foundry Aware', date: 'Mar 2026' },
  { title: 'AWS Cloud Practitioner', date: 'Feb 2026' },
  { title: 'Machine Learning Specialisation (Stanford / Coursera)', date: 'Mar 2025' },
  { title: 'Foundations of Generative AI (Udacity)', date: 'Jan 2025' },
] as const;

export default function ResumePage() {
  return (
    <div>
      <Header rightContents={<NavLinks />} />
      <h1 className="sr-only">Nathaniel Abegunde Resume</h1>
      <div className="flex flex-col gap-y-12">
        <section className="grid gap-y-4">
          <h2 className="sr-only tracking-tight font-medium text-xl">About</h2>
          <p className="text-zinc-600 max-w-lg text-pretty">
            Software Engineer, experienced in building Data and Backend Systems.
          </p>
        </section>

        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-medium text-xl">Experience</h2>
          <div className="flex flex-col gap-12">
            {experiences.map(({ company, jobTitle, period, location, icon, iconBg, achievements, ...rest }) => (
              <article key={company}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className={`flex size-10 shrink-0 items-center justify-center rounded-full border border-zinc-200/80 shadow-xs ${iconBg ?? 'bg-white'}`}>
                    {icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base tracking-tight font-medium text-zinc-950">
                        {jobTitle}
                        <span className="mx-2 text-zinc-400">·</span>
                        {company}
                      </h3>
                      <p className="text-base text-zinc-500">
                        {period}
                        <span className="mx-2 text-zinc-300">·</span>
                        {location}
                      </p>
                    </div>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-base text-zinc-600">
                      {achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                    {(rest as { note?: string }).note && (
                      <p className="mt-2 text-sm font-bold text-zinc-600">{(rest as { note?: string }).note}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-medium text-xl">Education</h2>
          <div className="flex flex-col gap-6">
            {education.map(({ institution, degree, period, location, details }) => (
              <article key={institution}>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base tracking-tight font-medium text-zinc-950">
                    {institution}
                    <span className="mx-2 text-zinc-400">·</span>
                    {location}
                  </h3>
                  <p className="text-base text-zinc-500">{degree}</p>
                  <p className="text-base text-zinc-500">{period}</p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-base text-zinc-600">
                  {details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-medium text-xl">Skills</h2>
          <ul className="flex flex-col gap-1 text-base text-zinc-600">
            {skills.map(({ label, value }) => (
              <li key={label}>
                <span className="font-medium text-zinc-800">{label}:</span> {value}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-medium text-xl">Certifications</h2>
          <ul className="flex flex-col gap-1 text-base text-zinc-600">
            {certifications.map(({ title, date }) => (
              <li key={title}>
                <span className="font-medium text-zinc-800">{title}</span>
                <span className="mx-2 text-zinc-400">·</span>
                {date}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
