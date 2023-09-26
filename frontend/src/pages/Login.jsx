import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginstudents } from '../redux/Actions/auth'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    email:"",
    passowrd:""
  })
  return <>
  <div class="container mt-4">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="card">
              <div class="card-header">Login</div>
              <div class="card-body">
                <div>
                  <label for="email" class="form-label">First Email</label>
                  <input
                    type="text"
                    value={loginData.email}
                    onChange={e => setLoginData({ ...loginData, email: e.target.value })}
                    class="form-control"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div class="mt-2">
                  <label for="password" class="form-label">Password</label>
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
                <p class="text-center mt-3">
                  Dont Have Account? <Link to="/register">Create Account</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default Login