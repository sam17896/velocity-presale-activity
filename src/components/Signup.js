import React from 'react';

const SignUp = (props) => {
    return(
        <div className={`signup-content col-md-6 ${props.className == '' ? '': 'show-log-pane'}`}>
              <h3>Weclome to Velocity</h3>
              <p>Please Register to continue</p>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">First Name</label>
                  <input
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
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder=" "
                  />
                </div>

                <button type="submit" className="btn btn-primary">
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