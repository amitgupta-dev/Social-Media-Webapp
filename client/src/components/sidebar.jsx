import { Link } from 'react-router-dom'
import React from 'react'

const Sidebar = ({ options }) => {
    return (
        <div className="p-5 w-[35%] lg:w-[25%] hidden md:block mx-2 bg-blue-50 dark:bg-gray-900">
            <ul className="space-y-2 font-medium">
                {
                    options.map(({ icon, label, to }) => {
                        return (
                            <li>
                                <Link to={to} className="dark:bg-gray-800 flex items-center p-2 text-gray-900 bg-slate-200 rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group">
                                    {icon}
                                    <span className="ml-3">{label}</span>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div >
    )
}

export default Sidebar