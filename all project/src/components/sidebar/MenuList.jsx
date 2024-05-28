import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list }) => {
  return (
    <ul className="list-disc pl-2">
      {list.map((item) => {
        return <MenuItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default MenuList;
