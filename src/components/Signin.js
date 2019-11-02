import React, {useState} from 'react'
import * as api from '../network/api';

const SignIn = (props) => {

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const handleChange = (key , event) => {
        setState({...state, [key]: event.target.value})
    }

    const Login = async (event) => {
        event.preventDefault();
        const { email, password } = state;
        if(email == '' || email == undefined) {
            alert('Email is required');
            return;
        } 

        if (password == '' || password == undefined) {
            alert('Password is required');
            return
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
                alert(`Code: ${res.status} Some error occurred`);
                console.log(res);
            }

        } catch(e) {
            alert('Some error occurred');
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
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder=""
            />

          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              value={state.password}
              onChange={(event) => handleChange('password', event)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder=" "
            />
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