import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserBlogsAPI, getUserProfileAPI } from '../services/allAPI';
import { BASE_URL } from '../services/baseurl';
import { Col, Row } from 'react-bootstrap';
import BlogCard from '../components/BlogCard'

function Profiles() {
    const {userId} = useParams()
    console.log(userId);
    const [userProfile, setUserProfile] = useState({})
    const [userBlogs, setuserBlogs] = useState([])
    const getProfileDetails = async (id)=>{
    //   api call
    const result = await getUserProfileAPI(id)
    const blogResult = await getUserBlogsAPI(id)
    if(result.status===200){
        setUserProfile(result.data)
        setuserBlogs(blogResult.data)
    }else{
        console.log(result);
    }
    }
    useEffect(()=>{
        getProfileDetails(userId)
    },[])
    console.log(userBlogs);
  return (
    <>
        <div style={{marginTop:'100px'}} className='d-flex align-items-center justify-content-center w-100'>
            <div className='d-flex align-items-top justify-content-between mb-2 rounded shadow m-5  p-4' style={{width:"58%",}} >
         <div>
            <label>
                <img style={{borderRadius:'5%',height:'260px',width:'260px'}} className='img-fluid mb-3' src={userProfile.profile?`${BASE_URL}/uploads/${userProfile.profile}`:"https://sandcliffsales.com/static/assets/img/team/default-profile.png"} alt="" />
                </label>
         </div>
             <div className='mt-5'>
               <h3 >{userProfile.username}</h3>
               <h5>{userProfile.profession}</h5>
               <p>{userProfile.bio}</p>
               {
                userProfile.website &&
                <p>Visit my Website: <a href={userProfile.website} target='_id'>{userProfile.website}</a></p>
                
               }
  
             </div>
           </div>
        </div>
        <div className="container flex-column p-5 d-flex justify-content-center align-items-center w-100">
            <h2 className='mb-5'>All Posts</h2>
        <Row>
            {
                userBlogs?.length>0?userBlogs.map((blogs)=>(
                    <Col sm={12} md={6} lg={6}>
                    <BlogCard blogs={blogs}/>
                </Col>
                )):null
            }
        
        </Row>
        </div>

    </>
  )
}

export default Profiles