import React from "react"
import { Outlet } from "react-router-dom"
import Sidebar from '../../components/sidebar'
import { HiMiniRectangleStack } from "react-icons/hi2"
import { FaPeopleGroup } from "react-icons/fa6"
import { MdGroupAdd } from "react-icons/md"

const GroupsLayout = () => {
    return (
        <>
            <Sidebar options={[
                { icon: <HiMiniRectangleStack size={25} />, label: "Recent Activities", to: "/groups" },
                { icon: <FaPeopleGroup size={25} />, label: "Your Groups", to: "/groups/yourgroups" },
                { icon: <MdGroupAdd size={25} />, label: "Create Group", to: "/groups/creategroup" }
            ]} />
            <Outlet />
        </>
    )
}

export default GroupsLayout