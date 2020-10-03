import React from "react";
import { Input } from "../../Property/form";

const Login = () => {
  return (
    <React.Fragment>
      <div className="container justify-content-center align-items-center">
        <div className="row">
          <div className="col-6">
            <Input label="Email Address" className="form-control" />
            <Input label="Password" className="form-control" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
