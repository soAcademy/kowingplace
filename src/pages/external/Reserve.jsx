import React from "react";
import { Link } from "react-router-dom";

export const Reserve = () => {
  return (
    <div className="relative w-full md:h-screen flex justify-center text-font-primary font-prompt text-sm md:mx-auto p-4 pt-20 md:pt-4">
      <div className="w-full md:w-3/4 flex justify-center items-center gap-y-8">
        <div className="mainBlock w-full flex flex-col md:flex-row gap-4">
          <div className="calendarBlock w-full md:w-7/12 flex flex-col gap-4">
            <div>
              <h1 className="text-2xl">Too fast too sleep สาขา 1 </h1>
            </div>
            <div className="cBlock">
              <div className="w-full bg-orange-100 rounded-[30px] grid grid-cols-7 gap-x-1 gap-y-8 p-2 md:p-4">
                {[...Array(31)].map((r, idx) => (
                  <div
                    key={`date_${idx}`}
                    className="w-full flex justify-center items-center"
                  >
                    <Link>
                      <div className="w-12 h-12 flex justify-center items-center bg-gray-300 hover:bg-gray-400 rounded-full p-4">
                        {idx + 1}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="detailBlock w-full md:w-5/12 flex flex-col gap-2">
            <div className="flex gap-x-2">
              <button className="w-fit bg-gray-400 hover:bg-gray-500 text-white rounded-full p-2 px-4">
                <h1 className="text-lg">เลือกห้องประชุม</h1>
              </button>
              <button className="w-fit bg-gray-400 hover:bg-gray-500 text-white rounded-full p-2 px-4">
                <h1 className="text-lg">เลือกเวลา</h1>
              </button>
            </div>
            {false && (
              <div className="h-full border-2 rounded-lg p-4">
                <div className="text-center mb-4">
                  <p>กรุณาเลือกห้องประชุมที่ต้องการ</p>
                </div>
                <div className="roomList h-[300px] flex  flex-col gap-y-4 overflow-y-auto">
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน, ราคา 800 บาท/ชม.
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน, ราคา 800 บาท/ชม.
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน, ราคา 800 บาท/ชม.
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน, ราคา 800 บาท/ชม.
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน, ราคา 800 บาท/ชม.
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน, ราคา 800 บาท/ชม.
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน, ราคา 800 บาท/ชม.
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน, ราคา 800 บาท/ชม.
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน, ราคา 800 บาท/ชม.
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน, ราคา 800 บาท/ชม.
                  </button>
                </div>
              </div>
            )}

            {true && (
              <div className="h-full border-2 rounded-lg p-4">
                <div className="text-center mb-4">
                  <p>กรุณาเลือกเวลาที่ต้องการ</p>
                </div>
                <div className="roomList h-[300px] flex  flex-col gap-y-4 overflow-y-auto">
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    8:00 - 9:00
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    9:00 - 10:00
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    10:00 - 11:00
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    11:00 - 12:00
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    12:00 - 13:00
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    13:00 - 14:00
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    14:00 - 15:00
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    15:00 - 16:00
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="popUp fixed w-full h-full top-0 left-0 flex justify-center items-center bg-slate-900/50 p-4">
        {false && (
          <div className="md:w-2/5 md:h-2/5 flex flex-col gap-y-4 bg-white rounded-lg p-8">
            <h1 className="text-2xl text-center">Too fast too sleep สาขา 1</h1>
            <div className="w-full flex justify-center">
              <div className="w-fit flex flex-col gap-y-2">
                <h1 className="text-xl">คุณเลือก ห้องประชุม 1</h1>
                <p>วันที่ 1 january 2023 เวลา 09.00</p>
                <p>รูปแบบการจอง : ครึ่งวัน </p>
                <p>ราคา : 450 บาท </p>
              </div>
            </div>
            <button className="w-full bg-green-300 hover:bg-green-400 rounded-full p-2 px-4">
              ยืนยันการจอง
            </button>
          </div>
        )}

        {true && (
          <div className="md:w-2/5 md:h-2/5 flex flex-col gap-y-4 bg-white rounded-lg p-8">
            <h1 className="text-2xl text-center">Too fast too sleep สาขา 1</h1>
            <div className="w-full flex justify-center">
              <div className="w-fit flex flex-col gap-y-2">
                <h1 className="text-xl text-center text-green-400">
                  ระบบได้ทำการยืนยันการจองสำเร็จ
                </h1>
                <p>
                  กรุณาแสดงรหัส 01212123 ณ เคาท์เตอร์ที่ให้บริการ
                  พร้อมชำระเงินที่ร้านค้า
                </p>
              </div>
            </div>
            <p className="h-full flex items-end justify-end">
              Kowing Place ยินดีให้บริการ
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
