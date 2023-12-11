import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogCard from '../components/BlogCard'
import { Link } from 'react-router-dom'
import { homeBlogAPI } from '../services/allAPI'

function Home() {
  const [loggedIn, setLoggedin] = useState(false)
  const [homeBlogs,setHomeBlogs] = useState([])
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoggedin(true)
    }else{
      setLoggedin(false)
    }
     getHomeBlogs()
  },[])
  const getHomeBlogs = async ()=>{
    // api call
    const result = await homeBlogAPI()
    if(result.status===200){
      setHomeBlogs(result.data)
    }else{
      console.log(result);
      console.log(result.response.data);
    }
  }
  // console.log(homeBlogs);
  return (
    <>
      <div style={{width: '100%',height:'70vh',marginTop:'100px'}} className='container-fluid mb-5'>
        <Row className='d-flex justify-content-center align-items-center p-5'>
          <Col sm={12} md={5}>
            <h2 style={{fontWeight:'100'}} className='mb-3'> KITCHN</h2>
            <h5 style={{fontWeight:'100'}} className='mb-3'>The healthiest way to start your day ...!</h5>
           { loggedIn?  <Link to={'/allblogs'} className='btn' style={{backgroundColor:'rgb(132, 148, 123)',color:'white',textDecoration:'none'}}
           >
              Let's Explore
            </Link>
            :<Link to={'/login'} className='btn' style={{backgroundColor:'rgb(132, 148, 123)',color:'white',textDecoration:'none'}}
            >
               Start to Explore
             </Link>}
          </Col>
          <Col sm={12} md={5}>
            <img  className='img-fluid w-100' style={{height:'60vh'}} src="https://img.freepik.com/premium-photo/healthy-food-isolated-background_839172-820.jpg" alt="" />
          </Col>
        </Row>
      </div> 
       {/*demo blogs  */}
       <div className="container flex-column p-5 d-flex justify-content-center align-items-center w-100">
       <h4 className='mb-5'>Featured Recipes</h4>
        <Row>
          { 
           homeBlogs?.length>0?homeBlogs.map(blogs=>(
            <Col sm={12} md={6}>
            <BlogCard blogs={blogs}/>
            </Col>)
          ):null
}
        </Row>
       </div>
    </>
  )
}

export default Home