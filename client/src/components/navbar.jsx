'use client'
import { Link, useLocation } from 'react-router-dom'
import { GoHome } from "react-icons/go"
import { GoHomeFill } from "react-icons/go"
import { RxAvatar } from "react-icons/rx";
import { GoBell, GoBellFill } from "react-icons/go"
import { RiGroupLine } from "react-icons/ri"
import { RiGroupFill } from "react-icons/ri"
import { HiOutlineUserGroup } from "react-icons/hi2"
import { HiUserGroup } from "react-icons/hi2"
import { RiVideoLine } from "react-icons/ri"
import { RiVideoFill } from "react-icons/ri"
import { RxHamburgerMenu } from "react-icons/rx"
import { MdLogout } from "react-icons/md";
import { useEffect, useState } from 'react'
import axios from 'axios'
import { fetchUserData } from '../redux/slices/userSlice'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserData())
    }, [])

    const { pathname } = useLocation()
    const [isProfile, setIsProfile] = useState(false)
    // const router = useRouter()

    const userData = useSelector((state) => state.user.data)

    const [isLoading, setLoading] = useState(false)

    // const logout = async () => {
    //     try {
    //         setLoading(true)
    //         const response = await axios.get("/api/user/signout")
    //         console.log(response.data)
    //         router.push("/signin")
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    //     finally {
    //         setLoading(false)
    //     }
    // }

    return (
        <nav className="bg-white flex absolute h-16 w-full md:h-auto justify-between sm:px-5 shadow-md dark dark:bg-gray-900 z-10">
            <div className="hidden gap-2 p-2 w-[30%] h-auto md:flex">
                <img src="/assets/icons/treddy.png" className='w-12 h-12' alt="Picture of the author" />
                <input type="text" placeholder='🔍Search...' className="dark:bg-gray-800 dark:caret-gray-500 min px-5 max-w-[150px] bg-sky-100 rounded-full outline-none" />
            </div>
            <div className="flex justify-evenly sm:justify-start w-[100%] sm:w-[80%] md:w-[40%] md:justify-center" >
                <Link to="/" className={`w-28 flex items-center justify-center dark:text-white ${pathname === "/" && "border-b-[3px] border-blue-500"}`}>
                    {pathname === "/" ? < GoHomeFill size={30} color="blue" /> : <GoHome size={30} />}
                </Link>
                <Link to="/friends" className={`w-28 flex items-center justify-center dark:text-white ${pathname.startsWith("/friends") && "border-b-[3px] border-blue-500"}`}>
                    {pathname.startsWith("/friends") ? < RiGroupFill size={25} color="blue" /> : <RiGroupLine size={25} />}
                </Link>
                <Link to="/videos" className={`w-28 flex items-center justify-center dark:text-white ${pathname.startsWith("/videos") && "border-b-[3px] border-blue-500"}`}>
                    {pathname.startsWith("/videos") ? < RiVideoFill size={25} color="blue" /> : <RiVideoLine size={25} />}
                </Link>
                <Link to="/groups" className={`w-28 flex items-center justify-center dark:text-white ${pathname.startsWith("/groups") && "border-b-[3px] border-blue-500"}`}>
                    {pathname.startsWith("/groups") ? < HiUserGroup size={30} color="blue" /> : <HiOutlineUserGroup size={30} />}
                </Link>
                <Link to="/menu" className={`w-28 sm:hidden flex items-center justify-center dark:text-white ${pathname === "/menu" && "border-b-[3px] border-blue-500"}`}>
                    {pathname === "/menu" ? < RxHamburgerMenu size={30} color="blue" /> : <RxHamburgerMenu size={30} />}
                </Link>
            </div>
            <div className="relative hidden gap-4 justify-end items-center w-[30%] sm:flex">
                <Link to="/notifications" className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden bg-slate-100">
                    {pathname === "/notifications" ? < GoBellFill size={27} color="blue" /> : <GoBell size={25} />}
                </Link>
                <button onClick={() => setIsProfile(!isProfile)} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100">
                    <RxAvatar size={30} />
                </button>
                {isProfile && <div className="absolute top-10 right-10 mx-auto mt-2 w-60">
                    <div className="bg-white rounded overflow-hidden shadow-lg">
                        <div className="text-center p-6 bg-gray-800 border-b">
                            {userData?.avatar ? <img src={userData.avatar} className="w-28 h-28 text-white rounded-full mx-auto" alt="" /> :
                                <svg aria-hidden="true" role="img" className="h-24 w-24 text-white rounded-full mx-auto" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"></path></svg>}
                            <p className="pt-2 text-lg font-semibold text-gray-50">{userData?.name}</p>
                            <p className="text-sm text-gray-100">{userData?.email}</p>
                        </div>
                        <div className="border-b">
                            <Link to="/account/campaigns" >
                                <button className="px-4 py-2 hover:bg-gray-100 flex">
                                    <div className="text-green-600">
                                    </div>
                                    <div className="pl-3">
                                        <p className="text-sm font-medium text-gray-800 leading-none">
                                            Campaigns
                                        </p>
                                    </div>
                                </button>
                            </Link>
                            <Link to="/account/donations" >
                                <button className="px-4 py-2 hover:bg-gray-100 flex">
                                    <div className="text-gray-800">
                                    </div>
                                    <div className="pl-3">
                                        <p className="text-sm font-medium text-gray-800 leading-none">Donations</p>
                                    </div>
                                </button>
                            </Link>
                        </div>
                        <div className="">
                            <button className="w-full px-5 py-2 hover:bg-gray-100 flex">
                                <p className="text-sm flex gap-2 font-medium text-gray-800 leading-none"><MdLogout size={17} />Logout
                                </p>
                            </button>
                        </div>
                    </div>
                </div >}
            </div>
        </nav >
    )
}

export default Navbar