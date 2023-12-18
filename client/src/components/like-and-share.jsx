"use client"
import React from 'react'
import { FaRegHeart } from "react-icons/fa"
import { FaRegCommentDots } from "react-icons/fa6"
import { IoMdShareAlt } from "react-icons/io"

const LikeAndShare = () => {
    return (
        <>
            <hr className="h-1 border-black opacity-10" />
            <div className='flex w-full'>
                <button className='w-1/3 flex items-center justify-center rounded-lg opacity-60  p-[2px] m-[2px]'>
                    <FaRegHeart size={25} />
                </button>
                <button className='w-1/3 flex items-center justify-center rounded-lg opacity-60  p-[2px] m-[2px]'>
                    <FaRegCommentDots size={25} />
                </button>
                <button className='w-1/3 flex items-center justify-center rounded-lg opacity-60  p-[2px] m-[2px]'>
                    <IoMdShareAlt size={25} />
                </button>
            </div>
            <hr className="mt-[2px] border-black opacity-10" /></>
    )
}

export default LikeAndShare