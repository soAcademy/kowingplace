import React from "react";

export const SettingRoom = () => {
  return (
    <div className="w-full h-full flex justify-center text-font-primary font-prompt text-sm md:mx-auto p-4 pt-20 md:py-20">
      <div className="w-full md:w-3/4 flex flex-col gap-y-8">
        <div className="header">
          <h1 className="text-2xl text-center">Too fast too sleep Shop</h1>
        </div>
        <div className="createBtn">
          <button className="w-fit font-medium bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
            Create Room +
          </button>
        </div>
        <div className="newRoom grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((r, idx) => (
            <div
              key={`newRoom_${idx}`}
              className="flex flex-col gap-y-4 bg-orange-100/20 border-2 rounded-lg p-4"
            >
              <div className="">
                <div className="w-fit font-medium mb-2">ระบุชื่อห้องประชุม</div>
                <input
                  type="text"
                  className="w-full border-2 rounded-lg p-2 px-4"
                />
              </div>
              <div className="flex items-center">
                <p className="font-medium">จำนวนลูกค้าที่รองรับได้</p>
                <input
                  type="number"
                  className="w-1/5 border-2 rounded-lg p-2 px-4 ml-2"
                />
              </div>
              <div className="flex items-center">
                <p className="font-medium">กำหนดราคา</p>
              </div>
              <div className="priceBlock">
                <div className="flex flex-col gap-y-2 border-2 rounded-lg p-4">
                  <div className="flex justify-between items-center gap-x-2">
                    <input
                      type="checkbox"
                      id="time_1"
                      className="w-4 h-4 text-font-primary bg-gray-100 border-gray-300 rounded "
                    />
                    <p className="w-1/2 ">ระยะเวลา 1 ชั่วโมง</p>
                    <p>ราคา</p>
                    <input
                      type="number"
                      className="w-3/12 border-2 rounded-lg p-2 px-4 ml-2"
                    />
                    <p>บาท</p>
                  </div>
                  <div className="flex justify-between items-center gap-x-2">
                    <input
                      type="checkbox"
                      id="time_3"
                      className="w-4 h-4 text-font-primary bg-gray-100 border-gray-300 rounded "
                    />
                    <p className="w-1/2 ">ระยะเวลา 3 ชั่วโมง</p>
                    <p>ราคา</p>
                    <input
                      type="number"
                      className="w-3/12 border-2 rounded-lg p-2 px-4 ml-2"
                    />
                    <p className="">บาท</p>
                  </div>
                  <div className="flex justify-between items-center gap-x-2">
                    <input
                      type="checkbox"
                      id="time_6"
                      className="w-4 h-4 text-font-primary bg-gray-100 border-gray-300 rounded "
                    />
                    <p className="w-1/2 ">ระยะเวลา 6 ชั่วโมง</p>
                    <p>ราคา</p>
                    <input
                      type="number"
                      className="w-3/12 border-2 rounded-lg p-2 px-4 ml-2"
                    />
                    <p className="">บาท</p>
                  </div>
                  <div className="flex justify-between items-center gap-x-2">
                    <input
                      type="checkbox"
                      id="time_all"
                      className="w-4 h-4 text-font-primary bg-gray-100 border-gray-300 rounded "
                    />
                    <p className="w-1/2">ระยะเวลา เต็มวัน</p>
                    <p>ราคา</p>
                    <input
                      type="number"
                      className="w-3/12 border-2 rounded-lg p-2 px-4 ml-2"
                    />
                    <p className="">บาท</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="bg-red-300 font-medium hover:bg-red-400 rounded-full p-2 px-4">
                  ลบห้อง
                </button>
                <button className="bg-green-300 font-medium hover:bg-green-400 rounded-full p-2 px-4">
                  บันทึก
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
