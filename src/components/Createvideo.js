import React from 'react'
import './createvideo.css'
const Createvideo = () => {
    return (

        <div className="container">
            <div className="mt-20">
                <h2>Create a video</h2>
                <p className="mt-3">Amet minim mollit non deserunt ullamco est sit dolor do amet sint.</p>
            </div>
            <div class="row justify-content-center mt-5">
                <div class="col-md-3 col-12 mr-3 ">
                    <div class="card h-100">
                        <div className="row mb-5">
                            <div className="col-md-12 col-12 text-center">
                                <h5 className="mt-4 text-center">Enter blog URL</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-12 text-center">
                                <img src=".\blog.gif" alt="Card image cap" height="80px" width="80px"></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-12 text-center p-5">
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Paste URL here"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-12 mr-3 ">
                   <div class="card border-warning h-100">
                        <div className="row mb-5">
                            <div className="col-md-12 col-12 text-center">
                                <h5 className="mt-4 text-center">Write a script</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-12 text-center">
                                <img src=".\write.gif" alt="Card image cap" height="80px" width="80px"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-12">
                   <div class="card h-100">
                        <div className="row mb-5">
                            <div className="col-md-12 col-12 text-center">
                                <h5 className="mt-4 text-center">Create from scratch</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-12 text-center">
                                <img src=".\scratch.gif" alt="Card image cap" height="80px" width="80px"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12 col-12 ">
                    <h5>Select Frame Size</h5>
                </div>
                <div className="col-md-12 col-12 p-0">
                    <div className="row mb-3">
                        <div className="col-md-4 col-12 overflow-hidden hgt-35">
                            <img className="p-3" src="https://cdn.pixabay.com/photo/2020/11/18/16/22/butterfly-5755871__340.jpg" class="img-fluid" alt="Responsive image" />
                        </div>
                        <div className="col-md-6 col-12 overflow-hidden hgt-35">
                            <img className="p-3" src="https://cdn.pixabay.com/photo/2020/11/18/16/22/butterfly-5755871__340.jpg" class="img-fluid" alt="Responsive image" />
                        </div>
                        <div className="col-md-2 col-12 overflow-hidden hgt-35">
                            <img className="p-3" src="https://cdn.pixabay.com/photo/2020/11/18/16/22/butterfly-5755871__340.jpg" class="img-fluid" alt="Responsive image" />
                        </div>
                    </div>

                </div>

            </div>
            <div className="text-center mt-5 mb-5">
                <button type="button " class="btn btn-back text-white mr-5">Update</button>
            </div>
        </div>
    )
}

export default Createvideo
