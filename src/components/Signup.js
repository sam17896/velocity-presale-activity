import React, {useState} from 'react';
import * as api from '../network/api';

const SignUp = (props) => {
    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    const handleChange = (key , event) => {
        setState({...state, [key]: event.target.value})
    }

    const Register = async (event) => {
        event.preventDefault();
        const { email, password, firstname, lastname } = state;
        if(email == '' || email == undefined) {
            alert('Email is required');
            return;
        } 

        if(firstname == '' || firstname == undefined) {
            alert('FistName is required');
            return;
        } 

        if(lastname == '' || lastname == undefined) {
            alert('LastName is required');
            return;
        } 

        if (password == '' || password == undefined) {
            alert('Password is required');
            return
        }

        const body = {
            firstname,
            lastname,
            email,
            password
        }

        try {
            const res = await api.Register(body);

            
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
    return(
        <div className={`signup-content col-md-6 ${props.className == '' ? '': 'show-log-pane'}`}>
              <h3>Weclome to Velocity</h3>
              <p>Please Register to continue</p>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">First Name</label>
                  <input
                    value={state.firstname}
                    onChange={(event) => handleChange('firstname', event)}
                    type="firstname"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">last Name</label>
                  <input
                    value={state.lastname}
                    onChange={(event) => handleChange('lastname', event)}
                    
                    type="lastname"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                  />
                </div>
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

                <button onClick={(event) => Register(event)} className="btn btn-primary">
                  Register
                </button>
              </form>
              <p  className="pan-switcher">
                Already have an account?{" "}
                <button className="toggle-class" onClick={() => props.onToggleView()}>Sign In</button>{" "}
              </p>
            </div>
          
    )
}

export default SignUp