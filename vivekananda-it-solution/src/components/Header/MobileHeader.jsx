import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileHeader() {


    const scrollClickService = () => {
        window.scrollTo(100, 4400);
    };

    const scrollClickHome = () => {
        window.scrollTo(100, 0);
    }

    const scrollClickAbout = () => {
        window.scrollTo(100, 730);
    };

    const scrollClickHomeTeams = () => {
        window.scrollTo(100, 8000);
    }

    const scrollClickContact = () => {
        window.scrollTo(100, 10370);
    };

   

    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center">

                    <Link to={'/'} onClick={scrollClickHome} className=" d-flex align-items-center me-auto">

                        <h1 className="sitename">

                            <img src="img/VIS-LOGO.png" className="logo-img" alt="" /><br />

                        </h1>
                    </Link>

                    <ul>
                        <Link to={''} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                        </Link>

                    </ul>






                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-header">

                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">

                            <div className="list-group">
                                <Link to={''} className="list-group-item list-group-item-action" onClick={scrollClickHome} data-bs-dismiss="offcanvas" aria-label="Close">Home</Link><br />

                                {/* <Link to={''} className="list-group-item list-group-item-action" onClick={scollClickService} data-bs-dismiss="offcanvas" aria-label="Close">Service */}
                                <div class="accordion accordion-flush list-group-item list-group-item-action" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingOne">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Service
                                                {/* <i style={{ float: 'right' }} className="bi bi-chevron-down toggle-dropdown"></i> */}
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">


                                                <ul><Link href="" onClick={scrollClickService} data-bs-dismiss="offcanvas" aria-label="Close">Custom Software Development</Link></ul>
                                                <ul><Link href="" onClick={scrollClickService} data-bs-dismiss="offcanvas" aria-label="Close">Web and Mobile App Development</Link></ul>
                                                <ul><Link href="" onClick={scrollClickService} data-bs-dismiss="offcanvas" aria-label="Close">Cloud Migration and Integration</Link></ul>
                                                <ul><Link href="" onClick={scrollClickService} data-bs-dismiss="offcanvas" aria-label="Close">IT Consulting and Strategy</Link></ul>
                                                <ul><Link href="" onClick={scrollClickService} data-bs-dismiss="offcanvas" aria-label="Close">Quality Assurance and Testing</Link></ul>
                                                <ul><Link href="" onClick={scrollClickService} data-bs-dismiss="offcanvas" aria-label="Close">Support and Maintenance</Link></ul>
                                                <ul><Link href="" onClick={scrollClickService} data-bs-dismiss="offcanvas" aria-label="Close">UX/UI Design</Link></ul>
                                                <ul><Link href="" onClick={scrollClickService} data-bs-dismiss="offcanvas" aria-label="Close">Data Analytics and Business Intelligence</Link></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* </Link> */}
                                <br />

                                <Link to={''} className="list-group-item list-group-item-action" onClick={scrollClickAbout} data-bs-dismiss="offcanvas" aria-label="Close">About</Link><br />

                                <Link to={''} className="list-group-item list-group-item-action" onClick={scrollClickHomeTeams} data-bs-dismiss="offcanvas" aria-label="Close">Teams</Link><br />
                                <Link to={''} className="list-group-item list-group-item-action" onClick={scrollClickContact} data-bs-dismiss="offcanvas" aria-label="Close">Contact</Link><br />

                                {/* <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                                    The current link item
                                </a>
                                <a href="#" className="list-group-item list-group-item-action">A second link item</a>
                                <a href="#" className="list-group-item list-group-item-action">A third link item</a>
                                <a href="#" className="list-group-item list-group-item-action">A fourth link item</a>
                                <a className="list-group-item list-group-item-action disabled">A disabled link item</a> */}
                            </div>



                        </div>
                    </div>
                </div>
            </header>

            {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button> */}


        </>

    )
}
