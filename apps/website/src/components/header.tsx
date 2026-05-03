import Link from 'next/link';

type Props = Readonly<{
  rightContents: React.ReactNode;
}>;

export function Header({ rightContents }: Props) {
  return (
    <div className="flex flex-col gap-y-2 sm:flex-row sm:justify-between sm:items-end pb-8">
      <Link className="font-medium tracking-tight text-2xl" href="/">
        Nathaniel Abegunde
      </Link>
      {rightContents}
    </div>
  );
}
