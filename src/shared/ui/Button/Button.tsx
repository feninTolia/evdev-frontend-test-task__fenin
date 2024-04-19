import { ButtonHTMLAttributes, memo } from 'react';
import cls from './Button.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum ButtonTheme {
  DEFAULT = '',
  CLEAR = 'clear',
  OUTLINE_INVERTED = 'outlineInverted',
  OUTLINE_GRAY = 'outlineGray',
  OUTLINE = 'outline',
}

export enum ButtonSize {
  XS = 'size_xs',
  M = 'size_m',
  L = 'size_l',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  rounded?: boolean;
  size?: ButtonSize;
}

export const Button = memo((props: IButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.DEFAULT,
    rounded = false,
    size = ButtonSize.L,
    disabled,
    ...buttonProps
  } = props;

  const mods = {
    [cls.rounded]: rounded,
    [cls.disabled]: disabled,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [
        className,
        cls[theme],
        cls[size],
      ])}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
});
