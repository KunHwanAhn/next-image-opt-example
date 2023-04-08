import React, { ReactNode } from 'react';

import { PAGES } from '@/constants';

import styles from './DefaultLayout.module.scss';
import GlobalNav from './GlobalNav';
import GlobalNavItem from './GlobalNavItem';

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }:DefaultLayoutProps) {
  return (
    <main>
      <div className={styles['main-container']}>
        {PAGES.length > 0 && (
        <GlobalNav>
          {PAGES.map(({ href, title }) => (
            <GlobalNavItem key={`nav-${href}`} href={href}>{title}</GlobalNavItem>
          ))}
        </GlobalNav>
        )}
        {children}
      </div>
    </main>
  );
}
