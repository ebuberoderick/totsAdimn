"use client"
import AppLayout from '@/app/components/layouts/appLayout'
import PostCard from '@/app/components/organisms/PostCard'
import PreferenceChip from '@/app/components/organisms/PreferenceChip'
import Image from 'next/image'
import React, { useState } from 'react'

function Page() {
    const [list, setList] = useState([{ label: "All", value: "all" }, { label: "Active", value: "active" }, { label: "Inactive", value: "inactive" }, { label: "All", value: "all" }, { label: "Active", value: "active" }, { label: "Inactive", value: "inactive" }, { label: "All", value: "all" }, { label: "Active", value: "active" }, { label: "Inactive", value: "inactive" }])

    return (
        <AppLayout active={"User Profiles"} title={"User Profiles"}>
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