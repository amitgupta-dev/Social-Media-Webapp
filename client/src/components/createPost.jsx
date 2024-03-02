import React, { useRef } from 'react'
import { FcDribbble } from "react-icons/fc"
import { FcCamera } from "react-icons/fc"
import { FcClapperboard } from "react-icons/fc"
import { useSelector } from 'react-redux'

const CreatePost = ({ setCreatingPost }) => {

    const user = useSelector(state => state.user)
    const postForm = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()

    }

    const handleRandomClick = (event) => {
        if (postForm && !postForm.current.contains(event.target)) setCreatingPost(false)
    }

    return (
        <div onClick={handleRandomClick} className='absolute w-full h-full z-10 bg-[rgba(225,225,225,0.5)] flex items-center justify-center'>
            <form ref={postForm} onSubmit={handleSubmit} className='flex flex-col items-center w-full h-full md:aspect-square md:w-[80vh] md:h-auto rounded-lg bg-white shadow-lg p-2'>
                <div className='w-full text-center text-lg font-bold p-4 border-b'>
                    Create Post
                </div>
                <div className="flex w-full p-2">
                    <img className="w-12 h-12 rounded-full" src={user?.data.avatar} alt="" />
                    <div className="ml-2 mt-0.5">
                        <span className="block font-medium text-lg leading-snug text-black dark:text-gray-100">{user?.data.name}</span>
                        <select className="outline-none font-semibold rounded bg-gray-300 p-[1px]">
                            <option value="private" className="bg-white border border-gray-300">Private</option>
                            <option value="public" className="bg-white border border-gray-300">Public</option>
                        </select>
                    </div>
                </div>
                <textarea className='flex-1 p-2 outline-none w-full text-3xl' placeholder={`What's in your mind, ${user?.data.name.split(" ")[0]} ?`} />
                <div class="flex gap-2 items-center w-full h-14 m-2 border-[3px] bg-white rounded-lg p-2">
                    <p class="flex-1 text-white">
                        <button type="submit" class="bg-blue-700 px-8 py-[6px] rounded-md">Post</button>
                    </p>
                    <label class="p-1 rounded-full hover:bg-green-100"><FcDribbble size={25} /></label>
                    <label htmlFor='inputImage' class="p-1 rounded-full hover:bg-green-100">
                        <FcCamera size={25} />
                    </label>
                    <input id="inputImage" type="file" accept="image/*" className='hidden' />
                    <label htmlFor='inputVideo' class="p-1 rounded-full hover:bg-green-100">
                        <FcClapperboard size={25} />
                    </label>
                    <input id="inputVideo" type="file" accept="video/*" className='hidden' />
                </div>
            </form>
        </div>
    )
}

export default CreatePost