import React, {useState} from 'react'
import * as api from '../network/api';
import { validateEmail } from '../shared/utils';

const SignIn = (props) => {

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState({
      email: null,
      password: null
    })

    const handleChange = (key , event) => {
        setState({...state, [key]: event.target.value})
    }

    const Login = async (event) => {
        event.preventDefault();
        setError({
          email: null,
          password: null
        })
        const { email, password } = state;
        let errors = {};
        let error_ = false;
        if(email == '' || email == undefined) {
          errors.email = 'Email is required';  
          error_ = true;          
        } 

        if(!validateEmail(email)) {
          errors.email = 'Email is not valid';
          error_ = true;          
        } 

        if (password == '' || password == undefined) {
            errors.password = 'Password is required';
            error_ = true;         
        }

        if(error_) {
          setError({
            email: errors.email,
            password: errors.password
          });

          return;
        }

        const body = {
            email,
            password
        }

        try {
            const res = await api.Login(body);

            if(res.status == 200) {
                console.log(res.data);
                alert('Code: 200 Logged in successfully')

            } else {
                console.log(res);
            }

        } catch(e) {
            console.log(e);
            console.log(e.response);

        }

    }

    return (
        <div className={`signin-content col-md-6 ${props.className == '' ? 'show-log-pane': ''}`}>
        <h3>Weclome to Velocity</h3>
        <p>Please enter your credientials to continue</p>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              value={state.email}
              onChange={(event) => handleChange('email', event)}
              type="email"
              className={`form-control ${error.email ? 'dirty-input': ''}`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder=""
            />
           {error.email && <p className="error">{error.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              value={state.password}
              onChange={(event) => handleChange('password', event)}
              type={`form-control ${error.password ? 'dirty-input': ''}`}
              className="form-control"
              id="exampleInputPassword1"
              placeholder=" "
            />
             {error.password && <p className="error">{error.password}</p>}
          </div>

          <button onClick={(event) => Login(event)} className="btn btn-primary">
            Login
          </button>
        </form>
        <p className="pan-switcher">
          Don't have an account?{" "}
          <button className="toggle-class" onClick={() => props.onToggleView()} >Sign Up</button>
        </p>
      </div>
     
    )
}

export default SignIn