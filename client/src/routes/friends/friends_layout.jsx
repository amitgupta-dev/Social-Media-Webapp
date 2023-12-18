import React from "react"
import Sidebar from '../../components/sidebar'
import { FaUserGroup } from "react-icons/fa6"
import { RiContactsFill } from "react-icons/ri"
import { BsPersonFillAdd } from "react-icons/bs"
import { IoGift } from "react-icons/io5"
import { Outlet } from "react-router-dom"

export default function FriendsLayout() {
    return (
        <>
            <Sidebar options={[
                { icon: <FaUserGroup size={25} />, label: "Home", to: "/friends" },
                { icon: <RiContactsFill size={23} />, label: "All Friends", to: "/friends/allfriends" },
                { icon: <BsPersonFillAdd size={25} />, label: "Suggestions", to: "/friends/suggestions" },
                { icon: <IoGift size={25} />, label: "Birthdays", to: "/friends/birthdays" },
            ]} />
            <Outlet />
        </>
    )
}