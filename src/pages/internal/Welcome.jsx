import React from "react";
import { Link } from "react-router-dom";
import registerPic from "@/assets/images/register.jpg";

export const Welcome = () => {
  return (
    <div className="w-full h-screen flex justify-center text-font-primary font-prompt text-sm md:mx-auto p-4 pt-20">
      <div className="w-full md:w-3/4 flex flex-col gap-y-8">
        <div
          style={{ backgroundImage: `url(${registerPic})` }}
          className="w-full h-2/3 bg-cover bg-center"
        >
          <div className="bg-gray-800/50 p-8">
            <p className="text-white text-xl mb-4">
              ลงทะเบียนกับเรา เพื่อให้ร้านของคุณเป็นที่รู้จักมากยิ่งขึ้น
            </p>
            <Link to="/partner/signup">
              <div className="w-fit bg-orange-300 hover:bg-orange-400 rounded-lg p-2 px-4">
                ลงทะเบียน
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-1/3 flex justify-center items-center">
          <Link to='/login'>
            <div className="bg-green-300 hover:bg-green-400 rounded-full p-2 px-4">เข้าสู่ระบบ พาร์ทเนอร์</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
