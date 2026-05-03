import { BsMedium } from 'react-icons/bs';
import { Props as SelfProps } from '../layouts/lunchbox-item-link';
import { Props as CellProps } from '../core/lunchbox-item';

import { LunchboxIcon } from '../core/lunchbox-icon';
import { LunchboxItemLink } from '../layouts/lunchbox-item-link';

type Props = Pick<SelfProps, 'className' | 'image'> &
  CellProps &
  Readonly<{
    title?: string;
    subtitle?: string;
    username: string;
  }>;

const icon = <LunchboxIcon className="bg-black text-white" icon={BsMedium} />;

export function LunchboxItemLinkMedium({
  title = 'Medium',
  username,
  subtitle: subtitleProp,
  ...props
}: Props) {
  const subtitle = subtitleProp ?? `@${username}`;
  const action = (
    <a
      href={`https://medium.com/@${username}`}
      target="_blank"
      rel="noreferrer"
      className={[
        'inline-flex px-4 py-2 rounded-full',
        'transition',
        'text-xs text-center font-medium tracking-tight',
        'text-white',
        'bg-black hover:bg-zinc-800',
      ].join(' ')}
    >
      Follow
    </a>
  );

  return (
    <LunchboxItemLink
      icon={icon}
      title={title}
      subtitle={subtitle}
      action={action}
      {...props}
    />
  );
}
