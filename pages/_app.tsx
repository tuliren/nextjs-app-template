import { AppProps } from 'next/app';
import Head from 'next/head';
import { AppShell, Container, MantineProvider } from '@mantine/core';
import PlausibleProvider from 'next-plausible';
import { NotificationsProvider } from '@mantine/notifications';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

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

      <PlausibleProvider domain="app-url.com" enabled={enableAnalytics}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** mantine theme override */
            colorScheme: 'light',
          }}
        >
          <NotificationsProvider>
            <AppShell padding="lg" header={<></>} footer={<></>}>
              <Container size="xl">
                <Component {...pageProps} />
              </Container>
            </AppShell>
          </NotificationsProvider>
        </MantineProvider>
      </PlausibleProvider>
    </>
  );
}
