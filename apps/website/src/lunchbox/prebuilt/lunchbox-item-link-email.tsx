import { MdEmail } from 'react-icons/md';
import { Props as SelfProps } from '../layouts/lunchbox-item-link';
import { Props as CellProps } from '../core/lunchbox-item';

import { LunchboxIcon } from '../core/lunchbox-icon';
import { LunchboxItemLink } from '../layouts/lunchbox-item-link';

type Props = Pick<SelfProps, 'className' | 'image'> &
  CellProps &
  Readonly<{
    title?: string;
    subtitle?: string;
    email: string;
  }>;

const icon = (
  <LunchboxIcon className="bg-[#EA4335] text-white" icon={MdEmail} />
);

export function LunchboxItemLinkEmail({
  title = 'Email',
  email,
  subtitle: subtitleProp,
  ...props
}: Props) {
  const subtitle = subtitleProp ?? email;
  const action = (
    <a
      href={`mailto:${email}`}
      className={[
        'inline-flex px-4 py-2 rounded-full',
        'transition',
        'text-xs text-center font-medium tracking-tight',
        'text-white',
        'bg-[#EA4335] hover:bg-[#c5382c]',
      ].join(' ')}
    >
      Email me
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
