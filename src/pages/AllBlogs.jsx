import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogCard from '../components/BlogCard'

function AllBlogs() {
  return (
    <>
      <div className=' w-50 ms-5' style={{marginTop:'100px'}}>
            <div className="d-flex border-0 border-bottom w-50 rounded">
              <input type="text" className='form-control' placeholder='Search...'/>
              <i style={{marginLeft:'-45px',marginTop:'13px'}} class="fa-solid fa-magnifying-glass"></i>
            </div>
         </div>

         <div className="container flex-column p-5 d-flex justify-content-center align-items-center w-100">
        <Row>
          <Col sm={12} md={6}>
          <BlogCard/>
          </Col>
          <Col sm={12} md={6}>
          <BlogCard/>
          </Col>
        </Row>
       </div>
    </>
  )
}

export default AllBlogs