import React from 'react'
import UserNav from './user_nav'
import { BsThreeDots } from "react-icons/bs"
import { RiPencilFill } from "react-icons/ri"
import { Link } from "react-router-dom"

const ProfileHeader = () => {
    return (
        <div className='relative flex flex-col w-full shadow-lg'>
            <div className='relative flex items-center justify-center w-full aspect-[2.8/1] overflow-hidden lg:rounded-b-lg'>
                <img src="/assets/images/bg.jpeg" className='w-full' alt='bg' />
            </div>
            <div className='relative flex items-center justify-center w-[25vh] translate-y-[-12vh] sm:w-[30vh] transform sm:translate-y-[-15vh] translate-x-[2.5vw] border-white border-[7px] rounded-full overflow-hidden aspect-square'>
                <img src="/assets/images/propic.jpg" className='w-full' alt='bg' />
            </div>
            <div className='relative mt-[-12vh]'>
                <div className='md:absolute w-full md:w-[calc(100%-36vh)] transform md:translate-y-[-15vh] px-5 md:pl-0 mb-2 md:mb-0 md:ml-[36vh] flex flex-wrap gap-2 justify-between items-center'>
                    <div>
                        <p className='text-4xl font-bold '>Amit Gupta</p>
                        <p className='font-semibold opacity-80'>45 friends</p>
                    </div>
                    <div className='flex gap-2'>
                        <Link to="/editprofile" className='bg-gray-300 flex gap-2 py-2 px-5 text-lg font-bold rounded-md transform active:scale-95'><RiPencilFill size={23} /> Edit Profile</Link>
                        <button className='bg-gray-300 p-2 text-lg font-bold rounded-full transform active:scale-95'><BsThreeDots size={23} /></button>
                    </div>
                </div>
                <hr className='h-[1px] border-gray-300' />
                <UserNav />
            </div>
        </div>
    )
}

export default ProfileHeader