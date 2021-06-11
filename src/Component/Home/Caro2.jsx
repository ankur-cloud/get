import React from 'react'
import './caro2.css';
import car from '../../Image/car.png'
import car2 from '../../Image/car2.png'
import car3 from '../../Image/car3.png'
import car4 from '../../Image/car4.png'
import car1 from '../../Image/car1.png'
import carb1 from '../../Image/carb1.png'

// import { NavLink } from 'react-router-dom';

const Caro2 = () => {

    return (
        <>


            <div className="card-group">
                <div className="card">
                    <img className="card-img-top" src={car1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> </h5>
                        <p className="card-text"> </p>
                        <p className="card-text"><small className="text-muted"> </small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={car} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> </h5>
                        <p className="card-text"> </p>
                        <p className="card-text"><small className="text-muted"> </small></p>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Caro2;
