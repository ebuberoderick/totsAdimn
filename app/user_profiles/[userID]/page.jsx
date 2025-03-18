"use client"
import AppLayout from '@/app/components/layouts/appLayout'
import PostCard from '@/app/components/organisms/PostCard'
import PreferenceChip from '@/app/components/organisms/PreferenceChip'
import { TfiAngleLeft } from "react-icons/tfi";
import React, { useEffect, useState } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { fetchAUser } from '@/app/services/authService';

function Page() {
    const { userID } = useParams()
    const [list, setList] = useState([])
    const router = useRouter()

    console.log(userID);

    const fetchuser = async () => {
        const { status, data } = await fetchAUser({ id: userID })
        if (status) {
            setList(data.data)
        }
    }

    useEffect(() => {
        fetchuser()
    }, [])


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
                            <div className="font-bold">{list[0]?.fname} {list[0]?.lname}</div>
                            <div className="text-gray-400 text-sm">@{list[0]?.username}</div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="font-bold">Description</div>
                        <div className="text-sm">{list[0]?.description}</div>
                    </div>
                    <div className="space-y-3">
                        <div className="font-bold">Preference</div>
                        <div className="flex flex-wrap gap-2">
                            {
                                list[1]?.map((data, i) => (
                                    <PreferenceChip compare={[]} key={i} value={data.name} text={data.name} />
                                ))
                            }
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                <div className="">
                    {
                        list[2]?.data.map((data, i) => (
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