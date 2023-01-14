import Link from 'next/link';

import Layout from 'components/layouts/Layout';

const IndexPage = () => (
  <Layout title="Noorvir Aulakh">
    <h1>About</h1>
    <p>Personal website for Noorvir Aulakh</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export default IndexPage;
