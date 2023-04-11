import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { calcHeight } from '@/utils';

import PageTitle from '@/components/PageTitle';
import ImageCard from '@/components/ImageCard';

import bg1 from '../images/bg-1.jpg';

export default function TypeOfSrc() {
  const width = 400;
  const height = calcHeight(width);

  return (
    <>
      <Head>
        <title>Type of src</title>
      </Head>
      <PageTitle title="Type of src" />
      <ImageCard title="public 폴더 경로: /bg-1.jpg">
        <Image
          src="/bg-1.jpg"
          alt="sample 1"
          width={`${width}px`}
          height={`${height}px`}
        />
      </ImageCard>
      <ImageCard title="상대 경로: import bg1 from '../images/bg-1.jpg'">
        <Image
          src={bg1.src}
          alt="sample 1"
          width={`${width}px`}
          height={`${height}px`}
        />
      </ImageCard>
      <ImageCard title="절대 경로: https://image.oliveyoung.co.kr/uploads/images/display/90000010001/1/5227064067269534545.jpg">
        <Image
          src="https://image.oliveyoung.co.kr/uploads/images/display/90000010001/1/5227064067269534545.jpg"
          alt="sample 1"
          width={`${width}px`}
          height={`${calcHeight(width, '4:3')}px`}
        />
      </ImageCard>
    </>
  );
}
