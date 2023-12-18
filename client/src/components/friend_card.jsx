import { Link } from 'react-router-dom'
import React from 'react'
import FriendDropdown from './friend_dropdown'

const FriendCard = ({ image, name, friends }) => {
    return (
        <Link to="/user/posts" className="flex items-center w-full sm:w-[calc(50%-8px)] p-2 gap-4 rounded-xl bg-gray-200">
            <div className="relative w-[120px] aspect-square rounded-3xl overflow-hidden">
                <img src={image} className="w-full" alt="" />
            </div>
            <div className="w-full">
                <Link to="#">
                    <h5 className="">{name}</h5>
                </Link>
                <p className="">{friends} mutual friends</p>
            </div>
            <FriendDropdown />
        </Link>
    )
}

export default FriendCard