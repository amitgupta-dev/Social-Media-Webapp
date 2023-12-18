import { Link, useLocation } from 'react-router-dom'
import React from 'react'

const UserNav = () => {

    const postsPattern = /^\/[0-9a-fA-F]{24}$/
    const aboutPattern = /^\/[0-9a-fA-F]{24}\/about$/
    const friendsPattern = /^\/[0-9a-fA-F]{24}\/friends$/
    const photosPattern = /^\/[0-9a-fA-F]{24}\/photos$/
    const videosPattern = /^\/[0-9a-fA-F]{24}\/videos$/

    const { pathname } = useLocation()

    return (
        <div className="w-full max-w-[1050px] text-md font-bold flex mx-auto overflow-x-auto no-scrollbar" >
            <Link to="/657d2c4c45b9956d156c8238" className={`flex items-center justify-center px-4 py-2 sm:py-4 ${postsPattern.test(pathname) && "text-blue-500 border-b-[3px] border-blue-500"}`}>
                Posts
            </Link>
            <Link to="/657d2c4c45b9956d156c8238/about" className={`flex items-center justify-center px-4 py-2 sm:py-4 ${aboutPattern.test(pathname) && "text-blue-500 border-b-[3px] border-blue-500"}`}>
                About
            </Link>
            <Link to="/657d2c4c45b9956d156c8238/friends" className={`flex items-center justify-center px-4 py-2 sm:py-4 ${friendsPattern.test(pathname) && "text-blue-500 border-b-[3px] border-blue-500"}`}>
                Friends
            </Link>
            <Link to="/657d2c4c45b9956d156c8238/photos" className={`flex items-center justify-center px-4 py-2 sm:py-4 ${photosPattern.test(pathname) && "text-blue-500 border-b-[3px] border-blue-500"}`}>
                Photos
            </Link>
            <Link to="/657d2c4c45b9956d156c8238/videos" className={`flex items-center justify-center px-4 py-2 sm:py-4 ${videosPattern.test(pathname) && "text-blue-500 border-b-[3px] border-blue-500"}`}>
                Videos
            </Link>
        </div>
    )
}

export default UserNav