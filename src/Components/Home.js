import React from 'react';
import { Link } from "react-router-dom";


export default function Home(props){
    props.setSignInButton(true);
    return (
        <>
        <div className="parenth container d-flex justify-content-center mt-5">
            <div className="Home container mt-5 rounded-5" id='home'style={{ color: 'white' }}>
            <div id='title'  className="row  ">
                <h1 className ="display-1 col   rounded-3  shadow-lg text-center"style={{backdropFilter:'blur(100px)',color:'white '}}>TIRES ON HIGHWAYS</h1>                 
            </div>
            <div className="options row text-center">
                <div className="option1 btn-lg col-12 mt-5 mb-4">
                <Link to='/guest' type="button"  className="btn btn-light gs" draggable>Continue as Guest</Link>
                </div>
            </div>
        </div>
        </div>
        </>
    );}