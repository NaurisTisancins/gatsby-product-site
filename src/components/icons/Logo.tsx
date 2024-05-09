import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Logo = () => {
  return (
    <>
      <StaticImage
        src="../../images/appstore1024.png"
        alt="placeholder"
        formats={['png']}
        style={{ height: '60px', width: '60px' }}
      />
    </>
  );
};

export default Logo;
