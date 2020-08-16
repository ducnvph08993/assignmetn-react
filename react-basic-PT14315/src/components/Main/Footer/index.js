import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <div>
            {/* Start of Footer */}
            <footer id="colophon" className="bgc-secondary pt-full">
                {/* Footer Widgets Area */}
                <div className="footer-widgets-area">
                    <div className="container">
                        <div className="footer-inner">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                    <aside className="widget-container">
                                        <div className="widget-content">
                                            <div className="footer-logo mb-half">
                                                <img src="/images/footer-logo.png" alt="Footer Logo" />
                                            </div>
                                            <p>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart.</p>
                                            <div className="footer-contact">
                                                <p><span>Address:</span>6688Princess Road, London, Greater London BAS 23JK, UK</p>
                                                <p><span>Phone:</span><a href="#">(012) 800 456 789-987</a></p>
                                                <p><span>Email:</span><a href="#">support@example.com</a></p>
                                            </div>
                                        </div> {/* end of widget-content */}
                                    </aside> {/* end of widget-container */}
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 order-md-3 col-lg-2 order-lg-2">
                                    <aside className="widget-container">
                                        <h4 className="widgettitle">Products</h4>
                                        <div className="widget-content">
                                            <div className="widgetized-menu">
                                                <ul className="list-unstyled">
                                                    <li><a href="#">Prices drop</a></li>
                                                    <li><a href="#">New Products</a></li>
                                                    <li><a href="#">Best Sales</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                    <li><a href="#">Login</a></li>
                                                </ul>
                                            </div>
                                        </div> {/* end of widget-content */}
                                    </aside> {/* end of widget-container */}
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 order-md-4 col-lg-2 order-lg-3">
                                    <aside className="widget-container">
                                        <h4 className="widgettitle">Our Company</h4>
                                        <div className="widget-content">
                                            <div className="widgetized-menu">
                                                <ul className="list-unstyled">
                                                    <li><a href="#">About Us</a></li>
                                                    <li><a href="#">Site Map</a></li>
                                                    <li><a href="#">Stores</a></li>
                                                    <li><a href="#">Terms &amp; Conditions</a></li>
                                                    <li><a href="#">My Account</a></li>
                                                </ul>
                                            </div>
                                        </div> {/* end of widget-content */}
                                    </aside> {/* end of widget-container */}
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 order-md-2 col-lg-4 order-lg-4">
                                    <aside className="widget-container">
                                        <h4 className="widgettitle">Sign up for our newsletter</h4>
                                        <div className="widget-content">
                                            <div className="newsletter-widget">
                                                <p>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</p>
                                                <form className="mc-subscribe-form">
                                                    <div className="input-group">
                                                        <input type="email" autoComplete="off" placeholder="Your Email Address" required />
                                                        <button className="default-btn" type="submit">Sign Up</button>
                                                    </div>
                                                </form> {/* end of form */}
                                                <div className="mailchimp-alerts">
                                                    <div className="mailchimp-submitting" />
                                                    <div className="mailchimp-success" />
                                                    <div className="mailchimp-error" />
                                                </div>{/* end of mailchimp-alerts */}
                                            </div>
                                        </div> {/* end of widget-content */}
                                    </aside> {/* end of widget-container */}
                                    <aside className="widget-container">
                                        <div className="widget-content">
                                            <div className="social-widget mt-half">
                                                <div className="socials d-flex align-items-center justify-content-center justify-content-md-start">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><a href="#" className="bg-facebook" title="Facebook" target="_blank"><i className="fa fa-facebook" /></a></li>
                                                        <li className="list-inline-item"><a href="#" className="bg-twitter" title="Twitter" target="_blank"><i className="fa fa-twitter" /></a></li>
                                                        <li className="list-inline-item"><a href="#" className="bg-gplus" title="Google Plus" target="_blank"><i className="fa fa-google-plus" /></a></li>
                                                        <li className="list-inline-item"><a href="#" className="bg-pinterest" title="Pinterest" target="_blank"><i className="fa fa-pinterest" /></a></li>
                                                        <li className="list-inline-item"><a href="#" className="bg-instagram" title="Instagram" target="_blank"><i className="fa fa-instagram" /></a></li>
                                                        <li className="list-inline-item"><a href="#" className="bg-linkedin" title="Linked In" target="_blank"><i className="fa fa-linkedin" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> {/* end of widget-content */}
                                    </aside> {/* end of widget-container */}
                                </div>
                            </div> {/* end of row */}
                        </div> {/* end of footer-inner */}
                    </div> {/* end of container */}
                </div> {/* end of footer-widgets-area */}
                {/* Footer Copyright */}
                <div className="footer-copyright">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <p className="copyright-text">Copyright © 2018 <a href="#" rel="nofollow">Pebona Themes</a>. All Right Reserved.</p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="footer-payment">
                                    <a href="#"><img src="/images/icons/payment.png" alt="Payment Icons" /></a>
                                </div>
                            </div>
                        </div> {/* end of row */}
                    </div> {/* end of container */}
                </div> {/* end of footer-copyright */}
            </footer>
            {/* End of Footer */}
            {/* Quick View Content Start */}
            <div className="product-quick-view">
                <div className="container">
                    {/* Start of Modal */}
                    <div className="modal fade" id="product_quick_view">
                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                </div> {/* end of modal-header */}
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-7">
                                            <div className="product-gallery">
                                                <div className="gallery-with-thumbs" data-nav-center="false">
                                                    <div className="product-image-container">
                                                        <div className="product-full-image main-slider image-popup">
                                                            {/* Slides */}
                                                            <div className="swiper-wrapper">
                                                                <figure className="swiper-slide">
                                                                    <a href="/images/products/single/product-1.jpg" data-size="600x600">
                                                                        <img src="/images/products/single/product-1.jpg" alt="Product Image" />
                                                                        <div className="image-overlay"><i className="fa fa-search-plus" /></div>
                                                                    </a>
                                                                    <figcaption className="visually-hidden">
                                                                        <span>Product Image</span>
                                                                    </figcaption>
                                                                </figure>
                                                                <figure className="swiper-slide">
                                                                    <a href="/images/products/single/product-2.jpg" data-size="600x600">
                                                                        <img src="/images/products/single/product-2.jpg" alt="Product Image" />
                                                                        <div className="image-overlay"><i className="fa fa-search-plus" /></div>
                                                                    </a>
                                                                    <figcaption className="visually-hidden">
                                                                        <span>Product Image</span>
                                                                    </figcaption>
                                                                </figure>
                                                                <figure className="swiper-slide">
                                                                    <a href="/images/products/single/product-3.jpg" data-size="600x600">
                                                                        <img src="/images/products/single/product-3.jpg" alt="Product Image" />
                                                                        <div className="image-overlay"><i className="fa fa-search-plus" /></div>
                                                                    </a>
                                                                    <figcaption className="visually-hidden">
                                                                        <span>Product Image</span>
                                                                    </figcaption>
                                                                </figure>
                                                                <figure className="swiper-slide">
                                                                    <a href="/images/products/single/product-4.jpg" data-size="600x600">
                                                                        <img src="/images/products/single/product-4.jpg" alt="Product Image" />
                                                                        <div className="image-overlay"><i className="fa fa-search-plus" /></div>
                                                                    </a>
                                                                    <figcaption className="visually-hidden">
                                                                        <span>Product Image</span>
                                                                    </figcaption>
                                                                </figure>
                                                                <figure className="swiper-slide">
                                                                    <a href="/images/products/single/product-5.jpg" data-size="600x600">
                                                                        <img src="/images/products/single/product-5.jpg" alt="Product Image" />
                                                                        <div className="image-overlay"><i className="fa fa-search-plus" /></div>
                                                                    </a>
                                                                    <figcaption className="visually-hidden">
                                                                        <span>Product Image</span>
                                                                    </figcaption>
                                                                </figure>
                                                                <figure className="swiper-slide">
                                                                    <a href="/images/products/single/product-6.jpg" data-size="600x600">
                                                                        <img src="/images/products/single/product-6.jpg" alt="Product Image" />
                                                                        <div className="image-overlay"><i className="fa fa-search-plus" /></div>
                                                                    </a>
                                                                    <figcaption className="visually-hidden">
                                                                        <span>Product Image</span>
                                                                    </figcaption>
                                                                </figure>
                                                            </div>
                                                        </div> {/* end of product-full-image */}
                                                    </div>
                                                    <div className="product-thumb-container">
                                                        <div className="product-thumb-image pos-r">
                                                            <div className="nav-slider">
                                                                {/* Slides */}
                                                                <div className="swiper-wrapper">
                                                                    <div className="swiper-slide">
                                                                        <img src="/images/products/single/product-thumb-1.jpg" alt="Product Thumbnail Image" />
                                                                    </div>
                                                                    <div className="swiper-slide">
                                                                        <img src="/images/products/single/product-thumb-2.jpg" alt="Product Thumbnail Image" />
                                                                    </div>
                                                                    <div className="swiper-slide">
                                                                        <img src="/images/products/single/product-thumb-3.jpg" alt="Product Thumbnail Image" />
                                                                    </div>
                                                                    <div className="swiper-slide">
                                                                        <img src="/images/products/single/product-thumb-4.jpg" alt="Product Thumbnail Image" />
                                                                    </div>
                                                                    <div className="swiper-slide">
                                                                        <img src="/images/products/single/product-thumb-5.jpg" alt="Product Thumbnail Image" />
                                                                    </div>
                                                                    <div className="swiper-slide">
                                                                        <img src="/images/products/single/product-thumb-6.jpg" alt="Product Thumbnail Image" />
                                                                    </div>
                                                                </div>
                                                                {/* Navigation */}
                                                                <div className="swiper-arrow next"><i className="fa fa-angle-down" /></div>
                                                                <div className="swiper-arrow prev"><i className="fa fa-angle-up" /></div>
                                                            </div>
                                                        </div> {/* end of product-thumb-image */}
                                                    </div>
                                                </div> {/* end of gallery-with-thumbs */}
                                            </div> {/* end of product-gallery */}
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-5">
                                            <div className="product-details">
                                                <h3 className="product-name">Cas Meque Metus</h3>
                                                <div className="product-ratings">
                                                    <ul className="rating d-flex">
                                                        <li><i className="fa fa-star" /></li>
                                                        <li><i className="fa fa-star" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                        <li><i className="fa fa-star-o" /></li>
                                                    </ul>
                                                </div>
                                                <div className="product-price">
                                                    <p className="d-flex align-items-center">
                                                        <span className="price-old">$54.65</span>
                                                        <span className="price-new">$43.72</span>
                                                        <span className="price-discount">-20%</span>
                                                    </p>
                                                </div>
                                                <div className="product-description">
                                                    <p>Regular fit, round neckline, short sleeves. Made of extra long staple pima cotton.</p>
                                                </div>
                                                <form action="#" className="product-actions">
                                                    <h3>Available Options</h3>
                                                    <div className="product-size-color d-flex">
                                                        <div className="product-size">
                                                            <label>Size</label>
                                                            <select className="nice-select">
                                                                <option>S</option>
                                                                <option>M</option>
                                                                <option>L</option>
                                                            </select>
                                                        </div>
                                                        <div className="product-color">
                                                            <label>color</label>
                                                            <ul className="color-list">
                                                                <li>
                                                                    <a className="white" href="#" />
                                                                </li>
                                                                <li>
                                                                    <a className="orange active" href="#" />
                                                                </li>
                                                                <li>
                                                                    <a className="paste" href="#" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="product-stock">
                                                        <label>Quantity</label>
                                                        <ul className="d-flex flex-wrap align-items-center">
                                                            <li className="box-quantity">
                                                                <div className="cart-input">
                                                                    <input className="cart-input-box" type="text" defaultValue={0} />
                                                                    <div className="dec qtybutton"><i className="fa fa-angle-down" /></div>
                                                                    <div className="inc qtybutton"><i className="fa fa-angle-up" /></div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <button type="button" className="default-btn">Add to Cart</button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="wishlist-compare">
                                                        <button className="btn-wishlist" type="button" title="Add to Wishlist">Add to Wishlist</button>
                                                        <button className="btn-compare" type="button" title="Add to Compare">Add to Compare</button>
                                                    </div>
                                                </form>
                                            </div> {/* end of product-details */}
                                        </div>
                                    </div> {/* end of row */}
                                </div> {/* end of modal-body */}
                                <div className="modal-footer justify-content-start">
                                    <div className="social-sharing d-flex align-items-center">
                                        <span>Share</span>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#" className="bg-facebook" data-toggle="tooltip" data-position="top" data-original-title="Facebook" target="_blank"><i className="fa fa-facebook" /><span>Share</span></a></li>
                                            <li className="list-inline-item"><a href="#" className="bg-twitter" data-toggle="tooltip" data-position="top" data-original-title="Twitter" target="_blank"><i className="fa fa-twitter" /><span>Tweet</span></a></li>
                                            <li className="list-inline-item"><a href="#" className="bg-gplus" data-toggle="tooltip" data-position="top" data-original-title="Google Plus" target="_blank"><i className="fa fa-google-plus" /><span>Google+</span></a></li>
                                            <li className="list-inline-item"><a href="#" className="bg-pinterest" data-toggle="tooltip" data-position="top" data-original-title="Pinterest" target="_blank"><i className="fa fa-pinterest" /><span>Pinterest</span></a></li>
                                        </ul>
                                    </div>
                                </div> {/* end of modal-footer */}
                            </div> {/* end of modal-content */}
                        </div> {/* end of modal-dialog */}
                    </div> {/* end of modal */}
                </div> {/* end of container */}
            </div>
            {/* Quick View Content End */}
            {/* Start of Scroll to Top */}
            <div id="to_top">
                <i className="ion ion-ios-arrow-forward" />
                <i className="ion ion-ios-arrow-forward" />
            </div>
            {/* End of Scroll to Top */}
        </div>
    )
}

Footer.propTypes = {

}

export default Footer
