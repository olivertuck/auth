import Head from 'next/head';
import { NextPage } from 'next';
import { SignUpForm } from '../components';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <SignUpForm />
  </>
);

export default Home;
