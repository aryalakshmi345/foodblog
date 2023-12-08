import React from 'react'
import { Card } from 'react-bootstrap'

function BlogView() {
  return (
    <>
         <div className='d-flex justify-content-center align-items-center ' style={{marginTop:'100px'}}>
     <Card className='mb-5 w-75 p-5'>
     <div style={{lineHeight:'12px'}} className='d-flex align-items-center'>
          <img className='mb-1' src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="profile image" style={{borderRadius:'50%',width:'40px',height:'40px'}}  />
        <div className='ms-3 d-flex'>
              <p style={{fontWeight:'100' }}>Max Miller</p>
              <p className=' ms-3' style={{color:'#454545'}}>. 21 Minutes ago</p>
        </div>
        </div>
        <Card.Title className='mb-4'>Appetizers for your dinner party</Card.Title>
      <Card.Img variant="top" className='img-fluid' src="https://static.wixstatic.com/media/da7c8999fc96430d9c80db8a8ddb093a.jpg/v1/fill/w_790,h_593,fp_0.50_0.50,q_90,enc_auto/da7c8999fc96430d9c80db8a8ddb093a.jpg" />
      <Card.Body>
        
        <Card.Text>
        Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.

        
You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow visitors to explore more of what interests them.


Create Relevant Content


Writing a blog is a great way to position yourself as an authority in your field and captivate your readers’ attention. Do you want to improve your site’s SEO ranking? Consider topics that focus on relevant keywords and relate back to your website or business. You can also add hashtags (#vacation #dream #summer) throughout your posts to reach more people, and help visitors search for relevant content.


Blogging gives your site a voice, so let your business’ personality shine through. Choose a great image to feature in your post or add a video for extra engagement. Are you ready to get started? Simply create a new post now.
        </Card.Text>      
        <hr />  
        <div>
        <i class="fa-regular fa-heart me-3"></i>
        <i class="fa-regular fa-comment "></i>
        </div>
    </Card.Body>
    </Card>   
    </div>
    </>
  )
}

export default BlogView