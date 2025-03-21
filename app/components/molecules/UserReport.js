import React from "react";
import UserTableChip from "../organisms/UserTableChip";

const UserReport = ({ users = [] }) => {
    console.log(users);
    
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-sm bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="p-3 text-left w-80">Account</th>
                        <th className="p-3 text-left w-72">Reported By</th>
                        <th className="p-3 text-left w-72">Reason for Report</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <UserTableChip key={index} data={user} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserReport;
