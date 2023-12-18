"use client"
import React, { useRef } from 'react'

const GalleryImage = ({ image }) => {
    const imageRef = useRef<HTMLImageElement>(null)
    return (
        <div className='w-[40%] xs:w-40 max-w-[220px] first-letter: overflow-hidden relative flex grow items-center align-center aspect-square rounded-lg'>
            <img ref={imageRef} onClick={() => imageRef.current?.requestFullscreen()} src={image} className='h-full' alt="" />
        </div>
    )
}

export default GalleryImage