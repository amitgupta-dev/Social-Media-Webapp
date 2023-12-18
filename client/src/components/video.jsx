import React from 'react'
import LikeAndShare from './like-and-share'

const Video = ({ video }) => {
    return (
        <div className="px-5 py-4 bg-pink-100 dark:bg-gray-800 shadow rounded-lg w-full">
            <div className="flex mb-4">
                <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div className="ml-2 mt-0.5">
                    <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">Loyce Kuvalis</span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">16 December at 08:25</span>
                </div>
            </div>
            <p className="text-gray-800 dark:text-gray-100 font-medium text-lg leading-snug md:leading-normal">Lorem ipsum dolor sit ame</p>
            <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quis, facere vitae nostrum necessitatibus fuga optio, atque sunt dignissimos minus unde aut suscipit magni excepturi ea deleniti facilis amet tenetur.</p>
            <video src={video}
                className="rounded-sm w-full max-h-[500px] bg-black"
                controls />
            <div className="flex justify-between items-center mt-5">
                <div className="flex ">
                    <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">8</span>
                </div>
                <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">33 comments</div>
            </div>
            <LikeAndShare />
        </div>
    )
}

export default Video