import { moment } from "@/app/hooks/useMoment";
import { VscEye } from "react-icons/vsc";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PostsTableChip from "../organisms/PostsTableChip";

const AppPostTable = ({ posts = [] }) => {
    console.log(posts);

    return (
        <div className="">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 text-sm border-b">
                        <th className="p-3 text-left">Post ID</th>
                        <th className="p-3 text-left">User</th>
                        <th className="p-3 text-left">Post Content</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left">Created Date</th>
                        <th className="p-3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => (
                        <PostsTableChip post={post} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppPostTable;
