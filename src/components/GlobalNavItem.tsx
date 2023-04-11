import React, { ReactNode } from 'react';
import Link from 'next/link';

import styles from './GlobalNavItem.module.scss';

export interface GlobalNavItemProps {
  href: string;
  children: ReactNode;
}
export default function GlobalNavItem({ href, children }: GlobalNavItemProps) {
  return (
    <li className={styles['global-nav-item']}>
      <Link href={href}>{children}</Link>
    </li>
  );
}
