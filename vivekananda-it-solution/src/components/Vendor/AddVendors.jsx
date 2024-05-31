import React, { useEffect, useState } from 'react';
import vendorService from '../../appwrite/vendordoc';
import { Client, Databases } from 'appwrite';
import conf from '../../conf/conf';


// this.client
//         .setEndpoint("https://cloud.appwrite.io/v1")
//         .setProject("65890f14765cbab8d32a");
//         this.databases = new Databases(this.client);

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65890f14765cbab8d32a");

const databases = new Databases(client);


const data = 
{
  "$id": "658a4709917637cd93fd",
  "$createdAt": "2023-12-26T03:22:49.597+00:00",
  "$updatedAt": "2024-05-31T09:57:54.033+00:00",
  "name": "Aman Kumar",
  "registration": "2023-12-26T03:22:49.595+00:00",
  "status": true,
  "labels": [],
  "passwordUpdate": "2024-05-31T09:57:54.033+00:00",
  "email": "code.a2z.code@gmail.com",
  "phone": "",
  "emailVerification": true,
  "phoneVerification": false,
  "mfa": false,
  "prefs": {},
  "targets": [],
  "accessedAt": "2024-04-28T08:09:18.158+00:00"
}

const AddVendors = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState();
  const [remarks, setRemarks] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(100, 0);
  }, []);

  const handleAddCustomer = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {

      vendorService.createVendor({ name, phone, email, remarks })


    //   {
    //     "$id": "658a4709917637cd93fd",
    //     "$createdAt": "2023-12-26T03:22:49.597+00:00",
    //     "$updatedAt": "2024-05-31T09:57:54.033+00:00",
    //     "name": "Aman Kumar",
    //     "registration": "2023-12-26T03:22:49.595+00:00",
    //     "status": true,
    //     "labels": [],
    //     "passwordUpdate": "2024-05-31T09:57:54.033+00:00",
    //     "email": "code.a2z.code@gmail.com",
    //     "phone": "",
    //     "emailVerification": true,
    //     "phoneVerification": false,
    //     "mfa": false,
    //     "prefs": {},
    //     "targets": [],
    //     "accessedAt": "2024-04-28T08:09:18.158+00:00"
    // }


      // await databases.createDocument(
      //   "6589f32bcc2553472141",
      //   "66593e28002f7b15f8e2",// Document ID (use 'unique()' for autogenerated ID)
      //   data,
      //   // slug,
      //   {
      //     name,
      //     email,
      //     phone,
      //     remarks
      //   }
      // );
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (

    <section style={{ marginTop: '50px' }} id="contact" className="contact section">


      <div className="container section-title" data-aos="fade-up">
        <h2>Enter Your Details</h2>
      </div>


      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          {/* <div className="col-lg-5">

            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Naya Tola, Dabur Gali, Kumhrar, Patna - 800026</p>

                </div>
              </div>


              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 9128984478</p>
                </div>
              </div>


              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>info@vivekanandaitsolution.com</p>
                </div>
              </div>


              <iframe src="" frameborder="0"
                style={{ border: 0, width: '100%', height: '270px' }}

                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div> */}

          <div className="">
            <form onSubmit={handleAddCustomer} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">

                <div className="col-md-6">
                  <label for="name-field" className="pb-2">Your Name</label>
                  <input name="name" id="name-field" className="form-control" type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />
                </div>

                <div className="col-md-6">
                  <label for="email-field" className="pb-2">Your Email</label>
                  <input className="form-control" name="email" id="email-field" type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                </div>

                <div className="col-md-12">
                  <label for="subject-field" className="pb-2">Mobile</label>
                  <input className="form-control" name="phone" id="subject-field" type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required />
                </div>

                <div className="col-md-12">
                  <label for="message-field" className="pb-2">Remarks</label>
                  <textarea className="form-control" name="remarks" rows="10" id="message-field"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    required></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {/* <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div> */}

                  <button type="submit" disabled={loading}>{loading ? 'Loading ...' : 'Submit Your Response'}</button>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>Thanks You for Successfully! Entered Your data. Our Team will get back to you soon</p>}
              </div>
            </form>
          </div>
          {/* <!-- End Contact Form --> */}

        </div>

      </div>

    </section>



  );
};

export default AddVendors;