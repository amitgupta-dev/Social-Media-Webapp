import React from 'react'
import LikeAndShare from './like-and-share'
import { getPostCreationDate } from '../utils/getPostCreationDate'

const Post = ({ postData }) => {

    return (
        <div className="px-5 py-4 bg-gray-100 dark:bg-gray-800 shadow rounded-lg w-full">
            <div className="flex mb-4">
                <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div className="ml-2 mt-0.5">
                    <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">{postData?.createdBy?.name}</span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">{postData?.createdAt && getPostCreationDate(postData?.createdAt)}</span>
                </div>
            </div>
            <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal mb-2">{postData?.text}</p>
            {postData?.imageUrl && <img src={postData.imageUrl} className="rounded-sm mx-auto w-auto h-auto max-h-[85vh]" alt="" />}
            {postData?.videoUrl && <video src={postData.videoUrl}
                className="rounded-sm w-full max-h-[500px] bg-black"
                controls />}
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