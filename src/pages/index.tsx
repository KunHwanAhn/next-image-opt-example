import React from 'react';
import Head from 'next/head';

import style from './Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Image Opt</title>
      </Head>
      <h1 className={style.title}>Next.js Image Optimization</h1>
    </>
  );
}
