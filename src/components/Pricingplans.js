import React from 'react'
import './pricingplans.css'
export const Pricingplans = () => {
    return (
        <div className="container">
            <div className="mt-20">
                <h1>Pricing Plans</h1>
                <p className="mt-3">Amet minim mollit non deserunt ullamco est sit dolor do amet sint.</p>
            </div>
            <div class="row justify-content-center mt-5">
                <div class="col-md-3 mr-3 ">
                    <div class="card border-success h-100">
                        <img src=".\Basic.svg" class="img-fluid ribbon-set" alt="Responsive image" width="18%" />
                        <div class="container mb-5"><h2 className="text-success mt-4 ">Basic</h2></div>
                        <div class="card-body">
                            <button className="mb-4 btn btn-success mt-50 btn-sm btn-block rounded-pill ">Subscribe monthly @ Rs. 20/mo</button>
                            <button className="btn-sm btn-block rounded-pill btn-outline-success">Subscribe yearly @ Rs. 200/mo</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 mr-3 ">
                    <div class="card border-info  h-100">
                        <img src=".\Premium_orange.svg" class="img-fluid ribbon-set" alt="Responsive image" width="18%" />
                        <div class="container mb-4"><p className="text-info mt-4 small text-body">MOST POPULAR<br></br><h2 className="text-info">Premimum</h2></p></div>
                        <div class="card-body ">
                            <button className="mb-4 btn btn-info mt-50 btn-sm btn-block rounded-pill">Subscribe monthly @ Rs. 20/mo</button>
                            <button className="btn-sm btn-block rounded-pill btn-outline-info" >Subscribe yearly @ Rs. 200/mo</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-warning mb-3 h-100">
                        <img src=".\Gold.svg" class="img-fluid ribbon-set" alt="Responsive image" width="18%" />
                        <div class="container mb-5"><h2 className="text-warning mt-4">Gold</h2></div>
                        <div class="card-body ">
                            <button className="mb-4 btn btn-warning mt-50 btn-sm btn-block rounded-pill">Subscribe monthly @ Rs. 50/mo</button>
                            <button className="btn-sm btn-block rounded-pill btn-outline-warning" >Subscribe yearly @ Rs. 500/mo</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Pricingplans