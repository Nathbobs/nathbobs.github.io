import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { SiPytorch, SiLangchain, SiOpencv } from 'react-icons/si';
import { TbTrafficLights } from 'react-icons/tb';
import { routing } from '~/i18n/routing';
import { Header } from '~/components/header';
import { NavLinks } from '~/components/nav-links';
import { LunchboxItemLinkGitHubProject } from '~/lunchbox/prebuilt/lunchbox-item-link-github-project';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  return {
    title: `${t('projects')} | Nathaniel Abegunde`,
    description: 'Projects by Nathaniel Abegunde',
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('projects');

  return (
    <div>
      <Header rightContents={<NavLinks />} />
      <h1 className="sr-only">Nathaniel&apos;s Projects</h1>
      <div className="flex flex-col gap-y-12">
        <section className="grid gap-y-6">
          <h2 className="sr-only">Projects</h2>
          <div className="grid grid-cols-8 gap-4">
            <LunchboxItemLinkGitHubProject
              className="group"
              rows={2}
              cols={8}
              freeHeight={true}
              padding="p-6"
              actionSpacing="mt-2"
              username="Nathbobs"
              repoName="CV_Projects"
              githubUrl="https://github.com/Nathbobs/CV_Projects/tree/main/SeoulFlow"
              title="SeoulFlow"
              liveDemo="https://drive.google.com/file/d/1xHZmZJVeXSswRGN4WZnLGLx8SBc4owE6/view?usp=sharing"
              description={
                <span className="flex flex-col gap-1">
                  <span>{t('seoulflow.description')}</span>
                  <span>
                    <span className="font-semibold text-zinc-700">{t('techStackLabel')}:</span>{' '}
                    {t('seoulflow.techStack')}
                  </span>
                </span>
              }
              image={
                <span className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition">
                  <TbTrafficLights className="size-12 text-zinc-700" />
                  <img
                    src="https://img.icons8.com/?size=100&id=4RpOhIzbPx4i&format=png&color=000000"
                    alt="CCTV"
                    className="size-16"
                  />
                </span>
              }
            />
            <LunchboxItemLinkGitHubProject
              className="group"
              rows={3}
              cols={8}
              freeHeight={true}
              padding="p-6"
              actionSpacing="mt-4"
              username="nathbobs"
              repoName="epc-procurement-pipeline"
              title="EPC Procurement Intelligence Pipeline"
              liveDemo="https://nathaniel-epc.streamlit.app/"
              description={
                <span className="flex flex-col gap-1">
                  <span>{t('epc.description')}</span>
                  <span>
                    <span className="font-semibold text-zinc-700">{t('techStackLabel')}:</span>{' '}
                    {t('epc.techStack')}
                  </span>
                  <span>
                    <span className="font-semibold text-zinc-700">{t('dataSourceLabel')}:</span>{' '}
                    <a
                      href="http://data.un.org/Data.aspx?d=ComTrade&f=_l1Code%3a84"
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:text-zinc-700 transition-colors"
                    >
                      {t('epc.dataSource')}
                    </a>
                  </span>
                </span>
              }
              image={
                <span className="text-6xl select-none opacity-80 group-hover:opacity-100 transition">
                  🏗️
                </span>
              }
            />
            <LunchboxItemLinkGitHubProject
              className="group"
              rows={2}
              cols={8}
              freeHeight={true}
              padding="p-6"
              actionSpacing="mt-2"
              username="Nathbobs"
              repoName="Graduation_Capstone"
              title="3D Reconstruction from Multiple Images"
              description={
                <span className="flex flex-col gap-1">
                  <span>{t('reconstruction.description')}</span>
                  <span>
                    <span className="font-semibold text-zinc-700">{t('techStackLabel')}:</span>{' '}
                    {t('reconstruction.techStack')}
                  </span>
                </span>
              }
              image={
                <SiPytorch className="size-20 text-[#EE4C2C] opacity-80 group-hover:opacity-100 transition" />
              }
            />
            <LunchboxItemLinkGitHubProject
              className="group"
              rows={2}
              cols={8}
              freeHeight={true}
              padding="p-6"
              actionSpacing="mt-2"
              username="SomeZarz"
              repoName="Multi-Agent-startup-Platform"
              title="StartupAI"
              description={
                <span className="flex flex-col gap-1">
                  <span>{t('startupai.description')}</span>
                  <span>
                    <span className="font-semibold text-zinc-700">{t('techStackLabel')}:</span>{' '}
                    {t('startupai.techStack')}
                  </span>
                </span>
              }
              image={
                <SiLangchain className="size-20 text-[#1C3C3C] opacity-80 group-hover:opacity-100 transition" />
              }
            />
            <LunchboxItemLinkGitHubProject
              className="group"
              rows={2}
              cols={8}
              freeHeight={true}
              padding="p-6"
              actionSpacing="mt-2"
              username="Nathbobs"
              repoName="CV_Projects"
              title="Sign Language Detection"
              liveDemo="https://github.com/Nathbobs/CV_Projects/blob/main/signLanguage_Project/readme_media/failure_example.gif"
              description={
                <span className="flex flex-col gap-1">
                  <span>{t('signlanguage.description')}</span>
                  <span>
                    <span className="font-semibold text-zinc-700">{t('techStackLabel')}:</span>{' '}
                    {t('signlanguage.techStack')}
                  </span>
                </span>
              }
              image={
                <SiOpencv className="size-20 text-[#5C3EE8] opacity-80 group-hover:opacity-100 transition" />
              }
            />
            <LunchboxItemLinkGitHubProject
              className="group"
              rows={2}
              cols={8}
              freeHeight={true}
              padding="p-6"
              actionSpacing="mt-4"
              username="1822-official"
              repoName="1822-official"
              title="PetMeeting"
              description={
                <span className="flex flex-col gap-1">
                  <span>{t('petmeeting.description')}</span>
                  <span>
                    <span className="font-semibold text-zinc-700">{t('techStackLabel')}:</span>{' '}
                    {t('petmeeting.techStack')}
                  </span>
                </span>
              }
              image={
                <img
                  alt="PetMeeting"
                  className="size-20 rounded-full object-cover opacity-80 group-hover:opacity-100 transition"
                  src="https://avatars.githubusercontent.com/u/168694981?s=400&u=a72093657ffe3f6243321a728b13a255dc00e745&v=4"
                />
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
}
