import React from "react";
import carousalPic1 from "../assets/images/Co-Working-Space1.jpeg";
import carousalPic2 from "../assets/images/Co-Working-Space2.jpeg";
import carousalPic3 from "../assets/images/Co-Working-Space3.jpeg";
import carousalPic4 from "../assets/images/Co-Working-Space4.jpeg";
import newsPic1 from "../assets/images/Co-Working-Space5.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="w-full h-full flex justify-center text-font-primary font-prompt text-sm md:mx-auto p-4 pt-20">
      <div className="w-full md:w-3/4 flex flex-col gap-y-8">
        <div className="recommendBlock flex flex-col gap-y-2 md:gap-y-4">
          <div className="w-full md:w-fit bg-orange-300 rounded-lg p-2 px-4">
            <h1>Co-Working แนะนำ</h1>
          </div>
          <div className="carousalBlock w-full ">
            <img
              src={carousalPic2}
              alt=""
              className="object-cover object-center max-h-[400px] w-full rounded-md"
            />
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
            <h1>Co-Working เปิด 24 ชั่วโมง</h1>
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

        <div className="newsBlock">
          <img
            src={newsPic1}
            alt=""
            className="object-cover object-center w-full min-h-[200px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
