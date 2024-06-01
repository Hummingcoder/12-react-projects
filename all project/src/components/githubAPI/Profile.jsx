import React from "react";
import { FaArrowAltCircleRight, FaExternalLinkAlt } from "react-icons/fa";

const Profile = ({
  html_url,
  avatar_url,
  followers,
  login,
  name,
  public_repos,
}) => {
  return (
    <div className="w-[400px] relative h-fit bg-gray-100 shadow-lg mx-auto m-4 rounded-lg border-2 border-black overflow-hidden">
      <img
        className="w-[120px] shadow-lg mx-auto rounded-full border-[8px] m-2 border-white"
        src={avatar_url}
        alt=""
      />
      <div className=" p-5 mx-auto text-left  w-fit">
        <p className="bg-white px-6 rounded-lg shadow-lg mb-1"> name: {name}</p>
        <p className="bg-white px-6 rounded-lg shadow-lg mb-1">
          username: {login}
        </p>
        <p className="bg-white px-6 rounded-lg shadow-lg mb-1">
          followers: {followers}
        </p>
        <p className="bg-white px-6 rounded-lg shadow-lg mb-1">
          public repos: {public_repos}
        </p>
      </div>
      <a
        className="absolute top-[100px] hover:bg-blue-600 left-[220px] bg-blue-500 text-white rounded-full  p-2"
        target="_blank"
        href={html_url}
      >
        <FaExternalLinkAlt />
      </a>
    </div>
  );
};

export default Profile;
