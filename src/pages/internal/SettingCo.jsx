import React from "react";
import headerPic from "@/assets/images/Co-Working-Space4.jpeg";

export const SettingCo = () => {
  return (
    <div className="w-full h-full flex justify-center text-font-primary font-prompt text-sm md:mx-auto p-4 pt-20 md:py-20">
      <div className="w-full md:w-3/4 flex flex-col gap-y-8">
        <div className="uploadPicBlock flex flex-col gap-y-4">
          <div className="imageBlock">
            <img
              src={headerPic}
              alt=""
              className="w-full h-[400px] object-center object-cover rounded-lg"
            />
          </div>
          <div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input
                type="file"
                className="block w-full text-sm text-font-primary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-200 file:text-font-primary hover:file:bg-orange-300"
              />
            </label>
          </div>
        </div>
        <div className="descriptionBlock flex flex-col gap-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-font-primary">
              Add Your Co-Working Space Description
            </label>
            <textarea
              rows="10"
              className="block p-2.5 w-full text-sm text-font-primary bg-orange-100/20 rounded-lg border border-gray-300 "
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>

          <div className="flex items-center gap-x-2">
            <label className="font-medium">Contact: Co-Working Space</label>
            <input type="text" className="border-2 rounded-full p-2 px-4" />
          </div>
        </div>
        <div className="detailBlock">
          <p className="font-medium mb-2">Add Your Co-Working Space Detail</p>
          <div className="rounded-lg border bg-orange-100/20 border-gray-300 p-4">
            <div className="mb-2">
              <div className="w-fit font-medium bg-orange-200 rounded-lg p-2 px-4 mb-2">
                Location
              </div>
              <input
                type="text"
                className="w-full border-2 rounded-lg p-2 px-4"
              />
            </div>
            <div className="facilities">
              <div className="w-fit font-medium bg-orange-200 rounded-lg p-2 px-4 mb-2">
                Facility Lists
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3">
                {[...Array(8)].map((r, idx) => (
                  <div
                    key={`dicCheck_${idx}`}
                    className="flex items-center mb-4"
                  >
                    <input
                      id={`check_${idx}`}
                      type="checkbox"
                      value={idx}
                      className="w-4 h-4 text-font-primary bg-gray-100 border-gray-300 rounded "
                    />
                    <label
                      htmlFor={`check_${idx}`}
                      className="ml-2 text-sm text-font-primary"
                    >
                      checkbox_{idx}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="w-fit font-medium bg-green-300 hover:bg-green-400 rounded-full p-2 px-4">
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
};
