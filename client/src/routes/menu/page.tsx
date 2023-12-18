import Link from 'next/link'
import React from 'react'
import { FaCircleUser } from "react-icons/fa6"
import { FaUserFriends } from "react-icons/fa"
import { SiFeedly } from "react-icons/si"
import { HiUserGroup } from "react-icons/hi"
import { BiSolidVideos } from "react-icons/bi"
import { GoBellFill } from "react-icons/go"

const Menu = () => {
    return (
        <>
            <div className="w-[100vw] h-full bg-white dark:bg-gray-900">
                <ul className="space-y-2 font-medium p-2">
                    <li>
                        <Link href="#" className="flex items-center p-2 text-gray-900 bg-slate-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group dark:bg-gray-800">
                            <FaCircleUser size={25} />
                            <span className="ml-3">Amit Gupta</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center p-2 text-gray-900 bg-slate-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group dark:bg-gray-800">
                            <GoBellFill size={25} />
                            <span className="ml-3">Notifications</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center p-2 text-gray-900 bg-slate-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group dark:bg-gray-800">
                            <FaUserFriends size={25} />
                            <span className="ml-3">Find Friends</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center p-2 text-gray-900 bg-slate-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group dark:bg-gray-800">
                            <HiUserGroup size={25} />
                            <span className="ml-3">Groups</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center p-2 text-gray-900 bg-slate-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group dark:bg-gray-800">
                            <SiFeedly size={25} />
                            <span className="ml-3">Feeds</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="flex items-center p-2 text-gray-900 bg-slate-100 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group dark:bg-gray-800">
                            <BiSolidVideos size={25} />
                            <span className="ml-3">Videos</span>
                        </Link>
                    </li>
                </ul>
            </div></>
    )
}

export default Menu