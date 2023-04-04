import { useState, useEffect, useContext } from "react";
import { ContextUserId } from "@/App.jsx";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { PartnerMainNav } from "../../components";

export const SettingCo = () => {
  const { userId, token } = useContext(ContextUserId);
  const [dataCoWork, setDataCoWork] = useState({
    name: "",
    description: "",
    location: "",
    tel: "",
    picture: "",
  });
  const [dataFacilities, setDataFacilities] = useState([]);
  const [checkedFac, setCheckFac] = useState([]);
  const navigate = useNavigate();

  console.log("userId", userId);

  useEffect(() => {
    getOldData();
  }, [userId]);

  //get old data
  const getOldData = () => {
    const fetchData = () => {
      const data = JSON.stringify({
        userInternalId: userId.userId,
      });
      console.log("data", data);
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_API_BACKEND}/kowing/getCoworkByUserId`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          response.data.coWork != null
            ? setDataCoWork(response.data.coWork)
            : setDataCoWork(dataCoWork);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const getFacilities = () => {
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_API_BACKEND}/kowing/getFacilities`,
        headers: {},
        data: "",
      };

      axios
        .request(config)
        .then((response) => {
          console.log("query facilities", JSON.stringify(response.data));
          setDataFacilities(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
    getFacilities();
  };

  useEffect(() => {
    // setCheckFac(dataCoWork?.FacilityToCoWork?.map((r) => r.facilityId));
    const _temp =
      dataCoWork != null
        ? dataCoWork?.FacilityToCoWork?.map((r) => r.facilityId)
        : [];
    console.log("_temp pull fac", _temp);
    setCheckFac(_temp);
  }, [dataCoWork]);

  //create // update detail
  const submitBtn = (type) => {
    const urlMethod =
      type === "create"
        ? "createCoWorkDetail"
        : type === "update"
        ? "updateCoWorkDetail"
        : "error";

    const data = JSON.stringify({
      coWorkId: type === "update" ? dataCoWork.id : undefined,
      name: dataCoWork.name,
      description: dataCoWork.description,
      location: dataCoWork.location,
      tel: dataCoWork.tel,
      picture: dataCoWork.picture,
      userInternalId: userId.userId,
      facilities: checkedFac,
    });
    console.log("data", data);
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_API_BACKEND}/kowing/${urlMethod}`,
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // getOldData();
        navigate("/partner/main");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateDataFunc = (key, e) => {
    console.log(e.target.value);
    const newData = { ...dataCoWork };
    newData[key] = e.target.value;
    setDataCoWork(newData);
  };

  const updateCheckBox = (id) => {
    console.log("id checkbox", id);
    console.log("checkedFac", checkedFac);
    const _temp =
      checkedFac != undefined
        ? checkedFac.filter((r) => r === id).length > 0
          ? checkedFac.filter((r) => r !== id)
          : [...checkedFac, id]
        : [id];
    console.log("updateCheckBox", _temp);
    setCheckFac(_temp);
  };

  return (
    <div className="w-full h-full flex justify-center text-font-primary font-prompt text-sm md:mx-auto p-4 pt-20">
      <div className="w-full md:w-3/4 flex flex-col gap-y-4">
        <div className="header mb-0 md:mb-8">
          <h1 className="text-2xl text-center">{dataCoWork?.name}</h1>
        </div>
        <PartnerMainNav />
        <div className="flex flex-col gap-y-4 pl-14 md:pl-0">
          <div className="uploadPicBlock flex flex-col gap-y-4 mt-8">
            <div className="flex items-center gap-x-2">
              <label className="font-medium flex-none">
                Your Co-Working Name
              </label>
              <input
                type="text"
                className="border-2 w-full rounded-full p-2 px-4"
                value={dataCoWork?.name}
                onChange={(e) => updateDataFunc("name", e)}
              />
            </div>
          </div>
          <div className="uploadPicBlock flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <label className="font-medium flex-none">Image</label>
              <input
                type="text"
                className="border-2 w-full rounded-full p-2 px-4"
                value={dataCoWork?.picture}
                onChange={(e) => updateDataFunc("picture", e)}
              />
            </div>
            <div className="imageBlock h-[400px]">
              {dataCoWork?.picture !== "" ? (
                <img
                  src={dataCoWork?.picture === "" ? "" : dataCoWork?.picture}
                  alt=""
                  className="w-full h-[400px] object-center object-cover duration-300 rounded-lg"
                />
              ) : (
                <div className="w-full h-[400px] bg-slate-100/50 border-2 border-slate-100 rounded-lg"></div>
              )}
            </div>
          </div>
          <div className="descriptionBlock flex flex-col gap-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-font-primary">
                Add Your Co-Working Space Description
              </label>
              <textarea
                rows="10"
                className="block p-2.5 w-full text-sm text-font-primary bg-orange-100/20 rounded-lg border border-gray-300 "
                placeholder="Write your thoughts here..."
                value={dataCoWork?.description}
                onChange={(e) => updateDataFunc("description", e)}
              ></textarea>
            </div>

            <div className="flex items-center gap-x-2">
              <label className="font-medium">
                Tel Contact: Co-Working Space
              </label>
              <input
                type="text"
                className="border-2 rounded-full p-2 px-4"
                value={dataCoWork?.tel}
                onChange={(e) => updateDataFunc("tel", e)}
              />
            </div>
          </div>
          <div className="detailBlock">
            <p className="font-medium mb-2">Add Your Co-Working Space Detail</p>
            <div className="rounded-lg border bg-orange-100/20 border-gray-300 p-4">
              <div className="mb-2">
                <div className="w-fit font-medium bg-orange-200 rounded-lg p-2 px-4 mb-2">
                  Location
                </div>
                <input
                  type="text"
                  className="w-full border-2 rounded-lg p-2 px-4"
                  value={dataCoWork?.location}
                  onChange={(e) => updateDataFunc("location", e)}
                />
              </div>
              <div className="facilities">
                <div className="w-fit font-medium bg-orange-200 rounded-lg p-2 px-4 mb-2">
                  Facility Lists
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3">
                  {dataFacilities?.map((r, idx) => (
                    <div
                      key={`facCheck_${idx}`}
                      className="flex items-center mb-4"
                    >
                      <input
                        id={`check_${idx}`}
                        type="checkbox"
                        value={r.id}
                        className="w-4 h-4 text-font-primary bg-gray-100 border-gray-300 rounded"
                        checked={checkedFac?.includes(r.id)}
                        onChange={(e) => updateCheckBox(Number(e.target.value))}
                      />
                      <label
                        htmlFor={`check_${idx}`}
                        className="ml-2 text-sm text-font-primary"
                      >
                        {r.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            {dataCoWork?.id === undefined ? (
              <button
                onClick={() => submitBtn("create")}
                className="w-40 font-medium bg-green-300 hover:bg-green-400 duration-300 rounded-full p-2 px-4"
              >
                บันทึก
              </button>
            ) : (
              <button
                onClick={() => submitBtn("update")}
                className="w-40 font-medium bg-green-300 hover:bg-green-400 duration-300 rounded-full p-2 px-4"
              >
                อัพเดต
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
