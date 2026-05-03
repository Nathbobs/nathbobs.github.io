import type { ClassValue } from 'reclassify';

export type Props = Readonly<{
  className?: ClassValue;
  border?: boolean;
  children?: React.ReactNode;
  freeHeight?: boolean;
}> &
  Ratio;

type Ratio =
  | Readonly<{ rows: 1; cols: 4 }>
  | Readonly<{ rows: 1; cols: 8 }>
  | Readonly<{ rows: 2; cols: 2 }>
  | Readonly<{ rows: 2; cols: 3 }>
  | Readonly<{ rows: 2; cols: 4 }>
  | Readonly<{ rows: 2; cols: 8 }>
  | Readonly<{ rows: 3; cols: 8 }>
  | Readonly<{ rows: 4; cols: 2 }>
  | Readonly<{ rows: 4; cols: 4 }>;

export function LunchboxItem({
  border = true,
  children,
  className,
  freeHeight = false,
  rows = 2,
  cols = 2,
}: Props) {
  return (
    <div
      className={[
        border && 'border border-zinc-200',
        'relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-clip',
        {
          'col-span-2': cols === 2,
          'col-span-4': cols === 4,
          'col-span-8': cols === 8,
          'row-span-1': !freeHeight && rows === 1,
          'row-span-2': !freeHeight && rows === 2,
          'row-span-3': !freeHeight && rows === 3,
          'row-span-4': !freeHeight && rows === 4,
          'aspect-square': !freeHeight && rows === cols,
        },
        className,
      ]}
    >
      {children}
    </div>
  );
}
