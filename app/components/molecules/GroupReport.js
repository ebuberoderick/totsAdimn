import React from "react";
import GroupTableChip from "../organisms/GroupTableChip";

const GroupReport = ({ gropus = [] }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-sm bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="p-3 text-left w-80">Group</th>
                        <th className="p-3 text-left w-72">Reported By</th>
                        <th className="p-3 text-left w-72">Reason for Report</th>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    {gropus.map((group, index) => (
                        <GroupTableChip key={index} data={group} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GroupReport;
