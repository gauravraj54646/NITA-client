import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfound">
      <div className="content">
        <h1>404 Not Found</h1>
        <h4>Oops! you come to wrong Page...</h4>
        <p>Your Visited Page Not Found. You may go home page.</p>
        <Link to={"/"} className="btn">
          Back to home page
        </Link>
      </div>
    </section>
  );
};

export default NotFound;