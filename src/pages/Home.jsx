import React, { useState, useEffect } from "react";
import carousalPic1 from "../assets/images/Co-Working-Space1.jpeg";
import carousalPic2 from "../assets/images/Co-Working-Space2.jpeg";
import carousalPic3 from "../assets/images/Co-Working-Space3.jpeg";
import carousalPic4 from "../assets/images/Co-Working-Space4.jpeg";
import newsPic1 from "../assets/images/Co-Working-Space5.png";
import { Link } from "react-router-dom";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export const Home = () => {
  const [currCrsIndex, setCurrCrsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrCrsIndex((currCrsIndex) => {
        return currCrsIndex === slides.length - 1 ? 0 : currCrsIndex + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1557367184-663fba4b8b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    },
  ];

  const prevCrsBtn = () => {
    setCurrCrsIndex(currCrsIndex === 0 ? slides.length - 1 : currCrsIndex - 1);
  };

  const nextCrsBtn = () => {
    setCurrCrsIndex(currCrsIndex === slides.length - 1 ? 0 : currCrsIndex + 1);
  };

  return (
    <div className="w-full h-full flex justify-center text-font-primary font-prompt text-sm md:mx-auto p-4 py-20">
      <div className="w-full lg:w-3/4 flex flex-col gap-y-8">
        <div className="recommendBlock flex flex-col gap-y-2 md:gap-y-4">
          <div className="w-full md:w-fit bg-orange-300 rounded-lg p-2 px-4">
            <h1 className="font-medium">Co-Working แนะนำ</h1>
          </div>
          <div className="w-full h-[400px] relative group mb-8">
            <div
              style={{ backgroundImage: `url(${slides[currCrsIndex]?.url})` }}
              className="w-full h-full rounded-lg bg-center bg-cover duration-500"
            >
              {/* left arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevCrsBtn} size={30} />
              </div>
              {/* right arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextCrsBtn} size={30} />
              </div>
            </div>
            <div className="flex top-4 justify-center py-2">
              {slides.map((slide, idx) => (
                <div
                  key={`dot_${idx}`}
                  onClick={() => setCurrCrsIndex(idx)}
                  className="text-2xl cursor-pointer"
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
          <div className="listBlock w-full grid grid-cols-4 gap-2 md:gap-4">
            <Link
              to="/branch/1"
              className="cardList w-full bg-orange-100 rounded-md shadow-md transition ease-in-out duration-300 hover:scale-110"
            >
              <img
                src={carousalPic1}
                alt=""
                className="object-cover object-center w-full min-h-[100px] md:min-h-[200px] rounded-t-md"
              />
              <div className="cardDetail text-ellipsis overflow-hidden p-2">
                <p>co-working-1:</p>
                <p>ssssssss</p>
                <p>aaaaaaaaaaaaaa</p>
              </div>
            </Link>
            <div className="cardList w-full bg-orange-100 rounded-md shadow-md transition ease-in-out duration-300 hover:scale-110">
              <img
                src={carousalPic2}
                alt=""
                className="object-cover object-center w-full min-h-[100px] md:min-h-[200px] rounded-t-md"
              />
              <div className="cardDetail text-ellipsis overflow-hidden p-2">
                <p>co-working-1:</p>
                <p>ssssssss</p>
                <p>aaaaaaaaaaaaaa</p>
              </div>
            </div>
            <div className="cardList w-full bg-orange-100 rounded-md shadow-md transition ease-in-out duration-300 hover:scale-110">
              <img
                src={carousalPic3}
                alt=""
                className="object-cover object-center w-full min-h-[100px] md:min-h-[200px] rounded-t-md"
              />
              <div className="cardDetail text-ellipsis overflow-hidden p-2">
                <p>co-working-1:</p>
                <p>ssssssss</p>
                <p>aaaaaaaaaaaaaa</p>
              </div>
            </div>
            <div className="cardList w-full bg-orange-100 rounded-md shadow-md transition ease-in-out duration-300 hover:scale-110">
              <img
                src={carousalPic4}
                alt=""
                className="object-cover object-center w-full min-h-[100px] md:min-h-[200px] rounded-t-md"
              />
              <div className="cardDetail text-ellipsis overflow-hidden p-2">
                <p>co-working-1:</p>
                <p>ssssssss</p>
                <p>aaaaaaaaaaaaaa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="allDayAllNightBlock flex flex-col gap-y-2 md:gap-y-4">
          <div className="w-full md:w-fit bg-orange-300 rounded-lg p-2 px-4">
            <h1 className="font-medium">Co-Working เปิด 24 ชั่วโมง</h1>
          </div>
          <div className="listBlock grid grid-cols-4 gap-2 md:gap-4">
            <div className="cardList w-full bg-orange-100 rounded-md shadow-md transition ease-in-out duration-300 hover:scale-110">
              <img
                src={carousalPic1}
                alt=""
                className="object-cover object-center w-full min-h-[100px] md:min-h-[200px] rounded-t-md"
              />
              <div className="cardDetail text-ellipsis overflow-hidden p-2">
                <p>co-working-1:</p>
                <p>ssssssss</p>
                <p>aaaaaaaaaaaaaa</p>
              </div>
            </div>
            <div className="cardList w-full bg-orange-100 rounded-md shadow-md transition ease-in-out duration-300 hover:scale-110">
              <img
                src={carousalPic2}
                alt=""
                className="object-cover object-center w-full min-h-[100px] md:min-h-[200px] rounded-t-md"
              />
              <div className="cardDetail text-ellipsis overflow-hidden p-2">
                <p>co-working-1:</p>
                <p>ssssssss</p>
                <p>aaaaaaaaaaaaaa</p>
              </div>
            </div>
            <div className="cardList w-full bg-orange-100 rounded-md shadow-md transition ease-in-out duration-300 hover:scale-110">
              <img
                src={carousalPic3}
                alt=""
                className="object-cover object-center w-full min-h-[100px] md:min-h-[200px] rounded-t-md"
              />
              <div className="cardDetail text-ellipsis overflow-hidden p-2">
                <p>co-working-1:</p>
                <p>ssssssss</p>
                <p>aaaaaaaaaaaaaa</p>
              </div>
            </div>
            <div className="cardList w-full bg-orange-100 rounded-md shadow-md transition ease-in-out duration-300 hover:scale-110">
              <img
                src={carousalPic4}
                alt=""
                className="object-cover object-center w-full min-h-[100px] md:min-h-[200px] rounded-t-md"
              />
              <div className="cardDetail text-ellipsis overflow-hidden p-2">
                <p>co-working-1:</p>
                <p>ssssssss</p>
                <p>aaaaaaaaaaaaaa</p>
              </div>
            </div>
          </div>
        </div>

        <Link to="/someWhere" className="newsBlock relative hover:shadow-lg">
          <img
            src={newsPic1}
            alt=""
            className="object-cover object-center w-full min-h-[200px] rounded-lg"
          />
          <div className="absolute w-2/5 h-1/3 flex justify-center items-center text-white text-xl bottom-4 right-4 bg-slate-200/30 rounded-lg p-4">
            7 ข้อดีการใช้ Co-Working Space
          </div>
        </Link>
      </div>
    </div>
  );
};
