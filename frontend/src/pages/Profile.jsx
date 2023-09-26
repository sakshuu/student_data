import React, { useEffect } from 'react'
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { ShowStudentActions } from '../redux/Actions/DataActions'
import { TypeAnimation } from 'react-type-animation';
import sir from "./../assets/img/sir.png";

export default function Profile() {
  const dispatch = useDispatch()
 const { allstudents } = useSelector(state => state.allData)
const navigate = useNavigate()

useEffect(() =>{
dispatch(ShowStudentActions() )
}, [])

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'Samrt school', 
        1000,
        'Student Management',
        2000,
        'Samrt school',
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
    <Container>
<h1 className='text-center mt-4'>Welcome To</h1>
<div className='text-center'><TypeAnimation
      sequence={[
        'Samrt school', 
        1000, 
        'Student Management',
        2000,
        'Samrt School', 
        () => {
          console.log('success!'); 
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '4em' }} 
      /></div>
<p className='text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit alias corrupti molestias doloremque aut consectetur reiciendis praesentium quis eos maiores reiciendis praesentium quis eos maiores.</p>

<div className='flex-contendt'>
        <img src={sir} width={100}  alt="" />
</div>
        <h2 className='text-center mt-2'>Dr. Lorem ipsum dolor.</h2>
         <p className='text-center mt-2'>Edu. M.Com.,NET(JRF),SET,Ph.D.</p>
      </Container>

<Container >
  <h4>Recently Added</h4>
  <Row >
    {allstudents.map(item => (
      <Col key={item.id} xs={6} md={4} className="mb-4">
        <Card style={{ width: '250px' }}>
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
    ))}
  </Row>
</Container>









  </>
  )
}
