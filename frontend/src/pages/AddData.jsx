import React  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Col, Container, Form, InputGroup, Row, } from 'react-bootstrap'
import { StudentActions } from '../redux/Actions/DataActions'
import { useFormik } from 'formik';
import * as yup from "yup"
import { ToastContainer, toast } from 'react-toastify';

export default function AddData() {
  const actionDispatch = useDispatch()
  const { students} =  useSelector(state => state.allData)
  const formik = useFormik({
    initialValues: {
      photo:"https://fadcdn.s3.ap-south-1.amazonaws.com/media/1090/Lead_image_48017.jpg",
      name:"sanika shiv chavan",
      gender:"female",
      b_day:"2001/09/20",
      class:"6th-B",
      roll_number:"10",
      gmail:"sanika@gmail.com",
      phone:"8787878787",
      address:"Lorem ipsum, dolor sit amet consectetur adipisicing.",
      enrollment_date:"2015/06/15",
    },
    validationSchema: yup.object({
      photo:yup.string().required("Please provide photo url"),
      name:yup.string().required("Please Enter Name"),
      gender:yup.string().required("Please select your gender"),
      b_day:yup.string().required("Please Enter Date of Birth"),
      class:yup.string().required("Please Choose Class"),
      roll_number:yup.string().required("Please Provide Roll Number"),
      gmail:yup.string().email("please enter valid email").required("Please Enter email"),
      phone:yup.string().required("Please Enter Number"),
      address:yup.string().required("Please Enter Address"),
      enrollment_date:yup.string().required("Please Enter Enrollment Date"),
    }),
    onSubmit: (values,{ resetForm }) => {
      actionDispatch(StudentActions(values))
      resetForm();
    }
  })
  const notify = () => {
    if (students === true) {
      toast("Your Data add sucessfully 😊");
    }
  }

  return (<>
  <Container >
    <Row className='add-data'>
        <Col className='col-md-9' >
        <Card>
            <Card.Header>
              <Card.Title style={{textAlign:"center"}}>Add Students Data</Card.Title>
              </Card.Header>
            <Card.Body>
     <Form onSubmit={formik.handleSubmit}>
     <Form.Group className="mb-3">
             <Form.Label>Photo</Form.Label>
             <Form.Control type="text" placeholder="Your Photo url"
             id="photo"
             name="photo"
             value={formik.values.photo}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             className={
                    formik.errors.photo &&
                    formik.touched.photo &&
                    "is-invalid"}
             />
             
             <Form.Text className="invalid-feedback">
             {
                    formik.errors.photo
                  }
             </Form.Text>
               </Form.Group>

  <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your name"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                       formik.errors.name &&
                      formik.touched.name &&
                       "is-invalid"}
                />
                <Form.Text className="invalid-feedback">
                {
                    formik.errors.name
                  }
                </Form.Text>
      </Form.Group>

<Form.Group className="mb-3">
<Form.Label>Gender </Form.Label>
<InputGroup value="">
<Form.Check
            inline
            label="female"
            name="gender"
            type='radio'
            id="custom-switch"
            value='female'
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
          />
 
<Form.Check
            inline
            label="male"
            name="gender"
            type='radio'
            value='male'
            id="custom-switch"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
 
<Form.Check
            inline
            label="others"
            value='others'
            name="gender"
            type='radio'
            id="custom-switch"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            </InputGroup>
           <Form.Text className="invalid-feedback">
                  { formik.errors.gender}
                </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3">
                <Form.Label>D.O.B</Form.Label>
                <Form.Control
                type="yyyy/mm/dd"
                name="b_day"
                id="b_day"
                placeholder="D.O.B"
value={formik.values.b_day}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
className={
  formik.errors.b_day &&
  formik.touched.b_day &&
  "is-invalid"}/>
                <Form.Text className="invalid-feedback">
                  { formik.errors.b_day}
                </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
            <Form.Select  
            name='class'
            id='class'
            value={formik.values.Class}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.class &&
              formik.touched.class &&
              "is-invalid"}
            >
                 <option value="">Choose the class</option>
                 <option value="1st-A">1st-A</option>
                 <option value="1st-B">1st-B</option>
                 <option value="1st-C">1st-C</option>
                 <option value="2nt-A">2nt-A</option>
                 <option value="2nt-B">2nt-B</option>
                 <option value="2nt-C">2nt-C</option>
                 <option value="3rd-A">3rd-A</option>
                 <option value="3rd-B">3rd-B</option>
                 <option value="3rd-C">3rd-C</option>
                 <option value="4rh-A">4rh-A</option>
                 <option value="4th-B">4th-B</option>
                 <option value="4th-C">4th-C</option>
                 <option value="5th-A">5th-A</option>
                 <option value="5th-B">5th-B</option>
                 <option value="5th-C">5th-C</option>
                 <option value="6th-A">6th-A</option>
                 <option value="6th-B">6th-B</option>
                 <option value="6th-C">6th-C</option>
                 <option value="7th-A">7th-A</option>
                 <option value="7th-B">7th-B</option>
                 <option value="7th-C">7th-C</option>
                 <option value="8th-A">8th-A</option>
                 <option value="8th-B">8th-B</option>
                 <option value="8th-C">8th-C</option>
                 <option value="9th-A">9th-A</option>
                 <option value="9th-B">9th-B</option>
                 <option value="9th-C">9th-C</option>
                 <option value="10th-A">10th-A</option>
                 <option value="10th-B">10th-B</option>
                 <option value="10th-C">10th-C</option>

           </Form.Select>
           <Form.Text className="invalid-feedback">
                  { formik.errors.class}
                </Form.Text>
                </Form.Group>

           <Form.Group className="mb-3">
                <Form.Label>Roll number</Form.Label>
                <Form.Control type="number" placeholder="Enter Roll number"
                name='Roll_number'
                id='Roll_number'
                value={formik.values.roll_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.roll_number &&
                  formik.touched.roll_number &&
                  "is-invalid"}
                />
                <Form.Text className="invalid-feedback">
                 {formik.errors.roll_number}
                 </Form.Text>
      </Form.Group>

           <Form.Group className="mb-3">
                <Form.Label>Gmail</Form.Label>
                <Form.Control type="text" placeholder="Enter your Gmail"
                  name='Gmail'
                  id='Gmail'
                value={formik.values.gmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.gmail &&
                  formik.touched.gmail &&
                  "is-invalid"}
                />
                <Form.Text className="invalid-feedback">
                {formik.values.gmail}
                 </Form.Text>
      </Form.Group>

           <Form.Group className="mb-3">
                <Form.Label>Phone, Whatsapp - Number </Form.Label>
                <Form.Control type="number" placeholder="Enter Your number"
                name='phone'
                id='phone'
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.phone &&
                formik.touched.phone &&
                "is-invalid"}
                />
                <Form.Text className="invalid-feedback">
                    {formik.errors.phone} 
                 </Form.Text>
      </Form.Group>

           <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={2}
                name='address'
                id='address'
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.address &&
                formik.touched.address &&
                "is-invalid"}
                />
                <Form.Text className="invalid-feedback">
                {formik.errors.address}
                 </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
                <Form.Label>Enrollment date </Form.Label>
                <Form.Control
                 type="yyyy/mm/dd"
                name='enrollment_date'
                id='enrollment_date'
              value={formik.values.enrollment_date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.enrollment_date &&
                formik.touched.enrollment_date &&
                "is-invalid"}
                
                />
                <Form.Text className="invalid-feedback">
                    Entrollment date 
                 </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={notify}>
                                    Submit Student Data
                                </Button>
                                <ToastContainer />
</Form>
      </Card.Body>
        </Card>
        </Col>
    </Row>
  </Container>
  </>
  )
}