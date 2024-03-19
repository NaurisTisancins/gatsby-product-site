import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Apple } from './icons/Apple';
import React from 'react';
import { navigate } from 'gatsby';

type BackgroundTypes = 'dark' | 'light';

type Props = {
  type: BackgroundTypes;
};

const DownloadButton = ({ type }: Props) => {
  function backgroundColor(type: BackgroundTypes) {
    switch (type) {
      case 'dark':
        return 'bg-gray-900';
      case 'light':
        return 'bg-gray-200';
    }
  }

  function textColor(type: BackgroundTypes) {
    switch (type) {
      case 'dark':
        return 'text-white fill-white';
      case 'light':
        return 'text-gray-900 fill-gray-900';
    }
  }
  return (
    <button
      className={`flex items-center rounded-xl px-4 overflow-hidden duration-300 ${backgroundColor(
        type
      )} h-[60px] group  ml-2 cursor-pointer shadow-md hover:shadow-xl`}
      onClick={() =>
        navigate('https://apps.apple.com/gb/app/sessions/id6470125837')
      }
    >
      <span className="transition-all gap-3 w-48  flex  duration-300 group-hover:translate-x-[-40px] ease-out">
        <span
          className={`flex items-center justify-center min-w-6 ${textColor(
            type
          )}`}
        >
          <Apple size={24} className={`${textColor(type)}`} />
        </span>
        <span
          className={`w-10 text-lg font-bold min-w-40 text-nowrap ${textColor(
            type
          )}`}
        >
          Download for Mac
        </span>
        <span className="flex items-center justify-center min-w-6">
          <ArrowRightIcon width={24} className={`${textColor(type)}`} />
        </span>
      </span>
    </button>
  );
};

export default DownloadButton;
