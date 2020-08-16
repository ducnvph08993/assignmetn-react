import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = props => {
    return (
        <div>
            {/* Start of Newsletter Popup */}
            <div id="newsletter_popup" className="newsletter-popup">
                <div className="popup-container">
                    <div className="popup-close">
                        <span className="p-close"><span>X</span></span>
                    </div> {/* end of popup-close */}
                    <div className="popup-area text-center">
                        <h2>Subscribe to our Newsletter</h2>
                        <div className="popup-body">
                            <p>Subscribe to the Pebona mailing list to receive updates on new arrivals, special offers and other discount information.</p>
                            <div className="subscribe-form-group">
                                <form action="#">
                                    <div className="input-group">
                                        <input type="text" placeholder="Enter your email address" required />
                                        <button className="default-btn secondary" type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div> {/* end of popup-body */}
                        <div className="popup-footer">
                            <div className="form-check">
                                <div className="custom-checkbox">
                                    <input className="form-check-input" type="checkbox" id="cancel_popup" />
                                    <span className="checkmark" />
                                    <label className="form-check-label" htmlFor="cancel_popup">Don't show this popup again</label>
                                </div>
                            </div>
                        </div> {/* end of popup-footer */}
                    </div> {/* end of popup-area */}
                </div> {/* end of popup-container */}
            </div>
            {/* End of Newsletter Popup */}
            {/* Start of Header */}
            <header className="header bgc-white header-type-1">
                <div className="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 order-2 col-sm-12 order-sm-2 col-md-8 order-md-1 align-self-center">
                                <p>Mid-season sale up to 20% OFF. Use code "SALEOFF20"</p>
                            </div>
                            <div className="col-12 order-1 col-sm-12 order-sm-1 col-md-4 order-md-2">
                                <ul className="list-inline">
                                    <li className="currency list-inline-item">
                                        <div className="btn-group">
                                            <button className="btn-link dropdown-toggle"> USD $<i className="fa fa-angle-down" /></button>
                                            <div className="dropdown-menu">
                                                <ul>
                                                    <li><a href="#">Euro €</a></li>
                                                    <li><a href="#" className="current">USD $</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="language list-inline-item">
                                        <div className="btn-group">
                                            <button className="btn-link dropdown-toggle">English <i className="fa fa-angle-down" /></button>
                                            <div className="dropdown-menu">
                                                <ul>
                                                    <li><a href="#" className="current"><img src="/images/icons/en-gb.png" alt="Icons" /> English</a></li>
                                                    <li><a href="#"><img src="/images/icons/fr-fr.png" alt="Icons" /> Français</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> {/* end of container */}
                </div> {/* end of top-bar */}
                <div className="header-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6 order-2 col-sm-6 order-sm-2 col-md-4 order-md-1 col-lg-3">
                                <div className="header-search-area">
                                    <form action="#">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search entire store here ..." />
                                            <div className="input-group-append">
                                                <button className="header-search-btn" type="submit"><i className="pe-7s-search" /></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12 order-1 col-sm-12 order-sm-1 col-md-4 order-md-2 col-lg-6">
                                <div className="logo">
                                    <a href="index.html"><img src="/images/logo.png" alt="Logo" className="img-fluid" /></a>
                                </div>
                            </div>
                            <div className="col-6 order-3 col-sm-6 col-md-4 col-lg-3">
                                <div className="header-cart-area">
                                    <div className="header-cart">
                                        <div className="btn-group">
                                            <button className="btn-link dropdown-toggle icon-cart">
                                                <i className="pe-7s-shopbag" />
                                                <span className="count-style">2</span>
                                            </button>
                                            <div className="dropdown-menu">
                                                <div className="shopping-cart-content">
                                                    <ul className="list-unstyled">
                                                        <li className="single-cart-item media">
                                                            <div className="shopping-cart-img mr-4">
                                                                <a href="#">
                                                                    <img className="img-fluid" alt="Cart Item" src="/images/cart/cart-1.jpg" />
                                                                    <span className="product-quantity">1x</span>
                                                                </a>
                                                            </div>
                                                            <div className="shopping-cart-title media-body">
                                                                <h4><a href="#">Rival Field Messenger</a></h4>
                                                                <p className="cart-price">$120.00</p>
                                                                <div className="product-attr">
                                                                    <span>Size: S</span>
                                                                    <span>Color: Black</span>
                                                                </div>
                                                            </div>
                                                            <div className="shopping-cart-delete">
                                                                <a href="#"><i className="ion ion-md-close" /></a>
                                                            </div>
                                                        </li>
                                                        <li className="single-cart-item media">
                                                            <div className="shopping-cart-img mr-4">
                                                                <a href="#">
                                                                    <img className="img-fluid" alt="Cart Item" src="/images/cart/cart-2.jpg" />
                                                                    <span className="product-quantity">2x</span>
                                                                </a>
                                                            </div>
                                                            <div className="shopping-cart-title media-body">
                                                                <h4><a href="#">Fusion Backpack</a></h4>
                                                                <p className="cart-price">$200.00</p>
                                                                <div className="product-attr">
                                                                    <span>Color: White</span>
                                                                    <span>Accessories: Yes</span>
                                                                </div>
                                                            </div>
                                                            <div className="shopping-cart-delete">
                                                                <a href="#"><i className="ion ion-md-close" /></a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="shopping-cart-total">
                                                        <h4>Sub-Total : <span>$320.00</span></h4>
                                                        <h4>Total : <span>$320.00</span></h4>
                                                    </div>
                                                    <div className="shopping-cart-btn">
                                                        <a className="default-btn" href="cart.html">view cart</a>
                                                        <a className="default-btn" href="checkout.html">checkout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* end of header-cart-area */}
                            </div>
                        </div>
                    </div> {/* end of container */}
                </div> {/* end of header-top */}
                {/* Start of Main and Mobile Navigation */}
                <div className="main-nav-area bgc-white">
                    <div className="container">
                        <nav id="main_nav" className="stellarnav">
                            <ul>
                                <li><Link to="/"><span>Home</span></Link>
                                    <ul>
                                        <li><a href="index.html">Home Page 1</a></li>
                                        <li><a href="index-2.html">Home Page 2</a></li>
                                        <li><a href="index-3.html">Home Page 3</a></li>
                                        <li><a href="index-4.html">Home Page 4</a></li>
                                        <li><a href="index-5.html">Home Page 5</a></li>
                                    </ul>
                                </li>
                                <li className="mega" data-columns={4}><Link to="/collection"><span>Shop</span></Link>
                                    <ul className="mega-container">
                                        <li><a href="#" className="mega-menu-title"><h3>Shop pages 01</h3></a>
                                            <ul>
                                                <li><a href="shop-grid.html">Shop Grid</a></li>
                                                <li><a href="shop-list.html">Shop List</a></li>
                                                <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#" className="mega-menu-title"><h3>Shop pages 02</h3></a>
                                            <ul>
                                                <li><a href="shop-fullwidth.html">Shop Full Width</a></li>
                                                <li><a href="single-product.html">Single Product Page</a></li>
                                                <li><a href="compare.html">Product Compare</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#" className="mega-menu-title"><h3>Shop pages 03</h3></a>
                                            <ul>
                                                <li><a href="cart.html">Cart Page</a></li><li>
                                                </li><li><a href="checkout.html">Checkout Page</a></li>
                                                <li><a href="wishlist.html">Wishlist Page</a></li>
                                            </ul>
                                        </li>
                                        <li className="last"><a href="#" className="mega-menu-title"><h3>Shop pages 04</h3></a>
                                            <ul>
                                                <li><a href="my-account.html">My Account</a></li>
                                                <li><a href="login.html">Login</a></li>
                                                <li><a href="register.html">Register</a></li>
                                            </ul>
                                        </li>
                                        <li className="fullwidth-banner">
                                            <a href="#"><img src="/images/banners/menu-banner.jpg" alt="Menu Banner" /></a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="blog.html"><span>Blog Pages</span></a>
                                    <ul>
                                        <li><a href="blog.html">Blog Full Width</a></li>
                                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                {/* <li><a href="faqs.html"><span>Utility Pages</span></a>
                                    <ul>
                                        <li><a href="faqs.html">FAQs Page</a></li>
                                        <li><a href="404.html">404 Page</a></li>
                                    </ul>
                                </li> */}
                                <li><Link to="/about"><span>About Us</span></Link></li>
                                <li><Link to="/contact"><span>Contact Us</span></Link></li>
                            </ul>
                        </nav>
                    </div> {/* end of container */}
                </div>
                {/* End of Main and Mobile Navigation */}
            </header>
            {/* End of Header */}
            <div className="fixed-header-space" /> {/* empty placeholder div for Fixed Menu bar height*/}
        </div >
    )
}

Header.propTypes = {

}

export default Header
