import Post from '../../components/post'
import React from 'react'

const Posts = () => {
    return (
        <section title="posts" className=" my-5 flex flex-col gap-5 w-full max-w-[1050px] mx-auto">
            <div className="px-2 py-2 bg-pink-100 dark:bg-gray-800 shadow rounded-full w-full">
                <div className="flex">
                    <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <input type="text" className="bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:caret-gray-500 border border-gray-400 rounded-xl mx-2 my-1 w-full focus:outline-none focus:border-gray-500 px-4" placeholder=" What's in your mind ?" />
                </div>
            </div>
            <Post image="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Post image="https://images.pexels.com/photos/3656518/pexels-photo-3656518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Post image="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Post image="https://images.pexels.com/photos/3656518/pexels-photo-3656518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </section>
    )
}

export default Posts