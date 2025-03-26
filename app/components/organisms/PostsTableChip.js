import { moment } from "@/app/hooks/useMoment";
import { VscEye } from "react-icons/vsc";
import React from "react";
import Link from "next/link";
import Image from "next/image";


function PostsTableChip({ post }) {
    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="p-3 text-sm">
                <div className="w-8">{post?.id}</div>
            </td>
            <td className="p-3 flex items-center gap-2">
                <div className="w-40 flex items-center gap-2">
                    <img src={post?.user.avatar} alt={post?.user.username} className="w-8 h-8 rounded-full" />
                    <div className="text-xs">
                        <div>{post?.user.fname} {post?.user.lname}</div>
                        <div className="text-gray-400">@{post?.user.username}</div>
                    </div>
                </div>
            </td>
            <td className="p-3 text-sm">
                <div className='w-80'>
                    <div className='flex gap-3 flex-wrap'>
                        {
                            post?.image?.map((image, index) => (
                                <div key={index} className="overflow-hidden mb-3">
                                    <Image src={image} width={100} height={100} className="w-12 h-12" alt="" />
                                </div>
                            ))
                        }
                    </div>
                    <div>{post?.text}</div>
                </div>
            </td>
            <td className="p-3 text-left flex"><div className={`px-4 py-1 rounded-full text-xs ${post?.status === "unresolved" ? "text-danger bg-danger/15" : "text-blue bg-blue/15"}`}>{post?.status}</div></td>
            <td className="p-3 text-sm"><div className="w-24">{moment(post?.created_at)} ago</div></td>
            <td className="p-3">
                <Link href={`/user_profiles/${post?.id}`}>
                    <button className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300"><VscEye /></button>
                </Link>
            </td>
        </tr>
    )
}

export default PostsTableChip