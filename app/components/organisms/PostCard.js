import React from 'react'
import { FiHeart } from "react-icons/fi";
import { FaRegComments } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";
import { moment } from '@/app/hooks/useMoment';
import EmblaCarousel from './EmblaCarousel';

function PostCard() {

    const OPTIONS = { loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


    return (
        <div className='space-y-3 mb-3'>
            <div className='flex'>
                <div className='flex-grow flex gap-2 items-center'>
                    <div>
                        <img src={`https://randomuser.me/api/portraits/women/2.jpg`} alt={`user.name`} className="w-12 h-12 rounded-full" />
                    </div>
                    <div>
                        <div className='text-sm'>Ebube Roderick</div>
                        <div className='text-xs flex items-center gap-3'>
                            <div>@bube</div>
                            <div className='text-gray-400'>{moment("2024-12-09 10:00:00")}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-7 h-7 cursor-pointer rounded-md bg-danger/10 text-danger text-sm flex items-center justify-center'><BsTrash3 /></div>
                </div>
            </div>
            <div className='space-y-3'>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                <div className='text-sm'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur incidunt distinctio itaque aliquam delectus ratione expedita animi aperiam enim, aspernatur quas nobis repellat! Unde nesciunt adipisci molestiae reiciendis non officia!
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1'>
                    <FiHeart /> 13
                </div>
                <div className='flex items-center gap-1'>
                    <FaRegComments className='text-lg' /> 4
                </div>
            </div>
        </div>
    )
}

export default PostCard