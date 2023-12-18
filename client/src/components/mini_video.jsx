import React, { useRef } from 'react'

const MiniVideo = ({ video }) => {
    const videoRef = useRef < HTMLVideoElement > (null)

    const handleFullscreen = () => {
        const currentVideo = videoRef.current
        if (currentVideo?.requestFullscreen) {
            currentVideo.requestFullscreen()
            currentVideo.muted = false
        }
    }

    return (
        <div className='w-[40%] cursor-pointer xs:w-40 max-w-[220px] first-letter: overflow-hidden relative flex grow items-center align-center aspect-square rounded-lg'>
            <video onClick={handleFullscreen} ref={videoRef} onMouseOver={() => videoRef.current?.play()} onMouseOut={() => videoRef.current?.pause()} className='rounded-lg' src={video} />
        </div>
    )
}

export default MiniVideo