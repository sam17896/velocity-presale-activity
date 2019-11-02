import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

function App() {

  const [className, changeClass] = useState('');

  const onToggleView = () => {
    if(className == 'signup') {
      changeClass('');
    } else {
      changeClass('signup')
    }
  }

  return (
    <div className={`container-fluid signin ${className}`}>
      <div className="col-md-12  ">
        <div className="col-md-6  full-height image-pan "></div>

        <div className="col-md-6  full-height data-pan">
          <div className="row">
            <a className="logo col-offset-1" href="#"></a>
            <SignIn onToggleView={onToggleView} className={className} />
            <SignUp onToggleView={onToggleView} className={className} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
