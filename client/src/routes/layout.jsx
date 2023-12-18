import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/navbar'

const Layout = () => {

    const { pathname } = useLocation()

    const displayLayout = !pathname.includes("/signup") && !pathname.includes("/login")

    return (
        <>
            {!displayLayout && < Outlet />}
            {displayLayout && <div className="h-full relative dark:bg-gray-900 dark:text-white">
                <Navbar />
                <div className="flex h-[100vh] pt-16">
                    <Outlet />
                </div>
            </div>}
        </>
    )
}

export default Layout