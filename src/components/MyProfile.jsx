import React from 'react'

function MyProfile() {
  return (
    <div>
      <div className='d-flex align-items-center justify-content-center mb-2 flex-column w-100 border rounded p-3' >
      <div className='w-100 d-flex align-items-end justify-content-end'>
        <button className='btn'><i class="fa-solid fa-pen ms-5"></i></button>
        </div>
         <label>
          <input type='file' style={{display:'none'}}/>
          <img style={{borderRadius:'50%',height:'260px',width:'260px'}} className='img-fluid mb-3' src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg" alt="" />
          </label>
         <div>
           <h6 className='text-center'>Aryalakshmi</h6>
           <p>Developer</p>
         </div>
       </div>
    </div>
  )
}

export default MyProfile