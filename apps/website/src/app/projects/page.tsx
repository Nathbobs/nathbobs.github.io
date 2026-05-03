import type { Metadata } from 'next';
import { Header } from '~/components/header';
import { SiPytorch, SiLangchain, SiOpencv } from 'react-icons/si';

import { LunchboxItemLinkGitHubProject } from '~/lunchbox/prebuilt/lunchbox-item-link-github-project';
import { NavLinks } from '~/components/nav-links';

export const metadata: Metadata = {
  title: 'Projects | Nathaniel Abegunde',
  description: 'Projects by Nathaniel Abegunde',
};

export default function ProjectsPage() {
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
                  <span>
                    Production-grade data engineering pipeline for Oil &amp; Gas
                    procurement intelligence. Medallion Architecture (Bronze →
                    Silver → Gold) tracking supplier risk, trade trends, and
                    material category performance across 7 countries and 92
                    materials.
                  </span>
                  <span>
                    <span className="font-semibold text-zinc-700">
                      Tech Stack:
                    </span>{' '}
                    Python, PySpark, Supabase PostgreSQL, Streamlit, Pandas,
                    Plotly, Parquet, SQLAlchemy
                  </span>
                  <span>
                    <span className="font-semibold text-zinc-700">
                      Data Source:
                    </span>{' '}
                    <a
                      href="http://data.un.org/Data.aspx?d=ComTrade&f=_l1Code%3a84"
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:text-zinc-700 transition-colors"
                    >
                      UN Comtrade · HS Chapter 84 (Industrial Machinery)
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
                  <span>
                    Graduation project comparing NeRF, Vanilla 3DGS,
                    Scaffold-GS, and Feature-GS for 3D scene reconstruction
                    from multi-view images. Integrated SAM for 3D object
                    segmentation and manipulation using Open3D.
                  </span>
                  <span>
                    <span className="font-semibold text-zinc-700">
                      Tech Stack:
                    </span>{' '}
                    Python, PyTorch, COLMAP, NerfStudio, Open3D, SAM, MeshLab,
                    CUDA 11.8
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
                  <span>
                    Multi-agent AI platform where LLM agents (CEO, CTO, CFO,
                    COO) collaborate in a roundtable to auto-generate startup
                    pitch decks. Built the LangGraph orchestration pipeline and
                    initial MVP independently.
                  </span>
                  <span>
                    <span className="font-semibold text-zinc-700">
                      Tech Stack:
                    </span>{' '}
                    Python, LangGraph, OpenAI GPT-4o, RAG Pipeline, Streamlit
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
              description={
                <span className="flex flex-col gap-1">
                  <span>
                    Real-time hand landmark detection using MediaPipe and a
                    Random Forest classifier for sign language gesture
                    recognition. Built a custom dataset and used OpenCV for live
                    video stream preprocessing.
                  </span>
                  <span>
                    <span className="font-semibold text-zinc-700">
                      Tech Stack:
                    </span>{' '}
                    Python, OpenCV, MediaPipe, Scikit-Learn
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
                  <span>
                    Flutter app for connecting pet owners. Spearheaded project
                    planning and built the frontend.
                  </span>
                  <span>
                    <span className="font-semibold text-zinc-700">
                      Tech Stack:
                    </span>{' '}
                    Flutter, Dart
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
