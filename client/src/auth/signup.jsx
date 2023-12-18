import React from 'react'
import SignupForm from './components/signup_form'

const SignUp = () => {
    return (
        <div className="h-auto min-h-[100vh] flex justify-center items-center overflow-y-scroll bg-no-repeat bg-cover bg-center bg-fixed" style={{ "backgroundImage": "url('/assets/images/valley.svg')" }}>
            <div className="max-w-[1024px] m-5 p-5 xs:m-10 rounded-lg backdrop-blur-md bg-[rgba(225,225,225,0.5)] border-[rgba(0,0,0,0.2)] border-2">
                <img className='mx-auto w-48 mb-2' src="/assets/icons/treddy_logo_2d.png" alt="" />
                <SignupForm />
            </div>
        </div>
    )
}

export default SignUp