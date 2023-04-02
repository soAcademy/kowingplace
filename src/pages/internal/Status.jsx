import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextUserId } from "../../App";
import { PartnerMainNav } from "../../components";
import axios from "axios";

export const Status = () => {
  const { status } = useParams();
  const [dataCoWork, setDataCoWork] = useState({});
  const { userId } = useContext(ContextUserId);
  console.log("userId", userId);

  useEffect(() => {
    const getData = () => {
      const data = JSON.stringify({
        userId: 27,
        status: status.toUpperCase(),
      });

      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${
          import.meta.env.VITE_API_BACKEND
        }/kowing/getBookRoomByPartnerId`,
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

    Object.keys(userId).length > 0 && getData();
  }, [userId, status]);

  return (
    <div className="w-full h-full flex justify-center text-font-primary font-prompt text-sm md:mx-auto p-4 pt-20 md:py-20">
      <div className="w-full md:w-3/4 flex flex-col gap-y-8">
        <div className="header">
          <h1 className="text-2xl text-center">{dataCoWork?.coWork?.name}</h1>
        </div>
        <PartnerMainNav />
        <div className="listQuery">
          {dataCoWork?.coWork?.bookRoom?.map((bookRoom, idx) => (
            <div
              key={`room_${idx + 1}`}
              className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-2 bg-orange-100/20 transition ease-in-out delay-50 hover:scale-105 duration-200 items-center border-2 border-l-4 border-l-green-400 rounded-lg shadow-md p-2 md:p-4 mb-4"
            >
              <div className="">
                <p>{bookRoom.roomRate.room.name}</p>
              </div>
              <div className="">
                <p>{bookRoom.UserExternal.name}</p>
              </div>
              <div className="text-right">
                <p>{new Date(bookRoom.startTime).toDateString()}</p>
              </div>
              <div className="text-center">
                <p>
                  {new Date(bookRoom.startTime)
                    .toLocaleTimeString("TH-th")
                    .substring(0, 5)}
                </p>
              </div>
              <div className="">
                <p>{bookRoom.roomRate.duration.duration} hr(s).</p>
              </div>
              <div className="">
                <p>{bookRoom.vertifyCode.verifyCode}</p>
              </div>
              <div className="text-center">
                <p
                  className={`${
                    status === "pending"
                      ? "text-orange-300"
                      : status === "on_going"
                      ? "text-green-500"
                      : "text-slate-500"
                  } font-medium`}
                >
                  {bookRoom.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
