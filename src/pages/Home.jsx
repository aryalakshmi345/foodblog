import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogCard from '../components/BlogCard'
import AllBlogs from './AllBlogs'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div style={{width: '100%',height:'70vh',marginTop:'100px'}} className='container-fluid mb-5'>
        <Row className='align-items-center p-5'>
          <Col sm={12} md={6}>
            <h2 style={{fontWeight:'100'}} className='mb-3'> KITCHN</h2>
            <h5 style={{fontWeight:'100'}} className='mb-3'>The healthiest way to start your day ...!</h5>
            <Link to={'/login'} className='btn' style={{backgroundColor:'rgb(132, 148, 123)',color:'white',textDecoration:'none'}}>
              Let's Explore
            </Link>
          </Col>
          <Col sm={12} md={6}>
            <img style={{}} className='img-fluid' src="https://images.unsplash.com/photo-1475855664010-a869729f42c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2QlMjBibG9nJTIwcG5nfGVufDB8fDB8fHww" alt="" />
          </Col>
        </Row>
      </div> 
       {/*demo blogs  */}
       <div className="container flex-column p-5 d-flex justify-content-center align-items-center w-100">
        <Row>
          <Col sm={12} md={6}>
          <BlogCard/>
          </Col>
          <Col sm={12} md={6}>
          <BlogCard/>
          </Col>
          <Col sm={12} md={6}>
          <BlogCard/>
          </Col>
          <Col sm={12} md={6} >
          <BlogCard/>
          </Col>
        </Row>
         <Link to={'/allblogs'}>View More</Link>
       </div>
    </>
  )
}

export default Home