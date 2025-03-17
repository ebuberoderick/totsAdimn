"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { Session } from "@/app/hooks/Auth";
import SideNav from "../molecules/SideNav";
import { TfiAngleDown } from "react-icons/tfi";
import { FaRegBell } from "react-icons/fa";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import Image from "next/image";

function AppLayout({ children, title, active, subtext }) {
  const user = useSelector((state) => state.User);
  const isAuthenticated = Session(user);
  const [greetings, setGreetings] = useState("")
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowNav(false)
    })
    var today = new Date()
    var curHr = today.getHours()
    if (curHr < 12) {
      setGreetings('Morning')
    } else if (curHr < 18) {
      setGreetings('Afternoon')
    } else {
      setGreetings('Evening')
    }
    
  }, [])

  function Header() {
    return (
      <div className="">
        <div className="lg:text-xl text-green font-bold">{title}</div>
      </div>
    )
  }

  if (isAuthenticated.status === "unauthenticated") {
    router.push("/auth/login");
  } else {
    return (
      <>
        <div className={`z-50 transition-all ${showNav ? "left-0" : "-left-80 md:left-0"} duration-300  relative`}>
          <SideNav user={user} active={active} />
        </div>
        <div className={`p-4 pb-8 md:ml-80 bg-cream relative space-y-5 transition-all duration-300 select-none min-h-screen`}>
          <div className="flex w-full gap-5 items-center">
            <div className="flex-grow">
              <div onClick={() => setShowNav(!showNav)} className="h-8 w-8 md:hidden rounded-md text-xl flex items-center justify-center cursor-pointer">
                <HiOutlineBars3CenterLeft />
              </div>
              <div className="hidden md:block"> <Header /></div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="text-xl"><FaRegBell /></div>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gray-50">
                  <Image src={user?.value?.user?.avatar} width={100} height={100} alt="" className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <div className="font-bold text-xs">{user?.value?.user?.fname} {user?.value?.user?.lname}</div>
                  <div className="text-xs">Admin</div>
                </div>
                <TfiAngleDown />
              </div>
            </div>
          </div>
          <div className="md:hidden"><Header /></div>
          {children}
        </div>
      </>
    );
  }
}

export default AppLayout;
