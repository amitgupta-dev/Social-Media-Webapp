import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addWork } from '../../../redux/slices/EditProfileSlice';

const AddWork = ({ setIsAddingWork }) => {

    const [newWork, setNewWork] = useState()

    const dispatch = useDispatch()

    const addNewWork = () => {
        setIsAddingWork(false)
        dispatch(addWork(newWork))
        console.log(newWork,)
    }

    return (
        <div className="fixed w-full max-w-[1050px] backdrop-blur-sm h-[100vh]">
            <div className="relative top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-60%] flex flex-wrap bg-white border-2 border-gray-300 rounded-lg p-5 w-full max-w-lg px-4">
                <div className="w-full mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">Role</label>
                    <input type="text" onChange={(event) => { setNewWork({ ...newWork, position: event.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="For ex:- Manager" />
                </div>
                <div className="w-full mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">Organization name</label>
                    <input type="text" onChange={(event) => { setNewWork({ ...newWork, organization: event.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="w-full mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">from</label>
                    <input type="date" onChange={(event) => { setNewWork({ ...newWork, from: event.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="w-full mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">to</label>
                    <input type="date" onChange={(event) => { setNewWork({ ...newWork, to: event.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="flex gap-5 w-full">
                    <button onClick={addNewWork} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                    <button onClick={() => setIsAddingWork(false)} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default AddWork