import React, { ReactNode } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex flex-col items-center w-full font-sans text-gray-900">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
