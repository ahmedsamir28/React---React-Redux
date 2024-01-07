
import React from 'react';
import Bg from "../assets/portfolio-1.png";

const Landing = () => {
    return (
        <div className='hero'>
        <div className="card text-bg-dark">
            <img src={Bg} className="card-img" alt="background" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                    <h5 style={{textAlign:"center"}} className="card-title display-3 fw-bolder mb-0">
                        NEW SEASON ARRIVALS
                    </h5>
                    <p style={{textAlign:"center"}}  className="card-text">CHECK OUT ALL THE TRENDS</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Landing;
