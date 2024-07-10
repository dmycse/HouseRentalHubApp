'use client';

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../avatar/Avatar";
import NavMenuItems from "./NavMenuItems";

export default function Navbar() {

  let [menuIsOpen, setMenuIsOpen] = useState(false);

  let toggleMenuHadler = () => {
    setMenuIsOpen(open => !open);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div 
          className="hidden lg:block py-3 px-4 text-sm font-semibold rounded-full hover:bg-neutral-100 transition cursor-pointer"
          onClick={() => {}}
        >
          HRH your home
        </div>
        <div 
          className="p-4 md:py-1 md:px-2 border border-neutral-200 flex items-center gap-3 rounded-full hover:shadow-md transition cursor-pointer"
          onClick={toggleMenuHadler}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      { menuIsOpen && (
        <div 
          className="absolute top-14 right-0 w-[20vw] sm:w-[15vw] text-sm rounded-xl bg-white shadow-md overflow-hidden"
        >
          <ul className="cursor-pointer">
            <NavMenuItems onClick={() => {}} label="Login"/>
            <NavMenuItems onClick={() => {}} label="Sign Up"/>
          </ul>
        </div>
      )}
    </div>
  )
}
