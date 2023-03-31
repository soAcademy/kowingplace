import React from "react";
import { Link } from "react-router-dom";

export const Welcome = () => {
  return (
    <div className="w-full h-screen flex justify-center text-font-primary font-prompt text-sm md:mx-auto p-4 pt-20">
      <div className="w-full md:w-3/4 flex flex-col gap-y-8">
        <div
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')`,
          }}
          className="w-full h-2/3 bg-cover bg-center transition duration-300"
        >
          <div className="bg-white/20 p-8">
            <p className="text-white text-xl mb-4">
              ลงทะเบียนกับเรา เพื่อให้ร้านของคุณเป็นที่รู้จักมากยิ่งขึ้น
            </p>
            <Link to="/partner/signup">
              <div className="w-fit bg-orange-300 font-medium hover:bg-orange-400 rounded-lg p-2 px-4">
                ลงทะเบียน
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-1/3 flex justify-center items-center">
          <Link to="/login/internal">
            <div className="bg-green-300 font-medium hover:bg-green-400 rounded-full p-2 px-4">
              เข้าสู่ระบบ พาร์ทเนอร์
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
