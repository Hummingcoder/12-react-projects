import React, { useState } from "react";
import MenuList from "./MenuList";

const MenuItem = ({ item }) => {
  const [expand, setExpand] = useState({});

  const handleShow = (id) => {
    setExpand({
      ...expand,
      [id]: !expand[id],
    });
  };

  return (
    <li className="pl-2">
      <p>
        {item.label}
        {item.children ? (
          <span
            onClick={() => handleShow(item.id)}
            className=" p-1 font-bold cursor-pointer"
          >
            {expand[item.id] ? "-" : "+"}
          </span>
        ) : null}
      </p>
      {item.children && item.children.length > 0 && expand[item.id] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
