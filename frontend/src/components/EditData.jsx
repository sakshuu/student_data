import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Button, Form } from 'react-bootstrap'
import {  UpdateDataActions } from '../redux/Actions/DataActions'
import { useFormik } from 'formik';
import * as yup from "yup"

export default function EditData({studentData}) {
  const [toggle, setToggle] = useState(true)
  const actionDispatch = useDispatch()
  const formik = useFormik({
    enableReinitialize:true,
    initialValues: {
      photo:studentData?.photo,
      name:studentData?.name,
      gender:studentData?.gender,
      b_day:studentData?.b_day,
      class:studentData?.class,
      roll_number:studentData?.roll_number,
      gmail:studentData?.gmail,
      phone:studentData?.phone,
      address:studentData?.address,
      enrollment_date:studentData?.enrollment_date
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
    onSubmit: (values, { resetForm }) => {
      actionDispatch(UpdateDataActions(studentData.id,values))
      setToggle(false)
      resetForm();
    }
  })


//  const handleclose = () =>
  

  return (<>
    <Form onSubmit={formik.handleSubmit}>
      
     <Form.Group className="mb-3">
             <Form.Label>Photo</Form.Label>
             <Form.Control type="text" placeholder="Your Photo url"
             id="Photo"
             name="Photo"
             value={formik.values.Photo}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             className={
                    formik.errors.Photo &&
                    formik.touched.Photo &&
                    "is-invalid"}
             />
             <Form.Text className="invalid-feedback">
             {
                    formik.errors.Photo
                  }
             </Form.Text>
               </Form.Group>

  <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your name"
                id="Name"
                name="Name"
                value={formik.values.Name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                       formik.errors.Name &&
                       formik.touched.Name &&
                       "is-invalid"}
                />
                <Form.Text className="invalid-feedback">
                {
                    formik.errors.Name
                  }
                </Form.Text>
      </Form.Group>

<Form.Group className="mb-3">
<Form.Label>Gender </Form.Label> 
 <Form.Check 
    inline
        type="switch"
        id="custom-switch"
        label="Female"
value={formik.values.Gender}
onChange={formik.handleChange}
        />
      <Form.Check
      inline 
        type="switch"
        id="custom-switch"
        label="male"
      value={formik.values.Gender}
      onChange={formik.handleChange}  
        />
      <Form.Check
      inline 
        type="switch"
        id="custom-switch"
        label="others"
       value={formik.values.Gender}
       onChange={formik.handleChange} 
        /> 
        </Form.Group>
        
        <Form.Group className="mb-3">
                <Form.Label>D.O.B</Form.Label>
                <Form.Control
                type="yyyy/mm/dd"
                name="B_day"
                id="B_day"
                placeholder="D.O.B"
value={formik.values.B_day}
onChange={formik.handleChange}
onBlur={formik.handleBlur}
className={
  formik.errors.B_day &&
  formik.touched.B_day &&
  "is-invalid"}
/>
              
                <Form.Text className="invalid-feedback">
                  { formik.errors.B_day}
                </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
            <Form.Select  
            name='Class'
            id='Class'
            value={formik.values.Class}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.Class &&
              formik.touched.Class &&
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
                  { formik.errors.Class}
                </Form.Text>
                </Form.Group>

           <Form.Group className="mb-3">
                <Form.Label>Roll number</Form.Label>
                <Form.Control type="number" placeholder="Enter Roll number"
                name='Roll_number'
                id='Roll_number'
                value={formik.values.Roll_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.Roll_number &&
                  formik.touched.Roll_number &&
                  "is-invalid"}
                />
                <Form.Text className="invalid-feedback">
                 {formik.errors.Roll_number}
                 </Form.Text>
      </Form.Group>

           <Form.Group className="mb-3">
                <Form.Label>Gmail</Form.Label>
                <Form.Control type="text" placeholder="Enter your Gmail"
                  name='Gmail'
                  id='Gmail'
                value={formik.values.Gmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.Gmail &&
                  formik.touched.Gmail &&
                  "is-invalid"}
                />
                <Form.Text className="invalid-feedback">
                {formik.values.Gmail}
                 </Form.Text>
      </Form.Group>

           <Form.Group className="mb-3">
                <Form.Label>Phone, Whatsapp - Number </Form.Label>
                <Form.Control type="number" placeholder="Enter Your number"
                name='Phone'
                id='Phone'
              value={formik.values.Phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.Phone &&
                formik.touched.Phone &&
                "is-invalid"}
                />
                <Form.Text className="invalid-feedback">
                    {formik.errors.Phone} 
                 </Form.Text>
      </Form.Group>

           <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={2}
                name='Address'
                id='Address'
              value={formik.values.Address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.Address &&
                formik.touched.Address &&
                "is-invalid"}
                />
                <Form.Text className="invalid-feedback">
                {formik.errors.Address}
                 </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
                <Form.Label>Enrollment date </Form.Label>
                <Form.Control
                type="yyyy/mm/dd"
                name='Enrollment_date'
                id='Enrollment_date'
              value={formik.values.Enrollment_date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.Enrollment_date &&
                formik.touched.Enrollment_date &&
                "is-invalid"}
                
                />
                <Form.Text className="invalid-feedback">
                    Entrollment date 
                 </Form.Text>
      </Form.Group>

         <Button variant="primary" type="submit"
          // onClick={handleclose}
          >
      Update Student Data
    </Button>
</Form>
     
  </>
  )
}