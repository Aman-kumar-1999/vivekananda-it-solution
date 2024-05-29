import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {


  const scollClickService = () => {
    window.scrollTo(100, 4400);
  };

  const scrolHome = () => {
    window.scrollTo(100, 100);
  }

  const scollClickAbout = () => {
    window.scrollTo(100, 730);
  };

  const scrolHomeTeams = () => {
    window.scrollTo(100, 8000);
  }

  const scollClickContact = () => {
    window.scrollTo(100, 10370);
  };

  return (
    <>

      <footer id="footer" class="footer">

        <div class="footer-newsletter">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                <form action="forms/newsletter.php" method="post" class="php-email-form">
                  <div class="newsletter-form"><input type="email" name="email" /><input type="submit" value="Subscribe" /></div>
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your subscription request has been sent. Thank you!</div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="container footer-top">
          <div class="row gy-4">
            <div class="col-lg-4 col-md-6 footer-about">
              <Link href="index.html" class="d-flex align-items-center">
                {/* <span class="sitename">Vivekananda It Solution</span> */}

                <img src="img/VIS-LOGO.png" className="logo-img" alt="#" /><br />

              </Link>
              <div class="footer-contact pt-3">
                <p>Naya Tola, Dabur Gali,</p>
                <p> Kumhrar, Patna - 800026</p>
                <p class="mt-3"><strong>Phone:</strong> <span>+91 9128984478</span></p>
                <p><strong>Email:</strong> <span>info@vivekanandaitsolution.com</span></p>
              </div>
            </div>

            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i class="bi bi-chevron-right"></i> <Link to={""} onClick={scrolHome}>Home</Link></li>
                <li><i class="bi bi-chevron-right"></i> <Link to={""} onClick={scollClickAbout}>About us</Link></li>
                <li><i class="bi bi-chevron-right"></i> <Link to={""} onClick={scollClickService}>Services</Link></li>
                <li><i class="bi bi-chevron-right"></i> <Link to={""} onClick={scrolHomeTeams}>Terms of service</Link></li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i class="bi bi-chevron-right"></i> <Link to={""}>Web Design</Link></li>
                <li><i class="bi bi-chevron-right"></i> <Link to={""}>Web Development</Link></li>
                <li><i class="bi bi-chevron-right"></i> <Link to={""}>Product Management</Link></li>
                <li><i class="bi bi-chevron-right"></i> <Link to={""}>Marketing</Link></li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-12">
              <h4>Follow Us</h4>
              <p>Stay connected with Vivekananda It Solution and get the latest updates, news, and insights by following us on our social media channels:</p>
              <div class="social-links d-flex">
                <Link href=""><i class="bi bi-twitter"></i></Link>
                <Link href=""><i class="bi bi-facebook"></i></Link>
                <Link href=""><i class="bi bi-instagram"></i></Link>
                <Link href=""><i class="bi bi-linkedin"></i></Link>
              </div>
            </div>

          </div>
        </div>

        <div class="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong class="px-1 sitename">Vivekananda It Solution</strong> <span>All Rights Reserved</span></p>
          <div class="credits">
            {/* <!-- All the links in the footer should remain intact. -->
    <!-- You can delete the links only if you've purchased the pro version. -->
    <!-- Licensing information: https://bootstrapmade.com/license/ -->
    <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
            Designed by <Link href="/">Vivekananda It Solution</Link>
          </div>
        </div>

      </footer>


    </>
  )
}
