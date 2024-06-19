import React, { useEffect } from 'react'
import AOS from 'aos';

export default function TeamsPage() {

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
            <br />
            

            <section id="team" class="team section">

                {/* <!-- Section Title --> */}
                <div class="container section-title" data-aos="fade-up">
                    <h2>Team</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                {/* <!-- End Section Title --> */}

                <div class="container">

                    <div class="row gy-4">

                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <div class="team-member d-flex align-items-start">
                                <div class="pic"><img src="img/logo.png" class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Aman Kumar</h4>
                                    <span>Chief Executive Officer</span>
                                    <p>As the CEO of our software company, Aman Kumar embodies the vision, drive, and strategic acumen that propel us forward in the dynamic realm of technology. With a wealth of experience and a deep understanding of the industry, Aman Kumar leads with a rare blend of innovation, determination, and empathy.</p>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter"></i></a>
                                        <a href="https://www.facebook.com/profile.php?id=100013864566563"><i class="bi bi-facebook"></i></a>
                                        <a href="https://www.instagram.com/aman__kr.09/"><i class="bi bi-instagram"></i></a>
                                        <a href="https://www.linkedin.com/in/aman-kumar-9050b3203/"> <i class="bi bi-linkedin"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Team Member --> */}

                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <div class="team-member d-flex align-items-start">
                                <div class="pic"><img src="img/dilipimg.jpg" class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Dilip Kumar</h4>
                                    <span>Product Manager</span>
                                    <p>As the Product Manager at Vivekananda It Solution, Dilip Kumar is responsible for driving the vision, strategy, and execution of our software products. With a background in Dilivery Management, Dilip Kumar brings a unique blend of technical expertise and business acumen to the role.</p>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""> <i class="bi bi-linkedin"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Team Member --> */}

                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                            <div class="team-member d-flex align-items-start">
                                <div class="pic"><img src="img/RajivKumar.jpg" class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Rajiv Kumar</h4>
                                    <span>CTO</span>
                                    <p>At the helm of our technological endeavors is Rajiv Kumar, our Chief Technology Officer. With a wealth of experience in Technology Management, Rajiv Kumar leads our team of talented engineers and technologists with vision, expertise, and innovation.</p>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""> <i class="bi bi-linkedin"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Team Member --> */}

                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                            <div class="team-member d-flex align-items-start">
                                <div class="pic"><img src="img/Priyanshu1.jpg" class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>Priyanshu Patel</h4>
                                    <span>Accountant</span>
                                    <p>As the dedicated accountant at Vivekananda It Solution, Priyanshu Patel plays a crucial role in ensuring the financial health and stability of our organization. With a background in accounting and a keen eye for detail, Priyanshu Patel manages our finances with precision and expertise.</p>
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""> <i class="bi bi-linkedin"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Team Member --> */}

                    </div>

                </div>

            </section>

        </>
    )
}
