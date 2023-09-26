import React, { useState } from 'react'
import { signUpstudents } from '../redux/Actions/auth'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [signUpData, setSignUpData] = useState({
        name:"",
        email:"",
        password:""
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return <>
  <div class="container mt-4">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="card">
              <div class="card-header">Signup</div>
              <div class="card-body">
                <div>
                  <label for="name" class="form-label">First name</label>
                  <input
                  onChange={e => setSignUpData({...signUpData, name: e.target.value})}
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a username.</div>
                </div>
                <div class="mt-2">
                  <label for="email" class="form-label">First Email</label>
                  <input
                  onChange={e => setSignUpData({...signUpData, email: e.target.value})}
                    type="text"
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
                  onChange={e => setSignUpData({...signUpData, password: e.target.value})}
                    type="text"
                    class="form-control"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please choose a password.</div>
                </div>

                <button type="button" class="btn btn-primary w-100 mt-3" onClick={e => {dispatch(signUpstudents(signUpData))
                navigate("/login")
                }}>
                  Signup
                </button>
                <p class="text-center mt-3">
                  Already Have Account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default Register