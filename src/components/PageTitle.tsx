import React, { ReactNode } from 'react';

import styles from './PageTitle.module.scss';

interface PageTitleProps {
  children?: ReactNode;
  /** If children is existent, title will be ignored */
  title?: string
}
export default function PageTitle({ title, children }: PageTitleProps) {
  if (children) {
    return (
      <h1 className={styles.title}>
        {children}
      </h1>
    );
  }

  return (
    <h1 className={styles.title}>
      {title}
    </h1>
  );
}

PageTitle.defaultProps = {
  title: undefined,
  children: undefined,
};
