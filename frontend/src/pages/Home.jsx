import React, { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ShowStudentActions } from '../redux/Actions/DataActions'

const Home = () => {
    const dispatch = useDispatch()
    const { allstudents } = useSelector(state => state.allData)
   const navigate = useNavigate()
   
     useEffect(() =>{
   dispatch(ShowStudentActions() )
     }, [])
  return <>
  <Container >
  {/* <h4>Recently Added</h4> */}
  <Row>
    <Col sx={6}  md={8}>
    {allstudents.map(item =><Row>
      <Col sx={6} offset-3 >
      
      <Card className='w-100'>
          <Card.Body>
            <Card.Img className="img-fluid" src={item.photo} alt={item.photo} />
          </Card.Body>
          <Card.Footer>
            <h6>{item.name}</h6>       
            <p>class: {item.class}</p>
            <Button className="w-100" variant="outline-primary btn-sm" onClick={e => navigate(`/details/${item.id}`)}>
              Show Details
            </Button>
          </Card.Footer>
        </Card>
      </Col>

      </Row>
    )}
    </Col>

{/* <Col sx={6} md={4}>

  <h1>sakshi jadhav</h1>
  <h1>sakshi jadhav</h1>
  <h1>sakshi jadhav</h1>
  <h1>sakshi jadhav</h1>
  <h1>sakshi jadhav</h1>
  <h1>sakshi jadhav</h1>
  <h1>sakshi jadhav</h1>
  <h1>sakshi jadhav</h1>
</Col> */}
  </Row>
</Container>
  </>
}

export default Home