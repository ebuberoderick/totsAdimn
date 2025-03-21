import { moment } from "@/app/hooks/useMoment";
import { VscEye } from "react-icons/vsc";
import React from "react";
import Link from "next/link";

const AppPostTable = ({ posts = [] }) => {

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 text-sm border-b">
                        <th className="p-3 text-left">User</th>
                        <th className="p-3 text-left">Post ID</th>
                        <th className="p-3 text-left">Post Content</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left">Created Date</th>
                        <th className="p-3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                        {/* //     <td className="p-3 text-sm">{user.id}</td>
                        //     <td className="p-3 flex items-center gap-2">
                        //         <img src={user.avatar} alt={user.username} className="w-8 h-8 rounded-full" />
                        //         <div className="text-xs">
                        //             <div>{user.fname} {user.lname}</div>
                        //             <div className="text-gray-400">@{user.username}</div>
                        //         </div>
                        //     </td>
                        //     <td className="p-3 text-sm">{user.email}</td>
                        //     <td className="p-3 text-green-600 text-sm">
                        //         <div className={`${user.status === "active" ? "text-blue bg-blue/10" : "text-danger bg-danger/10"} inline-block py-1 px-4 text-xs rounded-lg`}>{user.status}</div>
                        //     </td>
                        //     <td className="p-3 text-sm"><div className="w-44">{moment(user.updated_at)} ago</div></td>
                        //     <td className="p-3">
                        //         <Link href={`/user_profiles/${user.id}`}>
                        //             <button className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300"><VscEye /></button>
                        //         </Link>
                        //     </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppPostTable;
