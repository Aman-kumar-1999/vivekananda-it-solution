import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header() {

   


    const scrollClickService = () => {
        window.scrollTo(100, 2850);
    };

    const scrollClickHome = () => {
        window.scrollTo(100, 0);
    }

    const scrollClickAbout = () => {
        window.scrollTo(100, 630);
    };

    const scrollClickHomeTeams = () => {
        window.scrollTo(100, 4300);
    }

    const scrollClickContact = () => {
        window.scrollTo(100, 5200);
    };


    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center">

                    <Link to={'/'}  onClick={scrollClickHome} className=" d-flex align-items-center me-auto">

                        <h1 className="sitename">

                            <img src="img/VIS-LOGO.png" className="logo-img" alt="" /><br />

                        </h1>
                    </Link>

                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><Link to={'/'} onClick={scrollClickHome} className="">Home</Link></li>
                            <li className="dropdown"><Link to={'/'} onClick={scrollClickService}><span>Services</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                                <ul>
                                    {/* <li><Link href="#">Services</Link></li> */}
                                    <li><Link to={""} onClick={scrollClickService}>Custom Software Development</Link></li>
                                    <li><Link to={""} onClick={scrollClickService}>Web and Mobile App Development</Link></li>
                                    <li><Link to={""} onClick={scrollClickService}>Cloud Migration and Integration</Link></li>
                                    <li><Link to={""} onClick={scrollClickService}>IT Consulting and Strategy</Link></li>
                                    <li><Link to={""} onClick={scrollClickService}>Quality Assurance and Testing</Link></li>
                                    <li><Link to={""} onClick={scrollClickService}>Support and Maintenance</Link></li>
                                    <li><Link to={""} onClick={scrollClickService}>UX/UI Design</Link></li>
                                    <li><Link to={""} onClick={scrollClickService}>Data Analytics and Business Intelligence</Link></li>
                                    {/* <li className="dropdown"><Link href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                                        <ul>
                                            <li><Link href="#">Deep Dropdown 1</Link></li>
                                            <li><Link href="#">Deep Dropdown 2</Link></li>
                                            <li><Link href="#">Deep Dropdown 3</Link></li>
                                            <li><Link href="#">Deep Dropdown 4</Link></li>
                                            <li><Link href="#">Deep Dropdown 5</Link></li>
                                        </ul>
                                    </li> */}
                                    {/* <li><Link href="#">Dropdown 2</Link></li>
                                    <li><Link href="#">Dropdown 3</Link></li>
                                    <li><Link href="#">Dropdown 4</Link></li> */}
                                </ul>
                            </li>
                            <li><Link to={""} onClick={scrollClickAbout}>About</Link></li>
                            {/* <li><Link href="index.html#services">Services</Link></li> */}
                            {/* <li><Link href="index.html#portfolio">Portfolio</Link></li> */}
                            <li><Link to={""} onClick={scrollClickHomeTeams}>Team</Link></li>
                            {/* <li><Link href="index.html#pricing">Pricing</Link></li> */}
                            
                            <li><Link to={""} onClick={scrollClickContact}>Contact</Link></li>
                        </ul>
                        {/* <i className="mobile-nav-toggle d-xl-none bi bi-list"></i> */}
                    </nav>

                    {/* <Link className="btn-getstarted" href="index.html#about">Get Started</Link> */}

                </div>
            </header>
        </>
    )
}
