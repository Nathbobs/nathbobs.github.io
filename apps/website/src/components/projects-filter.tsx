'use client';

import { useState } from 'react';

export type ProjectCategory = 'aiml' | 'data' | 'backend';

export type ProjectItem = {
  id: string;
  categories: ProjectCategory[];
  card: React.ReactNode;
};

type FilterLabels = {
  all: string;
  aiml: string;
  data: string;
  backend: string;
};

type Props = {
  filterLabels: FilterLabels;
  projects: ProjectItem[];
};

const FILTERS = ['all', 'aiml', 'data', 'backend'] as const;
type Filter = (typeof FILTERS)[number];

export function ProjectsFilter({ filterLabels, projects }: Props) {
  const [active, setActive] = useState<Filter>('all');

  const visible =
    active === 'all' ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex gap-2 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={[
              'px-4 py-1.5 rounded-full text-sm font-medium transition-colors border',
              active === f
                ? 'bg-zinc-900 text-white border-zinc-900'
                : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400',
            ].join(' ')}
          >
            {filterLabels[f]}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-8 gap-4">
        {visible.map((p) => p.card)}
      </div>
    </div>
  );
}
