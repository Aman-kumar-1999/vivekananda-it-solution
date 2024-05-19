import React from 'react'

export default function HomePageLandingPage() {
    return (
        <>
            {/* <!-- Hero Section --> */}
            <section id="hero" className="hero section">

                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1 className="">Better Solutions For Your Business</h1>
                            <p className="">We are team of talented designers making websites with Latest technology</p>
                            <div className="d-flex">
                                <a href="#about" className="btn-get-started">Get Started</a>
                                <span> &nbsp; &nbsp; &nbsp;</span>
                                <a href="#about" className="btn-get-started">Hiring Portal</a>
                                {/* <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a> */}
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img src="img/hero-img.png" className="img-fluid animated" alt="" />
                            {/* <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/hero-img.png" className="img-fluid animated" alt=""/> */}
                        </div>
                    </div>
                </div>

            </section>
            {/* <!-- /Hero Section --> */}
        </>
    )
}
