import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function HomePageAbout() {

    
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
            <br />
                <br />
                <br />

            {/* <!-- About Section --> */}
            <section id="about" className="about section">

                {/* <!-- Section Title --> */}
                <div className="container section-title" data-aos="fade-up">
                    <h2 className="">About Us</h2>
                </div>
                {/* <!-- End Section Title --> */}

                <div className="container">

                    <div className="row gy-4">

                        <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
                            <p>
                            Welcome to Vivekananda It Solution, where innovation meets excellence in software solutions. At Vivekananda It Solution, we believe in pushing the boundaries of technology to create impactful solutions that empower businesses and individuals alike
                            </p>
                            <ul>
                                <li><i className="bi bi-check2-circle"></i> <span>Expertise: With years of experience and a proven track record of success, we have the expertise to tackle even the most complex software challenges.</span></li>
                                <li><i className="bi bi-check2-circle"></i> <span>Innovation: We stay ahead of the curve by embracing emerging technologies and innovative practices to deliver solutions that drive tangible results.</span></li>
                                <li><i className="bi bi-check2-circle"></i> <span>Collaboration: We believe in fostering strong partnerships with our clients, working closely with them every step of the way to ensure their satisfaction and success.</span></li>
                            
                                <li><i className="bi bi-check2-circle"></i> <span>Quality: We are committed to delivering high-quality, reliable software solutions that stand the test of time and exceed industry standards.</span></li>
                            
                                <li><i className="bi bi-check2-circle"></i> <span>Customer Satisfaction: Our ultimate goal is the success and satisfaction of our clients. We go above and beyond to ensure that every project is delivered on time, within budget, and to the highest standard of quality.</span></li>
                            
                            </ul>
                        </div>

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <p>Our mission is simple: to revolutionize the way businesses operate by providing cutting-edge software solutions that streamline processes, enhance productivity, and drive growth. We are committed to delivering innovative products that exceed expectations and redefine industry standards. </p>
                            
                            <p>We specialize in developing custom software solutions tailored to meet the unique needs of our clients. Whether you're a startup looking to build your digital presence or an enterprise seeking to optimize operations, we have the expertise to bring your vision to life. From web and mobile applications to enterprise software and cloud solutions, we offer a comprehensive suite of services designed to drive success in today's digital landscape. </p>
                            
                            <p>At Vivekananda It Solution, we believe in a client-centric approach to software development. We prioritize understanding our clients' goals, challenges, and requirements to deliver solutions that not only meet but exceed their expectations. Our iterative development process ensures transparency, flexibility, and continuous improvement, allowing us to adapt to evolving needs and deliver superior results. </p>
                            
                            
                            <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                        </div>

                    </div>

                </div>

            </section>
            {/* <!-- /About Section --> */}


        </>
    )
}
