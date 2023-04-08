import React, { ReactNode } from 'react';

import styles from './GlobalNav.module.scss';

interface GlobalNavProps {
  children: ReactNode
}
export default function GlobalNav({ children }: GlobalNavProps) {
  return (
    <nav>
      <ul className={styles['global-nav']}>
        {children}
      </ul>
    </nav>
  );
}
