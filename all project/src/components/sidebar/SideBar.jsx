import React from "react";
import MenuList from "./MenuList";

const SideBar = ({ menus }) => {
  return (
    <div className=" p-12 bg-blue-400">
      <MenuList list={menus} />
    </div>
  );
};

export default SideBar;
