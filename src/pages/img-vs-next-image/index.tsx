import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { calcHeight } from '@/utils';

import PageTitle from '@/components/PageTitle';
import ImageCard from '@/components/ImageCard';

export default function ImgVsNextImage() {
  const width = 400;
  const height = calcHeight(width);

  return (
    <>
      <Head>
        <title>img VS next/image</title>
      </Head>
      <PageTitle title="<img> VS <Image> of Next.js" />
      <ImageCard title="<img>">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/bg-1.jpg"
          alt="sample 1"
          width={`${width}px`}
          height={`${height}px`}
        />
      </ImageCard>
      <ImageCard title="<Image> of Next.js">
        <Image
          src="/bg-1.jpg"
          alt="sample 1"
          width={`${width}px`}
          height={`${height}px`}
        />
      </ImageCard>
    </>
  );
}
