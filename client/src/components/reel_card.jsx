import React from 'react'

const ReelCard = ({ image }) => {
    return (
        <div className="relative marker:w-1/5 h-auto min-w-[130px] overflow-hidden rounded-xl flex justify-center items-center">
            <img src={image} className="h-full" alt="image" />
        </div>
    )
}

export default ReelCard