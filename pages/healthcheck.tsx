import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('Health check...');
  context.res.end('OK');
  return {
    props: {
    },
  };
};

export default (): JSX.Element => null;