import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


// const ProgressBar = ({ percentage }) => {
//   return (
//     <div className="progress-bar">
//       <div className="progress" style={{ width: `${percentage}%` }}></div>
//     </div>
//   );
// };

export default function HomeWhy() {

  const [progress, setProgress] = useState(0);

  // useEffect(() => {
   
  // }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation (in milliseconds)
      easing: 'ease-in-out', // Easing type
      once: true // Whether animation should only happen once
      // More options can be found in the AOS documentation
    });
    
  }, []);

  // let skillsAnimation = document.querySelectorAll('.skills-animation');
  // skillsAnimation.forEach((item) => {
  //   new Waypoint({
  //     element: item,
  //     offset: '80%',
  //     handler: function (direction) {
  //       let progress = item.querySelectorAll('.progress .progress-bar');
  //       progress.forEach(el => {
  //         el.style.width = el.getAttribute('aria-valuenow') + '%';
  //       });
  //     }
  //   });
  // });


  return (
    <>

      <section id="why-us" className="section why-us" data-builder="section">

        <div className="container-fluid">

          <div className="row gy-4">

            <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">

              <div className="content px-xl-5" data-aos="fade-up" data-aos-delay="100">
                <h3 className=""><span className="">How </span><strong>& Why</strong></h3>
                <p className="">
                At Vivekananda It Solution, we believe in a collaborative approach to software development. From conceptualization to deployment, we work closely with our clients to ensure that every solution is meticulously crafted to meet their specific requirements and exceed expectations.
                </p>
              </div>

              <div className="faq-container px-xl-5" data-aos="fade-up" data-aos-delay="200" >

                <div className="faq-item faq-active">

                  <h3><span>01</span> How to unlock the full potential of your business ?</h3>
                  <div className="faq-content" >
                    <p>You require custom software development, cloud migration, or IT consulting, our team of experts is dedicated to delivering tailored solutions that align with your unique objectives and drive tangible results.</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* <!-- End Faq item--> */}

                <div className="faq-item">
                  <h3><span>02</span>Innovation: Stay ahead of the curve with our innovative software solutions designed to address the challenges of tomorrow.</h3>
                  <div className="faq-content">
                    <p>Expertise: Benefit from the collective expertise of our skilled team of software engineers, developers, and IT professionals.</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* <!-- End Faq item--> */}

                <div className="faq-item">
                  <h3><span>03</span>Customer-Centricity: Your success is our priority. We are committed to providing exceptional customer service and support at every step of your journey.</h3>
                  <div className="faq-content">
                    {/* <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p> */}
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* <!-- End Faq item--> */}
                <div className="faq-item">
                  <h3><span>04</span>Quality Assurance: Rest assured that our solutions undergo rigorous testing and quality assurance measures to ensure optimal performance and reliability.</h3>
                  <div className="faq-content">
                    {/* <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p> */}
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* <!-- End Faq item--> */}
                <div className="faq-item">
                  <h3><span>05</span>Value: Experience unparalleled value with our cost-effective solutions that deliver maximum ROI.</h3>
                  <div className="faq-content">
                    {/* <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p> */}
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* <!-- End Faq item--> */}

              </div>

            </div>

            <div className="col-lg-5 order-1 order-lg-2 why-us-img">
              <img src="http://localhost/BootstrapMade/Builder/components/img/template/Arsha/why-us.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100" />
            </div>
          </div>

        </div>

      </section>
      {/* <!-- /Why Us Section --> */}

      <section id="skills" className="skills section">

        <div className="container" data-aos="fade-up" data-aos-delay="100" >

          <div className="row">

            <div className="col-lg-6 d-flex align-items-center">
              <img src="img/skills.png" className="img-fluid" alt="" />
            </div>

            <div className="col-lg-6 pt-4 pt-lg-0 content">

              <h3> Technologies to build & support our client </h3>
              <p className="fst-italic">
              At  Vivekananda It Solution, we leverage a diverse range of cutting-edge technologies to build powerful, scalable, and user-friendly websites for our clients. Our team of skilled developers is proficient in the following technologies:
              </p>

              <div className="skills-content skills-animation">
                

                <div className="progress">
                  <span className="skill"><span>java</span> <i className="val">100%</i></span>
                 
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

               

                <div className="progress">
                  <span className="skill"><span>React JS</span> <i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                {/* <!-- End Skills Item --> */}

                <div className="progress">
                  <span className="skill"><span>JavaScript</span> <i className="val">75%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                {/* <!-- End Skills Item --> */}

                <div className="progress">
                  <span className="skill"><span>Angular JS</span> <i className="val">55%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                {/* <!-- End Skills Item --> */}

              </div>

            </div>
          </div>

        </div>

      </section>
      {/* <!-- /Skills Section --> */}

    </>
  )
}
