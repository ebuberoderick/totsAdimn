"use client"
import { resolvePostReport } from '@/app/services/authService'
import Image from 'next/image'
import React, { useState } from 'react'

function UserTableChip({ data }) {
    const [user, setUser] = useState(data)
    const [proccessing, setProccessing] = useState(false)

    const resolve = async () => {
        setProccessing(true)
        const { status, data } = await resolvePostReport({ report_id: user?.id })
        setProccessing(false)
        if (status) {
            setUser(prv => ({ ...prv, status: "resolved" }))
        }
    }

    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="p-3 text-left">
                <div className='w-80 flex items-center gap-3'>
                    <div>
                        <div className="w-10 h-10 rounded-full bg-gray-50 overflow-hidden">
                            <Image src={user?.reported_account?.avatar} width={100} height={100} className="w-full h-full" alt="" />
                        </div>
                    </div>
                    <div>{user?.reported_account?.fname} {user?.reported_account.lname}</div>
                </div>
            </td>
            <td className="p-3 text-left">
                <div className="flex w-72 items-center gap-3">
                    <div>
                        <div className="w-10 h-10 rounded-full bg-gray-50 overflow-hidden">
                            <Image src={user?.user?.avatar} width={100} height={100} className="w-full h-full" alt="" />
                        </div>
                    </div>
                    <div>{user?.user?.fname} {user?.user.lname}</div>
                </div>
            </td>
            <td className="p-3 text-left"> <div className=" w-72">{user?.reason}</div></td>
            <td className="p-3 text-left flex"><div className={`px-4 py-1 rounded-full text-xs ${user?.status === "unresolved" ? "text-danger bg-danger/15" : "text-blue bg-blue/15"}`}>{user?.status}</div></td>
            <td className="p-3 text-left">
                {user?.status === "unresolved" && <div onClick={resolve} className={`px-6 py-2 inline text-xs sm:text-sm rounded-md cursor-pointer ${!proccessing ? " bg-blue/80 hover:bg-blue text-white" : "bg-gray-50 hover:bg-gray-100"}`}> {proccessing ? "Proccessing..." : "Resolve"}</div>}
            </td>
        </tr>
    )
}

export default UserTableChip