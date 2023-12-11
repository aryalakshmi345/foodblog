import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getABlogAPI } from '../services/allAPI'
import { BASE_URL } from '../services/baseurl'

function BlogView() {
  const {_id} = useParams()
  // console.log(_id);
  // const [blogId, setBlogId] = useState("")
  const [blogDetails,setBlogdetails] = useState([])
  const handleView = async(id)=>{
    // api call
    const result = await getABlogAPI(id)
    if(result.status===200){
      setBlogdetails(result.data)
    }else{
      console.log(result);
    }
  }
  useEffect(()=>{
    handleView(_id)
  },[])
  // console.log(blogDetails);
  return (
    <>
         <div className='d-flex justify-content-center align-items-center ' style={{marginTop:'100px'}}>
     <Card className='mb-5 w-75 p-5'>
     <div style={{lineHeight:'12px'}} className='d-flex align-items-center'>
          <img className='mb-1' src={blogDetails.profile?`${BASE_URL}/uploads/${blogDetails.profile}`:"https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" }alt="profile image" style={{borderRadius:'50%',width:'40px',height:'40px'}}  />
        <div className='ms-3 d-flex'>
              <p style={{fontWeight:'100' }}>{blogDetails.username}</p>
              <p className=' ms-3' style={{color:'#454545'}}>. {blogDetails.timestamp}</p>
        </div>
        </div>
        <Card.Title className='mb-4'>{blogDetails.title}</Card.Title>
      <Card.Img variant="top" className='img-fluid' style={{height:'750px'}} src={blogDetails?`${BASE_URL}/uploads/${blogDetails?.blogImage}`:null} />
      <Card.Body>
        
        <Card.Text>{blogDetails.blogContent}</Card.Text>  
        <Card.Text><h6>Incredients</h6></Card.Text>  
        <Card.Text>{blogDetails.incredients}</Card.Text> 
        <Card.Text><h6>Recipe</h6></Card.Text>   
        <Card.Text>{blogDetails.recipe}</Card.Text> 
        <Card.Text><i class="fa-regular fa-clock"></i> {blogDetails.cuisineType}</Card.Text> 

      
    </Card.Body>
    </Card>   
    </div>
    </>
  )
}

export default BlogView