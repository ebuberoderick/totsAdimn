"use client"
import { resolvePostReport } from '@/app/services/authService'
import Image from 'next/image'
import React, { useState } from 'react'

function PostTableChip({ data }) {
    const [post, setPost] = useState(data)
    const [proccessing, setProccessing] = useState(false)

    console.log(data);


    const resolve = async () => {
        setProccessing(true)
        const { status, data } = await resolvePostReport({ report_id: post?.id })
        setProccessing(false)
        if (status) {
            setPost(prv => ({ ...prv, status: "resolved" }))
        }
    }

    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="p-3 text-left">
                <div className='w-80'>
                    <div className='flex gap-3 flex-wrap'>
                    {
                        data?.post?.image?.map((image, index) => (
                            <div key={index} className="overflow-hidden mb-3">
                                <Image src={image} width={100} height={100} className="w-12 h-12" alt="" />
                            </div>
                        ))
                    }
                    </div>
                    <div>{data?.post?.text}</div>
                </div>
            </td>
            <td className="p-3 text-left">
                <div className="flex w-72 items-center gap-3">
                    <div>
                        <div className="w-10 h-10 rounded-full bg-gray-50 overflow-hidden">
                            <Image src={post?.user?.avatar} width={100} height={100} className="w-full h-full" alt="" />
                        </div>
                    </div>
                    <div>{post?.user?.fname} {post?.user.lname}</div>
                </div>
            </td>
            <td className="p-3 text-left"> <div className=" w-72">{post?.reason}</div></td>
            <td className="p-3 text-left flex"><div className={`px-4 py-1 rounded-full text-xs ${post?.status === "unresolved" ? "text-danger bg-danger/15" : "text-blue bg-blue/15"}`}>{post?.status}</div></td>
            <td className="p-3 text-left">
                {post?.status === "unresolved" && <div onClick={resolve} className={`px-6 py-2 inline text-xs sm:text-sm rounded-md cursor-pointer ${!proccessing ? " bg-blue/80 hover:bg-blue text-white" : "bg-gray-50 hover:bg-gray-100"}`}> {proccessing ? "Proccessing..." : "Resolve"}</div>}
            </td>
        </tr>
    )
}

export default PostTableChip