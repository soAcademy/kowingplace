import { useEffect, useContext, useState } from "react";
import { ContextUserId } from "../../App";
import axios from "axios";
import { PartnerMainNav, ReserveList } from "../../components";

export const Main = () => {
  const { userId } = useContext(ContextUserId);
  const [dataCoWork, setDataCoWork] = useState({});
  console.log("userId", userId);

  useEffect(() => {
    Object.keys(userId).length > 0 && getData();
  }, [userId]);

  const getData = () => {
    const data = JSON.stringify({
      userId: userId.userId,
    });
    console.log("data", data);
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_API_BACKEND}/kowing/getBookRoomByPartnerId`,
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
