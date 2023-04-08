import React from 'react';
import type { AppProps } from 'next/app';

import '@/styles/globals.scss';

import DefaultLayout from '@/components/DefaultLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
