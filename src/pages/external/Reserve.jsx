import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const Reserve = () => {
  //day of week and month start index 0
  const [yearData, setYearData] = useState(0);
  const [monthData, setMonthData] = useState(0);
  const [dateData, setDateData] = useState(0);
  const [amountDateThisMonth, setAmountDateThisMonth] = useState(0);
  const [amountDateLastMonth, setAmountDateLastMonth] = useState(0);
  const [dayMonthStart, setDayMonthStart] = useState(0);
  const [calendar, setCalendar] = useState([]);
  const [selectDateTime, setSelectDateTime] = useState({
    year: 0,
    month: 0,
    date: 0,
    day: 0,
    key: 0,
  });
  const [tabSelect, setTabSelect] = useState("room");

  const dayString = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const monthString = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    setYearData(new Date().getFullYear());
    setMonthData(new Date().getMonth() + 1);
    setDateData(new Date().getDate());
  }, []);

  useEffect(() => {
    if (monthData !== 0 && yearData !== 0) {
      setAmountDateThisMonth(new Date(yearData, monthData, 0).getDate());
      setAmountDateLastMonth(
        new Date(
          monthData === 1 ? yearData - 1 : yearData,
          monthData === 1 ? 12 : monthData - 1,
          0
        ).getDate()
      );
      setDayMonthStart(new Date(`${yearData}-${monthData}-01`).getDay() + 1);
    }
  }, [monthData, yearData]);

  useEffect(() => {
    if (amountDateLastMonth !== 0 && amountDateThisMonth !== 0) {
      const calendar = Object.keys([
        ...Array(dayMonthStart > 5 ? 6 * 7 : 5 * 7),
      ]).map((key) => {
        const newKey = Number(key);
        let dateCalendar = 0;
        let dayCalendar = 0;
        let monthCalendar = 0;
        let yearCalendar = 0;

        const commute = amountDateLastMonth - dayMonthStart + newKey + 1 + 1;

        //next month
        if (commute > amountDateLastMonth) {
          if (commute > amountDateLastMonth + amountDateThisMonth) {
            dateCalendar =
              commute - (amountDateLastMonth + amountDateThisMonth);
            dayCalendar =
              new Date(
                `${monthData === 12 ? yearData + 1 : yearData}-${
                  monthData === 12 ? 1 : monthData + 1
                }-${dateCalendar}`
              ).getDay() + 1;
            monthCalendar = monthData + 1;
            yearCalendar = monthData === 12 ? yearData + 1 : yearData;

            //curr month
          } else {
            dateCalendar = commute - amountDateLastMonth;
            dayCalendar =
              new Date(`${yearData}-${monthData}-${dateCalendar}`).getDay() + 1;
            monthCalendar = monthData;
            yearCalendar = yearData;
          }

          //prev month
        } else {
          dateCalendar = commute;
          dayCalendar =
            new Date(
              `${monthData === 1 ? yearData - 1 : yearData}-${
                monthData === 1 ? 12 : monthData - 1
              }-${dateCalendar}`
            ).getDay() + 1;
          monthCalendar = monthData - 1;
          yearCalendar = monthData === 1 ? yearData - 1 : yearData;
        }

        return {
          key: newKey,
          day: dayCalendar,
          date: dateCalendar,
          month: monthCalendar,
          year: yearCalendar,
        };
      });
      // console.log(calendar, calendar);
      setCalendar(calendar);
    }
  }, [amountDateLastMonth, amountDateThisMonth]);

  // console.log(
  //   yearData,
  //   monthData,
  //   dateData,
  //   amountDateLastMonth,
  //   amountDateThisMonth,
  //   dayMonthStart
  // );

  return (
    <div className="relative w-full flex justify-center text-font-primary font-prompt text-sm md:mx-auto p-4 pt-20">
      <div className="w-full lg:w-3/4 flex justify-center items-center gap-y-8">
        <div className="mainBlock w-full flex flex-col md:flex-row gap-4">
          <div className="calendarBlock w-full md:w-7/12 flex flex-col gap-4">
            <div>
              <h1 className="text-2xl">Too fast too sleep สาขา 1 </h1>
            </div>
            <div className="cBlock">
              <div className="w-full flex flex-col gap-y-4 bg-orange-100 rounded-[15px] p-2 md:p-4">
                <div className="yearBlock flex justify-between items-center">
                  <div
                    onClick={() => setYearData(yearData - 1)}
                    className="w-fit bg-orange-300 hover:bg-orange-400 text-white rounded-full cursor-pointer p-2"
                  >
                    <FaAngleLeft />
                  </div>
                  <p className="font-medium">{yearData}</p>
                  <div
                    onClick={() => setYearData(yearData + 1)}
                    className="w-fit bg-orange-300 hover:bg-orange-400 text-white rounded-full cursor-pointer p-2"
                  >
                    <FaAngleRight />
                  </div>
                </div>
                <div className="monthBlock flex justify-between items-center">
                  <div
                    onClick={() =>
                      setMonthData(monthData === 1 ? 12 : monthData - 1)
                    }
                    className="w-fit bg-orange-300 hover:bg-orange-400 text-white rounded-full cursor-pointer p-2"
                  >
                    <FaAngleLeft />
                  </div>
                  <p className="font-medium">{monthString[monthData - 1]}</p>
                  <div
                    onClick={() =>
                      setMonthData(monthData === 12 ? 1 : monthData + 1)
                    }
                    className="w-fit bg-orange-300 hover:bg-orange-400 text-white rounded-full cursor-pointer p-2"
                  >
                    <FaAngleRight />
                  </div>
                </div>
                <div className="dayBlock grid grid-cols-7 gap-x-1">
                  {dayString.map((day, idx) => (
                    <p
                      key={`day_${idx}`}
                      className="text-[0.75rem] text-center"
                    >
                      {day}
                    </p>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-x-1 gap-y-6">
                  {calendar.map((r, idx) => (
                    <div
                      key={`key_${idx}`}
                      className="w-full flex justify-center items-center"
                    >
                      {r.month === monthData && (
                        <button
                          onClick={() =>
                            setSelectDateTime({
                              year: r.year,
                              month: r.month,
                              date: r.date,
                              day: r.day,
                              key: r.key,
                            })
                          }
                        >
                          <div
                            className={`w-12 h-12 flex justify-center items-center ${
                              selectDateTime.date === r.date &&
                              selectDateTime.month === r.month &&
                              selectDateTime.year === r.year
                                ? "bg-orange-400/50 border-2 border-orange-500"
                                : new Date().getDate() === r.date &&
                                  new Date().getMonth() + 1 === r.month &&
                                  new Date().getFullYear() === r.year
                                ? "bg-orange-400/40"
                                : "bg-orange-300/30"
                            } hover:bg-orange-400/50 rounded-full p-4`}
                          >
                            {r.date}
                          </div>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="detailBlock w-full md:w-5/12 flex flex-col gap-2">
            <div className="flex gap-x-2">
              <button
                onClick={() => setTabSelect("room")}
                className="w-fit bg-gray-400 hover:bg-gray-500 text-white rounded-full p-2 px-4"
              >
                <h1 className="">เลือกห้องประชุม</h1>
              </button>
              <button
                onClick={() => setTabSelect("time")}
                className="w-fit bg-gray-400 hover:bg-gray-500 text-white rounded-full p-2 px-4"
              >
                <h1 className="">เลือกเวลา</h1>
              </button>
            </div>
            {tabSelect === "room" && (
              <div className="h-full border-2 rounded-lg p-4">
                <div className="text-center mb-4">
                  <p>กรุณาเลือกห้องประชุมที่ต้องการ</p>
                </div>
                <div className="roomList flex md:max-h-[400px] flex-col gap-y-4 overflow-y-auto">
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน
                  </button>
                  <button className="w-full bg-orange-200 hover:bg-orange-300 rounded-full p-2 px-4">
                    ห้องประชุม 1, 8 คน
                  </button>
                </div>
              </div>
            )}

            {tabSelect === "time" && (
              <div className="h-full border-2 rounded-lg p-4">
                <div className="text-center mb-4">
                  <p>กรุณาเลือกเวลาที่ต้องการ</p>
                </div>
                <div className="roomList flex  md:max-h-[400px] flex-col gap-y-4 overflow-y-auto">
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

      {false && (
        <div className="popUp fixed w-full h-full top-0 left-0 flex justify-center items-center bg-slate-900/50 p-4">
          {false && (
            <div className="md:w-2/5 md:h-2/5 flex flex-col gap-y-4 bg-white rounded-lg p-8">
              <h1 className="text-2xl text-center">
                Too fast too sleep สาขา 1
              </h1>
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

          {false && (
            <div className="md:w-2/5 md:h-2/5 flex flex-col gap-y-4 bg-white rounded-lg p-8">
              <h1 className="text-2xl text-center">
                Too fast too sleep สาขา 1
              </h1>
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
      )}
    </div>
  );
};
