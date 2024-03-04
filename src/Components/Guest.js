import React from "react";
import { Link } from "react-router-dom";
export default function Guest(props) {
    props.setSignInButton(true);
    return (
        <div className="container parenth d-grid justify-content-center align-items-center">
        <div className="container mb-5">
            <div className="Guest shadow-lg rounded-3 m-0 mb-5">
                <div className="row">
                    <div className="col-sm-12 mt-4 text-center ">
                        <Link to="/guest/upload" type="button" className="btn btn-light btn-lg b Guestbt">Upload Your Tire Image Here</Link>
                    </div>
                    <div className="col-sm-12 mt-4 text-center">
                        <Link to="/guest/checkdetails" type="button" className="btn btn-light btn-lg b Guestbt" >Check Your Vehicle Details</Link>
                    </div>
                    <div className="col-sm-12 mt-4 mb-2 text-center">
                        <Link to="/"  className="btn btn-warning btn-lg backb">Go Back</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}