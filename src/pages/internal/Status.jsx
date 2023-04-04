import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextUserId } from "../../App";
import { PartnerMainNav, ReserveList } from "../../components";
import axios from "axios";

export const Status = () => {
  const { status } = useParams();
  const [dataCoWork, setDataCoWork] = useState({});
  const { userId } = useContext(ContextUserId);
  console.log("userId", userId);

  useEffect(() => {
    Object.keys(userId).length > 0 && getData();
  }, [userId, status]);

  const getData = () => {
    const data = JSON.stringify({
      userId: userId.userId,
      status: status.toUpperCase(),
      orderBy: "startTime",
      inDeCrease: "asc",
    });
    console.log("submit_data", data);
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_API_BACKEND}/kowing/getReserveByStat`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setDataCoWork(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-full flex justify-center text-font-primary font-prompt text-sm md:mx-auto my-20 p-4">
      <div className="w-full lg:w-10/12 flex flex-col gap-y-8">
        <div className="header">
          <h1 className="text-2xl text-center">{dataCoWork?.coWork?.name}</h1>
        </div>
        <PartnerMainNav />
        <ReserveList getData={getData} dataCoWork={dataCoWork} />
      </div>
    </div>
  );
};
