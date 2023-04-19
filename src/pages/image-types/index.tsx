import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { calcHeight } from '@/utils';

import PageTitle from '@/components/PageTitle';
import ImageCard from '@/components/ImageCard';

export default function ImageTypes() {
  const width = 1200;
  const images = ['https://conan-dev.xyz/img/logo/react.svg', '/bg-1.jpg', '/bg-1.webp', '/bg-1.avif'];

  return (
    <>
      <Head>
        <title>Image types</title>
      </Head>
      <PageTitle title="Image Types (svg, jpg, webp, avif)" />

      {images.map((src) => (
        <ImageCard
          key={`src-${src}`}
          title={`src: ${src}`}
        >
          <Image
            src={src}
            alt="sample 1"
            width={`${width}px`}
            height={`${calcHeight(width)}px`}
            quality={100}
          />
        </ImageCard>
      ))}
    </>
  );
}
