import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Error404: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>404 Page Not Found</title>
      </Head>

      <div className="flex justify-center">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>404 - Page Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <Button
              variant="secondary"
              onClick={async () => {
                await router.push('/');
              }}
            >
              Go to Homepage
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Error404;
