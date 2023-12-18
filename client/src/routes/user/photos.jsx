import GalleryImage from '../../components/gallery_image'
import React from 'react'

const Photos = () => {
    return (
        <div className='w-full max-w-[1050px] mx-auto'>
            <h2 className='text-2xl font-semibold px-4 py-4'>Photos</h2>
            <div className='p-2 flex justify-center gap-2 flex-wrap'>
                <GalleryImage image="/assets/images/suraj.jpg" />
                <GalleryImage image="/assets/images/aman.jpg" />
                <GalleryImage image="/assets/images/amar.jpg" />
                <GalleryImage image="/assets/images/amrita.jpg" />
                <GalleryImage image="/assets/images/Aniket_Kumar.jpg" />
                <GalleryImage image="/assets/images/injamam.jpg" />
                <GalleryImage image="/assets/images/priyanka.jpg" />
                <GalleryImage image="/assets/images/aftab.jpg" />
                <GalleryImage image="/assets/images/suraj.jpg" />
                <GalleryImage image="/assets/images/aman.jpg" />
                <GalleryImage image="/assets/images/amar.jpg" />
                <GalleryImage image="/assets/images/amrita.jpg" />
                <GalleryImage image="/assets/images/Aniket_Kumar.jpg" />
                <GalleryImage image="/assets/images/injamam.jpg" />
                <GalleryImage image="/assets/images/priyanka.jpg" />
                <GalleryImage image="/assets/images/aftab.jpg" />
            </div>
        </div>
    )
}

export default Photos