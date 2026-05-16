import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '~/i18n/routing';
import { Header } from '~/components/header';
import { NavLinks } from '~/components/nav-links';

type Props = { params: Promise<{ locale: string }> };

type Experience = {
  company: string;
  jobTitle: string;
  period: string;
  location: string;
  achievements: string[];
  hasNote?: boolean;
};

type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details: string[];
};

type SkillItem = { label: string; value: string };
type CertificationItem = { title: string; date: string };

const experienceMeta: Record<string, { icon: React.ReactNode; iconBg: string }> = {
  Spacemap: {
    icon: (
      <img
        src="https://www.spacemap42.com/logo-white.svg"
        alt="Spacemap"
        className="size-6 object-contain"
      />
    ),
    iconBg: 'bg-black',
  },
  'Aidall Inc.': {
    icon: (
      <img
        src="https://cdn.imweb.me/thumbnail/20260404/0f854752cfdb0.png"
        alt="Aidall"
        className="size-6 object-contain"
      />
    ),
    iconBg: 'bg-white',
  },
  'British Airways': {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/britishairways.svg"
        alt="British Airways"
        className="size-6 object-contain"
      />
    ),
    iconBg: 'bg-white',
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  return {
    title: `${t('resume')} | Nathaniel Abegunde`,
    description: 'Resume of Nathaniel Abegunde',
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ResumePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('resume');

  const experiences = t.raw('experiences') as Experience[];
  const educationItems = t.raw('educationItems') as EducationItem[];
  const skillItems = t.raw('skillItems') as SkillItem[];
  const certificationItems = t.raw('certificationItems') as CertificationItem[];

  return (
    <div>
      <Header rightContents={<NavLinks />} />
      <h1 className="sr-only">Nathaniel Abegunde Resume</h1>
      <div className="flex flex-col gap-y-12">
        <section className="grid gap-y-4">
          <h2 className="sr-only tracking-tight font-medium text-xl">About</h2>
          <p className="text-zinc-600 max-w-lg text-pretty">{t('about')}</p>
        </section>

        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-medium text-xl">{t('experience')}</h2>
          <div className="flex flex-col gap-12">
            {experiences.map((exp) => {
              const meta = experienceMeta[exp.company];
              return (
                <article key={exp.company}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full border border-zinc-200/80 shadow-xs ${meta?.iconBg ?? 'bg-white'}`}
                    >
                      {meta?.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-base tracking-tight font-medium text-zinc-950">
                          {exp.jobTitle}
                          <span className="mx-2 text-zinc-400">·</span>
                          {exp.company}
                        </h3>
                        <p className="text-base text-zinc-500">
                          {exp.period}
                          <span className="mx-2 text-zinc-300">·</span>
                          {exp.location}
                        </p>
                      </div>
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-base text-zinc-600">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement}>{achievement}</li>
                        ))}
                      </ul>
                      {exp.hasNote && (
                        <p className="mt-2 text-sm font-bold text-zinc-600">{t('virtualNote')}</p>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-medium text-xl">{t('education')}</h2>
          <div className="flex flex-col gap-6">
            {educationItems.map((edu) => (
              <article key={edu.institution}>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base tracking-tight font-medium text-zinc-950">
                    {edu.institution}
                    <span className="mx-2 text-zinc-400">·</span>
                    {edu.location}
                  </h3>
                  <p className="text-base text-zinc-500">{edu.degree}</p>
                  {edu.period && <p className="text-base text-zinc-500">{edu.period}</p>}
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-base text-zinc-600">
                  {edu.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-medium text-xl">{t('skills')}</h2>
          <ul className="flex flex-col gap-1 text-base text-zinc-600">
            {skillItems.map(({ label, value }) => (
              <li key={label}>
                <span className="font-medium text-zinc-800">{label}:</span> {value}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-medium text-xl">{t('certifications')}</h2>
          <ul className="flex flex-col gap-1 text-base text-zinc-600">
            {certificationItems.map(({ title, date }) => (
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
