import React, { useEffect } from 'react'
import UserNav from './user_nav'
import { BsThreeDots } from "react-icons/bs"
import { RiPencilFill } from "react-icons/ri"
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

const ProfileHeader = () => {

    const { id } = useParams()
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <div className='relative flex flex-col w-[100vw] shadow-lg'>
            <div className='relative flex items-center justify-center aspect-[3/1] overflow-hidden lg:rounded-b-lg  lg:max-w-[1024px] lg:mx-auto'>
                {user?.data && <img src={user?.data?.cover} className='w-full h-full' alt='bg' />}
            </div>
            <div className='relative flex items-center justify-center w-[25%] max-w-[200px] translate-y-[-12vh] sm:w-[30vh] transform sm:translate-y-[-15vh] translate-x-[2.5vw] lg:translate-x-[calc(50vw-450px)] border-white border-[7px] rounded-full overflow-hidden aspect-square'>
                {user?.data && <img src={user?.data?.avatar} className='w-full' alt='bg' />}
            </div>
            <div className='relative mt-[-12vh]'>
                <div className='flex flex-wrap gap-2 justify-between items-center md:absolute md:left-[50%]  md:translate-x-[-180px] lg:translate-x-[-250px] w-full md:w-[70%] max-w-[800px] transform md:translate-y-[-15vh] px-5 md:pl-0 mb-2 md:mb-0'>
                    <div>
                        <p className='text-4xl font-bold '>{user?.data?.name}</p>
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