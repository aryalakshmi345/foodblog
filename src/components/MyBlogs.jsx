import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddBlog from '../components/AddBlog'
import { deleteBlogAPI, userBlogAPI } from '../services/allAPI'
import { BASE_URL } from '../services/baseurl'
import { addprojectResponseContext, editBlogResponseContex } from '../Context/ContextShare'
import EditBlog from './EditBlog'


function MyBlogs() {
  const {editBlogResponse,setEditBlogResponse} = useContext(editBlogResponseContex)
  const {addProjectResponse,setAddProjectResponse} = useContext(addprojectResponseContext)
  const [userBlogs,setUserBlogs] = useState([])
  const getUserBlogs = async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type" : "multipart/form-data",
        "Authorization" : `Bearer ${token}`
      }
      const result = await userBlogAPI(reqHeader)
      if(result.status===200){
        setUserBlogs(result.data)
      }else{
        console.log(result);
      }
    }
  }
  useEffect(()=>{
    getUserBlogs()
  },[addProjectResponse,editBlogResponse])

  const handleDelete = async (id)=>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type" : "application/json",
      "Authorization" : `Bearer ${token}`
    }
    const result = await deleteBlogAPI(id,reqHeader)
    if(result.status===200){
      getUserBlogs()
    }else{
      console.log(result.response);
    }
  }
  return (
  <>
      <div className='p-5'>
        <div className='d-flex mb-4'>
       <h5 className='ms-3'>All Posts</h5>
        <div className='ms-auto'>
            <AddBlog/>
        </div>
   </div>
   { userBlogs?.length>0?userBlogs.map(blogs=>(
     <div>
     <div className='d-flex w-75'>
           <div>
           <img style={{width:'250px',height:'200px'}} src={blogs?`${BASE_URL}/uploads/${blogs.blogImage}`:null} alt="blogimage" />
           </div>
            <div className='ms-5'>
              <h6>{blogs.title}</h6>
             <p>  {(blogs.blogContent).slice(0,110)}...<Link to={`/blogview/${blogs?._id}`}>Read more</Link></p>
             <p>{blogs.timestamp}</p>
            <div className='me-auto d-flex align-items-end justify-content-end'>
               <EditBlog blogs={blogs}/>
               <button className='btn' onClick={()=>handleDelete(blogs._id)}><i class="fa-solid fa-trash fs-5"></i></button>
            </div>
            </div>
            </div>
            <hr className='ms-5 w-75'/>
        </div>
   )): <p>No Blogs Uploaded Yet..!</p>
    }
        
   </div>
  </>
  )
}

export default MyBlogs