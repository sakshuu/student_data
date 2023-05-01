import React, {useState} from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RemoveDataActions, ShowSingleDataActions } from '../redux/Actions/DataActions'
import { Button, Card, Col, Container, Modal, Offcanvas, Row } from "react-bootstrap";
import { EditData } from '../components'

export default function Details() {
  const {id} =  useParams()
  const dispatch =  useDispatch()
  const { singleStudents,updateStudents,removeStudents } =  useSelector(state => state.allData)
  const [studentData, setstudentData] = useState({})

  useEffect(() => {
dispatch(ShowSingleDataActions(id))
}, [updateStudents,removeStudents])

  useEffect(() => {
   setstudentData(singleStudents)
  }, []) 
  
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  

  const handleCloseModal = () => {
    dispatch(RemoveDataActions(singleStudents.id))
    setShowModal(false)
  };
  
  const handleShowModal = () => setShowModal(true);
  
  

  return (<>
  <Container className="py-3">
        <Card className='d-flex'>      
    <h3  className="text-center py-2">Students Details</h3>
{
  singleStudents && <>
      <Row className='p-4'>
 <Col className="col-sm-4 col-md-5">
  <Card style={{ width: '80%'}}>
<div className='p-5'>
                <Card.Img className="img-fluid" src={singleStudents.Photo} alt=""  style={{ height:'200px', width:'200px' }}/>
</div>
                <div className=" py-0">
               <h4 className='text-center'>Name: {singleStudents.Name}</h4>
               <br/>
                </div>
                <ul>
<li>

               <p>Class: {singleStudents.Class}</p>
</li>
               <li>

               <p>Enrollment Date: {singleStudents.Enrollment_date}</p>
               </li>
                </ul>
  </Card>
          </Col>
          <Col className='col-sm-4 col-md-6'>
            {/* <div className='text-center'> */}

               <ul >
  <br/>
<li>
  <strong>Roll number</strong>  : {singleStudents.Roll_number}</li> <br/>
<li><strong>Gender</strong> : {singleStudents.Gender}</li>  <br/>
<li><strong>D.O.B</strong> : {singleStudents.B_day}</li>  <br/>
<li><strong>Class</strong> : {singleStudents.Class}</li>  <br/>
<li><strong>Gmail</strong> : {singleStudents.Gmail}</li>  <br/>
<li><strong>Phone number</strong> : {singleStudents.Phone}</li>  <br/>
<li><strong>Address</strong> : {singleStudents.Address}</li>  <br/>
               </ul>

            {/* </div> */}
  <Button variant="primary" 
  onClick={handleShow}
  >
      edit
      </Button>{' '}


      <Button variant="primary" onClick={handleShowModal}>
        Delete
      </Button>

          </Col>
</Row>
</>} 
             </Card>
    </Container>




  
  {/* offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="end" style={{ height: '100%', width: '50%' }} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Student data</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <EditData studentData={studentData} />
        </Offcanvas.Body>
      </Offcanvas>

      {/* model */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Student Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete student record ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" 
          onClick={handleCloseModal}
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
           Delete
          </Button>
        </Modal.Footer>
      </Modal>

  </>
  )
}