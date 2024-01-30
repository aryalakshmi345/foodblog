import React, { useContext, useEffect, useState } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { loginResponseContext } from '../Context/LoginContext'
import { editProfileResponseContext } from '../Context/ContextShare'
import { BASE_URL } from '../services/baseurl'

function Header() {
  const {loginResponse, setLoginResponse} = useContext(loginResponseContext)
  const {editProfileResponse,setEditProfileResponse} = useContext(editProfileResponseContext)
  const [loggedIn, setLoggedin] = useState(false)
  const [username, setUsername] = useState("")
  const [profile, setProfile] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setLoggedin(true)
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
      setProfile(JSON.parse(sessionStorage.getItem("existingUser")).profile)
    }else{
      setLoggedin(false)
    }
  },[loginResponse,editProfileResponse])
  return (
    <>
      <Navbar className="bg-light position-fixed top-0 w-100" style={{backgroundColor:'#f5f5f5',zIndex:"1",height:'15vh'}} >
        <Container>
          <Navbar.Brand>
          <Link to={'/'} style={{textDecoration: 'none', color:'black'}}>
               KITCHN
          </Link>
          </Navbar.Brand>
        </Container>
        { 
         loggedIn ?
        <Link to={'/userprofile'} style={{color:'black',textDecoration:'none',width:'18%'}} className=' d-flex align-items-center me-5'><img  style={{height:'35px',width:'35px',borderRadius:'50%'}} src={profile?`${BASE_URL}/uploads/${profile}`:"https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"} alt="" /> <h6 style={{fontWeight:'100'}} className='mt-2 ms-2' >{username}</h6> </Link>
        :
        <Link to={'/login'} style={{color:'black',textDecoration:'none',fontWeight:'100'}}><h6 style={{fontWeight:'100'}} className='me-5'>LOGIN</h6></Link>
        }
      </Navbar>
    </>
  )
}

export default Header