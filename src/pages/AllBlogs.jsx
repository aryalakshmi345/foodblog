import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogCard from '../components/BlogCard'
import { allBlogAPI } from '../services/allAPI'

function AllBlogs() {
  const [allBlogs,setAllblogs] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const getAllBlogs = async()=>{
   if(sessionStorage.getItem("token")){
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type" : "multipart/form-data",
          "Authorization" : `Bearer ${token}`
    }
    const result = await allBlogAPI(searchKey,reqHeader)
    if(result.status===200){
       const sortedData = result.data.sort((d1,d2)=> new Date(d2.timeStamp)- new Date(d1.timeStamp))
      setAllblogs(sortedData)
      console.log(sortedData);
    }else{
      console.log(result);
    }
   }
  }
  useEffect(()=>{
    getAllBlogs()
  },[searchKey])

  return (
    <div style={{marginTop:'10%'}}>
      <div className=' w-50 ms-5 mt-5' >
            <div className="d-flex border-0  w-50 rounded">
              <input type="text" className='form-control border-0 border-bottom' placeholder='Search...' value={searchKey} onChange={e=>setSearchKey(e.target.value)}/>
              <i style={{marginLeft:'-45px',marginTop:'13px'}} class="fa-solid fa-magnifying-glass"></i>
            </div>
         </div>

         <div className="container flex-column p-5 d-flex justify-content-center align-items-center w-100">
        <Row>
         { allBlogs?.length>0?allBlogs.map(blogs=>(
     <Col sm={12} md={6}>
     <BlogCard blogs={blogs}/>
     </Col>
         )) :null
    
          }
        </Row>
       </div>
    </div>
  )
}

export default AllBlogs