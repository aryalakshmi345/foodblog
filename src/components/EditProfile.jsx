import React, { useContext, useEffect, useState } from 'react'
import { Button,  Modal } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProfileAPI } from '../services/allAPI';
import { editProfileResponseContext } from '../Context/ContextShare';

function EditProfile() {
  const {editProfileResponse,setEditProfileResponse} = useContext(editProfileResponseContext)
  const user = JSON.parse(sessionStorage.getItem("existingUser"))
    
    const [profileDetails,setProfileDetails] = useState({
       email:user.email,password:user.password, username:user.username,profession:user.profession,bio:user.bio,website:user.website,profile:"",id:user._id
    })

    // console.log(profileDetails.username);
      const [existingImage,setexistingimage] = useState("")
      useEffect(()=>{
        if(user.profile){
          setexistingimage(user.profile)
          setProfileDetails({
            email:user.email,password:user.password, username:user.username,profession:user.profession,bio:user.bio,website:user.website,profile:"",id:user._id
          })
         }
      },[editProfileResponse])
     
      const [preview,setPreview] = useState("")
      const [show, setShow] = useState(false);
      const handleClose = () => {
        setShow(false);
        setProfileDetails({
          email:user.email,password:user.password,username:user.username,profession:user.profession,bio:user.bio,website:user.website,profile:"",id:user._id
        })
        setPreview("")

        }
      const handleShow = () => setShow(true);
 

      useEffect(()=>{
        if(profileDetails.profile){
         setPreview(URL.createObjectURL(profileDetails.profile))
       }
       },[profileDetails.profile])

       const handleUpdate = async ()=>{
        const {username,profession,bio,website,profile,email,password} = profileDetails
        if(!username){
          toast.warning('Please fill the form completely..!')
        }else{
          const reqBody = new FormData
          reqBody.append("username",username)
          reqBody.append("profession",profession)
          reqBody.append("bio",bio)
          reqBody.append("website",website)
          reqBody.append("email",email)
          reqBody.append("password",password)
          preview?reqBody.append("profile",profile):reqBody.append("profile",user.profile)
          const token = sessionStorage.getItem("token")

      if(preview){
        const reqHeader = {
          "Content-Type" : "multipart/form-data",
          "Authorization" : `Bearer ${token}`
        }
        // api call
        const res = await editProfileAPI(reqBody,reqHeader)
        if(res.status===200){
          sessionStorage.setItem("existingUser",JSON.stringify(res.data))
          handleClose()
          // pass response
          setEditProfileResponse(res.data)
        }else{
          console.log(res.response.data);
        }
        }else{
          const reqHeader = {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${token}`
          }
        // api call
        const res = await editProfileAPI(reqBody,reqHeader)
        if(res.status===200){
          sessionStorage.setItem("existingUser",JSON.stringify(res.data))
          handleClose()
          // pass response
          setEditProfileResponse(res.data)
        }else{
          console.log(res.response.data);
        }       }
      }
    }

  return (
    <>
        <button className='btn btn-light' onClick={handleShow}><i class="fa-solid fa-pen "></i> EDIT</button>

        <Modal
  size='lg'
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
  >
  <Modal.Header closeButton>
    <Modal.Title>Edit Blog</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <div className="row w-100">
            <div className="d-flex justify-content-center align-items-center">
                <label>
                    <input type="file" style={{display:'none'}} onChange={e=>setProfileDetails({...profileDetails,profile:e.target.files[0]})} />
                    { 
                    existingImage ? 
                      <img className='img-fluid m-4' style={{height:'200px',borderRadius:'50%'}} src={preview?preview:`${BASE_URL}/uploads/${existingImage}`} alt="" /> :
                      <img className='img-fluid m-4' style={{height:'200px',borderRadius:'50%'}} src={preview?preview: "https://sandcliffsales.com/static/assets/img/team/default-profile.png"} alt="" />
                    }
                    </label>
            </div>
            <div className="">
                <div className='mb-3'>
                  <input type="text" className='form-control'  value={profileDetails.username} onChange={e=>setProfileDetails({...profileDetails,username:e.target.value})}/>
                  </div>
                  <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Enter Profession'  value={profileDetails.profession} onChange={e=>setProfileDetails({...profileDetails,profession:e.target.value})}/>
                  </div>
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Enter Bio' value={profileDetails.bio} onChange={e=>setProfileDetails({...profileDetails,bio:e.target.value})}/>
                  </div>
                  <div className='mb-3'>
                  <input type="text" className='form-control'placeholder='Enter Website'  value={profileDetails.website} onChange={e=>setProfileDetails({...profileDetails,website:e.target.value})}/>
                  </div>
                  </div>
            </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Cancel
    </Button>
    <Button variant="primary" onClick={handleUpdate}>Save Changes</Button>
  </Modal.Footer>
  </Modal>
  <ToastContainer 
      position='top-center'
      autoClose={2000}
      />
    </>
  )
}

export default EditProfile