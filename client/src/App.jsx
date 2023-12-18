import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from './auth/signup'
import Login from './auth/login'
import Layout from './routes/layout'
import Home from './routes/home'
import FriendsLayout from './routes/friends/friends_layout'
import Friends from './routes/friends/friends'
import AllFriends from './routes/friends/all_friends'
import Suggestions from './routes/friends/suggestions'
import Birthdays from './routes/friends/birthdays'
import VideosLayout from './routes/videos/videos_layout'
import Videos from './routes/videos/videos'
import Reels from './routes/videos/reels'
import Explore from './routes/videos/explore'
import GroupsLayout from './routes/groups/groups_layout'
import Groups from './routes/groups/groups'
import YourGroups from './routes/groups/your_groups'
import CreateGroup from './routes/groups/create_group'
import UserLayout from './routes/user/user_layout'
import Posts from './routes/user/posts'
import About from './routes/user/about'
import UserFriends from './routes/user/friends'
import Photos from './routes/user/photos'
import UserVideos from './routes/user/videos'
import EditProfile from './routes/user/edit_profile'
import Notifications from './routes/user/notifications'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Routes >
          <Route path="/" element={<Layout />}>

            {/* home */}
            <Route path="" element={<Home />} />

            {/* Auth */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Friends */}
            <Route path="friends" element={<FriendsLayout />}>
              <Route path="" element={<Friends />} />
              <Route path="allfriends" element={<AllFriends />} />
              <Route path="suggestions" element={<Suggestions />} />
              <Route path="birthdays" element={<Birthdays />} />
            </Route>

            {/* Videos */}
            <Route path="videos" element={<VideosLayout />}>
              <Route path="" element={<Videos />} />
              <Route path="reels" element={<Reels />} />
              <Route path="explore" element={<Explore />} />
            </Route>

            {/* Groups */}
            <Route path="groups" element={<GroupsLayout />}>
              <Route path="" element={<Groups />} />
              <Route path="yourgroups" element={<YourGroups />} />
              <Route path="creategroup" element={<CreateGroup />} />
            </Route>

            {/* User */}
            <Route path=":id" element={<UserLayout />}>
              <Route path="" element={<Posts />} />
              <Route path="about" element={<About />} />
              <Route path="friends" element={<UserFriends />} />
              <Route path="photos" element={<Photos />} />
              <Route path="videos" element={<UserVideos />} />
            </Route>

            {/* Others */}
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/notifications" element={<Notifications />} />
          </Route>
        </Routes >
      </Provider>
    </Router>
  )
}

export default App

