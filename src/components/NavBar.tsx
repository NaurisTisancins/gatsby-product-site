import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import '../styles/animations.css';

const NavBar = () => {
  return (
    <div className="flex z-10 fixed top-0 w-full  h-[100px] justify-center items-center backdrop-blur-md shadow-md hover:shadow-lg duration-500 transition-all">
      <div className="max-w-[1200px] min-w-[80%]  flex items-center justify-between">
        <BrandLogo />
        <NavigationLinks />
      </div>
    </div>
  );
};

const BrandLogo = () => {
  return (
    <a href="/" className="text-2xl font-bold cursor-pointer w-fit">
      NimbleByte
    </a>
  );
};

const NavigationLinks = () => {
  const linkStyles = `text-lg font-bold group cursor-pointer`;

  return (
    <div className="flex items-center justify-center gap-5 cursor-pointer ">
      <span className={linkStyles}>
        Contact
        <div className="bg-black h-[2px] group-hover:w-full w-0 transition-all duration-500" />
      </span>

      <span className={linkStyles}>
        X
        <div className="bg-black h-[2px] group-hover:w-full w-0 transition-all duration-500" />
      </span>

      <span className={linkStyles}>
        <DropdownMenu>
          <DropdownMenuTrigger>Products</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="cursor-pointer">
              <a href="/product/sessions">Sessions</a>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Life in UK
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="bg-black h-[2px] group-hover:w-full w-0 transition-all duration-500" />
      </span>
    </div>
  );
};

export default NavBar;
