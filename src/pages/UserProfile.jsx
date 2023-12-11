import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Myprofile from '../components/MyProfile'
import MyBlogs from '../components/MyBlogs'

function UserProfile() {
  return (
    <>
     <Row style={{marginTop:'100px'}}>
     <Col className='m-5'>
       <Myprofile/>
      </Col>
      </Row>
      <Row>
      <Col >
      <MyBlogs/>
      </Col>
      </Row>



    </>
  )
}

export default UserProfile