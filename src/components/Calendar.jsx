import { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const Calendar = ({ selectDateTime, setSelectDateTime }) => {
  //day of week and month start index 0
  const [yearData, setYearData] = useState(0);
  const [monthData, setMonthData] = useState(0);
  const [dateData, setDateData] = useState(0);
  const [amountDateThisMonth, setAmountDateThisMonth] = useState(0);
  const [amountDateLastMonth, setAmountDateLastMonth] = useState(0);
  const [dayMonthStart, setDayMonthStart] = useState(0);
  const [calendar, setCalendar] = useState([]);

  const dayString = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
    <div className="cBlock">
      <div className="w-full flex flex-col gap-y-4 bg-orange-100/70 rounded-[15px] shadow-md p-2 md:p-4">
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
            onClick={() => setMonthData(monthData === 1 ? 12 : monthData - 1)}
            className="w-fit bg-orange-300 hover:bg-orange-400 text-white rounded-full cursor-pointer p-2"
          >
            <FaAngleLeft />
          </div>
          <p className="font-medium">{monthString[monthData - 1]}</p>
          <div
            onClick={() => setMonthData(monthData === 12 ? 1 : monthData + 1)}
            className="w-fit bg-orange-300 hover:bg-orange-400 text-white rounded-full cursor-pointer p-2"
          >
            <FaAngleRight />
          </div>
        </div>
        <div className="dayBlock grid grid-cols-7 gap-x-1">
          {dayString.map((day, idx) => (
            <p key={`day_${idx}`} className="text-[0.75rem] text-center">
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
                    r.year >= new Date().getFullYear() &&
                    r.month >= new Date().getMonth() + 1 &&
                    r.date >= new Date().getDate() &&
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
                    } ${
                      r.year >= new Date().getFullYear() &&
                      r.month >= new Date().getMonth() + 1 &&
                      r.date >= new Date().getDate()
                        ? "hover:bg-orange-400/50"
                        : "cursor-not-allowed"
                    } rounded-full p-4`}
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
  );
};
