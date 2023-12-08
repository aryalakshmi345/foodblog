import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../services/allAPI';

function Auth({register}) {
  const [userData, setUserData] = useState({
    username:"",email:"",password:""
  })
  const navigate = useNavigate()
  const isRegister = register?true:false

  const handleRegister = async (e)=>{
    e.preventDefault()
    const {username,email,password} = userData
    if(!username || !email || !password){
      toast.info('Please fill the form completely...!')
    }else{
      const result = await registerAPI(userData)
      if(result.status===200){
        toast.success(`${result.data.username} has registered successfully.`)
        setUserData({
          username:"",email:"",password:""
        })
        navigate('/login')
      }else{
        toast.warning(result.response.data)
        console.log(result);
      }
    }
  }
  return (
    <div className='mt-2 d-flex justify-content-center align-items-center' style={{width:'100%',height:'80vh'}}>
      <div className='container shadow rounded' style={{width:'500px'}}>
      <h5 className='fw-bolder text-dark mb-3 mt-2 pb-2'>
          {
              isRegister ? 'Sign up to your account': 'Sign In to your Account'
          }
      </h5>
      <Form className='w-100'>
        {
          isRegister &&
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Enter Username" value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})}/>
         </Form.Group>

        }
        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Enter Email" value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})}/>
         </Form.Group>
         <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Enter Passowrd" value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})}/>
         </Form.Group>
       </Form>
       {
        isRegister ?
        <div>
          <button onClick={handleRegister} className='btn w-100 mb-4 text-light' style={{backgroundColor:'rgb(132, 148, 123)'}}>
            Sign Up
          </button>
          <p className='text-center' >Already have account? Click here to  <Link to={'/login'}>Sign In</Link></p>
        </div>:
        <div>
        <button className='btn w-100 mb-4 text-light' style={{backgroundColor:'rgb(132, 148, 123)'}}>
          Sign In
        </button>
        <p className='text-center'>New user ? Click here to  <Link to={'/register'}>Sigh Up</Link></p>
      </div>

       }
      </div>
      <ToastContainer 
      position='top-center'
      autoClose={2000}
      />
    </div>
  )
}

export default Auth