import React from 'react'
import { MdDeleteForever } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { setWork } from '../../../redux/slices/EditProfileSlice'

const WorkCard = ({ index }) => {

    const dispatch = useDispatch()
    const workData = useSelector((state) => state.editProfile.work)

    return (
        <div className="flex flex-wrap gap-y-4 bg-red-50 w-full gap-x-[1%] rounded-md p-4 mb-4">
            <div className="relative w-full">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Organization name
                </label>
                <input type="text"
                    value={workData[index].organization}
                    onChange={(event) => { dispatch(setWork({ index: index, field: "organization", value: event.target?.value })); console.log(workData) }}
                    className="p-3 placeholder-blueGray-300 text-blueGray-600 border-2 border-gray-300 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
            </div>
            <div className="relative w-full md:w-1/2">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Designation
                </label>
                <input type="text" value={workData[index].position} onChange={(event) => dispatch(setWork({ index: index, field: "position", value: event.target.value }))} className="p-3 placeholder-blueGray-300 text-blueGray-600 border-2 border-gray-300 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
            </div>
            <div className="relative w-full md:w-[19%]">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    From
                </label>
                <input type="date" value={workData?.[index]?.from} onChange={(event) => dispatch(setWork({ index: index, field: "from", value: event.target?.value }))} className="p-3 placeholder-blueGray-300 text-blueGray-600 border-2 border-gray-300 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
            </div>
            <div className="relative w-full md:w-[19%]">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    To
                </label>
                <input type="date" value={workData?.[index]?.to} onChange={(event) => dispatch(setWork({ index, field: "to", value: event.target?.value }))} className="p-3 placeholder-blueGray-300 text-blueGray-600 border-2 border-gray-300 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
            </div>
            <button type="button" className="flex items-center justify-center rounded-md border-2 border-gray-300 bg-gray-100 py-2 md:mt-6 w-full md:w-[9%]">
                <MdDeleteForever size={25} />
            </button>
        </div>

    )
}

export default WorkCard