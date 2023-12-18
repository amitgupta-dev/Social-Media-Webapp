import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setName, setEmail, setPassword, setAcceptTAndC, setGender, setDob } from '../../redux/slices/SignupSlice'
import axios from 'axios'

const SignupForm = () => {

    const [isLoading, setLoading] = useState(false)

    const dispatch = useDispatch()
    const signup_data = useSelector((state) => state.signup)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setLoading(true)
            const response = await axios.post("api/user/signup", signup_data)
            console.log(response)
        }
        catch (err) {
            console.log("Signup Failed", err.message)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <form className=" w-full space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <h1 className="text-xl text-center font-bold md:text-2xl">
                Sign up to your account
            </h1>
            <div className=' w-full flex flex-wrap gap-5'>
                <div className='w-full sm:w-1/3 flex-grow'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" name="name" id="name" onChange={(e) => dispatch(setName(e.target.value))} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required={true} />
                </div>
                <div className='w-full sm:w-1/3 flex-grow'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" name="email" id="email" onChange={(e) => dispatch(setEmail(e.target.value))} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required={true} />
                </div>
                <div className='w-full sm:w-1/3 flex-grow'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" onChange={(e) => dispatch(setPassword(e.target.value))} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                </div>
                <div className='w-full sm:w-1/3 flex-grow'>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                    <input type="date" name="dob" id="dob" onChange={(e) => dispatch(setDob(e.target.value))} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required={true} />
                </div>
                <div className="w-full px-2 gap-2 items-center">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                    <div className='flex gap-5'>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <input type="radio" name="gender" value="Male" onChange={(e) => dispatch(setGender(e.target.value))} required />
                                <span className="label-text text-sm px-2">Male</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <input type="radio" name="gender" value="Female" onChange={(e) => dispatch(setGender(e.target.value))} required />
                                <span className="label-text text-sm px-2">Female</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <input type="radio" name="gender" value="Others" onChange={(e) => dispatch(setGender(e.target.value))} required />
                                <span className="label-text text-sm px-2">Others</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" onChange={(e) => dispatch(setAcceptTAndC(e.target.checked))} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required={true} />
                </div>
                <div className="ml-3 text-sm">
                    <label className="font-light text-gray-500 dark:text-gray-300">I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</Link></label>
                </div>
            </div>
            <button type="submit" className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Signup</button>
            <div className=' w-full flex justify-between'>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?
                    <Link href="/signin" className="font-medium text-violet-600 hover:underline dark:text-primary-500">Login here</Link>
                </p>
                <p className={`text-gray-500 animate-pulse hidden ${isLoading && "block"}`}>User is being created...</p>
            </div>
        </form >
    )
}

export default SignupForm