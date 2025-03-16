"use client"
import React, { useState } from 'react'
import AppLayout from '../components/layouts/appLayout'
import PostReport from '../components/organisms/PostReport'

function Page() {

    const [active, setActive] = useState("post")


    const posts = [
        {
            id: 76504,
            name: "Emily Selman",
            email: "jerome@gmail.com",
            status: "Active",
            lastLogin: "2024-12-09 10:00:00",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg", // Example avatar
        },
        {
            id: 76504,
            name: "Cameron Williamson",
            email: "alvia@email.com",
            status: "Active",
            lastLogin: "2024-12-09 10:00:00",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        },
    ];

    return (
        <AppLayout active={"Report Content Review"} title={"Report Content Review"}>
            <div className="flex items-center gap-3">
                <div onClick={() => setActive("post")} className={`px-6 py-2 text-xs sm:text-sm rounded-md cursor-pointer ${active === "post" ? " bg-blue/80 hover:bg-blue text-white" : "bg-gray-50 hover:bg-gray-100"}`}>Post</div>
                <div onClick={() => setActive("group")} className={`px-6 py-2 text-xs sm:text-sm rounded-md cursor-pointer ${active === "group" ? " bg-blue/80 hover:bg-blue text-white" : "bg-gray-50 hover:bg-gray-100"}`}>Group</div>
                <div onClick={() => setActive("user")} className={`px-6 py-2 text-xs sm:text-sm rounded-md cursor-pointer ${active === "user" ? " bg-blue/80 hover:bg-blue text-white" : "bg-gray-50 hover:bg-gray-100"}`}>User</div>
            </div>
            <div className="">
                <PostReport posts={posts} />
            </div>
        </AppLayout>
    )
}

export default Page