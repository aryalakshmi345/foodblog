import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginResponseContext } from '../Context/LoginContext'
import EditProfile from './EditProfile'
import { BASE_URL } from '../services/baseurl'
import { editProfileResponseContext } from '../Context/ContextShare'

function MyProfile() {
  const {loginResponse, setLoginResponse} = useContext(loginResponseContext)
  const {editProfileResponse,setEditProfileResponse} = useContext(editProfileResponseContext)
  const [userDetails,setUserDetails] = useState({
    username:"",profession:"",bio:"",website:"",profile:"",id:""
})

  const navigate = useNavigate()
  const handleLogout = ()=>{
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    navigate('/')
    setLoginResponse(false)
  }

  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem("existingUser"))
    setUserDetails({...userDetails,username:user.username,profession:user.profession,bio:user.bio,website:user.website,id:user._id,profile:user.profile})
  },[editProfileResponse])

  return (
    <div className='d-flex align-items-center justify-content-center w-100'>
      
      <div className='d-flex flex-column align-items-center justify-content-center  shadow   p-4' style={{width:"68%"}} >
     <div>
        <label>
            <img style={{borderRadius:'50%',height:'260px',width:'260px'}} className='img-fluid mb-3' src={userDetails.profile?`${BASE_URL}/uploads/${userDetails.profile}`:"https://sandcliffsales.com/static/assets/img/team/default-profile.png"} alt="" />
            </label>
     </div>
         <div className='mt-2 text-center'>
           <h3 >{userDetails.username}</h3>
           <h5>{userDetails.profession}</h5>
           <p>{userDetails.bio}</p>
           {/* <a href={userDetails.website} target='_id'>{userDetails.website}</a> */}
         </div>
         <div className='d-flex align-items-center justify-content-between'>
              <EditProfile/>
              <button className='btn btn-light' onClick={handleLogout}><i class="fa-solid fa-arrow-right-from-bracket"></i> LOGOUT</button>
            </div>
       </div>
    </div>
  )
}

export default MyProfile 