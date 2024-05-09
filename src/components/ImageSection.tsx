import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

type Props = {};

const ImageSection = (props: Props) => {
  return (
    <section className="flex flex-col gap-10 z-1">
      <StaticImage
        src={'../images/Single1.png'}
        alt="placeholder"
        formats={['png']}
        style={{ height: '100%', width: '100%' }}
      />
      <StaticImage
        src={'../images/Single 2.png'}
        alt="placeholder"
        formats={['png']}
        style={{ height: '100%', width: '100%' }}
      />
      <StaticImage
        src={'../images/Single 3.png'}
        alt="placeholder"
        formats={['png']}
        style={{ height: '100%', width: '100%' }}
      />
    </section>
  );
};

export default ImageSection;
