import React from "react";
import carousalPic1 from "@/assets/images/Co-Working-Space1.jpeg";
import { Link } from "react-router-dom";

export const Branch = () => {
  return (
    <div className="w-full h-full flex justify-center text-font-primary font-prompt text-sm md:mx-auto p-4 pt-20 md:py-20">
      <div className="w-full md:w-3/4 flex flex-col gap-y-8">
        <div className="carousalBlock w-full">
          <img
            src={carousalPic1}
            alt=""
            className="object-cover object-center max-h-[400px] w-full rounded-md"
          />
        </div>
        <div className="branchDetail flex flex-col gap-y-4">
          <div className="bName">
            <h1 className="text-2xl">Too fast too sleep สาขา 1</h1>
          </div>
          <div className="bDetail">
            <p>
              หากใครกำลังหาสถานที่ทำงานหรืออ่านหนังสือ บรรยากาศแบบเงียบสงบ
              ต้องที่นี่เลย “Too Fast To Sleep SCB” ร้านคาเฟ่ และ Co-Working
              Space ที่ไม่ว่าจะดึกแค่ไหนทางร้านก็ยังเปิดต้อนรับเสมอ ด้วยบริการ
              24 ชม. รองรับสายทำงานและสายอ่านหนังสือที่ต้องการสมาธิในยามดึก
              หากใครต้องการความเป็นส่วนตัว ทางร้านมีห้องประชุมใหญ่-เล็ก
              ไว้รับรองการประชุมต่างๆ จะผ่าน Zoom หรือประชุมงานกันในห้องก็ทำได้
              แต่ต้องโทรจองกับทางร้านก่อนนะ แถมถ้าหิวๆ ไม่ต้องไปไหนไกลเลย
              ทางร้านมีเครื่องดื่มและขนมไว้คอยบริการอีกด้วย โทร. 08-6300-9944
              Location : Too Fast to Sleep SCB สาขาสยามสแควร์ ซอย 1 (ชั้น2
              ธนาคารไทยพาณิชย์)
            </p>
          </div>
        </div>

        <div className="branchFacility flex flex-col gap-y-4">
          <div>
            <h1 className="text-xl">Facilities</h1>
          </div>
          <div className="flex flex-wrap gap-2 bg-orange-100 rounded-md p-2 md:p-4">
            <Link
              to="/search/facility/wifi"
              className="bg-orange-200 hover:bg-orange-300 rounded-lg p-2 px-4"
            >
              wifi
            </Link>
            <Link
              to="/search/facility/meeting-room"
              className="bg-orange-200 hover:bg-orange-300 rounded-lg p-2 px-4"
            >
              ห้องประชุม
            </Link>
            <Link
              to="/search/facility/parking"
              className="bg-orange-200 hover:bg-orange-300 rounded-lg p-2 px-4"
            >
              ที่จอดรถ
            </Link>
            <Link
              to="/search/facility/24hours"
              className="bg-orange-200 hover:bg-orange-300 rounded-lg p-2 px-4"
            >
              24ชั่วโมง
            </Link>
          </div>
        </div>
        <div className="btnReserve w-full flex justify-center">
          <Link to="/reserve/1">
            <div className="w-fit font-medium bg-green-300 hover:bg-green-400 text-center rounded-full p-2 px-4">
              จองล่วงหน้า
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
