import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import Footer from '@/components/Footer';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroSection />
      <FeatureSection />
      <div className="w-[100vw] h-[50vh]">Images</div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
