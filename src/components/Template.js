import React from 'react'
import './template.css'
const Template = () => {
    return (
        <div class="container">
            <div class="row ">
                <div class="col ">
                    <h1 className="mt-5 float-left">Choose a template</h1>
                </div>
            </div>

            <div class="row justify-content-center mt-5">
                <div class="col-md-4">
                    <div class="card shadow">
                        <img class="card-img-top" src="https://picsum.photos/200/100" alt="card image" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card shadow">
                        <img class="card-img-top" src="https://picsum.photos/200/100" alt="card image" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card shadow">
                        <img class="card-img-top" src="https://picsum.photos/200/100" alt="card image" />
                    </div>
                </div>

            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-md-4">
                    <div class="card shadow">
                        <img class="card-img-top" src="https://picsum.photos/200/100" alt="card image" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card shadow">
                        <img class="card-img-top" src="https://picsum.photos/200/100" alt="card image" />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card shadow">
                        <img class="card-img-top" src="https://picsum.photos/200/100" alt="card image" />
                    </div>
                </div>

            </div>
            <div className="d-flex justify-content-center mt-5">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <button type="button" class="btn btn-primary">Generate Video</button>
            </div>
        </div>


    )
}

export default Template
