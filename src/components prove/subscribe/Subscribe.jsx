import React from "react"
import { createGlobalStyle } from "styled-components";
import './subscribe.css'

const BootstrapStyle = createGlobalStyle`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css');
`;

function Subscribe(){
  return(
    <div className="subscribeContainer">
      <h1 className="subscribeTitle">Subscribe</h1>
      <div className="container col-10 col-sm-8 col-md-6 col-xl-4">
        <BootstrapStyle/>
        <form>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
            <label for="email" className="form-label">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="password"/>
            <label for="password" className="form-label">Password</label>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="checkbox"/>
            <label className="form-check-label subscribeLabel" for="checkbox">Check me out</label>
          </div>
          <button type="submit" className="btn btn-secondary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe