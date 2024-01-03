import { Button, Card, Group, SimpleGrid, Text } from '@mantine/core';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Error404: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>404 Page Not Found</title>
      </Head>

      <SimpleGrid cols={3}>
        <div />
        <Card shadow="sm" p="lg">
          <Group position="apart" style={{ marginBottom: 5, marginTop: 'sm' }}>
            <Text weight={700}>404 - Page Not Found</Text>
          </Group>

          <Button
            variant="light"
            color="blue"
            fullWidth={false}
            loading={false}
            style={{ marginTop: 14 }}
            onClick={async () => {
              await router.push('/');
            }}
          >
            Go to Homepage
          </Button>
        </Card>
        <div />
      </SimpleGrid>
    </>
  );
};

export default Error404;
