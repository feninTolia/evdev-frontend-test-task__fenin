'use client';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NavbarItemsList } from '../../model/items';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import Image from 'next/image';
import logo from '@/shared/assets/icons/logo.svg';
import call from '@/shared/assets/icons/Call.svg';
import CloseMenu from '@/shared/assets/images/icon-menu-close.png';
import Menu from '@/shared/assets/images/icon-menu.png';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

const navItems = NavbarItemsList.map((item) => {
  return (
    <li key={item.path} className={cls.navItem}>
      <AppLink href={item.path}>{item.text}</AppLink>
    </li>
  );
});

export const Navbar = memo((props: INavbarProps) => {
  const { className } = props;
  const [isMenuClosed, setIsMenuClosed] = useState(false);

  const onToggleMenu = useCallback(() => {
    setIsMenuClosed((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <AppLink href="/" className={cls.logo}>
        <Image src={logo} alt="Logo" width={60} height={30} />
      </AppLink>
      <ul className={cls.navList}>
        {navItems}
        <LangSwitcher />
      </ul>
      <div className={classNames(cls.navListMobileWrapper, { isMenuClosed })}>
        <ul className={classNames(cls.navListMobile)}>{navItems}</ul>
        <LangSwitcher />
      </div>

      <Button
        onClick={onToggleMenu}
        className={cls.menuButton}
        theme={ButtonTheme.CLEAR}
      >
        {isMenuClosed ? (
          <Image src={Menu} alt="Open" width={50} height={50} />
        ) : (
          <Image src={CloseMenu} alt="Close" width={50} height={50} />
        )}
      </Button>
      <Button
        theme={ButtonTheme.OUTLINE_GRAY}
        rounded
        size={ButtonSize.XS}
        className={cls.callBtn}
      >
        <Image src={call} alt="call" className={cls.callIcon} />
      </Button>
    </div>
  );
});
