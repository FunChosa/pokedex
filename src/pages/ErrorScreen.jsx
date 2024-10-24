import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const ErrorScreen = () => {
  return (
    <div className="errorScreen">
      <h1>Page Not Found 404</h1>
      <Link to="/">
        <Button label="Go Home" />
      </Link>
    </div>
  );
};

export default ErrorScreen;
