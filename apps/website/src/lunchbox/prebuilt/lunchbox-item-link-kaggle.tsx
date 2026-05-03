import { SiKaggle } from 'react-icons/si';
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

const icon = (
  <LunchboxIcon className="bg-[#20BEFF] text-white" icon={SiKaggle} />
);

export function LunchboxItemLinkKaggle({
  title = 'Kaggle',
  username,
  subtitle: subtitleProp,
  ...props
}: Props) {
  const subtitle = subtitleProp ?? username;
  const action = (
    <a
      href={`https://www.kaggle.com/${username}`}
      target="_blank"
      rel="noreferrer"
      className={[
        'inline-flex px-4 py-2 rounded-full',
        'transition',
        'text-xs text-center font-medium tracking-tight',
        'text-white',
        'bg-[#20BEFF] hover:bg-[#19a8e0]',
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
