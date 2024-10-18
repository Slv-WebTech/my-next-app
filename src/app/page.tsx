import Head from 'next/head';
import Parent from './parent';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Next.js App</title>
      </Head>
      <main>
        <h1>Welcome to Next.js with TypeScript</h1>
        <Parent />
      </main>
    </div>
  );
};

export default Home;
