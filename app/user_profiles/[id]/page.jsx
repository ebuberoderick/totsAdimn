"use client"
import AppLayout from '@/app/components/layouts/appLayout'
import PostCard from '@/app/components/organisms/PostCard'
import PreferenceChip from '@/app/components/organisms/PreferenceChip'
import { TfiAngleLeft } from "react-icons/tfi";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

function Page() {
    const [list, setList] = useState([{ label: "All", value: "all" }, { label: "Active", value: "active" }, { label: "Inactive", value: "inactive" }, { label: "All", value: "all" }, { label: "Active", value: "active" }, { label: "Inactive", value: "inactive" }, { label: "All", value: "all" }, { label: "Active", value: "active" }, { label: "Inactive", value: "inactive" }])
    const router = useRouter()


    return (
        <AppLayout active={"User Profiles"} title={"User Profiles"}>
            <div className="sm:flex space-y-4 sm:space-y-0 items-center justify-between">
                <div className="">
                    <div onClick={() => router.back()} className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-md border border-gray-200"><TfiAngleLeft /></div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="px-6 py-2 text-xs sm:text-sm rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100">Personal Data</div>
                    <div className="px-6 py-2 text-xs sm:text-sm rounded-md cursor-pointer bg-blue/80 hover:bg-blue text-white">Suspend Account</div>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
                <div className="space-y-4">
                    <div className="w-44 mx-auto md:mx-0 space-y-3">
                        <div>
                            <div className="w-44 h-44 rounded-full">
                                <img src={`https://randomuser.me/api/portraits/women/2.jpg`} alt={`user.name`} className="w-full h-full rounded-full" />
                            </div>
                        </div>
                        <div className="text-center leading-3">
                            <div className="font-bold">Ebube Onyemzoro</div>
                            <div className="text-gray-400 text-sm">@bube</div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="font-bold">Preference</div>
                        <div className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempore delectus quae sunt maiores! Odio quaerat illo expedita consequuntur unde placeat! Fugiat ducimus itaque, veniam libero perferendis velit odit ut?
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="font-bold">Preference</div>
                        <div className="flex flex-wrap gap-2">
                            {
                                list?.map((data, i) => (
                                    <PreferenceChip compare={list} key={i} value={data.value} text={data.label} />
                                ))
                            }
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                <div className="">
                    {
                        ["", "", "", "", "", ""].map((data, i) => (
                            <PostCard key={i} />
                        ))
                    }
                </div>
                <div className="lg:col-span-2 sticky bottom-0 xl:col-span-1">
                    <div className="max-h-screen h-full w-full rounded-lg border border-gray-100">
                        <div className="text-gray-300 flex items-center justify-center h-full text-sm text-center px-12">No comment opened yet, click on any comment icon to display here</div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Page