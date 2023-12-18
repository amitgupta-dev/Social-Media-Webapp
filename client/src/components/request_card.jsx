import { Link } from 'react-router-dom'
import React from 'react'

const RequestCard = ({ image, name, friends }) => {
    return (
        <div className="w-full flex justify-center xs:flex-col items-center xs:items-initial xs:max-w-[200px] min-w-[100px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to="/user/posts" className="rounded-full xs:rounded-none overflow-hidden m-2 xs:m-0">
                <img className="xs:rounded-t-lg rounded-full xs:rounded-none max-w-24 max-h-24 xs:max-w-48 xs:max-h-48 " src={image} alt="" />
            </Link>
            <div className="p-4 w-full">
                <Link to="#">
                    <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </Link>
                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{friends} mutual friends</p>
                <div className="flex gap-2 xs:flex-col">
                    <Link to="#" className="inline-flex w-full items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add Friend
                    </Link>
                    <Link to="#" className="inline-flex w-full items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Remove
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RequestCard