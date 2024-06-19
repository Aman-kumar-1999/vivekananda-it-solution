import React, { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import AOS from 'aos';

export default function ServicesPageCustomePage() {

    const { data1 } = useParams();
    const jsonData1 = JSON.parse(decodeURIComponent(data1));
    // const jsonData2 = JSON.parse(decodeURIComponent(data2));

    // const location = useLocation();
    // const {data1} = location.state || {};
    // const data = JSON.stringify(data1);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animation (in milliseconds)
            easing: 'ease-in-out', // Easing type
            once: true // Whether animation should only happen once
            // More options can be found in the AOS documentation
        });
    }, []);

    return (
        <>

            <section id="services" class="services section">
                <br />
                <br />
                <br />


                <div class="container section-title gy-4 service-item position-relative" data-aos="fade-up">
                    <h2>{jsonData1.service}</h2>
                    <div className="hero-img">
                        {/* <img src={jsonData1.imgUrl}  alt="" /> */}
                        <span class="material-symbols-outlined" style={{fontSize:'230px',color:'#47b2e4'}}>
                            {jsonData1.logo}
                        </span>
                    </div>
                    <p>{jsonData1.details}</p>
                </div>

                {/* Try : {jsonData1.service} */}

                <div class="container">

                    <div class="row gy-4">

                        {/* <Link to={'addVendors'} class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item position-relative">
                                <div class="icon">
                                    <i class="material-symbols-outlined ">
                                        engineering
                                    </i>
                                </div>
                                <h4><a href="" class="stretched-link">Custom Software Development</a></h4>
                                <p>Unlock the full potential of your business with our custom software development services. Whether you need a new application built from scratch or enhancements to your existing software, our team of experienced developers will work closely with you to understand your unique requirements and deliver tailored solutions that align with your business objectives.</p>
                            </div>
                        </Link> */}



                        {/* <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
                            <div class="service-item position-relative">
                                <div class="icon">
                                    <i class="material-symbols-outlined ">
                                        database
                                    </i>
                                </div>
                                <h4><a href="" class="stretched-link">Data Analytics and Business Intelligence</a></h4>
                                <p>Harness the power of data to gain valuable insights and make informed business decisions with our data analytics and business intelligence services. From data visualization to predictive analytics, our experts will help you unlock the full potential of your data, enabling you to identify trends, spot opportunities, and drive growth.</p>
                            </div>
                        </div> */}
                        {/* <!-- End Service Item --> */}

                    </div>

                </div>

            </section>

        </>
    )
}
