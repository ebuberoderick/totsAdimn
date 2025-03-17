import { moment } from "@/app/hooks/useMoment";
import { VscEye } from "react-icons/vsc";
import React from "react";
import Link from "next/link";

const AppTable = ({ users = [] }) => {

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="p-3 text-left">User ID</th>
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Email Address</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left">Last Login</th>
                        <th className="p-3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="p-3 text-sm">{user.id}</td>
                            <td className="p-3 flex items-center gap-2">
                                <img src={user.avatar} alt={user.username} className="w-8 h-8 rounded-full" />
                                <div className="text-xs">
                                    <div>{user.fname} {user.lname}</div>
                                    <div className="text-gray-400">@{user.username}</div>
                                </div>
                            </td>
                            <td className="p-3 text-sm">{user.email}</td>
                            <td className="p-3 text-green-600 text-sm">{user.status}</td>
                            <td className="p-3 text-sm"><div className="w-44">{moment(user.updated_at)} ago</div></td>
                            <td className="p-3">
                                <Link href={`/user_profiles/${user.id}`}>
                                    <button className="py-2 px-3 bg-gray-200 rounded hover:bg-gray-300"><VscEye /></button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppTable;
