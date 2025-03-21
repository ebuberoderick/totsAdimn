import React from "react";
import PostTableChip from "../organisms/PostTableChip";

const PostReport = ({ posts = [] }) => {
    console.log(posts);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-sm bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="p-3 text-left w-80">Post</th>
                        <th className="p-3 text-left w-72">Reported By</th>
                        <th className="p-3 text-left w-72">Reason for Report</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, index) => (
                        <PostTableChip key={index} data={post} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PostReport;
