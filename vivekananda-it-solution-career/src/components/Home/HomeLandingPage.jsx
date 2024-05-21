import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import 'css/style.css';

export default function HomeLandingPage() {

    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 1024 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 400, min: 0 },
            items: 1
        }
    };


    return (
        <div className='container-fluid p-0'>
            <Carousel autoPlay arrows={false} infinite={true} responsive={responsive} className='owl-carousel header-carousel position-relative'>

            <div class="">
                    <img class="img-fluid" src="img/carousel-1.jpg" alt=""/>
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(43, 57, 64, .5)'}}>
                        <div class="container">
                            <div class="row justify-content-start">
                                <div class="col-10 col-lg-8">
                                    <h1 class="display-3 text-white animated slideInDown mb-4">Find The Perfect Job That You Deserved</h1>
                                    <p class="fs-5 fw-medium text-white mb-4 pb-2">If you're ready to take your career to the next level and be part of a dynamic team that is shaping the future of technology, browse our current job openings and apply online. We look forward to welcoming you to the Vivekananda It Solution family!.</p>
                                    <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</a>
                                    <a href="" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="owl-carousel-item position-relative">
                    <img class="img-fluid" src="img/carousel-2.jpg" alt=""/>
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(43, 57, 64, .5)'}}>
                        <div class="container">
                            <div class="row justify-content-start">
                                <div class="col-10 col-lg-8">
                                    <h1 class="display-3 text-white animated slideInDown mb-4">Find The Best Startup Job That Fit You</h1>
                                    <p class="fs-5 fw-medium text-white mb-4 pb-2">If you're ready to take your career to the next level and be part of a dynamic team that is shaping the future of technology, browse our current job openings and apply online. We look forward to welcoming you to the Vivekananda It Solution family!.</p>
                                    <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</a>
                                    <a href="" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

            </Carousel>



        </div>

    )
}
