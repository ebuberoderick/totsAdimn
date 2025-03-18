import React from 'react'
import { FiHeart } from "react-icons/fi";
import { FaRegComments } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";
import { moment } from '@/app/hooks/useMoment';
import EmblaCarousel from './EmblaCarousel';

function PostCard({ data }) {

    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    console.log(data);

    return (
        <div className='space-y-3 mb-3'>
            <div className='flex'>
                <div className='flex-grow flex gap-2 items-center'>
                    <div>
                        <img src={data?.user?.avatar} alt={`user.name`} className="w-12 h-12 rounded-full" />
                    </div>
                    <div>
                        <div className='text-sm'>{data?.user?.fname} {data?.user?.lname}</div>
                        <div className='text-xs flex items-center gap-2'>
                            <div>@{data?.user?.username}</div>
                            <div className='text-gray-400'>{moment(data?.created_at)}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-7 h-7 cursor-pointer rounded-md bg-danger/10 text-danger text-sm flex items-center justify-center'><BsTrash3 /></div>
                </div>
            </div>
            <div className='space-y-3'>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                <div className='text-sm'>{data?.text}</div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1'>
                    <FiHeart /> {data?.likes_count}
                </div>
                <div className='flex items-center gap-1'>
                    <FaRegComments className='text-lg' /> {data?.comments_count}
                </div>
            </div>
        </div>
    )
}

export default PostCard