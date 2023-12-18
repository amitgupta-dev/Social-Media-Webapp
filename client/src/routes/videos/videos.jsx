import Video from '../../components/video'
import React from 'react'

const Videos = () => {
    return (
        <>
            <div className="w-[100%] md:w-[75%] h-full px-2 overflow-y-scroll dark:bg-gray-900">
                <p className="text-2xl font-bold py-3 dark:text-white">
                    Video Feed
                </p>
                <div className="flex gap-4 flex-wrap py-2">
                    <Video video="/assets/videos/nature.mp4" />
                    <Video video="/assets/videos/NASA_Video.mp4" />
                </div>
            </div>
        </>
    )
}

export default Videos