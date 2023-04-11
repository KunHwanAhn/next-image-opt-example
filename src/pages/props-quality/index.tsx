import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { calcHeight } from '@/utils';

import PageTitle from '@/components/PageTitle';
import ImageCard from '@/components/ImageCard';

export default function PropsWidth() {
  const qualityList = [25, 50, 75, 100];
  const width = 400;

  return (
    <>
      <Head>
        <title>props - quality</title>
      </Head>
      <PageTitle title="props - quality" />

      {qualityList.map((quality) => (
        <ImageCard
          key={`quality-${quality}`}
          title={`quality: ${quality}`}
        >
          <Image
            src="/bg-1.jpg"
            alt="sample 1"
            width={`${width}px`}
            height={`${calcHeight(width)}px`}
            quality={quality}
          />
        </ImageCard>
      ))}
    </>
  );
}
