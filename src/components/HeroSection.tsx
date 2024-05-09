import React from 'react';
import DownloadButton from './DownloadButton';
import Logo from './icons/Logo';

const HeroSection = () => {
  return (
    <section className="max-h-[700px] h-[700px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2 px-2 md:px-0">
        <h1 className="pt-6 text-5xl font-bold md:text-6xl">Sessions</h1>

        <h2 className="pb-4 text-xl font-semibold tracking-wide text-center md:text-3xl">
          A <span className="font-black">time tracker</span> for your next
          project.
        </h2>
        <div className="flex">
          <Logo />
          <DownloadButton type="dark" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
