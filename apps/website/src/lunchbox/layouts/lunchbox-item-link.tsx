import type { ClassValue } from 'reclassify';
import { Props as CellProps } from '../core/lunchbox-item';

import { LunchboxItem } from '../core/lunchbox-item';

export type SelfProps = Readonly<{
  className?: ClassValue;
  title: string;
  subtitle?: React.ReactNode;
  icon: React.ReactElement;
  image?: React.ReactElement;
  action?: React.ReactElement;
  padding?: string;
  actionSpacing?: string;
}>;

export type Props = CellProps & SelfProps;

function LunchboxItemLink1x4({ action, icon, subtitle, title }: SelfProps) {
  return (
    <div className="w-full flex h-full p-4 items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-zinc-500">{subtitle}</p>
        </div>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

function LunchboxItemLink2x2({ action, icon, subtitle, title }: SelfProps) {
  return (
    <div className="w-full flex flex-col h-full p-4 md:p-6 gap-4 justify-between">
      <div className="grid gap-2">
        {icon}
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-zinc-500">{subtitle}</p>
        </div>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

function LunchboxItemLink4x2({
  action,
  icon,
  image,
  subtitle,
  title,
}: SelfProps) {
  return (
    <div className="w-full flex flex-col h-full p-6 gap-4 justify-between">
      <div className="grid gap-4">
        <div className="grid gap-2">
          {icon}
          <div className="flex flex-col">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-zinc-500">{subtitle}</p>
          </div>
        </div>
        {image && <div>{image}</div>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

function LunchboxItemLink2x4({
  action,
  icon,
  image,
  subtitle,
  title,
}: SelfProps) {
  return (
    <div className="w-full flex h-full p-6 gap-4 justify-between items-stretch">
      <div className="flex flex-col justify-between">
        <div className="grid gap-2">
          {icon}
          <div className="flex flex-col">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-zinc-500">{subtitle}</p>
          </div>
        </div>
        {action && <div>{action}</div>}
      </div>
      {image && <div className="flex w-1/2 h-full justify-end">{image}</div>}
    </div>
  );
}

function LunchboxItemLink4x4({
  action,
  icon,
  image,
  subtitle,
  title,
}: SelfProps) {
  return (
    <div className="w-full flex flex-col h-full p-6 items-stretch justify-between gap-4">
      <div className="flex justify-between gap-4">
        <div className="grid gap-2">
          {icon}
          <div className="flex flex-col">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-zinc-500">{subtitle}</p>
          </div>
        </div>
        {action && <div>{action}</div>}
      </div>
      {image && <div className="flex h-1/2 w-full justify-end">{image}</div>}
    </div>
  );
}

function LunchboxItemLink1x8({ action, icon, subtitle, title }: SelfProps) {
  return (
    <div className="w-full flex h-full p-4 items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-zinc-500">{subtitle}</p>
        </div>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

function LunchboxItemLink2x8({
  action,
  actionSpacing = 'mt-3',
  icon,
  image,
  padding = 'p-6',
  subtitle,
  title,
}: SelfProps) {
  return (
    <div
      className={`w-full flex ${padding} gap-4 items-stretch`}
    >
      <div className="flex flex-col flex-1">
        <div className="grid gap-2">
          {icon}
          <div className="flex flex-col">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-zinc-500 max-w-lg">{subtitle}</p>
          </div>
        </div>
        {action && <div className={actionSpacing}>{action}</div>}
      </div>
      {image && (
        <div className="flex items-center justify-end pr-4">{image}</div>
      )}
    </div>
  );
}

function LunchboxItemLink3x8({
  action,
  actionSpacing = 'mt-4',
  icon,
  image,
  padding = 'p-6',
  subtitle,
  title,
}: SelfProps) {
  return (
    <div
      className={`w-full flex ${padding} gap-4 items-stretch`}
    >
      <div className="flex flex-col flex-1">
        <div className="grid gap-2">
          {icon}
          <div className="flex flex-col">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-zinc-500 max-w-lg">{subtitle}</p>
          </div>
        </div>
        {action && <div className={actionSpacing}>{action}</div>}
      </div>
      {image && (
        <div className="flex items-center justify-end pr-4">{image}</div>
      )}
    </div>
  );
}

export function LunchboxItemLink(props: Props) {
  const { className, cols, rows, freeHeight, ...rest } = props;

  return (
    <LunchboxItem
      {...props}
      className={['bg-white hover:shadow-lg transition', className]}
    >
      <div className={freeHeight ? 'relative flex w-full' : 'absolute inset-0 flex h-full w-full'}>
        {(() => {
          if (rows === 1 && cols === 4) {
            return <LunchboxItemLink1x4 {...rest} />;
          }

          if (rows === 1 && cols === 8) {
            return <LunchboxItemLink1x8 {...rest} />;
          }

          if (rows === 2 && cols === 2) {
            return <LunchboxItemLink2x2 {...rest} />;
          }

          if (rows === 2 && cols === 4) {
            return <LunchboxItemLink2x4 {...rest} />;
          }

          if (rows === 2 && cols === 8) {
            return <LunchboxItemLink2x8 {...rest} />;
          }

          if (rows === 3 && cols === 8) {
            return <LunchboxItemLink3x8 {...rest} />;
          }

          if (rows === 4 && cols === 2) {
            return <LunchboxItemLink4x2 {...rest} />;
          }

          if (rows === 4 && cols === 4) {
            return <LunchboxItemLink4x4 {...rest} />;
          }
        })()}
      </div>
    </LunchboxItem>
  );
}
