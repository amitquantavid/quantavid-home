import React from 'react'
import './subscription.css'
const Subscription = () => {
    return (
        <div className="container mt-5">
            <div className="row h-100">
                <div className="col-2">
                    <nav class="navbar ">
                        <ul class="navbar-nav">
                            <li class="nav-item pb-5">
                                <a class="nav-link" href="#">
                                    <img src=".\Home-1.svg" class="img-fluid" alt="Responsive image" width="50%" />
                                </a>
                            </li>
                            <li class="nav-item pb-5">
                                <a class="nav-link" href="#">
                                    <img src=".\My Videos.svg" class="img-fluid" alt="Responsive image" width="50%" />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <img src=".\Subscriptions-1.svg" class="img-fluid" alt="Responsive image" width="50%" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-10 border ">
                    <div className="row mt-3">
                        <div className="col-6 ">
                            <p>My Subscription</p>
                        </div>
                        <div className="col-6 text-right">
                            <span>Next billing cycle</span><span className="text-danger"> 2 days</span>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-5">
                            <img src="https://cdn.pixabay.com/photo/2020/05/07/14/57/reflection-5141841_1280.jpg" class="img-fluid" alt="Responsive image" />
                        </div>
                        <div className="col-7 pt-4">
                            <p>As a member you will have access to the following features :</p>
                            <ul className="ul-list ">
                                <li>
                                <i class="fas fa-check mr-3 text-danger"></i>QuantaVid watermark removed
                                </li>
                                <li>
                                <i class="fas fa-check mr-3 text-danger"></i>Unlimited access to our premium content library
                                </li>
                                <li>
                                <i class="fas fa-check mr-3 text-danger"></i>One-click sharing to all your social networks
                                </li>
                                <li>
                                <i class="fas fa-check mr-3 text-danger"></i>Unlimited music tracks
                                </li>
                                <li>
                                <i class="fas fa-check mr-3 text-danger"></i>Unlimited SD video creation and downloads
                                </li>
                            </ul>
                       </div>
                    </div>
                    <div className="text-center mt-5 my-5">
                        <button type="button " class="btn btn-back text-white mr-5">Update</button>
                        <button type="button " class="btn btn-back1 text-info">Update</button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Subscription
