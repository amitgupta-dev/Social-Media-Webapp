import React from 'react'
import Sidebar from '../components/sidebar'
import ReelCard from '../components/reel_card'
import Post from '../components/post'
import { FaCircleUser } from "react-icons/fa6"
import { FaUserFriends } from "react-icons/fa"
import { SiFeedly } from "react-icons/si"
import { HiUserGroup } from "react-icons/hi"
import { BiSolidVideos } from "react-icons/bi"
import Contact from '../components/contact'
import { useSelector } from 'react-redux'
import { useGetPostsQuery } from '../redux/requests/post'

const Home = () => {

  const { data, error, isLoading } = useGetPostsQuery()
  const user = useSelector(state => state.user)
  return (
    <>
      <Sidebar options={[
        { icon: <FaCircleUser size={25} />, label: user.data?.name, to: user.data?._id },
        { icon: <FaUserFriends size={25} />, label: "Find Friends", to: "/friends" },
        { icon: <HiUserGroup size={25} />, label: "Groups", to: "/groups" },
        { icon: <SiFeedly size={25} />, label: "Feeds", to: "/" },
        { icon: <BiSolidVideos size={25} />, label: "Videos", to: "/videos" }
      ]} />
      <div className="w-full h-full md:w-[65%] lg:w-[50%] flex flex-col dark:bg-gray-900 overflow-y-scroll items-center mx-0">
        <section title="reels" className="flex gap-4 w-full h-64  min-h-[250px] py-5 px-5 no-scrollbar overflow-x-auto">
          <ReelCard image="https://images.pexels.com/photos/3108310/pexels-photo-3108310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <ReelCard image="https://images.pexels.com/photos/15479718/pexels-photo-15479718/free-photo-of-a-cat-with-green-eyes-is-looking-at-the-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <ReelCard image="https://images.pexels.com/photos/6589526/pexels-photo-6589526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <ReelCard image="https://images.pexels.com/photos/15479523/pexels-photo-15479523/free-photo-of-photo-of-james-a-dog-in-kansas-city-ks-usa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <ReelCard image="https://images.pexels.com/photos/12815734/pexels-photo-12815734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <ReelCard image="https://images.pexels.com/photos/15479483/pexels-photo-15479483/free-photo-of-a-brown-and-white-dog-standing-in-front-of-a-fence.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </section>

        <section title="posts" className="gap-5 px-2 py-2 dark:bg-gray-900 flex flex-col items-center w-full h-auto sm:p-5">
          <div className="px-2 py-2 bg-pink-100 dark:bg-gray-800 shadow rounded-full w-full">
            <div className="flex">
              <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              <input type="text" className="bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:caret-gray-500 border border-gray-400 rounded-xl mx-2 my-1 w-full focus:outline-none focus:border-gray-500 px-4" placeholder=" What's in your mind ?" />
            </div>
          </div>
          {
            data?.posts?.map(post => <Post postData={post} />)
          }
        </section>
      </div >
      <div className="px-5 w-[25%] hidden lg:block mx-2 bg-blue-50 dark:bg-gray-900">
        <p className='text-xl py-2 font-semibold opacity-80 dark:text-white'>Contacts</p>
        <ul className="space-y-2 font-medium">
          <Contact name="Aman Goel" />
          <Contact name="Suraj Lal Mehta" />
          <Contact name="Rita" />
          <Contact name="Aniket Kumar" />
          <Contact name="Rishi Kumar" />
        </ul>
      </div >
    </>
  )
}

export default Home
