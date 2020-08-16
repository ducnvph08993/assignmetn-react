import React from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const Home = props => {
    return (
        <div>
            {/* Start of Whole Site Wrapper with mobile menu support */}
            <div id="whole" className="whole-site-wrapper">
                <div className="fixed-header-space" /> {/* empty placeholder div for Fixed Menu bar height*/}
                {/* Start of Main Content Wrapper */}
                <main id="content" className="main-content-wrapper">
                    {/* Start of Primary Slider Section */}
                    <section className="primary-slider-section mb0 pos-r">
                        <div id="primary_slider" className="swiper-container slider-type-1">
                            {/* Slides */}
                            <div className="swiper-wrapper">
                                <div className="swiper-slide bg-img-wrapper">
                                    <div className="slide-inner image-placeholder">
                                        <img src="/images/slider/home-1/slide-1.jpg" className="visually-hidden" alt="Slider Image" />
                                        <div className="slide-progress" />
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="slide-content layer-animation-1">
                                                        <p className="promo-title"><span>limited edition</span> Sale Offer 20% Off This Week</p>
                                                        <h1 className="main-title"><span>Pebona Amazing</span> <span>Sport Sneakers 2018</span></h1>
                                                        <p className="subtitle">Light knit upper adapts to the shape of your foot for flexible and natural movement.</p>
                                                        <div className="slide-button">
                                                            <a className="default-btn" href="shop-grid.html" title="Shop Now">Shop Now</a>
                                                        </div>
                                                    </div> {/* end of slide-content */}
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* end of slider-inner */}
                                </div> {/* end of swiper-slide */}
                                <div className="swiper-slide bg-img-wrapper">
                                    <div className="slide-inner image-placeholder">
                                        <img src="/images/slider/home-1/slide-2.jpg" className="visually-hidden" alt="Slider Image" />
                                        <div className="slide-progress" />
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="slide-content layer-animation-2">
                                                        <p className="promo-title"><span>limited edition</span> Sale Offer 20% Off This Week</p>
                                                        <h1 className="main-title"><span>Pebona Air Zoom</span> <span>Mariah Flyknit Racer</span></h1>
                                                        <p className="subtitle">The Nike Air Zoom Pegasus 34 Men's Running Shoe features an updated, lighter Flymesh material that helps reduce heat build-up when you run.</p>
                                                        <div className="slide-button">
                                                            <a className="default-btn" href="shop-grid.html" title="Shop Now">Shop Now</a>
                                                        </div>
                                                    </div> {/* end of slide-content */}
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* end of slider-inner */}
                                </div> {/* end of swiper-slide */}
                                <div className="swiper-slide bg-img-wrapper">
                                    <div className="slide-inner image-placeholder">
                                        <img src="/images/slider/home-1/slide-3.jpg" className="visually-hidden" alt="Slider Image" />
                                        <div className="slide-progress" />
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="slide-content white-scheme layer-animation-3">
                                                        <p className="promo-title"><span>Hot Sale OFF</span> Sale Offer 60% Off This Week</p>
                                                        <h1 className="main-title"><span>Top 20% Sale</span> <span>Black History Month</span></h1>
                                                        <p className="subtitle">The collection grows each year with original stories and design features, influenced by Abalia's employees.</p>
                                                        <div className="slide-button">
                                                            <a className="default-btn secondary" href="shop-grid.html" title="Shop Now">Shop Now</a>
                                                        </div>
                                                    </div> {/* end of slide-content */}
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/* end of slider-inner */}
                                </div> {/* end of swiper-slide */}
                            </div> {/* end of swiper-slide */}
                            {/* Slider Navigation */}
                            <div className="swiper-arrow next slide"><i className="fa fa-angle-right" /></div>
                            <div className="swiper-arrow prev slide"><i className="fa fa-angle-left" /></div>
                            {/* Slider Pagination */}
                            <div className="swiper-pagination" />
                        </div>
                    </section>
                    {/* End of Primary Slider Section */}
                    {/* Start of Support Section */}
                    <section className="support-section mb0">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-12 col-sm-6 col-md-3 col-lg-3 feature-box">
                                    <div className="feature-content">
                                        <h2>Free Shipping</h2>
                                        <p>Free shipping on all order</p>
                                    </div>
                                </div> {/* end of feaure-box */}
                                <div className="col-12 col-sm-6 col-md-3 col-lg-3 feature-box">
                                    <div className="feature-content">
                                        <h2>Money Return</h2>
                                        <p>30 days for free return</p>
                                    </div>
                                </div> {/* end of feaure-box */}
                                <div className="col-12 col-sm-6 col-md-3 col-lg-3 feature-box">
                                    <div className="feature-content">
                                        <h2>Online Support</h2>
                                        <p>Support 24 hours a day</p>
                                    </div>
                                </div> {/* end of feaure-box */}
                                <div className="col-12 col-sm-6 col-md-3 col-lg-3 feature-box">
                                    <div className="feature-content">
                                        <h2>Deals &amp; Promotions</h2>
                                        <p>Price savings, discounts, coupons</p>
                                    </div>
                                </div> {/* end of feaure-box */}
                            </div>
                        </div>
                    </section>
                    {/* End of Support Section */}
                    {/* Start of Banner Section */}
                    <div className="banner-section mb-half">
                        <div className="container">
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <div className="row">
                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                                        <div className="promo-banner hover-effect-1">
                                            <a href="#">
                                                <img src="/images/banners/banner-1.jpg" alt="Promo Banner" />
                                            </a>
                                        </div> {/* end of promo-banner */}
                                    </div>
                                    <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                                        <div className="promo-banner hover-effect-1">
                                            <a href="#">
                                                <img src="/images/banners/banner-2.jpg" alt="Promo Banner" />
                                            </a>
                                        </div> {/* end of promo-banner */}
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                        <div className="promo-banner hover-effect-1">
                                            <a href="#">
                                                <img src="/images/banners/banner-3.jpg" alt="Promo Banner" />
                                            </a>
                                        </div> {/* end of promo-banner */}
                                    </div>
                                </div> {/* end of row */}
                            </Swiper>
                        </div> {/* end of container */}
                    </div>
                    {/* End of Banner Section */}
                    {/* Start of New Arrivals Section */}
                    <section className="new-arrivals-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12">
                                    <div className="section-title">
                                        <h2>New Trending Products</h2>
                                        <p className="subtitle">Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque libero est</p>
                                    </div>
                                </div>
                            </div> {/* end of row */}
                            <div className="row product-row">
                                <div className="col-12 col-sm-12 col-md-12">
                                    <div className="new-products pos-r">
                                        <div className="element-carousel anime-element" data-visible-slide={4} data-loop="false" data-space-between={0} data-speed={1000}>
                                            {/* Slides */}
                                            <Swiper
                                                spaceBetween={30}
                                                slidesPerView={4}
                                                onSlideChange={() => console.log('slide change')}
                                                onSwiper={(swiper) => console.log(swiper)}
                                            >
                                                <div className="swiper-wrapper">
                                                    <article className="swiper-slide product-layout">
                                                        <div className="product-thumb">
                                                            <div className="product-inner">
                                                                <div className="product-image">
                                                                    <div className="label-product label-sale">-20%</div>
                                                                    <div className="label-product label-new">New</div>
                                                                    <a href="single-product.html">
                                                                        <img src="/images/products/new/product-1.jpg" alt="Compete Track Tote" title="Compete Track Tote" />
                                                                    </a>
                                                                    <div className="action-links">
                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                    </div>
                                                                </div> {/* end of product-image */}
                                                                <div className="product-caption">
                                                                    <div className="product-meta d-flex justify-content-between align-items-center">
                                                                        <div className="product-manufacturer">
                                                                            <a href="#">Studio Design</a>
                                                                        </div>
                                                                        <div className="product-ratings">
                                                                            <div className="rating-box">
                                                                                <ul className="rating d-flex">
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="product-name"><a href="single-product.html">Compete Track Tote</a></h4>
                                                                    <p className="product-price">
                                                                        <span className="price-old">$54.65</span>
                                                                        <span className="price-new">$43.72</span>
                                                                    </p>
                                                                </div>{/* end of product-caption */}
                                                            </div>{/* end of product-inner */}
                                                        </div>{/* end of product-thumb */}
                                                    </article> {/* end of product-layout */}
                                                    <article className="swiper-slide product-layout">
                                                        <div className="product-thumb">
                                                            <div className="product-inner">
                                                                <div className="product-image">
                                                                    <div className="label-product label-new">New</div>
                                                                    <a href="single-product.html">
                                                                        <img src="/images/products/new/product-2.jpg" alt="Fusion Backpack" title="Fusion Backpack" />
                                                                    </a>
                                                                    <div className="action-links">
                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                    </div>
                                                                </div> {/* end of product-image */}
                                                                <div className="product-caption">
                                                                    <div className="product-meta d-flex justify-content-between align-items-center">
                                                                        <div className="product-manufacturer">
                                                                            <a href="#">Graphic Corner</a>
                                                                        </div>
                                                                        <div className="product-ratings">
                                                                            <div className="rating-box">
                                                                                <ul className="rating d-flex">
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="product-name"><a href="single-product.html">Fusion Backpack</a></h4>
                                                                    <p className="product-price">
                                                                        <span className="price-new">$55.70</span>
                                                                    </p>
                                                                </div>{/* end of product-caption */}
                                                            </div>{/* end of product-inner */}
                                                        </div>{/* end of product-thumb */}
                                                    </article> {/* end of product-layout */}
                                                    <article className="swiper-slide product-layout">
                                                        <div className="product-thumb">
                                                            <div className="product-inner">
                                                                <div className="product-image">
                                                                    <div className="label-product label-new">New</div>
                                                                    <a href="single-product.html">
                                                                        <img src="/images/products/new/product-3.jpg" alt="Rival Field Messenger 6" title="Rival Field Messenger 6" />
                                                                    </a>
                                                                    <div className="action-links">
                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                    </div>
                                                                </div> {/* end of product-image */}
                                                                <div className="product-caption">
                                                                    <div className="product-meta d-flex justify-content-between align-items-center">
                                                                        <div className="product-manufacturer">
                                                                            <a href="#">Graphic Corner</a>
                                                                        </div>
                                                                        <div className="product-ratings">
                                                                            <div className="rating-box">
                                                                                <ul className="rating d-flex">
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="product-name"><a href="single-product.html">Rival Field Messenger 6</a></h4>
                                                                    <p className="product-price">
                                                                        <span className="price-new">$54.40</span>
                                                                    </p>
                                                                </div>{/* end of product-caption */}
                                                            </div>{/* end of product-inner */}
                                                        </div>{/* end of product-thumb */}
                                                    </article> {/* end of product-layout */}
                                                    <article className="swiper-slide product-layout">
                                                        <div className="product-thumb">
                                                            <div className="product-inner">
                                                                <div className="product-image">
                                                                    <div className="label-product label-new">New</div>
                                                                    <a href="single-product.html">
                                                                        <img src="/images/products/new/product-4.jpg" alt="Rival Field Messenger" title="Rival Field Messenger" />
                                                                    </a>
                                                                    <div className="action-links">
                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                    </div>
                                                                </div> {/* end of product-image */}
                                                                <div className="product-caption">
                                                                    <div className="product-meta d-flex justify-content-between align-items-center">
                                                                        <div className="product-manufacturer">
                                                                            <a href="#">Graphic Corner</a>
                                                                        </div>
                                                                        <div className="product-ratings">
                                                                            <div className="rating-box">
                                                                                <ul className="rating d-flex">
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="product-name"><a href="single-product.html">Rival Field Messenger</a></h4>
                                                                    <p className="product-price">
                                                                        <span className="price-new">$67.50</span>
                                                                    </p>
                                                                </div>{/* end of product-caption */}
                                                            </div>{/* end of product-inner */}
                                                        </div>{/* end of product-thumb */}
                                                    </article> {/* end of product-layout */}
                                                    <article className="swiper-slide product-layout">
                                                        <div className="product-thumb">
                                                            <div className="product-inner">
                                                                <div className="product-image">
                                                                    <div className="label-product label-new">New</div>
                                                                    <a href="single-product.html">
                                                                        <img src="/images/products/new/product-5.jpg" alt="Crown Summit Backpack" title="Crown Summit Backpack" />
                                                                    </a>
                                                                    <div className="action-links">
                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                    </div>
                                                                </div> {/* end of product-image */}
                                                                <div className="product-caption">
                                                                    <div className="product-meta d-flex justify-content-between align-items-center">
                                                                        <div className="product-manufacturer">
                                                                            <a href="#">Graphic Corner</a>
                                                                        </div>
                                                                        <div className="product-ratings">
                                                                            <div className="rating-box">
                                                                                <ul className="rating d-flex">
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="product-name"><a href="single-product.html">Crown Summit Backpack</a></h4>
                                                                    <p className="product-price">
                                                                        <span className="price-new">$78.90</span>
                                                                    </p>
                                                                </div>{/* end of product-caption */}
                                                            </div>{/* end of product-inner */}
                                                        </div>{/* end of product-thumb */}
                                                    </article> {/* end of product-layout */}
                                                    <article className="swiper-slide product-layout">
                                                        <div className="product-thumb">
                                                            <div className="product-inner">
                                                                <div className="product-image">
                                                                    <div className="label-product label-new">New</div>
                                                                    <a href="single-product.html">
                                                                        <img src="/images/products/new/product-6.jpg" alt="Rival Field Messenger" title="Rival Field Messenger" />
                                                                    </a>
                                                                    <div className="action-links">
                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                    </div>
                                                                </div> {/* end of product-image */}
                                                                <div className="product-caption">
                                                                    <div className="product-meta d-flex justify-content-between align-items-center">
                                                                        <div className="product-manufacturer">
                                                                            <a href="#">Graphic Corner</a>
                                                                        </div>
                                                                        <div className="product-ratings">
                                                                            <div className="rating-box">
                                                                                <ul className="rating d-flex">
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="product-name"><a href="single-product.html">Rival Field Messenger</a></h4>
                                                                    <p className="product-price">
                                                                        <span className="price-new">$54.50</span>
                                                                    </p>
                                                                </div>{/* end of product-caption */}
                                                            </div>{/* end of product-inner */}
                                                        </div>{/* end of product-thumb */}
                                                    </article> {/* end of product-layout */}
                                                    <article className="swiper-slide product-layout">
                                                        <div className="product-thumb">
                                                            <div className="product-inner">
                                                                <div className="product-image">
                                                                    <div className="label-product label-sale">-7%</div>
                                                                    <div className="label-product label-new">New</div>
                                                                    <a href="single-product.html">
                                                                        <img src="/images/products/new/product-7.jpg" alt="Strive Shoulder Pack" title="Strive Shoulder Pack" />
                                                                    </a>
                                                                    <div className="action-links">
                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                    </div>
                                                                </div> {/* end of product-image */}
                                                                <div className="product-caption">
                                                                    <div className="product-meta d-flex justify-content-between align-items-center">
                                                                        <div className="product-manufacturer">
                                                                            <a href="#">Graphic Corner</a>
                                                                        </div>
                                                                        <div className="product-ratings">
                                                                            <div className="rating-box">
                                                                                <ul className="rating d-flex">
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="product-name"><a href="single-product.html">Strive Shoulder Pack</a></h4>
                                                                    <p className="product-price">
                                                                        <span className="price-old">$76.40</span>
                                                                        <span className="price-new">$71.05</span>
                                                                    </p>
                                                                </div>{/* end of product-caption */}
                                                            </div>{/* end of product-inner */}
                                                        </div>{/* end of product-thumb */}
                                                    </article> {/* end of product-layout */}
                                                    <article className="swiper-slide product-layout">
                                                        <div className="product-thumb">
                                                            <div className="product-inner">
                                                                <div className="product-image">
                                                                    <div className="label-product label-new">New</div>
                                                                    <a href="single-product.html">
                                                                        <img src="/images/products/new/product-8.jpg" alt="Wayfarer Messenger Bag" title="Wayfarer Messenger Bag" />
                                                                    </a>
                                                                    <div className="action-links">
                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                    </div>
                                                                </div> {/* end of product-image */}
                                                                <div className="product-caption">
                                                                    <div className="product-meta d-flex justify-content-between align-items-center">
                                                                        <div className="product-manufacturer">
                                                                            <a href="#">Studio Design</a>
                                                                        </div>
                                                                        <div className="product-ratings">
                                                                            <div className="rating-box">
                                                                                <ul className="rating d-flex">
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                    <li><i className="ion ion-md-star-outline" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h4 className="product-name"><a href="single-product.html">Wayfarer Messenger Bag</a></h4>
                                                                    <p className="product-price">
                                                                        <span className="price-new">$65.40</span>
                                                                    </p>
                                                                </div>{/* end of product-caption */}
                                                            </div>{/* end of product-inner */}
                                                        </div>{/* end of product-thumb */}
                                                    </article> {/* end of product-layout */}
                                                </div> {/* end of swiper-wrapper */}
                                            </Swiper>
                                            {/* Slider Navigation */}
                                            <div className="swiper-arrow next"><i className="fa fa-angle-right" /></div>
                                            <div className="swiper-arrow prev"><i className="fa fa-angle-left" /></div>
                                        </div> {/* end of element-carousel */}
                                    </div> {/* end of new-products */}
                                </div>
                            </div> {/* end of row */}
                        </div> {/* end of container */}
                    </section>
                    {/* End of New Arrivals Section */}
                    {/* Start of Promo Banner Section */}
                    <section className="promo-banner-section bg-img-wrapper">
                        <div className="image-placeholder pos-r">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="banner-with-text">
                                            <img src="/images/backgrounds/bg-banner.jpg" className="visually-hidden" alt="Promo Banner" />
                                            <div className="promo-text">
                                                <h1>Hurry Up!</h1>
                                                <h2><span>Hurry Up!</span> Daily Deal Of The Day</h2>
                                                <p>Abdul, a young, widowed Muslim man, needed to leave Syria and not be delayed by the authorities in getting to Europe. The best way to do this, he reasoned, was to acquire another family as cover, and he found one. It was all a sham, however, just a means to an end.</p>
                                                <a href="#" className="default-btn large">Discover Now</a>
                                            </div>
                                        </div> {/* end of promo-banner */}
                                    </div>
                                </div> {/* end of row */}
                            </div> {/* end of container */}
                        </div> {/* end of image-placeholder */}
                    </section>
                    {/* End of Promo Banner Section */}
                    {/* Start of Categories Section */}
                    <section className="categories-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12">
                                    <div className="section-title">
                                        <h2>Our Categories</h2>
                                        <p className="subtitle">Consequat magna, massa vel suspendisse morbi aliquam faucibus ligula ante ipsum ac nulla.</p>
                                    </div>
                                </div>
                            </div> {/* end of row */}
                            <div className="row product-row">
                                <div className="col-12 col-sm-12 col-md-12">
                                    {/* Nav Pills */}
                                    <ul className="nav nav-pills justify-content-center" id="our_categories" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="nav_shop_new" data-toggle="pill" href="#shop_new" role="tab" aria-controls="shop_new" aria-selected="true">Shop New</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="nav_shop_shoes" data-toggle="pill" href="#shop_shoes" role="tab" aria-controls="shop_shoes" aria-selected="false">Sneakers</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="nav_shop_bags" data-toggle="pill" href="#shop_bags" role="tab" aria-controls="shop_bags" aria-selected="false">Backpacks</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="nav_shop_glasses" data-toggle="pill" href="#shop_glasses" role="tab" aria-controls="shop_glasses" aria-selected="false">Sunglasses</a>
                                        </li>
                                    </ul> {/* end of nav */}
                                    {/* Tab Contents */}
                                    <div className="tab-content" id="our_categories_contents">
                                        <div className="tab-pane show active anime-tab" id="shop_new" role="tabpanel" aria-labelledby="nav_shop_new">
                                            <div className="new-products pos-r">
                                                <div className="element-carousel" data-visible-slide={4} data-loop="false" data-space-between={0} data-speed={1000}>
                                                    {/* Slides */}
                                                    <Swiper
                                                        spaceBetween={30}
                                                        slidesPerView={4}
                                                        onSlideChange={() => console.log('slide change')}
                                                        onSwiper={(swiper) => console.log(swiper)}
                                                    >
                                                        <div className="swiper-wrapper">
                                                            <article className="swiper-slide product-layout">
                                                                <div className="product-thumb">
                                                                    <div className="product-inner">
                                                                        <div className="product-image">
                                                                            <div className="label-product label-sale">-7%</div>
                                                                            <div className="label-product label-new">New</div>
                                                                            <a href="single-product.html">
                                                                                <img src="/images/products/new/product-7.jpg" alt="Strive Shoulder Pack" title="Strive Shoulder Pack" />
                                                                            </a>
                                                                            <div className="action-links">
                                                                                <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                                <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                            </div>
                                                                        </div> {/* end of product-image */}
                                                                        <div className="product-caption">
                                                                            <div className="product-meta d-flex justify-content-between align-items-center">
                                                                                <div className="product-manufacturer">
                                                                                    <a href="#">Graphic Corner</a>
                                                                                </div>
                                                                                <div className="product-ratings">
                                                                                    <div className="rating-box">
                                                                                        <ul className="rating d-flex">
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <h4 className="product-name"><a href="single-product.html">Strive Shoulder Pack</a></h4>
                                                                            <p className="product-price">
                                                                                <span className="price-old">$76.40</span>
                                                                                <span className="price-new">$71.05</span>
                                                                            </p>
                                                                        </div>{/* end of product-caption */}
                                                                    </div>{/* end of product-inner */}
                                                                </div>{/* end of product-thumb */}
                                                            </article> {/* end of product-layout */}
                                                            <article className="swiper-slide product-layout">
                                                                <div className="product-thumb">
                                                                    <div className="product-inner">
                                                                        <div className="product-image">
                                                                            <div className="label-product label-new">New</div>
                                                                            <a href="single-product.html">
                                                                                <img src="/images/products/new/product-8.jpg" alt="Wayfarer Messenger Bag" title="Wayfarer Messenger Bag" />
                                                                            </a>
                                                                            <div className="action-links">
                                                                                <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                                <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                            </div>
                                                                        </div> {/* end of product-image */}
                                                                        <div className="product-caption">
                                                                            <div className="product-meta d-flex justify-content-between align-items-center">
                                                                                <div className="product-manufacturer">
                                                                                    <a href="#">Studio Design</a>
                                                                                </div>
                                                                                <div className="product-ratings">
                                                                                    <div className="rating-box">
                                                                                        <ul className="rating d-flex">
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <h4 className="product-name"><a href="single-product.html">Wayfarer Messenger Bag</a></h4>
                                                                            <p className="product-price">
                                                                                <span className="price-new">$65.40</span>
                                                                            </p>
                                                                        </div>{/* end of product-caption */}
                                                                    </div>{/* end of product-inner */}
                                                                </div>{/* end of product-thumb */}
                                                            </article> {/* end of product-layout */}
                                                            <article className="swiper-slide product-layout">
                                                                <div className="product-thumb">
                                                                    <div className="product-inner">
                                                                        <div className="product-image">
                                                                            <div className="label-product label-new">New</div>
                                                                            <a href="single-product.html">
                                                                                <img src="/images/products/new/product-4.jpg" alt="Rival Field Messenger" title="Rival Field Messenger" />
                                                                            </a>
                                                                            <div className="action-links">
                                                                                <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                                <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                            </div>
                                                                        </div> {/* end of product-image */}
                                                                        <div className="product-caption">
                                                                            <div className="product-meta d-flex justify-content-between align-items-center">
                                                                                <div className="product-manufacturer">
                                                                                    <a href="#">Graphic Corner</a>
                                                                                </div>
                                                                                <div className="product-ratings">
                                                                                    <div className="rating-box">
                                                                                        <ul className="rating d-flex">
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                            <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                            <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <h4 className="product-name"><a href="single-product.html">Rival Field Messenger</a></h4>
                                                                            <p className="product-price">
                                                                                <span className="price-new">$67.50</span>
                                                                            </p>
                                                                        </div>{/* end of product-caption */}
                                                                    </div>{/* end of product-inner */}
                                                                </div>{/* end of product-thumb */}
                                                            </article> {/* end of product-layout */}
                                                            <article className="swiper-slide product-layout">
                                                                <div className="product-thumb">
                                                                    <div className="product-inner">
                                                                        <div className="product-image">
                                                                            <div className="label-product label-new">New</div>
                                                                            <a href="single-product.html">
                                                                                <img src="/images/products/new/product-5.jpg" alt="Crown Summit Backpack" title="Crown Summit Backpack" />
                                                                            </a>
                                                                            <div className="action-links">
                                                                                <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                                <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                            </div>
                                                                        </div> {/* end of product-image */}
                                                                        <div className="product-caption">
                                                                            <div className="product-meta d-flex justify-content-between align-items-center">
                                                                                <div className="product-manufacturer">
                                                                                    <a href="#">Graphic Corner</a>
                                                                                </div>
                                                                                <div className="product-ratings">
                                                                                    <div className="rating-box">
                                                                                        <ul className="rating d-flex">
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <h4 className="product-name"><a href="single-product.html">Crown Summit Backpack</a></h4>
                                                                            <p className="product-price">
                                                                                <span className="price-new">$78.90</span>
                                                                            </p>
                                                                        </div>{/* end of product-caption */}
                                                                    </div>{/* end of product-inner */}
                                                                </div>{/* end of product-thumb */}
                                                            </article> {/* end of product-layout */}
                                                            <article className="swiper-slide product-layout">
                                                                <div className="product-thumb">
                                                                    <div className="product-inner">
                                                                        <div className="product-image">
                                                                            <div className="label-product label-new">New</div>
                                                                            <a href="single-product.html">
                                                                                <img src="/images/products/new/product-6.jpg" alt="Rival Field Messenger" title="Rival Field Messenger" />
                                                                            </a>
                                                                            <div className="action-links">
                                                                                <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                                <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                            </div>
                                                                        </div> {/* end of product-image */}
                                                                        <div className="product-caption">
                                                                            <div className="product-meta d-flex justify-content-between align-items-center">
                                                                                <div className="product-manufacturer">
                                                                                    <a href="#">Graphic Corner</a>
                                                                                </div>
                                                                                <div className="product-ratings">
                                                                                    <div className="rating-box">
                                                                                        <ul className="rating d-flex">
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                            <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <h4 className="product-name"><a href="single-product.html">Rival Field Messenger</a></h4>
                                                                            <p className="product-price">
                                                                                <span className="price-new">$54.50</span>
                                                                            </p>
                                                                        </div>{/* end of product-caption */}
                                                                    </div>{/* end of product-inner */}
                                                                </div>{/* end of product-thumb */}
                                                            </article> {/* end of product-layout */}
                                                            <article className="swiper-slide product-layout">
                                                                <div className="product-thumb">
                                                                    <div className="product-inner">
                                                                        <div className="product-image">
                                                                            <div className="label-product label-sale">-20%</div>
                                                                            <div className="label-product label-new">New</div>
                                                                            <a href="single-product.html">
                                                                                <img src="/images/products/new/product-1.jpg" alt="Compete Track Tote" title="Compete Track Tote" />
                                                                            </a>
                                                                            <div className="action-links">
                                                                                <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                                <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                            </div>
                                                                        </div> {/* end of product-image */}
                                                                        <div className="product-caption">
                                                                            <div className="product-meta d-flex justify-content-between align-items-center">
                                                                                <div className="product-manufacturer">
                                                                                    <a href="#">Studio Design</a>
                                                                                </div>
                                                                                <div className="product-ratings">
                                                                                    <div className="rating-box">
                                                                                        <ul className="rating d-flex">
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <h4 className="product-name"><a href="single-product.html">Compete Track Tote</a></h4>
                                                                            <p className="product-price">
                                                                                <span className="price-old">$54.65</span>
                                                                                <span className="price-new">$43.72</span>
                                                                            </p>
                                                                        </div>{/* end of product-caption */}
                                                                    </div>{/* end of product-inner */}
                                                                </div>{/* end of product-thumb */}
                                                            </article> {/* end of product-layout */}
                                                            <article className="swiper-slide product-layout">
                                                                <div className="product-thumb">
                                                                    <div className="product-inner">
                                                                        <div className="product-image">
                                                                            <div className="label-product label-new">New</div>
                                                                            <a href="single-product.html">
                                                                                <img src="/images/products/new/product-2.jpg" alt="Fusion Backpack" title="Fusion Backpack" />
                                                                            </a>
                                                                            <div className="action-links">
                                                                                <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                                <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                            </div>
                                                                        </div> {/* end of product-image */}
                                                                        <div className="product-caption">
                                                                            <div className="product-meta d-flex justify-content-between align-items-center">
                                                                                <div className="product-manufacturer">
                                                                                    <a href="#">Graphic Corner</a>
                                                                                </div>
                                                                                <div className="product-ratings">
                                                                                    <div className="rating-box">
                                                                                        <ul className="rating d-flex">
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                            <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <h4 className="product-name"><a href="single-product.html">Fusion Backpack</a></h4>
                                                                            <p className="product-price">
                                                                                <span className="price-new">$55.70</span>
                                                                            </p>
                                                                        </div>{/* end of product-caption */}
                                                                    </div>{/* end of product-inner */}
                                                                </div>{/* end of product-thumb */}
                                                            </article> {/* end of product-layout */}
                                                            <article className="swiper-slide product-layout">
                                                                <div className="product-thumb">
                                                                    <div className="product-inner">
                                                                        <div className="product-image">
                                                                            <div className="label-product label-new">New</div>
                                                                            <a href="single-product.html">
                                                                                <img src="/images/products/new/product-3.jpg" alt="Rival Field Messenger 6" title="Rival Field Messenger 6" />
                                                                            </a>
                                                                            <div className="action-links">
                                                                                <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                                <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                            </div>
                                                                        </div> {/* end of product-image */}
                                                                        <div className="product-caption">
                                                                            <div className="product-meta d-flex justify-content-between align-items-center">
                                                                                <div className="product-manufacturer">
                                                                                    <a href="#">Graphic Corner</a>
                                                                                </div>
                                                                                <div className="product-ratings">
                                                                                    <div className="rating-box">
                                                                                        <ul className="rating d-flex">
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                            <li><i className="ion ion-md-star-outline" /></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <h4 className="product-name"><a href="single-product.html">Rival Field Messenger 6</a></h4>
                                                                            <p className="product-price">
                                                                                <span className="price-new">$54.40</span>
                                                                            </p>
                                                                        </div>{/* end of product-caption */}
                                                                    </div>{/* end of product-inner */}
                                                                </div>{/* end of product-thumb */}
                                                            </article> {/* end of product-layout */}
                                                        </div> {/* end of swiper-wrapper */}
                                                    </Swiper>
                                                    {/* Slider Navigation */}
                                                    <div className="swiper-arrow next"><i className="fa fa-angle-right" /></div>
                                                    <div className="swiper-arrow prev"><i className="fa fa-angle-left" /></div>
                                                </div> {/* end of element-carousel */}
                                            </div> {/* end of new-products */}
                                        </div> {/* end of tab-pane */}
                                        <div className="tab-pane anime-tab" id="shop_shoes" role="tabpanel" aria-labelledby="nav_shop_shoes">
                                            <div className="new-products pos-r">
                                                <div className="element-carousel" data-visible-slide={4} data-loop="false" data-space-between={0} data-speed={1000}>
                                                    {/* Slides */}
                                                    <div className="swiper-wrapper">
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-sale">-20%</div>
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-9.jpg" alt="Compete Track Tote" title="Compete Track Tote" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Studio Design</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Compete Track Tote</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-old">$54.65</span>
                                                                            <span className="price-new">$43.72</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-10.jpg" alt="Fusion Backpack" title="Fusion Backpack" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Fusion Backpack</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$55.70</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-11.jpg" alt="Rival Field Messenger 6" title="Rival Field Messenger 6" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Rival Field Messenger 6</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$54.40</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-sale">-7%</div>
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-12.jpg" alt="Strive Shoulder Pack" title="Strive Shoulder Pack" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Strive Shoulder Pack</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-old">$76.40</span>
                                                                            <span className="price-new">$71.05</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-13.jpg" alt="Wayfarer Messenger Bag" title="Wayfarer Messenger Bag" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Studio Design</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Wayfarer Messenger Bag</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$65.40</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-1.jpg" alt="Rival Field Messenger" title="Rival Field Messenger" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Rival Field Messenger</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$67.50</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-2.jpg" alt="Crown Summit Backpack" title="Crown Summit Backpack" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Crown Summit Backpack</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$78.90</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-10.jpg" alt="Rival Field Messenger" title="Rival Field Messenger" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Rival Field Messenger</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$54.50</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                    </div> {/* end of swiper-wrapper */}
                                                    {/* Slider Navigation */}
                                                    <div className="swiper-arrow next"><i className="fa fa-angle-right" /></div>
                                                    <div className="swiper-arrow prev"><i className="fa fa-angle-left" /></div>
                                                </div> {/* end of element-carousel */}
                                            </div> {/* end of new-products */}
                                        </div> {/* end of tab-pane */}
                                        <div className="tab-pane anime-tab" id="shop_bags" role="tabpanel" aria-labelledby="nav_shop_bags">
                                            <div className="new-products pos-r">
                                                <div className="element-carousel" data-visible-slide={4} data-loop="false" data-space-between={0} data-speed={1000}>
                                                    {/* Slides */}
                                                    <div className="swiper-wrapper">
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-sale">-7%</div>
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-3.jpg" alt="Strive Shoulder Pack" title="Strive Shoulder Pack" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Strive Shoulder Pack</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-old">$76.40</span>
                                                                            <span className="price-new">$71.05</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-8.jpg" alt="Wayfarer Messenger Bag" title="Wayfarer Messenger Bag" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Studio Design</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Wayfarer Messenger Bag</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$65.40</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-15.jpg" alt="Rival Field Messenger" title="Rival Field Messenger" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Rival Field Messenger</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$67.50</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-sale">-20%</div>
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-6.jpg" alt="Compete Track Tote" title="Compete Track Tote" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Studio Design</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Compete Track Tote</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-old">$54.65</span>
                                                                            <span className="price-new">$43.72</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-4.jpg" alt="Fusion Backpack" title="Fusion Backpack" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Fusion Backpack</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$55.70</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-7.jpg" alt="Rival Field Messenger 6" title="Rival Field Messenger 6" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Rival Field Messenger 6</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$54.40</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-14.jpg" alt="Crown Summit Backpack" title="Crown Summit Backpack" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Crown Summit Backpack</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$78.90</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-3.jpg" alt="Rival Field Messenger" title="Rival Field Messenger" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Rival Field Messenger</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$54.50</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                    </div> {/* end of swiper-wrapper */}
                                                    {/* Slider Navigation */}
                                                    <div className="swiper-arrow next"><i className="fa fa-angle-right" /></div>
                                                    <div className="swiper-arrow prev"><i className="fa fa-angle-left" /></div>
                                                </div> {/* end of element-carousel */}
                                            </div> {/* end of new-products */}
                                        </div> {/* end of tab-pane */}
                                        <div className="tab-pane anime-tab" id="shop_glasses" role="tabpanel" aria-labelledby="nav_shop_glasses">
                                            <div className="new-products pos-r">
                                                <div className="element-carousel" data-visible-slide={4} data-loop="false" data-space-between={0} data-speed={1000}>
                                                    {/* Slides */}
                                                    <div className="swiper-wrapper">
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-5.jpg" alt="Rival Field Messenger" title="Rival Field Messenger" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Rival Field Messenger</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$67.50</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-sale">-20%</div>
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-16.jpg" alt="Compete Track Tote" title="Compete Track Tote" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Studio Design</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Compete Track Tote</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-old">$54.65</span>
                                                                            <span className="price-new">$43.72</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-17.jpg" alt="Fusion Backpack" title="Fusion Backpack" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Fusion Backpack</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$55.70</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-sale">-7%</div>
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-3.jpg" alt="Strive Shoulder Pack" title="Strive Shoulder Pack" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Strive Shoulder Pack</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-old">$76.40</span>
                                                                            <span className="price-new">$71.05</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-8.jpg" alt="Wayfarer Messenger Bag" title="Wayfarer Messenger Bag" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Studio Design</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Wayfarer Messenger Bag</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$65.40</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-7.jpg" alt="Rival Field Messenger 6" title="Rival Field Messenger 6" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Rival Field Messenger 6</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$54.40</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-14.jpg" alt="Crown Summit Backpack" title="Crown Summit Backpack" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Crown Summit Backpack</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$78.90</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                        <article className="swiper-slide product-layout">
                                                            <div className="product-thumb">
                                                                <div className="product-inner">
                                                                    <div className="product-image">
                                                                        <div className="label-product label-new">New</div>
                                                                        <a href="single-product.html">
                                                                            <img src="/images/products/new/product-3.jpg" alt="Rival Field Messenger" title="Rival Field Messenger" />
                                                                        </a>
                                                                        <div className="action-links">
                                                                            <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                            <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                            <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                            <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                        </div>
                                                                    </div> {/* end of product-image */}
                                                                    <div className="product-caption">
                                                                        <div className="product-meta d-flex justify-content-between align-items-center">
                                                                            <div className="product-manufacturer">
                                                                                <a href="#">Graphic Corner</a>
                                                                            </div>
                                                                            <div className="product-ratings">
                                                                                <div className="rating-box">
                                                                                    <ul className="rating d-flex">
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                        <li><i className="ion ion-md-star-outline disabled" /></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h4 className="product-name"><a href="single-product.html">Rival Field Messenger</a></h4>
                                                                        <p className="product-price">
                                                                            <span className="price-new">$54.50</span>
                                                                        </p>
                                                                    </div>{/* end of product-caption */}
                                                                </div>{/* end of product-inner */}
                                                            </div>{/* end of product-thumb */}
                                                        </article> {/* end of product-layout */}
                                                    </div> {/* end of swiper-wrapper */}
                                                    {/* Slider Navigation */}
                                                    <div className="swiper-arrow next"><i className="fa fa-angle-right" /></div>
                                                    <div className="swiper-arrow prev"><i className="fa fa-angle-left" /></div>
                                                </div> {/* end of element-carousel */}
                                            </div> {/* end of new-products */}
                                        </div> {/* end of tab-pane */}
                                    </div> {/* end of tab-content */}
                                </div>
                            </div> {/* end of row */}
                        </div> {/* end of container */}
                    </section>
                    {/* End of Categories Section */}
                    {/* Start of Instagram Section */}
                    <section className="instagram-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12">
                                    <div className="section-title type-2 pt-full top-bordered">
                                        <h2>Follow us On Instagram</h2>
                                        <p className="subtitle">Consequat magna, massa vel suspendisse morbi aliquam faucibus ligula ante ipsum ac nulla.</p>
                                    </div>
                                </div>
                            </div> {/* end of row */}
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12">
                                    <div className="instagram-container">
                                        {/* Slides */}
                                        <div id="instagram_feed" className="swiper-wrapper image-popup">
                                        </div> {/* end of swiper-wrapper */}
                                    </div> {/* end of instagram-carousel */}
                                    <div className="follow-link">
                                        <a href="https://www.instagram.com/themeitems/" target="_blank">Follow us On Instagram</a>
                                    </div>
                                </div>
                            </div> {/* end of row */}
                        </div> {/* end of container */}
                    </section>
                    {/* End of Instagram Section */}
                </main>
                {/* End of Main Content Wrapper */}


            </div>
            {/* End of Whole Site Wrapper */}
            {/* Initializing Photoswipe */}
            <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="pswp__bg" />
                <div className="pswp__scroll-wrap">
                    <div className="pswp__container">
                        <div className="pswp__item" />
                        <div className="pswp__item" />
                        <div className="pswp__item" />
                    </div>
                    <div className="pswp__ui pswp__ui--hidden">
                        <div className="pswp__top-bar">
                            <div className="pswp__counter" />
                            <button className="pswp__button pswp__button--close" title="Close (Esc)" />
                            <button className="pswp__button pswp__button--share" title="Share" />
                            <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />
                            <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />
                            <div className="pswp__preloader">
                                <div className="pswp__preloader__icn">
                                    <div className="pswp__preloader__cut">
                                        <div className="pswp__preloader__donut" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                            <div className="pswp__share-tooltip" />
                        </div>
                        <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                        </button>
                        <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                        </button>
                        <div className="pswp__caption">
                            <div className="pswp__caption__center" />
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Photoswipe */}
        </div>
    )
}

Home.propTypes = {

}

export default Home
