import { Header } from '~/components/header';
import { LunchboxGrid } from '~/lunchbox/core/lunchbox-grid';
import { LunchboxItemLinkGitHub } from '~/lunchbox/prebuilt/lunchbox-item-link-github';
import { LunchboxItemLinkLinkedIn } from '~/lunchbox/prebuilt/lunchbox-item-link-linkedin';
import { LunchboxItemLinkEmail } from '~/lunchbox/prebuilt/lunchbox-item-link-email';
import { LunchboxItemLinkMedium } from '~/lunchbox/prebuilt/lunchbox-item-link-medium';
import { LunchboxItemLinkKaggle } from '~/lunchbox/prebuilt/lunchbox-item-link-kaggle';
import { NavLinks } from '~/components/nav-links';

export default function HomePage() {
  return (
    <div>
      <Header rightContents={<NavLinks />} />
      <div className="flex flex-col gap-y-12">
        <section className="grid gap-y-4">
          <h2 className="sr-only tracking-tight font-medium text-4xl">About</h2>
          <p className="text-zinc-600 max-w-lg text-pretty">
            I&apos;m Nathaniel, a Software Engineer based in Seoul,
            building towards a career in Computer Vision and Perception for autonomous vehicles. 
            Recent Computer Software Eng. grad from Hanyang University (GKS Scholar).
          </p>
        </section>
        <section className="grid gap-y-6">
          <h2 className="tracking-tight font-medium text-xl">Find me online</h2>
          <LunchboxGrid>
            <LunchboxItemLinkLinkedIn
              rows={1}
              cols={4}
              username="abegundenathaniel"
            />
            <LunchboxItemLinkGitHub rows={2} cols={4} username="nathbobs" />
            <LunchboxItemLinkEmail
              rows={1}
              cols={4}
              email="aanathaniel@gmail.com"
              subtitle="aanathaniel [at] gmail [dot] com"
            />
            <LunchboxItemLinkKaggle rows={1} cols={4} username="nathbob" />
            <LunchboxItemLinkMedium rows={1} cols={4} username="nathbobs" />
          </LunchboxGrid>
        </section>
      </div>
    </div>
  );
}
