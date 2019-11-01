import React, { FunctionComponent } from "react";

interface IErrorProps {
  message: string;
}

const Error: FunctionComponent<IErrorProps> = ({ message }) => (
  <div className="alert alert-danger d-inline-block" role="alert">
    {message}
  </div>
);

export default Error;