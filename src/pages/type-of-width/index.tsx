import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { calcHeight } from '@/utils';

import PageTitle from '@/components/PageTitle';
import ImageCard from '@/components/ImageCard';

export default function TypeOfWidth() {
  const widthList = [400, 800, 1200];

  return (
    <>
      <Head>
        <title>Type of width</title>
      </Head>
      <PageTitle title="Type of width" />

      {widthList.map((width) => (
        <ImageCard
          key={`width-${width}`}
          title={`width: ${width}px`}
        >
          <Image
            src="/bg-1.jpg"
            alt="sample 1"
            width={`${width}px`}
            height={`${calcHeight(width)}px`}
          />
        </ImageCard>
      ))}
    </>
  );
}
