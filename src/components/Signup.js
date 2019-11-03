import React, {useState} from 'react';
import * as api from '../network/api';
import { validateEmail, validatePassword } from '../shared/utils';

const SignUp = (props) => {
    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    const [error, setError] = useState({
      email: null,
      password: null,
      firstname: null,
      lastname: null
    })


    const handleChange = (key , event) => {
        setState({...state, [key]: event.target.value})
    }

    const Register = async (event) => {
        event.preventDefault();
        setError({
          email: null,
          password: null,
          firstname: null,
          lastname: null
        })
        const { email, password, firstname, lastname } = state;
        let errors = {};
        let error_ = false;
        if(email == '' || email == undefined) {
            errors.email = 'Email is required';
            error_ = true;
        } else if(!validateEmail(email)) {
          errors.email = 'Email is not valid';
          error_ = true;
        }

        if(firstname == '' || firstname == undefined) {
          errors.firstname = 'First Name is required';
          error_ = true;
        } 

        if(lastname == '' || lastname == undefined) {
            errors.lastname = 'Last Name is required';
            error_ = true;
        } 

        if (password == '' || password == undefined) {
            errors.password = 'Password is required';
            error_ = true;
        } else if(password.length < 8 || !validatePassword(password)) {
            errors.password = 'Password is not valid. Password must be atleast 8 character and must contain atleast one lower case, one upper case and one special character';
            error_ = true;
        }


        if(error_) {
          setError({
            email: errors.email,
            password: errors.password,
            firstname: errors.firstname,
            lastname: errors.lastname
          });

          return;
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
                console.log(res);
            }

        } catch(e) {
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
                    className={`form-control ${error.firstname ? 'error': ''}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                  />
                  {error.firstname && <p className="error">{error.firstname}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">last Name</label>
                  <input
                    value={state.lastname}
                    onChange={(event) => handleChange('lastname', event)}
                    
                    type="lastname"
                    className={`form-control ${error.lastname ? 'error': ''}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=""
                  />
                  {error.lastname && <p className="error">{error.lastname}</p>}

                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    value={state.email}
                    onChange={(event) => handleChange('email', event)}
                    
                    type="email"
                    className={`form-control ${error.email ? 'error': ''}`}
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
                    
                    type="password"
                    className={`form-control ${error.password ? 'error': ''}`}
                    id="exampleInputPassword1"
                    placeholder=" "
                  />
                  {error.password && <p className="error">{error.password}</p>}

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