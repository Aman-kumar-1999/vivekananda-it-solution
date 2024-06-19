import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileHeader() {

    const jsonData1 = JSON.stringify
        (
            {
                
                service: "Custom Software Development",
                logo: "engineering",
                details: "Unlock the full potential of your business with our custom software development services. Whether you need a new application built from scratch or enhancements to your existing software, our team of experienced developers will work closely with you to understand your unique requirements and deliver tailored solutions that align with your business objectives.",
                imgUrl: "/img/hero-img.png" 
                
            }
         );
    const jsonData2 = JSON.stringify
        (
            {
                
                service: "Web and Mobile App Development",
                logo: "public",
                details: "Take your business to the next level with our web and mobile app development services. From responsive websites to feature-rich mobile applications, we leverage the latest technologies and best practices to create intuitive and engaging digital experiences that delight users and drive results."
                ,imgUrl: "/img/hero-img.png" 
            }
         );
    const jsonData3 = JSON.stringify
        (
            {
                
                service: "Cloud Migration and Integration",
                logo: "cloud",
                details: "Transition seamlessly to the cloud with our cloud migration and integration services. Whether you're looking to migrate your existing applications to the cloud or integrate your on-premises systems with cloud-based solutions, our experts will ensure a smooth and secure transition, enabling you to leverage the scalability, flexibility, and cost-effectiveness of cloud computing."
                ,imgUrl: "/img/hero-img.png" 
            }
         );
    const jsonData4 = JSON.stringify
        (
            {
                
                service: "IT Consulting and Strategy",
                logo: "computer",
                details: "Stay ahead of the curve with our IT consulting and strategy services. Our team of seasoned IT professionals will work closely with you to assess your current IT infrastructure, identify areas for improvement, and develop a comprehensive strategy to optimize your technology investments and achieve your business goals."
                ,imgUrl: "/img/hero-img.png" 
            }
         );
    const jsonData5 = JSON.stringify
        (
            {
                
                service: "Quality Assurance and Testing",
                logo: "lab_panel",
                details: "Ensure the reliability and performance of your software applications with our quality assurance and testing services. From functional testing to performance testing and beyond, our QA engineers employ industry-leading tools and methodologies to rigorously test your software across multiple platforms and devices, ensuring a flawless user experience."
                ,imgUrl: "/img/hero-img.png" 
            }
         );
    const jsonData6 = JSON.stringify
        (
            {
                
                service: "Support and Maintenance",
                logo: "support_agent",
                details: "Stay agile and responsive with our support and maintenance services. Whether you need troubleshooting assistance, software updates, or ongoing technical support, our dedicated support team is available around the clock to ensure that your software applications continue to operate smoothly and efficiently, minimizing downtime and maximizing productivity."
                ,imgUrl: "/img/hero-img.png" 
            }
         );
    const jsonData7 = JSON.stringify
        (
            {
                
                service: "UX/UI Design",
                logo: "transition_fade",
                details: "Deliver exceptional user experiences with our UX/UI design services. Our team of talented designers combines creativity with usability principles to craft visually stunning and intuitive user interfaces that engage and delight users, driving customer satisfaction and loyalty."
                ,imgUrl: "/img/hero-img.png" 
            }
         );
    const jsonData8 = JSON.stringify
        (
            {
                
                service: "Data Analytics and Business Intelligence",
                logo: "database",
                details: "Harness the power of data to gain valuable insights and make informed business decisions with our data analytics and business intelligence services. From data visualization to predictive analytics, our experts will help you unlock the full potential of your data, enabling you to identify trends, spot opportunities, and drive growth."
                ,imgUrl: "/img/hero-img.png" 
            }
         );

    const scrollClickService = () => {
        window.scrollTo(100, 4400);
    };

    const scrollClickHome = () => {
        offcanvasInstance.hide();
        // offcanvasInstance.dispose();
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






                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-header">

                            <button type="button" className="btn-close"  data-bs-dismiss="offcanvas"  aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">

                            <div className="list-group">
                                <Link to={'/'} className="list-group-item list-group-item-action" onClick={scrollClickHome} aria-label="Close">Home</Link><br />

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


                                                <ul><Link to={`/service/${encodeURIComponent(jsonData1)}`} onClick={scrollClickHome} aria-label="Close">Custom Software Development</Link></ul>
                                                <ul><Link to={`/service/${encodeURIComponent(jsonData2)}`} onClick={scrollClickHome} aria-label="Close">Web and Mobile App Development</Link></ul>
                                                <ul><Link to={`/service/${encodeURIComponent(jsonData3)}`} onClick={scrollClickHome} 
                                                // data-bs-dismiss="offcanvas" 
                                                aria-label="Close">Cloud Migration and Integration</Link></ul>
                                                <ul><Link to={`/service/${encodeURIComponent(jsonData4)}`} onClick={scrollClickHome} aria-label="Close">IT Consulting and Strategy</Link></ul>
                                                <ul><Link to={`/service/${encodeURIComponent(jsonData5)}`} onClick={scrollClickHome} aria-label="Close">Quality Assurance and Testing</Link></ul>
                                                <ul><Link to={`/service/${encodeURIComponent(jsonData6)}`} onClick={scrollClickHome} aria-label="Close">Support and Maintenance</Link></ul>
                                                <ul><Link to={`/service/${encodeURIComponent(jsonData7)}`} onClick={scrollClickHome} aria-label="Close">UX/UI Design</Link></ul>
                                                <ul><Link to={`/service/${encodeURIComponent(jsonData8)}`} onClick={scrollClickHome} aria-label="Close">Data Analytics and Business Intelligence</Link></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* </Link> */}
                                <br />

                                <Link to={"/about"} className="list-group-item list-group-item-action" onClick={scrollClickHome}  aria-label="Close">About</Link><br />

                                <Link to={"/teams"} className="list-group-item list-group-item-action" onClick={scrollClickHome}  aria-label="Close">Teams</Link><br />
                                <Link to={"/contact"} className="list-group-item list-group-item-action" onClick={scrollClickHome} aria-label="Close">Contact</Link><br />

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
