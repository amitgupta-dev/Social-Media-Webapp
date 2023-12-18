import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addEducation } from '../../../redux/slices/EditProfileSlice';

const AddEducation = ({ setIsAddingEducation }) => {

    const [newEducation, setNewEducation] = useState()

    const dispatch = useDispatch()

    const addNewEducation = () => {
        setIsAddingEducation(false)
        dispatch(addEducation(newEducation))
        console.log(newEducation)
    }

    return (
        <div className="fixed w-full max-w-[1050px] backdrop-blur-sm h-[100vh]">
            <div className="relative top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-60%] flex flex-wrap bg-white border-2 border-gray-300 rounded-lg p-5 w-full max-w-lg px-4">
                <div className="w-full mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">Course</label>
                    <input type="text" onChange={(event) => setNewEducation({ ...newEducation, course: event.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="w-full mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">Institute / University / School name</label>
                    <input type="text" onChange={(event) => setNewEducation({ ...newEducation, organization: event.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="w-full mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">from</label>
                    <input type="date" onChange={(event) => setNewEducation({ ...newEducation, from: event.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="w-full mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">to</label>
                    <input type="date" onChange={(event) => setNewEducation({ ...newEducation, to: event.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex gap-5 w-full">
                    <button onClick={addNewEducation} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                    <button onClick={() => setIsAddingEducation(false)} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default AddEducation