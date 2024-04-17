export interface INavbarItem {
  text: string;
  path: string;
  authOnly?: boolean;
}

export enum AppRoutes {
  FOR_UKRAINIANS = 'for_ukrainians',
  CATALOG = 'catalog',
  BUY = 'buy',
  SELL = 'sell',
  BLOG = 'blog',
  ABOUT = 'about',
  SERVICES = 'services',
  CONTACT = 'contact',

  //last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.FOR_UKRAINIANS]: '/ukrainians',
  [AppRoutes.CATALOG]: '/catalog',
  [AppRoutes.BUY]: '/buy',
  [AppRoutes.SELL]: '/sell',
  [AppRoutes.BLOG]: '/blog',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.SERVICES]: '/services',
  [AppRoutes.CONTACT]: '/contact',

  //last
  [AppRoutes.NOT_FOUND]: '*',
};

export const NavbarItemsList: INavbarItem[] = [
  { text: 'FOR UKRAINIANS', path: RoutePath.for_ukrainians },
  { text: 'CATALOG', path: RoutePath.catalog },
  { text: 'BUY', path: RoutePath.buy },
  { text: 'SELL', path: RoutePath.sell },
  { text: 'BLOG', path: RoutePath.blog },
  { text: 'ABOUT', path: RoutePath.about },
  { text: 'SERVICES', path: RoutePath.services },
  { text: 'CONTACT', path: RoutePath.contact },
];
