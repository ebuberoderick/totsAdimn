"use client"
import { resolveGroupReport } from '@/app/services/authService'
import Image from 'next/image'
import React, { useState } from 'react'

function GroupTableChip({ data }) {
    const [group, setGroup] = useState(data)
    const [proccessing, setProccessing] = useState(false)


    const resolve = async () => {
        setProccessing(true)
        const { status, data } = await resolveGroupReport({ report_id: group?.id })
        setProccessing(false)
        if (status) {
            setGroup(prv => ({ ...prv, status: "resolved" }))
        }
    }

    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="p-3 text-left">
                <div className='w-80'>{group?.group?.name}</div>
            </td>
            <td className="p-3 text-left">
                <div className="flex w-72 items-center gap-3">
                    <div>
                        <div className="w-10 h-10 rounded-full bg-gray-50 overflow-hidden">
                            <Image src={group?.user?.avatar} width={100} height={100} className="w-full h-full" alt="" />
                        </div>
                    </div>
                    <div>{group?.user?.fname} {group?.user.lname}</div>
                </div>
            </td>
            <td className="p-3 text-left"> <div className=" w-72">{group?.reason}</div></td>
            <td className="p-3 text-left flex"><div className={`px-4 py-1 rounded-full text-xs ${group?.status === "unresolved" ? "text-danger bg-danger/15" : "text-blue bg-blue/15"}`}>{group?.status}</div></td>
            <td className="p-3 text-left">
                {group?.status === "unresolved" && <div onClick={resolve} className={`px-6 py-2 inline text-xs sm:text-sm rounded-md cursor-pointer ${!proccessing ? " bg-blue/80 hover:bg-blue text-white" : "bg-gray-50 hover:bg-gray-100"}`}> {proccessing ? "Proccessing..." : "Resolve"}</div>}
            </td>
        </tr>
    )
}

export default GroupTableChip