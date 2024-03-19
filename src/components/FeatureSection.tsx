import React from 'react';
import {
  ClockIcon,
  DocumentIcon,
  ChartPieIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';

type Feature = {
  id: number;
  title: string;
  body: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
};

const features: Feature[] = [
  {
    id: 1,
    icon: ClockIcon,
    title: 'Time tracking',
    body: 'Track and sync time entries on Mac and iOS devices.',
  },
  {
    id: 2,
    icon: DocumentIcon,
    title: 'Invoicing (pro)',
    body: 'Generate invoices for your paid hours.',
  },
  {
    id: 3,
    icon: ChartPieIcon,
    title: 'Stats (reviewing)',
    body: 'Useful analytics for efficient time management.',
  },

  {
    id: 4,
    icon: ComputerDesktopIcon,
    title: 'Mac and iOS ',
    body: 'Available on Mac and iOS.',
  },
];

const FeatureSection = () => {
  return (
    <section className="max-h-[400px] h-[600px] flex items-center justify-center">
      <div className="flex items-center justify-center gap-6">
        {features.map((feature: Feature) => {
          return (
            <>
              <FeatureCard feature={feature} key={feature.id} />
            </>
          );
        })}
      </div>
    </section>
  );
};

type FeatureCardProps = {
  feature: Feature;
};

const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <div className="px-4 py-8 flex flex-col items-center justify-start  rounded-lg w-[250px] h-[200px]  tranistion-all duration-300 shadow-md hover:shadow-lg">
      <feature.icon height={48} className="pb-2 stroke-2" />
      {/* <h3 className="pb-6 text-xl font-medium">{feature.title}</h3> */}
      <div className="text-lg font-medium text-center">{feature.body}</div>
    </div>
  );
};

export default FeatureSection;
