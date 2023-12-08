import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Category from './pages/Category'
import UserProfile from './pages/UserProfile'
import AllBlogs from './pages/AllBlogs'
import { Route, Routes } from 'react-router-dom';
import BlogView from './pages/BlogView';



function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/allblogs' element={<AllBlogs/>}/>
        <Route path='/blogview' element={<BlogView/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
