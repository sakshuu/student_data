import React, { useEffect } from 'react'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ShowStudentActions } from '../redux/Actions/DataActions'
import { TypeAnimation } from 'react-type-animation';

export default function Profile() {
  const dispatch = useDispatch()
 const { allstudents } = useSelector(state => state.allData)
const navigate = useNavigate()

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'Student Profile', 
        1000,
        'Student Data',
        2000,
        'Student Management',
        () => {
          console.log('Done typing!');
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '4m' }}
    />
  );
};

  useEffect(() =>{
dispatch(ShowStudentActions() )
  }, [])



  return (<>
  <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block" style={{ height: '540px', width: '100%' }}
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block" style={{ height: '540px', width: '100%' }}
          src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHMlMjBhY3RpdnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block" style={{ height: '540px', width: '100%' }}
          src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <Container className='py-1'>
      <Row>

<div className='text-center'><TypeAnimation
      sequence={[
        'Student Profile', 
        1000, 
        'Student Data',
        2000,
        'Student Management', 
        () => {
          console.log('success!'); 
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '4em' }} 
    /></div>
{
  allstudents.map(item =>  <Col className="col-sm-6 col-md-4 mb-3">
  <Card>
<Card.Body className='py-2'>
<Card.Img className="img-fluid" src={item.Photo} alt=""/>
</Card.Body>
<Card.Footer>
<h4>{item.Name}</h4>
<p> class : {item.Class}</p>
<Button className='w-100' 
variant="outline-primary"
onClick={e => navigate(`/details/${item.id}`)}
>Show Detalis</Button>
</Card.Footer>
  </Card>
  </Col> 
  )
}
      </Row>
    </Container>

  </>
  )
}
