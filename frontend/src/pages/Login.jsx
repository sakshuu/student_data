import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginstudents } from '../redux/Actions/auth'
import { apple, bg_login, google, microsoft } from '../assets/img'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    email:"",
    passowrd:""
  })
  return <>
  <div className='main'>
    <img src={bg_login} className='bg-login' alt="" />
  {/* <div class="container "> */}
        {/* <div class="row main-login"> */}
          {/* <div class="col-sm-6 offset-sm-3"> */}
            <div class="card card-login">
              <h5 class="text-center t-white">Login</h5>
              <div class="card-body">
                <div>
                  <label for="email" class="form-label t-white">Username / Email</label>
                  <input
                    type="text"
                    value={loginData.email}
                    onChange={e => setLoginData({ ...loginData, email: e.target.value })}
                    class="form-control"
                    id="email"
                    placeholder="Enter Your Username / Email"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div class="mt-2">
                  <label for="password" class="form-label t-white">Password</label>
                  <input
                  value={loginData.passowrd}
                  onChange={e => setLoginData({ ...loginData, passowrd: e.target.value })}
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <button type="button" class="btn btn-primary w-100 mt-3" onClick={e => {dispatch(loginstudents(loginData))
                navigate("/")
                }}>
                  Login
                </button>
                <div>
                  <h6 className='t-white text-center mt-4 mb-2'> 
                  ------------------ or ------------------ </h6>
                  <div className='d-flex mt-4 mb-2 gap-4 flex-contendt'>
                    <img src={google} className='logo' alt="" />
                    <img src={apple} className='logo' alt="" />
                    <img src={microsoft} className='logo' alt="" />
                  </div>
                </div>
                <p class="text-center mt-3 t-white">
                  Dont Have Account? <Link to="/register">Create Account</Link>
                </p>
              </div>
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>
      </div>
  </>
}

export default Login