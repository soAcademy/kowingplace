import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaMapMarker, FaPhoneAlt } from "react-icons/fa";

export const Branch = () => {
  const { branchId } = useParams();
  const [dataCoWork, setDataCoWork] = useState({});

  useEffect(() => {
    const data = JSON.stringify({
      id: Number(branchId),
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:7470/kowing/getCoWorkUserChoose",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        setDataCoWork(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const branchData = {
    facilities: [
      { id: 1, name: "wifi" },
      { id: 2, name: "ห้องประชุม" },
      { id: 3, name: "ที่จอดรถ" },
      { id: 4, name: "24ชั่วโมง" },
    ],
  };

  return (
    <div className="w-full h-full flex justify-center text-font-primary font-prompt text-sm md:mx-auto p-4 pt-20">
      <div className="w-full md:w-3/4 flex flex-col gap-y-8">
        <div className="w-full h-[400px]">
          <img
            src={dataCoWork.picture}
            alt=""
            className="object-cover object-center max-h-[400px] w-full transition duration-300 rounded-md"
          />
        </div>
        <div className="branchDetail flex flex-col gap-y-4">
          <div className="bName">
            <h1 className="text-2xl">{dataCoWork.name}</h1>
          </div>
          <div className="bDetail">
            <p>{dataCoWork.description}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <FaMapMarker size={15} className="text-red-400" />
            <p>{dataCoWork.location}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <FaPhoneAlt size={15} className="text-orange-400" />
            <p>{dataCoWork.tel}</p>
          </div>
        </div>

        <div className="branchFacility flex flex-col gap-y-4">
          <div>
            <h1 className="text-xl">สิ่งอำนวยความสะดวก</h1>
          </div>
          <div className="flex flex-wrap gap-2 bg-orange-100 rounded-md p-2 md:p-4">
            {branchData.facilities.map((facility, idx) => (
              <Link
                key={`facirity_${idx}`}
                to={`/search/facility/${facility.id}`}
                className="bg-orange-200 hover:bg-orange-300 rounded-lg p-2 px-4"
              >
                {facility.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="btnReserve w-full flex justify-center">
          <Link to={`/reserve/${dataCoWork.id}`}>
            <div className="w-40 duration-300 font-medium bg-green-300 hover:bg-green-400 text-center rounded-full p-2 px-4">
              จองล่วงหน้า
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
