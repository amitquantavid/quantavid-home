import React from 'react'
import './index.css'
const Index = () => {
    return (
        <div className="container-fluid p-0">
            <div className="circle-shape circle-red circle-lg" id="circle1"></div>
            <div className="circle-shape circle-orange circle-md" id="circle2"></div>
            <div className="circle-shape circle-green circle-xxs" id="circle3"></div>
            <div className="circle-shape circle-white circle-lg" id="circle4"></div>

            
            
            <div className="circle-shape circle-orange circle-sm" id="circle5"></div>
            <div className="circle-shape circle-green circle-xs" id="circle6"></div>
            
            
            

            <header>
                <div className="container-fluid fixed-top nav-cont p-0">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container">
                        <a class="navbar-brand" href="#">QuantaVid</a>
                        <button class="navbar-toggler btn-primary" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active mr-4">
                                    <a class="nav-link" href="#">Upgrade <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item mr-4">
                                    <a class="nav-link" href="#">Blog</a>
                                </li>
                                <li class="nav-item mr-4">
                                    <a class="nav-link" href="#">Pricing</a>
                                </li>
                                <li class="nav-item mr-4">
                                    <a class="btn btn-light">Login/Register</a>
                                </li>
                            </ul>
                        </div>

                        </div>
                    </nav>


                </div>
                <section className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="row text-white heading-container">
                                <div className="col-md-12 col-12 mt-5">
                                    <h1 className=" hero-heading">Fastest route to your videos</h1>
                                </div>
                                <div className="col-md-12 col-12">
                                    <p>Create videos fast and free in just few clicks</p>
                                </div>
                                <div className="col-md-12 col-12">
                                    <button type="button" class="btn btn-light">Create</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 overflow-hidden video-contaier">
                            <video className="video-circle-lg" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                                <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                            </video>
                            <video className="video-circle-md" width="30%" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                                <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                            </video>
                            <video className="video-circle-sm" width="30%" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                                <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </section>

            </header>


            <div className="row hgt-50 d-lg-none" ></div>
            <main className="container">
                <div className="row justify-content-center p-5">
                    <div className="col-md-8 col-12">
                        <h1 className="text-center mt-5">
                            We at QuantaVid
                    </h1>
                        <p className="pl-5 pr-5 pt-5 text-center">
                            QuantaVid, LLC is a SaaS company based in The United States of America. It is an artificial intelligence (AI)-powered video generating platform, designed to automatically generate high quality personalized and promotional videos for brands, digital publishers and businesses. The data driven dynamic video content can be used for marketing and ad campaigns, sales promotion and much more.
                    </p>
                    </div>
                    <div className="col-md-12 col-12 text-center mt-5">
                        <img src=".\Group 25.png" class="img-fluid" alt="Responsive image" />
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-6 col-12 p-5">
                        <img src=".\Group 50.svg" class="img-fluid" alt="Responsive image" width="70%" />
                    </div>
                    <div className="col-md-6 col-12 mt-5 p-5">
                        <h3 className="mt-5">
                            AI is the future
                    </h3>
                        <p>
                            In the world of videos, why stuck with the text. Let the AI make it easier for you. Convert your articles into engaging videos with just a couple of clicks and make your content more appealing.
                    </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 col-12 mt-5 p-5">
                    <h3 className="mt-5">
                            High quality pictures and videos
                    </h3>
                        <p>
                            Choose from over million's of high resolution photos and clips from the inbuilt library of QuantaVid with AI recommended searches.
                    </p>
                    </div>
                    <div className="col-md-6 col-12 p-5 text-right">
                        <img src=".\Group 51.svg" class="img-fluid" alt="Responsive image" width="70%" />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 col-12 p-5">
                        <img src=".\Group 52.svg" class="img-fluid" alt="Responsive image" width="70%" />
                    </div>
                    <div className="col-md-6 col-12 mt-5 p-5">
                    <h3 className="mt-5">
                            Get your content in the top results
                    </h3>
                        <p>
                            Bring more readers onboard with videos. Videos generate more traffic for your site, it helps in SEO and moreover, it leaves an ever-lasting impression in the minds of your viewers.
                    </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 col-12 mt-5 p-5">
                    <h3 className="mt-5">
                            Revolutionizing the way you learn
                    </h3>
                        <p>
                            Educate the world with your videos. Video content is growing at the most rapid speed and is the future of education.
                    </p>
                    </div>
                    <div className="col-md-6 col-12 p-5 text-right">
                        <img src=".\Group 53.svg" class="img-fluid" alt="Responsive image" width="70%" />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 margin-b">
                        <h1 className="text-center">Enhance your creativity</h1>
                    </div>

                    <div className="col-12">
                        <div className="row mb-3">
                            <div className="col-4 overflow-hidden hgt-35">
                                <video className="p-3" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                                    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="col-6 overflow-hidden hgt-35">
                                <video className="p-3" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                                    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="col-2 overflow-hidden hgt-35">
                                <video className="p-3" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                                    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                                </video>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-2 overflow-hidden hgt-35">
                                <video className="p-3" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                                    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="col-6 overflow-hidden hgt-35">
                                <video className="p-3" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                                    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="col-4 overflow-hidden hgt-35">
                                <video className="p-3" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                                    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                                </video>
                            </div>


                        </div>

                    </div>

                </div>
                <div className="row">
                    <div className="col-md-6 col-12 mt-5 pr-0">
                        <div className="map">
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.5991043427052!2d-83.44470018430947!3d42.26573304904546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b51eaa808a931%3A0x450f2b32e65c25a0!2s41150%20Van%20Born%20Rd%2C%20Canton%2C%20MI%2048188%2C%20USA!5e0!3m2!1sen!2sin!4v1612025693827!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 pl-0">
                        <form className="p-5">
                            <div className="row mt-5">
                                <div className="col">
                                    <h1>Contact us</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <input type="text" class="form-control" placeholder="First name" />
                                </div>
                                <div class="col-md-6 col-12">
                                    <input type="text" class="form-control" placeholder="Last name" />
                                </div>

                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12 col-12">
                                    <input type="text" class="form-control" placeholder="Title" />
                                </div>
                            </div>
                            <div className="row mt-3 mb-3">
                                <div className="col-md-12 col-12">
                                    <textarea class="form-control" rows="4" placeholder="Enter your message..."></textarea>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>

                </div>

            </main>
            <footer className="text-white bcolor">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-12 mt-5">
                            <h5 class="text-uppercase">QuantaVid</h5>
                            <p>The best video generator you will ever need</p>
                        </div>
                        <div className="col-md-3 col-12 mt-5">
                            <h5 class="text-uppercase">EXPLORE</h5>
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" class="text-white">Services</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">Premium Features</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">Policies</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-12 mt-5">
                            <h5 class="text-uppercase">CONTACT US</h5>
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" class="text-white">contact@quantavid.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-12 mt-5">
                            <h5 class="text-uppercase">Social Media</h5>
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" class="text-white">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">Facebook</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <p className="text-left">© Copyright QuantaVid</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Index
