import React from 'react'
import { Swiper } from 'swiper/react'
import PropTypes from 'prop-types'

const Contact = props => {
    return (
        <div>
            {/* Start of Main Content Wrapper */}
            <main id="content" className="main-content-wrapper page-about">
                {/* Start of Contact Section */}
                <section className="contact-section">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 m-auto">
                                <div className="contact-form-wrapper">
                                    <div className="section-title left-aligned">
                                        <h2>get In Touch</h2>
                                    </div>
                                    <form id="contact-form" action="http://preview.hasthemes.com/pebona-v1/pebona/sendemail.php" method="post">
                                        <div className="form-row">
                                            <div className="form-group col-12 col-sm-12 col-md-6">
                                                <input type="text" name="name" className="form-control" id="com-name" placeholder="Your Name *" required />
                                            </div>
                                            <div className="form-group col-12 col-sm-12 col-md-6">
                                                <input type="email" name="email" className="form-control" id="com-email" placeholder="Your Email *" required />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-12 col-sm-12 col-md-12">
                                                <input type="text" name="subject" className="form-control" id="subject" placeholder="Your Subject" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-12 col-sm-12 col-md-12">
                                                <textarea id="comment" placeholder="Type Your Message....." name="message" className="form-control" required defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="col-12 col-sm-12 col-md-12">
                                                <button name="send_message" type="submit" className="btn btn-secondary">Send Your Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div> {/* end of contact-form-wrapper */}
                            </div>
                        </div> {/* end of row */}
                    </div> {/* end of container */}
                </section>
                {/* End of Contact Section */}
                {/* Start of Info Section */}
                <section className="info-section pt-full pb-half bgc-offset">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="info-box">
                                    <div className="info-icon">
                                        <i className="ion ion-md-locate" />
                                    </div>
                                    <div className="info-content">
                                        <h4>Our Location</h4>
                                        <p>123 North Avenue, Santa Rosa</p>
                                        <p>California</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                <div className="info-box">
                                    <div className="info-icon">
                                        <i className="ion ion-ios-call" />
                                    </div>
                                    <div className="info-content">
                                        <h4>Contact Us Anytime</h4>
                                        <p>Mobile: <a href="#">(+1) 800 555 888</a></p>
                                        <p>Fax: (+1) 800 666 999</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="info-box">
                                    <div className="info-icon">
                                        <i className="ion ion-md-mail-open" />
                                    </div>
                                    <div className="info-content">
                                        <h4>Write Some Words</h4>
                                        <p><a href="#">support24/7@example.com</a></p>
                                        <p><a href="#">contact@example.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div> {/* end of row */}
                    </div> {/* end of container */}
                </section>
                {/* End of Info Section */}
                {/* Start of Client Section */}
                <div className="client-section mb-full">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12">
                                <div className="clients element-carousel" data-visible-slide={5} data-visible-xl-slide={5} data-visible-lg-slide={5} data-visible-md-slide={4} data-visible-sm-slide={3} data-visible-xs-slide={2} data-loop="true" data-autoplay-delay={3000} data-space-between={0} data-effect="slide">
                                    {/* Slides */}
                                    <Swiper
                                        spaceBetween={10}
                                        slidesPerView={5}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                    >
                                        <div className="swiper-wrapper">
                                            <div className="item-brand swiper-slide">
                                                <img src="images/brand/client-logo-1.jpg" alt="Client Logo" />
                                            </div>
                                            <div className="item-brand swiper-slide">
                                                <img src="images/brand/client-logo-2.jpg" alt="Client Logo" />
                                            </div>
                                            <div className="item-brand swiper-slide">
                                                <img src="images/brand/client-logo-3.jpg" alt="Client Logo" />
                                            </div>
                                            <div className="item-brand swiper-slide">
                                                <img src="images/brand/client-logo-4.jpg" alt="Client Logo" />
                                            </div>
                                            <div className="item-brand swiper-slide">
                                                <img src="images/brand/client-logo-5.jpg" alt="Client Logo" />
                                            </div>
                                            <div className="item-brand swiper-slide">
                                                <img src="images/brand/client-logo-6.jpg" alt="Client Logo" />
                                            </div>
                                            <div className="item-brand swiper-slide">
                                                <img src="images/brand/client-logo-7.jpg" alt="Client Logo" />
                                            </div>
                                            <div className="item-brand swiper-slide">
                                                <img src="images/brand/client-logo-8.jpg" alt="Client Logo" />
                                            </div>
                                        </div>
                                    </Swiper>
                                </div> {/* end of element-carousel */}
                            </div> {/* end of col */}
                        </div> {/* end of row */}
                    </div> {/* end of container */}
                </div>
                {/* End of Client Section */}
                {/* Start of Newsletter Section */}
                <section className="newsletter-section vpadding bgc-offset mb0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                                <div className="newsletter-title d-lg-flex justify-content-lg-start">
                                    <h6>Subscribe to our Newsletter</h6>
                                    <h3>Subscribe to our newsletter and know first about all the promotions and discounts. Be always trendy.</h3>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-5">
                                <div className="newsletter-form-wrapper">
                                    <form className="mc-subscribe-form">
                                        <input type="email" autoComplete="off" placeholder="Enter you email address here..." required />
                                        <input type="submit" className="default-btn" defaultValue="Subscribe" />
                                    </form>
                                    <div className="mailchimp-alerts">
                                        <div className="mailchimp-submitting" />
                                        <div className="mailchimp-success" />
                                        <div className="mailchimp-error" />
                                    </div>{/* end of mailchimp-alerts */}
                                </div>
                            </div>
                        </div> {/* end of row */}
                    </div> {/* end of container */}
                </section>
                {/* End of Newsletter Section */}
            </main>
            {/* End of Main Content Wrapper */}
        </div>
    )
}

Contact.propTypes = {

}

export default Contact
