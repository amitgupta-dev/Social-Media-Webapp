"use client"

import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi"

export default function FriendDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className="relative p-2 rounded-full cursor-pointer ">
                <HiOutlineDotsVertical size={20} />
                <div className={`absolute bg-gray-300 p-4 rounded-md translate-x-50 transform translate-x-[-100px] translate-y-[2px] ${isOpen ? 'block' : 'hidden'}`}>
                    <p>Unfriend</p>
                    <p>Unfollow</p>
                </div>
            </div>
        </>
    );
}
