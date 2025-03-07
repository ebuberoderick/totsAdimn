import Image from "next/image";
import React from "react";
import logo from "@assets/image/logo.png"
import { PiSignOutLight } from "react-icons/pi";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import AppLink from "../organisms/AppLink";
import { HiOutlineViewGrid } from "react-icons/hi";
import { LuFileQuestion } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { SignOut } from "@/app/hooks/Auth";
import { useDispatch } from "react-redux";


function SideNav({ user, active }) {
  const dispatch = useDispatch()


  const logout = () => {
    SignOut(dispatch)
  }

  return (
    <>
      <div className="fixed pl-4 bg-gray-50 select-none overflow-y-auto flex flex-col h-screen w-80 gap-y-6 py-8 px-2">
        <div className="text-2xl px-1">
          <Image src={logo} draggable={false} className="pointer-events-none w-16" alt="" />
        </div>
        <AppLink active={active} icon={<HiOutlineViewGrid />} text={"Dashboard"} />
        <div className="">
          <div>Manage Users</div>
          <div>
            <AppLink active={active} icon={<RiGraduationCapLine />} text={"User Profiles"} />
            <AppLink active={active} icon={<RiGraduationCapLine />} text={"Role Management"} />
            <AppLink active={active} icon={<LuFileQuestion />} text={"Activity Logs"} />
            <AppLink active={active} icon={<LuFileQuestion />} text={"Account Suspension/Activation"} />
          </div>
        </div>
        <div className="">
          <div>Manage Contents</div>
          <div>
            <AppLink active={active} icon={<RiGraduationCapLine />} text={"Posts"} />
            <AppLink active={active} icon={<LuFileQuestion />} text={"Forum Management"} />
            <AppLink active={active} icon={<LuFileQuestion />} text={"Report Content Review"} />
          </div>
        </div>
        <div className="">
          <div>Analytics and Reports</div>
          <div>
            <AppLink active={active} icon={<RiGraduationCapLine />} text={"User Engagement Metrics"} />
            <AppLink active={active} icon={<LuFileQuestion />} text={"Content Metrics"} />
            <AppLink active={active} icon={<LuFileQuestion />} text={"Forum Usage Data"} />
          </div>
        </div>
        <div className="">
          <div>System Settings</div>
          <div>
            <AppLink active={active} icon={<LuFileQuestion />} text={"Platform Configuration"} />
          </div>
        </div>
        <div className="">
          <div>Feedback and Support</div>
          <div>
            <AppLink active={active} icon={<RiGraduationCapLine />} text={"User Feedback Management"} />
            <AppLink active={active} icon={<LuFileQuestion />} text={"Support Ticket System"} />
            <AppLink active={active} icon={<LuFileQuestion />} text={"FAQ Updates"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNav;
