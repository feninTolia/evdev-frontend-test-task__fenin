import { ReactNode, memo } from 'react';
import cls from './AppLink.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import Link, { LinkProps } from 'next/link';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}
export enum AppLinkSize {
  M = 'size_m',
  L = 'size_l',
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
  size?: AppLinkSize;
}

export const AppLink = memo((props: IAppLinkProps) => {
  const {
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    size = AppLinkSize.M,
    href,
    ...linkProps
  } = props;

  return (
    <Link
      {...linkProps}
      href={href}
      className={classNames(cls.appLink, {}, [
        className,
        cls[theme],
        cls[size],
      ])}
    >
      {children}
    </Link>
  );
});
