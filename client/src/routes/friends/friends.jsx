import RequestCard from '../../components/request_card'
import React from 'react'

const Friends = () => {
    return (
        <>
            <div className="w-[100%] md:w-[75%] h-full px-2 overflow-y-scroll dark:bg-gray-900 dark:text-white">
                <p className="text-2xl font-bold py-3">
                    People you may know
                </p>
                <div className="flex gap-4 flex-wrap dark:bg-gray-900 py-2">
                    <RequestCard image="/assets/images/Aniket_Kumar.jpg" name="Aniket Kumar" friends={5} />
                    <RequestCard image="/assets/images/aftab.jpg" name="Md Aftab" friends={2} />
                    <RequestCard image="/assets/images/injamam.jpg" name="Injamamul" friends={4} />
                    <RequestCard image="/assets/images/aman.jpg" name="Aman Kumar" friends={5} />
                    <RequestCard image="/assets/images/amar.jpg" name="Amarnath" friends={7} />
                    <RequestCard image="/assets/images/amrita.jpg" name="Ankita" friends={6} />
                    <RequestCard image="/assets/images/suraj.jpg" name="Suraj" friends={8} />
                    <RequestCard image="/assets/images/priyanka.jpg" name="Priyanka Kumari" friends={3} />
                </div>
            </div>
        </>
    )
}

export default Friends