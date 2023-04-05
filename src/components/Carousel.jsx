import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";

export const Carousel = ({ slides }) => {
  const [currCrsIndex, setCurrCrsIndex] = useState(0);

  useEffect(() => {
    // console.log("slides1", slides);
    if (slides.length > 0) {
      const interval = setInterval(() => {
        // console.log("slides2", slides);
        setCurrCrsIndex((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
      }, 5000);
      // console.log("slides3", slides);
      return () => clearInterval(interval);
    }
  }, []);

  const prevCrsBtn = () => {
    setCurrCrsIndex(currCrsIndex === 0 ? slides.length - 1 : currCrsIndex - 1);
  };

  const nextCrsBtn = () => {
    setCurrCrsIndex(currCrsIndex === slides.length - 1 ? 0 : currCrsIndex + 1);
  };

  return (
    <div className="w-full h-[400px] relative group mb-8">
      <div
        style={{
          backgroundImage: `url(${slides[currCrsIndex]?.image})`,
        }}
        className="relative w-full h-full rounded-lg bg-center bg-cover duration-500"
      >
        <a
          href={slides[currCrsIndex]?.link}
          target="_blank"
          className="absolute w-full h-full"
        ></a>
        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevCrsBtn} size={30} />
        </div>
        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextCrsBtn} size={30} />
        </div>

        {slides[currCrsIndex]?.name && (
          <div className="absolute w-2/5 h-fit flex justify-center items-center text-white md:text-xl bottom-4 right-4 bg-slate-500/50 rounded-lg p-4">
            {slides[currCrsIndex]?.name}
          </div>
        )}
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides?.map((data, idx) => (
          <div
            key={`dot_${idx}`}
            onClick={() => setCurrCrsIndex(idx)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled
              className={`${
                idx === currCrsIndex ? "text-black scale-150" : "text-gray-400"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
