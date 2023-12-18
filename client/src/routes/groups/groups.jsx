import Post from '../../components/post'
import Video from '../../components/video'
import React from 'react'

const Groups = () => {
  return (
    <>
      <div className="w-[100%] md:w-[75%] h-full pb-2 p-2  overflow-y-scroll dark:bg-gray-900">
        <div className="flex gap-4 flex-wrap">
          <Video video="/assets/videos/nature.mp4" />
          <Post image="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <Video video="/assets/videos/NASA_Video.mp4" />
          <Post image="https://images.pexels.com/photos/3656518/pexels-photo-3656518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
      </div>
    </>
  )
}

export default Groups