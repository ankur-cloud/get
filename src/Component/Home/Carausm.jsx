import React from 'react'
import './cor.css';
import car from '../../Image/car.png'
import car2 from '../../Image/car2.png'
import car3 from '../../Image/car3.png'
import car4 from '../../Image/car4.png'
import carb1 from '../../Image/carb1.png'
import slb1 from '../../Image/slb1.png'
import slb2 from '../../Image/slb2.png'


// import { NavLink } from 'react-router-dom';

const Carausm = () => {
    return (
        <>

        
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-interval="false" data-pause="hover">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval=" false">
                    <div className="row">
                    <div className="col-sm-3"><a href="#" className="thumbnail"><img src={carb1} alt="Image" style={{maxWidth:'100%'}}/></a>
                    </div>
                            <div className="col-sm-3"><a href="#" className="thumbnail"><img src={car2} alt="Image" style={{maxWidth:'100%'}}/></a>
                    </div>
                            <div className="col-sm-3"><a href="#" className="thumbnail"><img src={car3} alt="Image" style={{maxWidth:'100%'}}/></a>
                    </div>
                            <div className="col-sm-3"><a href="#" className="thumbnail"><img src={car3} alt="Image" style={{maxWidth:'100%'}}/></a>
                    </div>
                    
                  </div>
    </div>
                        <div className="carousel-item" data-bs-interval="false ">
                        <div className="row">
                            <div className="col-sm-3"><a href="#" className="thumbnail"><img src={car2} alt="Image" style={{maxWidth:'100%'}}/></a>
                        </div>
                            <div className="col-sm-3"><a href="#" className="thumbnail"><img src={carb1} alt="Image" style={{maxWidth:'100%'}}/></a>
                        </div>
                            <div className="col-sm-3"><a href="#" className="thumbnail"><img src={car2} alt="Image" style={{maxWidth:'100%'}}/></a>
                        </div>
                        
                      </div>
    </div>
                           
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon .c" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                </button>
            </div>
            
            
            
        </>
    )
}

export default Carausm;
