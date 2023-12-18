import React, { useState } from 'react'
import { addPlacesLived } from '../../../redux/slices/EditProfileSlice';
import { useDispatch } from 'react-redux';

const AddPlacesLived = ({ setIsAddingLocation }) => {

    const [newLocation, setNewLocation] = useState()

    const dispatch = useDispatch()

    const addNewLocation = () => {
        setIsAddingLocation(false)
        dispatch(addPlacesLived(newLocation))
        console.log(newLocation)
    }

    return (
        <div className="fixed w-full max-w-[1050px] backdrop-blur-sm h-[100vh]">
            <div className="relative top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-60%] flex flex-wrap bg-white border-2 border-gray-300 rounded-lg p-5 w-full max-w-lg px-4">
                <div className="w-full mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">location</label>
                    <input type="password" onChange={(event) => setNewLocation({ ...newLocation, location: event.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="w-full mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">from</label>
                    <input type="date" onChange={(event) => setNewLocation({ ...newLocation, from: event.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="w-full mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">to</label>
                    <input type="date" onChange={(event) => setNewLocation({ ...newLocation, to: event.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="flex gap-5 w-full">
                    <button onClick={addNewLocation} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                    <button onClick={() => setIsAddingLocation(false)} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default AddPlacesLived