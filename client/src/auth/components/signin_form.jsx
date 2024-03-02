import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail, setSigninPassword, setRememberMe } from '../../redux/slices/SigninSlice'

const SigninForm = () => {

    const [isLoading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const signin_data = useSelector((state) => state.signin)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setLoading(true)
            await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`, signin_data, { withCredentials: true })
            navigate('/')
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" onChange={(e) => dispatch(setEmail(e.target.value))} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required={true} />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" onChange={(e) => dispatch(setSigninPassword(e.target.value))} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" onChange={(e) => { dispatch(setRememberMe(e.target.checked)) }} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                </div>
                <Link href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
            </div>
            <button type="submit" className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Signin</button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet? <Link to="/signup" className="font-medium text-violet-600 hover:underline dark:text-primary-500">Sign up</Link>
            </p>
        </form>
    )
}
export default SigninForm