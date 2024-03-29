"use client";
/* Component : Info & Usage
 * Info :
 *       This component is created as providing menu for the
 * visitors thorough the mobile devices for the website. It opens
 * based on the Mobile Menu Component states.
 *
 * Usage :
 *        It provides navigational links to various sections of
 * the website for the visitor.
 */

/* TODO ://
 *
 * @ - add more links
 */

// component import
import { SearchBar } from ".";
// icons imports
import { HiHome } from "react-icons/hi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaRegNewspaper } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { IoMdInformationCircle } from "react-icons/io";
// types import
import { StyledComponent } from "../types/component_types";

interface SideBarMenuPropsTypes extends StyledComponent {
  showMenu: boolean;
}

const SideBarMenu = ({ className, showMenu }: SideBarMenuPropsTypes) => {
  return (
    <div
      className={`absolute w-[85vw] h-screen top-14 bg-opacity-60 bg-[#003b31] text-white dark:bg-gray-600 dark:bg-opacity-70 p-4 text-lg transition-all ease-in grid grid-cols-1 grid-flow-row rounded-tr-md ${
        showMenu ? "animate-sideBarMenuSlideIn" : "animate-sideBarMenuSlideOut"
      }`}
    >
      {/* Search Bar */}
      <SearchBar />
      {/* Home Menu */}
      <div className="cursor-pointer w-fit h-fit grid grid-cols-[30%_70%] grid-rows-1 items-center gap-2">
        <HiHome className="w-5 h-5" />
        <h4 className="">Home</h4>
      </div>
      {/* IPO Menu */}
      <div className="cursor-pointer w-fit h-fit grid grid-cols-[30%_70%] grid-rows-1 items-center gap-2">
        <GiTakeMyMoney className="w-5 h-5" />
        <h4 className="">IPO</h4>
      </div>
      {/* Market update */}
      <div className="cursor-pointer w-fit h-fit flex flex-grow text-nowrap gap-2 items-center">
        <FaRegNewspaper className="w-5 h-5" />
        <h4 className="">Market Updates</h4>
      </div>
      {/* Contacts */}
      <div className="cursor-pointer w-fit h-fit grid grid-cols-[30%_70%] grid-rows-1 items-center gap-2">
        <GrContactInfo className="w-5 h-5" />
        <h4 className="">Contact</h4>
      </div>
      {/* About */}
      <div className="cursor-pointer w-fit h-fit grid grid-cols-[30%_70%] grid-rows-1 items-center gap-2">
        <IoMdInformationCircle className="w-5 h-5" />
        <h4 className="">About</h4>
      </div>
    </div>
  );
};

export default SideBarMenu;
