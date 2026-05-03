import { BsGithub } from 'react-icons/bs';
import { Props as SelfProps } from '../layouts/lunchbox-item-link';
import { Props as CellProps } from '../core/lunchbox-item';

import { LunchboxIcon } from '../core/lunchbox-icon';
import { LunchboxItemLink } from '../layouts/lunchbox-item-link';

type Props = Pick<SelfProps, 'className' | 'image' | 'padding' | 'actionSpacing'> &
  CellProps &
  Readonly<{
    title?: string;
    username: string;
    repoName: string;
    description?: React.ReactNode;
    liveDemo?: string;
  }>;

const icon = <LunchboxIcon className="bg-black text-white" icon={BsGithub} />;

export function LunchboxItemLinkGitHubProject({
  title: titleProp,
  description,
  username,
  repoName,
  liveDemo,
  ...props
}: Props) {
  const title = titleProp ?? repoName;
  const subtitle = description;
  const action = (
    <div className="flex gap-2 flex-wrap">
      <a
        href={`https://github.com/${username}/${repoName}`}
        target="_blank"
        rel="noreferrer"
        className={[
          'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg',
          'text-xs text-center font-semibold',
          'transition',
          'text-[#24292f]',
          'border border-[#1f2328]/15',
          'shadow-xs',
          'bg-[#f6f8fa] hover:bg-[#f3f4f6]',
        ].join(' ')}
      >
        <BsGithub className="size-3.5" />
        GitHub
      </a>
      {liveDemo && (
        <a
          href={liveDemo}
          target="_blank"
          rel="noreferrer"
          className={[
            'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg',
            'text-xs text-center font-semibold',
            'transition',
            'text-white',
            'bg-zinc-800 hover:bg-zinc-700',
          ].join(' ')}
        >
          Live Demo
        </a>
      )}
    </div>
  );

  return (
    <LunchboxItemLink
      icon={icon}
      title={title}
      subtitle={subtitle ?? description}
      action={action}
      {...props}
    />
  );
}
