import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ImageSection from '@/components/ImageSection';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroSection />
      {/* <FeatureSection /> */}
      <ImageSection />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
