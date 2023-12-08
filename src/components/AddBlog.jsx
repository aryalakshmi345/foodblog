import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

function AddBlog() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
                    <input type="file" style={{display:'none'}}/>
                    <img className='img-fluid m-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" alt="" />
                    </label>
            </div>
            <div className="">
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Blog Title' />
                  </div>
                  <div class="mb-3">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='Type your blog'></textarea>
                </div>
                <div className='mb-3'>
                  <input type="text" className='form-control' placeholder='Cuisine Type' />
                  </div>
                  </div>
            </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary">Post</Button>
  </Modal.Footer>
  </Modal>
</>
  )
}

export default AddBlog