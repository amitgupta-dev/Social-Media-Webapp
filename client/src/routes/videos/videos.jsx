import Video from '../../components/video'
import React from 'react'
import { useGetPostsQuery } from '../../redux/requests/post'
import Post from '../../components/post'

const Videos = () => {
    const { data, isLoading, error } = useGetPostsQuery("postType=video")
    return (
        <div className="w-[100%] md:w-[75%] h-full px-2 overflow-y-scroll dark:bg-gray-900">
            <p className="text-2xl font-bold py-3 dark:text-white">
                Video Feed
            </p>
            <div className="flex gap-4 flex-wrap py-2">
                {data?.posts?.map(post => <Post postData={post} />)}
            </div>
        </div>
    )
}

export default Videos