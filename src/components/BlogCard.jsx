import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../services/baseurl'

function BlogCard({blogs}) {
  const [currentUser,setCurrentUser] = useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setCurrentUser(JSON.parse(sessionStorage.getItem("existingUser"))._id)
    }
  },[])
  // console.log(currentUser);
  return (
    <div className='d-flex justify-content-center align-items-center ' >
     <Card className='mb-5 w-100'>
      <Card.Img variant="top" className='img-fluid' style={{height:'500px'}}  src={blogs?`${BASE_URL}/uploads/${blogs?.blogImage}`:null} />
      <Card.Body>
        <div style={{lineHeight:'12px'}} className=''>
          <div className='d-flex justify-content-between'>
            { currentUser ?
               currentUser === blogs?.userId ?
               <Link to={`/userprofile`}><img className='mb-1' src={blogs.profile?`${BASE_URL}/uploads/${blogs.profile}`:"https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"} alt="profile image" style={{borderRadius:'50%',width:'40px',height:'40px'}}  /></Link>:
               <Link to={`/profile/${blogs?.userId}`}><img className='mb-1' src={blogs.profile?`${BASE_URL}/uploads/${blogs.profile}`:"https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"} alt="profile image" style={{borderRadius:'50%',width:'40px',height:'40px'}}  /></Link>
               :
               <img className='mb-1' src={blogs.profile?`${BASE_URL}/uploads/${blogs.profile}`:"https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"} alt="profile image" style={{borderRadius:'50%',width:'40px',height:'40px'}}  />
  
            }
            <div className='d-flex'>
            <i class="fa-regular fa-clock"></i>
            <p>{blogs.cuisineType}</p>
            </div>
          </div>
       
          <p style={{fontWeight:'100' }} className='mt-2'>{blogs.username}</p>
          <p className='mt-2'>{blogs.timestamp}</p>
        </div>
        <Card.Title>{blogs.title}</Card.Title>
        <Card.Text className='mb-4'>
        {(blogs.blogContent).slice(0,110)}...<Link to={`/blogview/${blogs?._id}`}>Read more</Link>
        </Card.Text>      
    </Card.Body>
    </Card>   
    </div>
  )
}

export default BlogCard