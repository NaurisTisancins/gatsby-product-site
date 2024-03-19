import React from 'react';

const Footer = () => {
  return (
    <div className="flex w-full  h-[100px] justify-center items-center ">
      <div className="max-w-[1200px] min-w-[80%]  flex  flex-col items-center justify-between">
        <div className="flex flex-col w-full gap-1 pb-4 text-gray-400">
          <span>Address: lorem ipsum some address</span>
          <span>email: some.email@email.com</span>
          <span>phone: 12345678</span>
        </div>
        <span className="text-zinc-200">
          Developed by Nauris Tisancins for NimbleByte
        </span>
      </div>
    </div>
  );
};

export default Footer;
