import { Analytics } from '@vercel/analytics/next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';
import '../styles/tailwind.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>App Template</title>
        <meta name="description" content="A web application template" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-full max-w-screen-xl px-4 pt-8">
        <Component {...pageProps} />
      </main>

      {/* Vercel Web Analytics — only collects on production deployments. */}
      <Analytics />
    </>
  );
}
