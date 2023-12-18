import React from "react"
import { Outlet } from "react-router-dom"
import ProfileHeader from "./components/profile_header"

const UserLayout = () => {
    return (
        <div className="mx-auto overflow-y-scroll flex flex-col">
            <ProfileHeader />
            <Outlet />
        </div>
    )
}

export default UserLayout 