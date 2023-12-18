import MiniVideo from '../../components/mini_video'
import React from 'react'

const Videos = () => {
    return (
        <div className='w-full max-w-[1050px] mx-auto'>
            <h2 className='text-2xl font-semibold px-4 py-4'>Videos</h2>
            <div className='p-2 flex justify-center gap-2 flex-wrap'>
                <MiniVideo video="/assets/videos/vid1.mp4" />
                <MiniVideo video="/assets/videos/vid2.mp4" />
                <MiniVideo video="/assets/videos/vid3.mp4" />
                <MiniVideo video="/assets/videos/vid4.mp4" />
                <MiniVideo video="/assets/videos/vid5.mp4" />
                <MiniVideo video="/assets/videos/vid6.mp4" />
                <MiniVideo video="/assets/videos/vid7.mp4" />
                <MiniVideo video="/assets/videos/vid8.mp4" />
                <MiniVideo video="/assets/videos/vid9.mp4" />
                <MiniVideo video="/assets/videos/vid10.mp4" />
                <MiniVideo video="/assets/videos/vid1.mp4" />
                <MiniVideo video="/assets/videos/vid2.mp4" />
                <MiniVideo video="/assets/videos/vid3.mp4" />
                <MiniVideo video="/assets/videos/vid4.mp4" />
                <MiniVideo video="/assets/videos/vid5.mp4" />
                <MiniVideo video="/assets/videos/vid6.mp4" />
                <MiniVideo video="/assets/videos/vid7.mp4" />
                <MiniVideo video="/assets/videos/vid8.mp4" />
                <MiniVideo video="/assets/videos/vid9.mp4" />
                <MiniVideo video="/assets/videos/vid10.mp4" />
            </div>
        </div>
    )
}

export default Videos