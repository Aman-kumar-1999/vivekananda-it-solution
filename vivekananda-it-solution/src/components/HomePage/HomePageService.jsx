import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function HomePageService() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation (in milliseconds)
      easing: 'ease-in-out', // Easing type
      once: true // Whether animation should only happen once
      // More options can be found in the AOS documentation
    });
  }, []);

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
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 1,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   };

  return (
    <>
      <section id="services" class="services section">

        {/* <!-- Section Title --> */}
        <div class="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Services offered by the our company, highlighting the range of expertise and capabilities available to meet the diverse needs of clients.</p>
        </div>
        {/* <!-- End Section Title --> */}

        <div class="container">

          <div class="row gy-4">

            <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
              <div class="service-item position-relative">
                <div class="icon">
                <i class="material-symbols-outlined ">
                engineering
                  </i>
                  </div>
                <h4><a href="" class="stretched-link">Custom Software Development</a></h4>
                <p>Unlock the full potential of your business with our custom software development services. Whether you need a new application built from scratch or enhancements to your existing software, our team of experienced developers will work closely with you to understand your unique requirements and deliver tailored solutions that align with your business objectives.</p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
              <div class="service-item position-relative">
                <div class="icon">
                <i class="material-symbols-outlined ">
                  public
                  </i>

                </div>
                <h4><a href="" class="stretched-link">Web and Mobile App Development</a></h4>
                <p>Take your business to the next level with our web and mobile app development services. From responsive websites to feature-rich mobile applications, we leverage the latest technologies and best practices to create intuitive and engaging digital experiences that delight users and drive results.</p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
              <div class="service-item position-relative">
                <div class="icon">
                  
                <i class="material-symbols-outlined ">
                    cloud
                  </i></div>
                <h4><a href="" class="stretched-link">Cloud Migration and Integration</a></h4>
                <p>Transition seamlessly to the cloud with our cloud migration and integration services. Whether you're looking to migrate your existing applications to the cloud or integrate your on-premises systems with cloud-based solutions, our experts will ensure a smooth and secure transition, enabling you to leverage the scalability, flexibility, and cost-effectiveness of cloud computing.</p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
              <div class="service-item position-relative">
                <div class="icon">
                <i class="material-symbols-outlined ">
                    computer
                  </i>
                  </div>
                <h4><a href="" class="stretched-link">IT Consulting and Strategy</a></h4>
                <p>Stay ahead of the curve with our IT consulting and strategy services. Our team of seasoned IT professionals will work closely with you to assess your current IT infrastructure, identify areas for improvement, and develop a comprehensive strategy to optimize your technology investments and achieve your business goals.</p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}
            <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
              <div class="service-item position-relative">
                <div class="icon">
                  {/* <i class="bi bi-broadcast icon"></i> */}
                  <i class="material-symbols-outlined ">
                    lab_panel
                  </i>
                </div>
                <h4><a href="" class="stretched-link">Quality Assurance and Testing</a></h4>
                <p>Ensure the reliability and performance of your software applications with our quality assurance and testing services. From functional testing to performance testing and beyond, our QA engineers employ industry-leading tools and methodologies to rigorously test your software across multiple platforms and devices, ensuring a flawless user experience.</p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}
            <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
              <div class="service-item position-relative">
                <div class="icon">
                <i class="material-symbols-outlined ">
                support_agent
                  </i>
                  </div>
                <h4><a href="" class="stretched-link">Support and Maintenance</a></h4>
                <p>Stay agile and responsive with our support and maintenance services. Whether you need troubleshooting assistance, software updates, or ongoing technical support, our dedicated support team is available around the clock to ensure that your software applications continue to operate smoothly and efficiently, minimizing downtime and maximizing productivity.</p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}
            <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
              <div class="service-item position-relative">
                <div class="icon">
                <i class="material-symbols-outlined ">
                transition_fade
                  </i>
                  </div>
                <h4><a href="" class="stretched-link">UX/UI Design</a></h4>
                <p>Deliver exceptional user experiences with our UX/UI design services. Our team of talented designers combines creativity with usability principles to craft visually stunning and intuitive user interfaces that engage and delight users, driving customer satisfaction and loyalty.</p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}
            <div class="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
              <div class="service-item position-relative">
                <div class="icon">
                <i class="material-symbols-outlined ">
                database
                  </i>
                  </div>
                <h4><a href="" class="stretched-link">Data Analytics and Business Intelligence</a></h4>
                <p>Harness the power of data to gain valuable insights and make informed business decisions with our data analytics and business intelligence services. From data visualization to predictive analytics, our experts will help you unlock the full potential of your data, enabling you to identify trends, spot opportunities, and drive growth.</p>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

          </div>

        </div>

      </section>


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
                <div class="pic"><img src="img/AmanKInsta2.jpg" class="img-fluid" alt="" /></div>
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
      {/* <!-- /Team Section --> */}
      {/* <!-- /Services Section --> */}


      {/* <!-- Testimonials Section --> */}
      <section id="testimonials" class="testimonials section">

        {/* <!-- Section Title --> */}
        <div class="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>Partnering with Vivekananda It Solution has been a game-changer for our business. Their innovative software solutions have revolutionized our operations, driving efficiency, and productivity to new heights.</p>
        </div>
        {/* <!-- End Section Title --> */}

        <div class="container" data-aos="fade-up" data-aos-delay="100">

          <div class="swiper">
            {/* <script type="application/json" class="swiper-config">
            {
              "loop": true,
              "speed": 600,
              "autoplay": {
                "delay": 5000
              },
              "slidesPerView": "auto",
              "pagination": {
                "el": ".swiper-pagination",
                "type": "bullets",
                "clickable": true
              }
            }
          </script> */}
            <div class="swiper-wrapper">

              <Carousel autoPlay arrows={false} infinite={true} responsive={responsive} className='swiper-wrapper align-items-center'>



                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img src="img/Amankumar.png" class="testimonial-img" alt="" />
                    <h3>Aman Kumar</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i class="bi bi-quote quote-icon-left"></i>
                      <span>I am a highly skilled and motivated software
                        developer with a strong background in
                        implementing Microservices architecture for ecommerce applications. With expertise in Java,
                        Spring Boot, and React JS, I have successfully
                        developed and managed various components
                        of an e-commerce web application, including
                        API Gateway, Configuration, Service Registry,
                        User Service, Order Service, Product Service,
                        and Payment Gateway. My goal is to leverage
                        my technical skills and experience to contribute
                        to innovative projects and deliver high-quality
                        software solutions</span>
                      <i class="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img src="img/dilipimg.jpg" class="testimonial-img" alt="" />
                    <h3>Dilip Kumar</h3>
                    <h4>PM</h4>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i class="bi bi-quote quote-icon-left"></i>
                      <span>As the Product Manager at Vivekananda It Solution, Dilip Kumar is responsible for driving the vision, strategy, and execution of our software products. With a background in Dilivery Management, Dilip Kumar brings a unique blend of technical expertise and business acumen to the role.</span>
                      <i class="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img src="img/RajivKumar.jpg" class="testimonial-img" alt="" />
                    <h3>Rajiv Kumar</h3>
                    <h4>Store Owner</h4>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i class="bi bi-quote quote-icon-left"></i>
                      <span>At Vivekananda It Solution, we understand that small businesses are the backbone of our economy. That's why we're dedicated to empowering store owners like Rajiv Kumar with the tools and technology they need to succeed in today's digital marketplace.</span>
                      <i class="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img src="img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i class="bi bi-quote quote-icon-left"></i>
                      <span>As a freelance software developer, collaborating with  Vivekananda It Solution has been an absolute pleasure. Their professionalism, communication, and commitment to excellence set them apart in the industry.</span>
                      <i class="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div class="swiper-slide">
                  <div class="testimonial-item">
                    <img src="img/Priyanshu1.jpg" class="testimonial-img" alt="" />
                    <h3>Priyanshu Patal</h3>
                    <h4>Accountent</h4>
                    <div class="stars">
                      <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i class="bi bi-quote quote-icon-left"></i>
                      <span>As the dedicated accountant at Vivekananda It Solution, Priyanshu Patel plays a crucial role in ensuring the financial health and stability of our organization. With a background in accounting and a keen eye for detail, Priyanshu Patel manages our finances with precision and expertise.</span>
                      <i class="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </Carousel>

              {/* <!-- End testimonial item --> */}

            </div>
            <div class="swiper-pagination"></div>
          </div>

        </div>

      </section>
      {/* <!-- /Testimonials Section --> */}



      {/* <!-- Contact Section --> */}
      <section id="contact" class="contact section">

        {/* <!-- Section Title --> */}
        <div class="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>This content provides visitors with various ways to contact the software company, including address, phone numbers, email addresses, social media links, office hours, and a contact form for inquiries</p>
        </div>
        {/* <!-- End Section Title --> */}

        <div class="container" data-aos="fade-up" data-aos-delay="100">

          <div class="row gy-4">

            <div class="col-lg-5">

              <div class="info-wrap">
                <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                  <i class="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>Boothnath, Patna, Bihar, IN 800026</p>

                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                  <i class="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+91 9128984478</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                  <i class="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>info@vivekanandaitsolution.com</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <iframe src="" frameborder="0"
                  style={{ border: 0, width: '100%', height: '270px' }}
                  //   style="border:0; width: 100%; height: 270px;" 
                  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

            <div class="col-lg-7">
              <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div class="row gy-4">

                  <div class="col-md-6">
                    <label for="name-field" class="pb-2">Your Name</label>
                    <input type="text" name="name" id="name-field" class="form-control" required="" />
                  </div>

                  <div class="col-md-6">
                    <label for="email-field" class="pb-2">Your Email</label>
                    <input type="email" class="form-control" name="email" id="email-field" required="" />
                  </div>

                  <div class="col-md-12">
                    <label for="subject-field" class="pb-2">Subject</label>
                    <input type="text" class="form-control" name="subject" id="subject-field" required="" />
                  </div>

                  <div class="col-md-12">
                    <label for="message-field" class="pb-2">Message</label>
                    <textarea class="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                  </div>

                  <div class="col-md-12 text-center">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>

                    <button type="submit">Send Message</button>
                  </div>

                </div>
              </form>
            </div>
            {/* <!-- End Contact Form --> */}

          </div>

        </div>

      </section>
      {/* <!-- /Contact Section --> */}

    </>
  )
}
