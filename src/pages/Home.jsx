import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardLink, Carousel } from "../components";
import { FaRegThumbsUp, FaRegClock } from "react-icons/fa";
import axios from "axios";

export const Home = () => {
  const [dataCoWorks, setDataCoWorks] = useState([]);
  const [_tempDataCoWorks, set_TempDataCoWorks] = useState([]);
  const navigate = useNavigate();

  const topics = [
    {
      id: 1,
      name: "รวม 7 ข้อดีของการทำงานที่ Co-Working Space",
      image:
        "https://www.mangozero.com/wp-content/uploads/2017/11/7-benefits-of-co-working-space-featured.jpg",
      link: "https://www.mangozero.com/7-benefits-of-co-working-space/",
    },
  ];

  useEffect(() => {
    const data = "";

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_API_BACKEND}/kowing/getCoworks`,
      // headers: { token: localStorage.getItem("token") },
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        const result = response.data.sort((a, b) => Math.random() - 0.5);
        setDataCoWorks(result);
        const _result = result.sort((a, b) => Math.random() - 0.3);
        set_TempDataCoWorks(_result);
      })
      .catch((error) => {
        // //ลบ token ที่หมดอายุแล้วใน localstorage
        if (error.response.data.isDeleteToken) {
          localStorage.removeItem("token");
          //go back to login page
          navigate("/Login");
        }
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full h-full flex justify-center text-font-primary font-prompt text-sm md:mx-auto p-4 pt-20">
      <div className="w-full lg:w-3/4 flex flex-col gap-y-8">
        <div className="recommendBlock flex flex-col gap-y-2 md:gap-y-4">
          <div className="w-full md:w-fit flex items-center bg-orange-300 rounded-lg p-2 px-4">
            <h1 className="font-medium mr-2">Co-Working แนะนำ</h1>
            <FaRegThumbsUp />
          </div>
          {dataCoWorks.length > 0 && (
            <Carousel
              slides={dataCoWorks?.map((r) => ({
                id: r.id,
                name: r.name,
                image: r.picture,
              }))}
            />
          )}
          <div className="w-full">
            <div className="">
              <div className="flex flex-no-wrap gap-x-2 md:gap-x-5 overflow-x-scroll scrolling-touch items-start pb-4">
                {dataCoWorks?.map((data, idx) => (
                  <CardLink key={`data_${idx}`} data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="allDayAllNightBlock flex flex-col gap-y-2 md:gap-y-4">
          <div className="w-full md:w-fit flex items-center bg-orange-300 rounded-lg p-2 px-4">
            <h1 className="font-medium mr-2">Co-Working เปิด 24 ชั่วโมง</h1>
            <FaRegClock />
          </div>
          <div className="w-full">
            <div className="">
              <div className="flex flex-no-wrap gap-x-2 md:gap-x-5 overflow-x-scroll scrolling-touch items-start pb-4">
                {_tempDataCoWorks?.map((data, idx) => (
                  <CardLink key={`data_${idx}`} data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <Carousel
          slides={topics?.map((r) => ({
            id: r.id,
            name: r.name,
            image: r.image,
            link: r.link,
          }))}
        />
      </div>
    </div>
  );
};
