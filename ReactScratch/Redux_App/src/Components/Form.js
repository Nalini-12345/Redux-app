import React, { Component } from 'react';
import {Signup} from "./Signup";

function Form(){
    return(
        <div className="container mt-3">
        <div className="row">
        <div className="col-md-5">
            <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid" src="https://raw.githubusercontent.com/candraKriswinarto/form-validation/main/src/assets/rocket.png" alt=""/>
        </div>
        </div>
        </div>
    );
}

export default Form;