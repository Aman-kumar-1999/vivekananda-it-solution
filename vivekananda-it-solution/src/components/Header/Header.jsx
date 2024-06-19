import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header() {



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

                <Link to={'/'} onClick={scrollClickHome} className=" d-flex align-items-center me-auto">

                    <h1 className="sitename">

                        <img src="img/VIS-LOGO.png" className="logo-img" alt="" /><br />

                    </h1>
                </Link>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><Link to={'/'} onClick={scrollClickHome} className="">Home</Link></li>
                        <li className="dropdown"><Link
                        // to={'/'} onClick={scrollClickService}
                        ><span>Services</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                            <ul>
                                {/* <li><Link href="#">Services</Link></li> */}
                                <li><Link to={`/service/${encodeURIComponent(jsonData1)}`} onClick={scrollClickHome}>Custom Software Development</Link></li>
                                <li><Link to={`/service/${encodeURIComponent(jsonData2)}`} onClick={scrollClickHome}>Web and Mobile App Development</Link></li>
                                <li><Link to={`/service/${encodeURIComponent(jsonData3)}`} onClick={scrollClickHome}>Cloud Migration and Integration</Link></li>
                                <li><Link to={`/service/${encodeURIComponent(jsonData4)}`} onClick={scrollClickHome}>IT Consulting and Strategy</Link></li>
                                <li><Link to={`/service/${encodeURIComponent(jsonData5)}`} onClick={scrollClickHome}>Quality Assurance and Testing</Link></li>
                                <li><Link to={`/service/${encodeURIComponent(jsonData6)}`} onClick={scrollClickHome}>Support and Maintenance</Link></li>
                                <li><Link to={`/service/${encodeURIComponent(jsonData7)}`} onClick={scrollClickHome}>UX/UI Design</Link></li>
                                <li><Link to={`/service/${encodeURIComponent(jsonData8)}`} onClick={scrollClickHome}>Data Analytics and Business Intelligence</Link></li>
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
                        <li><Link to={"/about"} onClick={scrollClickHome}>About</Link></li>
                        {/* <li><Link href="index.html#services">Services</Link></li> */}
                        {/* <li><Link href="index.html#portfolio">Portfolio</Link></li> */}
                        <li><Link to={"/teams"} onClick={scrollClickHome}>Teams</Link></li>
                        {/* <li><Link href="index.html#pricing">Pricing</Link></li> */}

                        <li><Link to={"/contact"} onClick={scrollClickHome}>Contact</Link></li>
                    </ul>
                    {/* <i className="mobile-nav-toggle d-xl-none bi bi-list"></i> */}
                </nav>

                {/* <Link className="btn-getstarted" href="index.html#about">Get Started</Link> */}

            </div>
        </header>
    </>
)
}
