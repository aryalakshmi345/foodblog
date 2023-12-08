import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function BlogCard() {
  return (
    <div className='d-flex justify-content-center align-items-center ' >
     <Card className='mb-5 w-100'>
      <Card.Img variant="top" src="https://static.wixstatic.com/media/da7c8999fc96430d9c80db8a8ddb093a.jpg/v1/fill/w_790,h_593,fp_0.50_0.50,q_90,enc_auto/da7c8999fc96430d9c80db8a8ddb093a.jpg" />
      <Card.Body>
        <div style={{lineHeight:'12px'}} className=''>
          <img className='mb-1' src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="profile image" style={{borderRadius:'50%',width:'40px',height:'40px'}}  />
          <p style={{fontWeight:'100' }}>Max Miller</p>
          <p>21 Minutes ago</p>
        </div>
        <Card.Title>Appetizers for your dinner party</Card.Title>
        <Card.Text>
        Welcome to your blog post. Use this space to connect with your readers and potential  <Link to={'/blogview'}>Read more</Link>
        </Card.Text>      
        <hr />  
        <div>
        <i class="fa-regular fa-heart me-3"></i>
        <i class="fa-regular fa-comment "></i>
        </div>
    </Card.Body>
    </Card>   
    </div>
  )
}

export default BlogCard