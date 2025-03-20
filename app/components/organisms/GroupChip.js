import { deleteGroup } from '@/app/services/authService';
import Image from 'next/image'
import React from 'react'
import { BsTrash3 } from "react-icons/bs";

function GroupChip({ group }) {

    const deletePostFN = async () => {
        const { status, data } = await deleteGroup({ group_id: group?.id })
        console.log(data);

    }

    return (
        <div className="flex items-center gap-2">
            <div className='flex items-center flex-grow gap-2'>
                <div className="">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-50">
                        <Image src={group?.cover} width={100} height={100} alt={group.name} />
                    </div>
                </div>
                <div className='flex flex-grow items-center'>
                    <div className="flex-grow">
                        <div className="font-bold text-xs">{group.name}</div>
                        <div className="text-xs">{group?.member_count} members</div>
                    </div>
                </div>
            </div>
            <div>
                <div onClick={deletePostFN} className='w-7 h-7 cursor-pointer rounded-md bg-danger/10 text-danger text-sm flex items-center justify-center'><BsTrash3 /></div>
            </div>
        </div>
    )
}

export default GroupChip