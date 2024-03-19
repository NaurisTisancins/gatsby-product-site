import React from 'react';
import DownloadButton from './DownloadButton';

const HeroSection = () => {
  return (
    <section className="max-h-[600px] h-[600px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">Sessions</h1>
        <h2 className="pb-4 text-3xl font-semibold tracking-wide">
          A <span className="font-black">time tracker</span> for your next
          project.
        </h2>
        <DownloadButton type="dark" />
      </div>
    </section>
  );
};

export default HeroSection;
