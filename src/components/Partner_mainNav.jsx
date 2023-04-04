import React from "react";
import { Link } from "react-router-dom";
import {
  FaClock,
  FaRunning,
  FaClipboardCheck,
  FaRegClock,
  FaRegBuilding,
  FaInbox,
} from "react-icons/fa";

export const PartnerMainNav = () => {
  return (
    <div className="fixed z-40 md:relative top-[20%] md:top-0 left-4 md:left-0 w-8 md:w-full md:flex flex-row flex-wrap justify-center lg:justify-between gap-2 pt-20 md:pt-0">
      <div className="btnStatus flex flex-col md:flex-row items-center gap-2 mb-4">
        <p className="text-xs md:text-base">Status:</p>
        <Link
          to="/partner/status/pending"
          className="group relative w-10 h-10 md:w-fit md:flex items-center font-medium text-center md:bg-orange-200 hover:md:bg-orange-300 rounded-full transition ease-in-out duration-500 hover:scale-105 p-2 px-4"
        >
          <FaClock size={20} className="md:hidden absolute top-3 left-2" />
          <p className="hidden h-10 group-hover:flex md:flex whitespace-nowrap items-center absolute md:relative left-12 md:left-0 top-0 z-10 bg-gray-200/50 md:bg-gray-900/0 rounded-full p-2 px-4 md:p-0">
            Pending
          </p>
        </Link>
        <Link
          to="/partner/status/on_going"
          className="group relative w-10 h-10 md:w-fit md:flex items-center font-medium text-center md:bg-orange-200 hover:md:bg-orange-300 rounded-full transition ease-in-out duration-500 hover:scale-105 p-2 px-4"
        >
          <FaRunning size={20} className="md:hidden absolute top-3 left-2" />
          <p className="hidden h-10 group-hover:flex md:flex whitespace-nowrap items-center absolute md:relative left-12 md:left-0 top-0 z-10 bg-gray-200/50 md:bg-gray-900/0 rounded-full p-2 px-4 md:p-0">
            On Going
          </p>
        </Link>
        <Link
          to="/partner/status/done"
          className="group relative w-10 h-10 md:w-fit md:flex items-center font-medium text-center md:bg-orange-200 hover:md:bg-orange-300 rounded-full transition ease-in-out duration-500 hover:scale-105 p-2 px-4"
        >
          <FaClipboardCheck
            size={20}
            className="md:hidden absolute top-3 left-2"
          />
          <p className="hidden h-10 group-hover:flex md:flex whitespace-nowrap items-center absolute md:relative left-12 md:left-0 top-0 z-10 bg-gray-200/50 md:bg-gray-900/0 rounded-full p-2 px-4 md:p-0">
            Done
          </p>
        </Link>
      </div>
      <div className="btnSetting flex flex-col md:flex-row justify-end items-center gap-2 mb-4">
        <p className="text-xs md:text-base">Setting:</p>
        <Link
          to="/partner/setting/coworkingspace"
          className="group relative w-10 h-10 md:w-fit md:flex items-center font-medium text-center md:bg-orange-200 hover:md:bg-orange-300 rounded-full transition ease-in-out duration-500 hover:scale-105 p-2 px-4"
        >
          <FaRegBuilding
            size={20}
            className="md:hidden absolute top-3 left-2"
          />
          <p className="hidden h-10 group-hover:flex md:flex whitespace-nowrap items-center absolute md:relative left-12 md:left-0 top-0 z-10 bg-gray-200/50 md:bg-gray-900/0 rounded-full p-2 px-4 md:p-0">
            Co-working Space
          </p>
        </Link>
        <Link
          to="/partner/setting/Time"
          className="group relative w-10 h-10 md:w-fit md:flex items-center font-medium text-center md:bg-orange-200 hover:md:bg-orange-300 rounded-full transition ease-in-out duration-500 hover:scale-105 p-2 px-4"
        >
          <FaRegClock size={20} className="md:hidden absolute top-3 left-2" />
          <p className="hidden h-10 group-hover:flex md:flex whitespace-nowrap items-center absolute md:relative left-12 md:left-0 top-0 z-10 bg-gray-200/50 md:bg-gray-900/0 rounded-full p-2 px-4 md:p-0">
            Time
          </p>
        </Link>
        <Link
          to="/partner/setting/rooms"
          className="group relative w-10 h-10 md:w-fit md:flex items-center font-medium text-center md:bg-orange-200 hover:md:bg-orange-300 rounded-full transition ease-in-out duration-500 hover:scale-105 p-2 px-4"
        >
          <FaInbox size={20} className="md:hidden absolute top-3 left-2" />
          <p className="hidden h-10 group-hover:flex md:flex whitespace-nowrap items-center absolute md:relative left-12 md:left-0 top-0 z-10 bg-gray-200/50 md:bg-gray-900/0 rounded-full p-2 px-4 md:p-0">
            Rooms
          </p>
        </Link>
      </div>
    </div>
  );
};
