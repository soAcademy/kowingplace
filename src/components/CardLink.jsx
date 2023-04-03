import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarker, FaClock } from "react-icons/fa";

export const CardLink = ({ data }) => {
  return (
    <Link
      to={`/branch/${data.id}`}
      className="cardList flex-none w-[100px] md:w-[200px] h-[250px] md:h-[300px] bg-orange-100/50 rounded-md transition ease-in-out delay-300 duration-300 hover:scale-110"
    >
      <img
        src={data.picture}
        alt={data.name}
        className="object-cover object-center w-full h-[100px] md:min-h-[200px] rounded-t-md"
      />
      <div className="cardDetail flex flex-col h-[150px] md:h-[100px] font-light gap-y-2 p-2">
        <p className="h-1/3 text-center font-medium mb-2">{data.name}</p>
        <div className="h-2/3 flex">
          <FaMapMarker className="w-4 text-red-300 mr-2" />
          <p>{data.location.substring(0,20)} ...</p>
        </div>
        {/* <div className="flex justify-between">
          <FaClock className="w-4 text-green-300 mr-2" />
          <p>{data.open}</p>
        </div> */}
      </div>
    </Link>
  );
};
