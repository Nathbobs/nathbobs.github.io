import { BsGithub, BsLinkedin, BsMedium } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { SiKaggle } from 'react-icons/si';

const internetProfiles = {
  github: {
    label: 'GitHub',
    icon: BsGithub,
    href: 'https://github.com/nathbobs',
  },
  linkedin: {
    label: 'LinkedIn',
    icon: BsLinkedin,
    href: 'https://linkedin.com/in/abegundenathaniel',
  },
  email: {
    label: 'Email',
    icon: MdEmail,
    href: 'mailto:aanathaniel@gmail.com',
  },
  medium: {
    label: 'Medium',
    icon: BsMedium,
    href: 'https://medium.com/@nathbobs',
  },
  kaggle: {
    label: 'Kaggle',
    icon: SiKaggle,
    href: 'https://www.kaggle.com/nathbob',
  },
} as const;

export function ProfileLinks() {
  return (
    <div className="text-sm flex flex-wrap gap-x-4">
      {Object.values(internetProfiles).map(({ label, icon: Icon, href }) => (
        <a
          aria-label={label}
          className="text-zinc-500 hover:text-zinc-600 transition-colors"
          href={href}
          key={href}
          rel="noreferrer noopener"
          target="_blank"
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  );
}
