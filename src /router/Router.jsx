import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RandingPage from '../pages/randingPage/RandingPage';
import Home from '../pages/home/Home';
import Chat from '../pages/chat/Chat';
import Write from '../pages/write/Write';
import Profile from '../pages/profile/Profile';
import Post from '../pages/post/Post';
import Modal from '../pages/modal/Modal'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<RandingPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/post' element={<Post />} />
      <Route path='/write' element={<Write />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/profile' element={<Modal />} />
    </Routes>
  );
}
