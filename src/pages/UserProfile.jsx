import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Myprofile from '../components/MyProfile'
import MyBlogs from '../components/MyBlogs'

function UserProfile() {
  return (
    <>
     <Row style={{marginTop:'100px',width:'100%'}}>
     <Col sm={12} md={3}  className='m-5'>
       <Myprofile/>
      </Col>
      <Col sm={12} md={8}>
      <MyBlogs/>
      </Col>


     </Row>
    </>
  )
}

export default UserProfile