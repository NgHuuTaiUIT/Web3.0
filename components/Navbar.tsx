import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../images/logo.png";
import Image from "next/image";
import { title } from "process";

const NavbarItem = ({
  title,
  classProps
}: {
  title: string;
  classProps?: string | null;
}) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const titles = ["Market", "Exchange", "Tutorials", "Wallets"];

  return (
    <nav className="w-full flex md:justify-center justify-between">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Image src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {titles.map((item: string, index: number) => (
          <NavbarItem title={item} key={item + index} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx04 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>

      <div className="flex relative mx-2">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
              flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in
            ">
            <li className="text-xl w-full my-2 ">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {titles.map((item: string, index: number) => (
              <NavbarItem
                title={item}
                key={item + index}
                classProps="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
