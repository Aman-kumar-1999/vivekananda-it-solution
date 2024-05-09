import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function HomeWhy() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation (in milliseconds)
      easing: 'ease-in-out', // Easing type
      once: true // Whether animation should only happen once
      // More options can be found in the AOS documentation
    });
  }, []);

  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function (direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });


  return (
    <>

      <section id="why-us" className="section why-us" data-builder="section">

        <div className="container-fluid">

          <div className="row gy-4">

            <div className="col-lg-7 d-flex flex-column justify-content-center order-2 order-lg-1">

              <div className="content px-xl-5" data-aos="fade-up" data-aos-delay="100">
                <h3 className=""><span className="">Eum ipsam laborum deleniti </span><strong>velit pariatur architecto aut nihil</strong></h3>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                </p>
              </div>

              <div className="faq-container px-xl-5" data-aos="fade-up" data-aos-delay="200" >

                <div className="faq-item faq-active">

                  <h3><span>01</span> Non consectetur a erat nam at lectus urna duis?</h3>
                  <div className="faq-content" >
                    <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* <!-- End Faq item--> */}

                <div className="faq-item">
                  <h3><span>02</span> Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h3>
                  <div className="faq-content">
                    <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
                {/* <!-- End Faq item--> */}

                <div className="faq-item">
                  <h3><span>03</span> Dolor sit amet consectetur adipiscing elit pellentesque?</h3>
                  <div className="faq-content">
                    <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
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

              <h3>Voluptatem dignissimos provident quasi corporis voluptas</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className="skills-content skills-animation">

                <div className="progress">
                  <span className="skill"><span>HTML</span> <i className="val">100%</i></span>
                 
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                {/* <!-- End Skills Item --> */}

                <div className="progress">
                  <span className="skill"><span>CSS</span> <i className="val">90%</i></span>
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
                  <span className="skill"><span>Photoshop</span> <i className="val">55%</i></span>
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
