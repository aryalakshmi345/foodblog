import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, Modal, Toast } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBlogAPI } from '../services/allAPI';
import { addprojectResponseContext } from '../Context/ContextShare';

function AddBlog() {
  const {addProjectResponse,setAddProjectResponse} = useContext(addprojectResponseContext)
  const [blogDetails, setBlogDetails] = useState({
    title:"",blogContent:"",cuisineType:"",blogImage:"",incredients:"",recipe:""
  })
  const [preview, setPreview] = useState("")
  const [token, setToken] = useState("")
  const [username,setUsername] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setBlogDetails({
      title:"",blogContent:"",cuisineType:"",blogImage:""
    })
    setPreview("")
  }
  const handleShow = () => setShow(true);
  // console.log(blogDetails);
  useEffect(()=>{
    if(blogDetails.blogImage){
      setPreview(URL.createObjectURL(blogDetails.blogImage))
    }
  },[blogDetails.blogImage])
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
    else{
      setToken("")
    }
  })
  // console.log(username);
  const handleAdd = async(e)=>{
    e.preventDefault()
    const {title,blogContent,cuisineType,blogImage,incredients,recipe} = blogDetails
    if(!title || !blogContent || !cuisineType || !blogImage || !incredients || !recipe){
      toast.warning('Please fill the form the completely')
    }else{
      let date = new Date()
      let options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      let timestamp = new Intl.DateTimeFormat("en-US",options).format(date)
      console.log(timestamp);
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("blogContent",blogContent)
      reqBody.append("cuisineType",cuisineType)
      reqBody.append("blogImage",blogImage)
      reqBody.append("timestamp",timestamp)
      reqBody.append("incredients",incredients)
      reqBody.append("recipe",recipe)



      if(token){
        const reqHeader = {
          "Content-Type" : "multipart/form-data",
          "Authorization" : `Bearer ${token}`
        }     
      // api call
      const result = await addBlogAPI(reqBody,reqHeader)
      if(result.status===200){
        console.log(result.data);
        handleClose()
        setAddProjectResponse(result.data)
      }else{
        console.log(result);
        console.log(result.response.data);
      }
    }

    }
  }

  return (
<>
      <div>
        <button className='btn text-light' onClick={handleShow} style={{backgroundColor:'rgb(132, 148, 123)'}}>Add Blog</button>
      </div>
  
  <Modal
  size='lg'
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
  >
  <Modal.Header closeButton>
    <Modal.Title>Add New Blog</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <div className="row w-100">
            <div className="d-flex justify-content-center align-items-center">
                <label>
                    <input type="file" style={{display:'none'}}  onChange={e=>setBlogDetails({...blogDetails,blogImage:e.target.files[0]})}/>
                    <img className='img-fluid m-4' style={{height:'500px'}} src={preview?preview:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png"} alt="" />
                    </label>
            </div>
            <div className="">
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Blog Title' value={blogDetails.title} onChange={e=>setBlogDetails({...blogDetails,title:e.target.value})}/>
                  </div>
                  <div class="mb-3">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Tell About Your Recipe' value={blogDetails.blogContent} onChange={e=>setBlogDetails({...blogDetails,blogContent:e.target.value})}></textarea>
                </div>
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Incredients' value={blogDetails.incredients} onChange={e=>setBlogDetails({...blogDetails,incredients:e.target.value})}/>
                  </div>
                  <div class="mb-3">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Add Recipe' value={blogDetails.recipe} onChange={e=>setBlogDetails({...blogDetails,recipe:e.target.value})}></textarea>
                </div>
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Cooking Time' value={blogDetails.cuisineType} onChange={e=>setBlogDetails({...blogDetails,cuisineType:e.target.value})}/>
                  </div>
                  </div>
            </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Cancel
    </Button>
    <Button variant="primary" onClick={handleAdd}>Post</Button>
  </Modal.Footer>
  </Modal>
  <ToastContainer 
      position='top-center'
      autoClose={2000}
      />
</>
  )
}

export default AddBlog