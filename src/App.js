import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Category from './pages/Category'
import UserProfile from './pages/UserProfile'
import AllBlogs from './pages/AllBlogs'
import Profiles from './components/Profiles';
import { Route, Routes } from 'react-router-dom';
import BlogView from './pages/BlogView';
import { useContext, useState } from 'react';
import { loginResponseContext } from './Context/LoginContext';



function App() {
  const {loginResponse, setLoginResponse} = useContext(loginResponseContext)
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={loginResponse?<Home/>:<Auth />}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/userprofile' element={loginResponse?<UserProfile />:<Home/>}/>
        <Route path='/allblogs' element={<AllBlogs/>}/>
        <Route path='/blogview/:_id' element={<BlogView/>}/>
        <Route path='/profile/:userId' element={<Profiles/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
