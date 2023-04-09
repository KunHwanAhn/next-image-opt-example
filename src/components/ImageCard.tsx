import React, { ReactNode } from 'react';

import styles from './ImageCard.module.scss';

interface ImageCardProps {
  title: string;
  children: ReactNode;
}
export default function ImageCard({ title, children }: ImageCardProps) {
  return (
    <div className={styles['image-card']}>
      <div>
        <span className={styles['image-card-title']}>{title}</span>
      </div>
      <div className={styles['image-box']}>
        {children}
      </div>
    </div>
  );
}
