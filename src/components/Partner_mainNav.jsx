import React from "react";
import { Link } from "react-router-dom";

export const PartnerMainNav = () => {
  return (
    <div className="flex justify-between">
      <div className="btnStatus flex items-center gap-x-2">
        <p>Status:</p>
        <Link
          to="/partner/status/pending"
          className="w-fit font-medium bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4"
        >
          Pending
        </Link>
        <Link
          to="/partner/status/on_going"
          className="w-fit font-medium bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4"
        >
          On Going
        </Link>
        <Link
          to="/partner/status/done"
          className="w-fit font-medium bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4"
        >
          Done
        </Link>
      </div>
      <div className="btnSetting flex justify-end items-center gap-x-2">
        <p>Setting:</p>
        <Link
          to="/partner/setting/coworkingspace"
          className="w-fit font-medium bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4"
        >
          Co-Working Space
        </Link>
        <Link
          to="/partner/setting/Time"
          className="w-fit font-medium bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4"
        >
          Time
        </Link>
        <Link
          to="/partner/setting/rooms"
          className="w-fit font-medium bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4"
        >
          Rooms
        </Link>
      </div>
    </div>
  );
};
