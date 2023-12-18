import SigninForm from './components/signin_form'
import React from 'react'

const LogIn = () => {
    return (
        <div className="flex flex-col h-[100vh] items-center justify-center px-6 py-8 mx-auto lg:py-0 bg-no-repeat bg-cover bg-center bg-gray-50 dark:bg-gray-900" style={{ "backgroundImage": "url('/assets/images/valley.svg')" }}>
            <div className="w-full backdrop-blur-md bg-[rgba(225,225,225,0.5)] border-[rgba(0,0,0,0.2)] border-2 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <img className='mx-auto w-48 pt-5' src="/assets/icons/treddy_logo_2d.png" alt="" />
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl p-auto font-bold text-gray-900 md:text-2xl">
                        Sign in to your account
                    </h1>
                    <SigninForm />
                </div>
            </div>
        </div>
    )
}

export default LogIn