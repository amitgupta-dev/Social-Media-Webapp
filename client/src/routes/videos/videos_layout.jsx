import React from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "../../components/sidebar"
import { PiVideoFill } from "react-icons/pi"
import { MdVideoLibrary } from "react-icons/md"
import { IoRocket } from "react-icons/io5"

const VideosLayout = () => {
    return (
        <>
            <Sidebar options={[
                { icon: <PiVideoFill size={25} />, label: "Home", to: "/videos" },
                { icon: <MdVideoLibrary size={25} />, label: "Reels", to: "/videos/reels" },
                { icon: <IoRocket size={25} />, label: "Explore", to: "/videos/explore" }
            ]} />
            <Outlet />
        </>
    )
}

export default VideosLayout