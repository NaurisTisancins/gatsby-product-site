import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../../../components/Layout';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

const SessionsIndex: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="w-[100vw] h-[100vh]"></div>
    </Layout>
  );
};

export default SessionsIndex;

export const Head: HeadFC = () => <title>Product</title>;
