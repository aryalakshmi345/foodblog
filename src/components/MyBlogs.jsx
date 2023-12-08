import React from 'react'
import { Link } from 'react-router-dom'
import AddBlog from '../components/AddBlog'


function MyBlogs() {
  return (
  <>
      <div>
        <div className='d-flex mb-4'>
       <h5 className='ms-3'>All Posts</h5>
        <div className='ms-auto'>
            <AddBlog/>
        </div>
   </div>
   <div className='d-flex'>

         <div>
         <img style={{width:'250px',height:'200px'}} src="https://static.wixstatic.com/media/da7c8999fc96430d9c80db8a8ddb093a.jpg/v1/fill/w_790,h_593,fp_0.50_0.50,q_90,enc_auto/da7c8999fc96430d9c80db8a8ddb093a.jpg" alt="blogimage" />
         </div>
          <div className='ms-5'>
            <h6>Appetizers for your dinner party</h6>
           <p>  Welcome to your blog post. Use this space to connect with your readers and potential. Use this space to connect with your readers and potential   <Link to={'/blogview'}>Read more</Link></p>
           <p>21 Minutes ago</p>
          <div className='me-auto d-flex align-items-end justify-content-end'>
             <i class="fa-regular fa-pen-to-square me-3"></i>
             <i class="fa-solid fa-trash"></i>
          </div>
          </div>
          </div>
          <hr className='ms-5' style={{width:"100%"}}/>
      </div>
  </>
  )
}

export default MyBlogs