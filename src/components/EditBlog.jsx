import React, { useContext, useEffect, useState } from 'react'
import { Button,  Modal } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editABlogAPI } from '../services/allAPI';
import { editBlogResponseContex } from '../Context/ContextShare';

function EditBlog({blogs}) {
  const {editBlogResponse,setEditBlogResponse} = useContext(editBlogResponseContex)
  const [show, setShow] = useState(false);
  const [blogDetails, setBlogDetails] = useState({
    id: blogs._id, title:blogs.title ,blogContent:blogs.blogContent ,timestamp:blogs.timestamp,cuisineType: blogs.cuisineType,blogImage: "",incredients: blogs.incredients,recipe:blogs.recipe,username:blogs.username
  })
  const [preview, setPreview] = useState("")

  const handleClose = () => {
    setShow(false);
    setBlogDetails({
      id: blogs._id, title:blogs.title ,blogContent:blogs.blogContent,timestamp:blogs.timestamp ,cuisineType: blogs.cuisineType,blogImage: "",incredients: blogs.incredients,recipe:blogs.recipe
    })
    setPreview("")
    }
  const handleShow = () => setShow(true);

  useEffect(()=>{
   if(blogDetails.blogImage){
    setPreview(URL.createObjectURL(blogDetails.blogImage))
  }
  },[blogDetails.blogImage])

  const handleUpdate = async()=>{
    const {id,title,blogContent,cuisineType,blogImage,incredients,recipe,timestamp,username} = blogDetails
    if(!title || !blogContent || !cuisineType || !incredients || !recipe ){
     toast.warning("Please Fill the form completely..!")
    }else{
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("blogContent",blogContent)
      reqBody.append("cuisineType",cuisineType)
      reqBody.append("timestamp",timestamp)
      reqBody.append("username",username)
      reqBody.append("incredients",incredients)
      reqBody.append("recipe",recipe)
      preview?reqBody.append("blogImage",blogImage):reqBody.append("blogImage",blogs.blogImage)
      const token = sessionStorage.getItem("token")
     
      if(preview){
        const reqHeader = {
          "Content-Type" : "multipart/form-data",
          "Authorization" : `Bearer ${token}`
        }
        // api call
        const result = await editABlogAPI(id,reqBody,reqHeader)
        if(result.status==200){
          handleClose()
          // pass response
          setEditBlogResponse(result.data)
        }else{
          console.log(result.response.data);
        }
      }else{
        const reqHeader = {
          "Content-Type" : "application/json",
          "Authorization" : `Bearer ${token}`
        }
        // api call
        const result = await editABlogAPI(id,reqBody,reqHeader)
        if(result.status==200){
          handleClose()
          // pass response
          setEditBlogResponse(result.data)
        }else{
          console.log(result);
          console.log(result.response.data);
        }
        }
      
    }
  }
  // console.log(blogDetails);
  return (
    <>
      <button onClick={handleShow} className='btn'><i class="fa-solid fa-pen fs-5 me-1"></i></button>

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
                    <input type="file" style={{display:'none'}} onChange={e=>setBlogDetails({...blogDetails,blogImage:e.target.files[0]})} />
                    <img className='img-fluid m-4' style={{height:'500px'}} src={preview?preview:`${BASE_URL}/uploads/${blogs.blogImage}`} alt="" />
                    </label>
            </div>
            <div className="">
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Blog Title' value={blogDetails.title} onChange={e=>setBlogDetails({...blogDetails,title:e.target.value})}/>
                  </div>
                  <div class="mb-3">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Type your blog' value={blogDetails.blogContent} onChange={e=>setBlogDetails({...blogDetails,blogContent:e.target.value})} ></textarea>
                </div>
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Incredients' value={blogDetails.incredients} onChange={e=>setBlogDetails({...blogDetails,incredients:e.target.value})}/>
                  </div>
                  <div class="mb-3">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Add Recipe' value={blogDetails.recipe} onChange={e=>setBlogDetails({...blogDetails,recipe:e.target.value})}></textarea>
                </div>
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Cuisine Type' value={blogDetails.cuisineType} onChange={e=>setBlogDetails({...blogDetails,cuisineType:e.target.value})}/>
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

export default EditBlog