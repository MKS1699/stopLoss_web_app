"use client";
/* Component : Info & Usage
 * Info :
 *       This component is created as providing menu for the
 * visitors coming thorough the tablet and above devices.
 *
 * Usage :
 *        It provides navigational links to various sections of
 * the website for the visitor.
 */

/* TODO ://
 *
 * @ -
 */

// icons imports
import { HiHome } from "react-icons/hi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaRegNewspaper } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { IoMdInformationCircle } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="hidden lg:col-start-3 lg:grid lg:grid-rows-1 lg:grid-flow-col-dense lg:text-xl lg:items-center lg:justify-items-center lg:gap-2 text-[#003b31] dark:text-white transition-all ease-in">
      {/* Home Menu */}
      <div className="cursor-pointer w-fit h-fit grid grid-cols-[30%_70%] grid-rows-1 items-center gap-1">
        <HiHome className="w-5 h-5" />
        <h4 className="">Home</h4>
      </div>
      {/* IPO Menu */}
      <div className="cursor-pointer w-fit h-fit grid grid-cols-[30%_70%] grid-rows-1 items-center gap-1">
        <GiTakeMyMoney className="w-5 h-5" />
        <h4 className="">IPO</h4>
      </div>
      {/* Market update */}
      <div className="cursor-pointer w-fit h-fit flex flex-grow text-nowrap gap-1 items-center">
        <FaRegNewspaper className="w-5 h-5" />
        <h4 className="">Market Updates</h4>
      </div>
      {/* Contacts */}
      <div className="hidden cursor-pointer w-fit h-fit xl:grid grid-cols-[30%_70%] grid-rows-1 items-center gap-0">
        <GrContactInfo className="w-5 h-5" />
        <h4 className="">Contact</h4>
      </div>
      {/* About */}
      <div className="hidden cursor-pointer w-fit h-fit xl:grid grid-cols-[30%_70%] grid-rows-1 items-center gap-0">
        <IoMdInformationCircle className="w-5 h-5" />
        <h4 className="">About</h4>
      </div>
    </div>
  );
};

export default NavBar;
