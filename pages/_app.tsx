import PlausibleProvider from 'next-plausible';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';
import '../styles/tailwind.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  // Uses NEXT_PUBLIC_VERCEL_ENV instead of NODE_ENV so we can exclude previews from analytics collection.
  // see https://vercel.com/docs/concepts/projects/environment-variables#system-environment-variables
  const enableAnalytics = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';

  return (
    <>
      <Head>
        <title>App Title</title>
        <meta name="description" content="app-title" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* next-plausible v4: replace src with your site-specific script URL from the
          Plausible dashboard, e.g. https://plausible.io/js/pa-XXXXX.js */}
      <PlausibleProvider src="https://plausible.io/js/pa-XXXXX.js" enabled={enableAnalytics}>
        <main className="mx-auto w-full max-w-screen-xl px-4 pt-8">
          <Component {...pageProps} />
        </main>
      </PlausibleProvider>
    </>
  );
}
