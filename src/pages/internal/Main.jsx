import React from "react";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <div className="w-full h-full flex justify-center text-font-primary font-prompt text-sm md:mx-auto p-4 pt-20 md:py-20">
      <div className="w-full md:w-3/4 flex flex-col gap-y-8">
        <div className="header">
          <h1 className="text-2xl text-center">Too fast too sleep Shop</h1>
        </div>
        <div className="btnSetting flex justify-end items-center gap-x-2">
          <p>Setting:</p>
          <Link to='/partner/setting/coworkingspace' className="w-fit font-medium bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
            Co-Working Space
          </Link>
          <Link to='/partner/setting/rooms' className="w-fit font-medium bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
            Rooms
          </Link>
        </div>
        <div className="listQuery">
          {[...Array(10)].map((r, idx) => (
            <div
              key={`room_${idx + 1}`}
              className="flex justify-between bg-orange-100/20 transition ease-in-out delay-50 hover:scale-105 duration-200 items-center border-2 border-l-4 border-l-green-400 rounded-lg shadow-md p-2 md:p-4 mb-4"
            >
              <div className="w-1/3 md:w-3/12">
                <p>ห้องประชุม {idx + 1}</p>
              </div>
              <div className="hidden md:block w-3/12">
                <p>User Booking</p>
              </div>
              <div className="w-1/3 md:w-3/12">
                <p>09:00 / 3 hrs</p>
              </div>
              <div className="w-1/3 md:w-3/12">
                <p>On Going</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
