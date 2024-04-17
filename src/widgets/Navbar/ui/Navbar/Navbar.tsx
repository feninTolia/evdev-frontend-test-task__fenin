import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { NavbarItemsList } from '../../model/items';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import Image from 'next/image';
import logo from '@/shared/assets/icons/logo.svg';
import { LangSwitcher } from '@/widgets/LangSwitcher';

interface INavbarProps {
  className?: string;
}

export const Navbar = memo((props: INavbarProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <AppLink href="/">
        <Image src={logo} alt="Logo" width={60} height={30} />
      </AppLink>
      <ul className={cls.navList}>
        {NavbarItemsList.map((item, idx) => {
          return (
            <li key={item.path} className={cls.navItem}>
              <AppLink href={item.path}>{item.text}</AppLink>
            </li>
          );
        })}
        <LangSwitcher />
      </ul>
    </div>
  );
});
