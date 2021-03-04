import React from 'react'
import './editvideo.css'
const Editvideo = () => {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-3">
                    <div class="card">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                    <img src=".\Media_orange.svg" class="img-fluid" alt="Responsive image" width="50%" /> 
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                    <img src=".\Music_orange.svg" class="img-fluid" alt="Responsive image" width="50%" />
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                                    <img src=".\Export_orange.svg" class="img-fluid" alt="Responsive image" width="50%" />
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content card-body" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">

                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <p>Result</p>
                                    </div>
                                    <div className="col-6">
                                        <p>Images</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="card">
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h1>Hello1</h1>
                            </div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <h1>Hello2</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <p>Untiled</p>
                        </div>
                        <div className="col-6">
                            <p>Preview</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div class="card">
                        <div class="card-body">This is some text within a padded box.</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">

                </div>
                <div className="col-12">

                </div>
            </div>
        </div>
    )
}

export default Editvideo
