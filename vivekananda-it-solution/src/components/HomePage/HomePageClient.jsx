import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function () {

    const responsive = {
        superLargeDesktop: {
    
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    const brandData = [
        {
          id: 1,
          imageurl: "clients/client-1.png"
        },
        {
          id: 2,
          imageurl: "clients/client-2.png"
        },
        {
          id: 3,
          imageurl: "clients/client-3.png"
        },
        {
          id: 4,
          imageurl: "clients/client-4.png"
        }
        , {
          id: 5,
          imageurl: "clients/client-5.png"
        },
        {
          id: 6,
          imageurl: "clients/client-6.png"
        },
        {
          id: 7,
          imageurl: "clients/client-7.png"
        },
        {
          id: 8,
          imageurl: "clients/client-8.png"
        }

      ]

    return (
        <>
            {/* <!-- Clients Section --> */}
            <section id="clients" className="clients section">

                <div className="container">

                    <div className="swiper">

                        <Carousel autoPlay responsive={responsive} className='swiper-wrapper align-items-center'>
                            {
                                brandData.map(item => (
                                    <img style={{ width: "200px", height: "50px" }} name={item.name} src={item.imageurl} />
                                ))
                            }
                            
                          
                        </Carousel>

                        {/* <div className="swiper-wrapper align-items-center">
                            <div className="swiper-slide"><img src="clients/client-1.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="clients/client-2.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="clients/client-3.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="clients/client-4.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="clients/client-5.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="clients/client-6.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="clients/client-7.png" className="img-fluid" alt="" /></div>
                            <div className="swiper-slide"><img src="clients/client-8.png" className="img-fluid" alt="" /></div>
                        </div> */}

                    </div>

                </div>

            </section>
            {/* <!-- /Clients Section --> */}

        </>
    )
}
