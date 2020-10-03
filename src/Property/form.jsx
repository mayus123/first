import React from "react";

export const Input = ({ label, validasi, ...rest }) => {
  return (
    <React.Fragment>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            {label}
          </label>
          <input {...rest} />
          <div id="emailHelp" className="form-text">
            {validasi}
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export const Button = ({ ...rest }) => {
  return (
    <div>
      <button className="btn btn-success">Login</button>
    </div>
  );
};
