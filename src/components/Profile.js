import React from 'react'
import './profile.css'
const Profile = () => {
    return (
        <div className="container mt-5">
            <div className="row h-100">
                <div className="col-2">
                    <nav class="navbar ">
                        <ul class="navbar-nav">
                            <li class="nav-item pb-5">
                                <a class="nav-link" href="#">
                                    <img src=".\Home.svg" class="img-fluid" alt="Responsive image" width="50%" />
                                </a>
                            </li>
                            <li class="nav-item pb-5">
                                <a class="nav-link" href="#">
                                    <img src=".\My Videos.svg" class="img-fluid" alt="Responsive image" width="50%" />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <img src=".\Subscriptions.svg" class="img-fluid" alt="Responsive image" width="50%" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>


                
                    <div className="col-10 border w-100 page-animation">
                        <div className="row mt-2">
                            <div className="col-12 pb-5">
                                <form>
                                    <h5 className="mb-4">Personal Information</h5>
                                    <div class="form-group row">
                                        <label for="staticName" class="col-sm-2 col-form-label">Name</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control-plaintext input-border" id="staticName" value="" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control-plaintext input-border" id="staticEmail" value="" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="staticLocation" class="col-sm-2 col-form-label">Location</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control-plaintext input-border" id="staticLocation" value="" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="staticBusinessInfo" class="col-sm-2 col-form-label">Business info</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control-plaintext input-border" id="staticBusinessInfo" value="" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="staticUserType" class="col-sm-2 col-form-label">User type</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control-plaintext input-border" id="staticUserType" value="" />
                                        </div>
                                    </div>

                                </form>
                            </div>
                            <div className="col-12">
                                <form>
                                    <h5 className="mb-4">Reset Your Password</h5>
                                    <div class="form-group row">
                                        <label for="inputOldPassword" class="col-sm-2 col-form-label">Old password</label>
                                        <div class="col-sm-10">
                                            <input type="password" class="form-control-plaintext input-border" id="inputOldPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputNewPassword" class="col-sm-2 col-form-label">New password</label>
                                        <div class="col-sm-10">
                                            <input type="password" class="form-control-plaintext input-border" id="inputNewPassword" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="inputConformNewPassword" class="col-sm-2 col-form-label">Conform new password</label>
                                        <div class="col-sm-10">
                                            <input type="password" class="form-control-plaintext input-border" id="inputConformNewPassword" />
                                        </div>
                                    </div>
                                </form>
                                <div className="text-center my-5">
                                    <button type="button " class="btn btn-back text-white">Update</button>
                                </div>

                            </div>
                        </div>

                    </div>

                
            </div>

        </div>
    )
}

export default Profile
