import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar className="bg-light position-fixed top-0 w-100" style={{backgroundColor:'#f5f5f5',zIndex:"1"}} >
        <Container>
          <Navbar.Brand>
          <Link to={'/'} style={{textDecoration: 'none', color:'black'}}>
               KITCHN
          </Link>
          </Navbar.Brand>
        </Container>
         <Link to={'/userprofile'}> <i class="text-dark fa-solid fa-user me-5 ms-3"></i></Link>
      </Navbar>
    </>
  )
}

export default Header