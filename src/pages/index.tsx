import React from 'react';
import Head from 'next/head';

import PageTitle from '@/components/PageTitle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PageTitle title="Next.js Image Optimization" />
    </>
  );
}
