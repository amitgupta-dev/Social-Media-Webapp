import React from 'react'
import LikeAndShare from './like-and-share'

const Post = ({ image }) => {
    return (

        <div className="px-5 py-4 bg-gray-100 dark:bg-gray-800 shadow rounded-lg w-full">
            <div className="flex mb-4">
                <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div className="ml-2 mt-0.5">
                    <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">Loyce Kuvalis</span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">16 December at 08:25</span>
                </div>
            </div>
            <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src={image} className="rounded-sm mx-auto w-auto h-auto max-h-[85vh]" alt="" />
            <div className="flex justify-between items-center my-2">
                <div className="flex ">
                    <span className="ml-1 text-gray-500 dark:text-gray-400 font-light">8</span>
                </div>
                <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">33 comments</div>
            </div>
            <LikeAndShare />
        </div >
    )
}

export default Post