import FriendCard from '../../components/friend_card'
import React from 'react'

const UserFriends = () => {
    return (
        <div className='w-full max-w-[1050px] bg-gray-100 mx-auto my-2'>
            <h2 className='text-2xl font-semibold px-4 pt-4'>Friends</h2>
            <div className='w-full flex flex-wrap p-4 gap-4'>
                <FriendCard image="/assets/images/Aniket_Kumar.jpg" name="Aniket Kumar" friends={5} />
                <FriendCard image="/assets/images/aftab.jpg" name="Md Aftab" friends={2} />
                <FriendCard image="/assets/images/injamam.jpg" name="Injamamul" friends={4} />
                <FriendCard image="/assets/images/aman.jpg" name="Aman Kumar" friends={5} />
                <FriendCard image="/assets/images/amar.jpg" name="Amarnath" friends={7} />
                <FriendCard image="/assets/images/amrita.jpg" name="Ankita" friends={6} />
                <FriendCard image="/assets/images/suraj.jpg" name="Suraj" friends={8} />
                <FriendCard image="/assets/images/priyanka.jpg" name="Priyanka Kumari" friends={3} />
            </div>
        </div>
    )
}

export default UserFriends