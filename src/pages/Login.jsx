import React from "react";

export const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center text-font-primary font-prompt text-sm md:mx-auto p-4 pt-20">
      <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center p-4">
        <div className="md:w-2/5 md:h-3/5 flex flex-col gap-y-4 bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl text-center">LOGIN</h1>
          <div className="flex items-center gap-x-2">
            <label className="w-1/5">E-mail</label>
            <input
              type="email"
              className="w-4/5 border-2 rounded-full p-2 px-4"
            />
          </div>
          <div className="flex items-center gap-x-2">
            <label className="w-1/5">Password</label>
            <input
              type="password"
              className="w-4/5 border-2 rounded-full p-2 px-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
