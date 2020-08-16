import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Products = ({ products }) => {
    return (
        <div>
            {/* Start of Breadcrumbs */}
            <div className="breadcrumb-section bgc-offset mb-full">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12">
                            <nav className="breadcrumb">
                                <a className="breadcrumb-item" href="index.html">Home</a>
                                <span className="breadcrumb-item active">Shop</span>
                            </nav>
                        </div>
                    </div> {/* end of row */}
                </div> {/* end of container */}
            </div>
            {/* End of Breadcrumbs */}
            {/* Start of Main Content Wrapper */}
            <div id="content" className="main-content-wrapper">
                {/* Start of Products Wrapper */}
                <div className="products-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-9 order-1 order-md-1 order-lg-2">
                                <main id="primary" className="site-main">
                                    <div className="shop-wrapper">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-12">
                                                <h1>Shop</h1>
                                                <div className="shop-toolbar">
                                                    <div className="toolbar-inner">
                                                        <div className="product-view-mode">
                                                            <ul role="tablist" className="nav shop-item-filter-list">
                                                                <li role="presentation" className="active"><a href="#grid" aria-controls="grid" role="tab" data-toggle="tab" className="active show" aria-selected="true"><i className="ion-md-grid" /></a></li>
                                                                <li role="presentation"><a href="#list" aria-controls="list" role="tab" data-toggle="tab"><i className="ion-md-list" /></a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="toolbar-amount">
                                                            <span>Showing 10 to 18 of 27</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-select-box">
                                                        <div className="product-sort">
                                                            <p>Sort By:</p>
                                                            <select className="nice-select" name="sortby">
                                                                <option value="trending">Relevance</option>
                                                                <option value="sales">Name (A - Z)</option>
                                                                <option value="sales">Name (Z - A)</option>
                                                                <option value="rating">Price (Low &gt; High)</option>
                                                                <option value="date">Rating (Lowest)</option>
                                                                <option value="price-asc">Model (A - Z)</option>
                                                                <option value="price-asc">Model (Z - A)</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> {/* end of row */}
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-12">
                                                <div className="shop-products-wrapper">
                                                    <div className="tab-content">
                                                        <div id="grid" className="tab-pane anime-tab active show" role="tabpanel">
                                                            <div className="row">
                                                                {products.map(({ id, name, price, image }, index) => (
                                                                    <article className="product-layout col-6 col-sm-6 col-md-4 col-lg-4" key={index}>
                                                                        <div className="product-thumb">
                                                                            <div className="product-inner">
                                                                                <div className="product-image">
                                                                                    <div className="label-product label-sale">-20%</div>
                                                                                    <div className="label-product label-new">New</div>
                                                                                    <Link to={"/product/" + id}>
                                                                                        <img src={image} alt="Compete Track Tote" title="Compete Track Tote" width="200" height="200" />
                                                                                    </Link>
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
                                                                                                    <li><i className="ion ion-md-star-outline" />
                                                                                                    </li>
                                                                                                    <li><i className="ion ion-md-star-outline" />
                                                                                                    </li>
                                                                                                    <li><i className="ion ion-md-star-outline" />
                                                                                                    </li>
                                                                                                    <li><i className="ion ion-md-star-outline" />
                                                                                                    </li>
                                                                                                    <li><i className="ion ion-md-star-outline disabled" />
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <h4 className="product-name">
                                                                                        <Link to={"/product/" + id}>{name}</Link>
                                                                                    </h4>
                                                                                    <p className="product-price">
                                                                                        {/* <span className="price-old">$54.65</span> */}
                                                                                        <span className="price-new">{price}</span>
                                                                                    </p>
                                                                                </div>{/* end of product-caption */}
                                                                            </div>{/* end of product-inner */}
                                                                        </div>{/* end of product-thumb */}
                                                                    </article>
                                                                ))}

                                                            </div>
                                                        </div>
                                                        <div id="list" className="tab-pane anime-tab" role="tabpanel">
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 col-md-12">
                                                                    <article className="product-layout product-list">
                                                                        <div className="product-thumb">
                                                                            <div className="product-inner media align-items-center">
                                                                                <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                                                                                    <div className="label-product label-sale">
                                                                                        -20%</div>
                                                                                    <div className="label-product label-new">New
                                                      </div>
                                                                                    <a href="single-product.html">
                                                                                        <img src="/images/products/new/product-1.jpg" title="Compete Track Tote" alt="Compete Track Tote" />
                                                                                    </a>
                                                                                    <div className="action-links">
                                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                                    </div>
                                                                                </div> {/* end of product-image */}
                                                                                <div className="product-caption media-body">
                                                                                    <div className="product-manufacturer">
                                                                                        <a href="#">Studio Design</a>
                                                                                    </div>
                                                                                    <h4 className="product-name">
                                                                                        <a href="single-product.html">Compete
                                                          Track Tote</a>
                                                                                    </h4>
                                                                                    <div className="product-ratings">
                                                                                        <div className="rating-box">
                                                                                            <ul className="rating d-flex">
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline disabled" />
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="product-price">
                                                                                        <span className="price-old">$54.65</span>
                                                                                        <span className="price-new">$43.72</span>
                                                                                    </p>
                                                                                    <div className="product-des">
                                                                                        <p>Nunc facilisis sagittis
                                                                                        ullamcorper. Proin lectus ipsum,
                                                                                        gravida et mattis vulputate,
                                                                                        tristique ut lectus. Sed et
                                                                                        lorem nunc. Vestibulum ante
                                                                                        ipsum primis in faucibus orci
                                                                                        luctus et ultrices posuere
                                                                                        cubilia Curae; Aenean eleifend
                                                          ..</p>
                                                                                    </div>
                                                                                </div>{/* end of product-caption */}
                                                                            </div>{/* end of product-inner */}
                                                                        </div>{/* end of product-thumb */}
                                                                    </article> {/* end of product-layout */}
                                                                    <article className="product-layout product-list">
                                                                        <div className="product-thumb">
                                                                            <div className="product-inner media align-items-center">
                                                                                <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                                                                                    <div className="label-product label-new">New
                                                      </div>
                                                                                    <a href="single-product.html">
                                                                                        <img src="/images/products/new/product-9.jpg" title="Wayfarer Messenger Bag" alt="Wayfarer Messenger Bag" />
                                                                                    </a>
                                                                                    <div className="action-links">
                                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                                    </div>
                                                                                </div> {/* end of product-image */}
                                                                                <div className="product-caption media-body">
                                                                                    <div className="product-manufacturer">
                                                                                        <a href="#">Studio Design</a>
                                                                                    </div>
                                                                                    <h4 className="product-name">
                                                                                        <a href="single-product.html">Wayfarer
                                                          Messenger Bag</a>
                                                                                    </h4>
                                                                                    <div className="product-ratings">
                                                                                        <div className="rating-box">
                                                                                            <ul className="rating d-flex">
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="product-price">
                                                                                        <span className="price-new">$65.40</span>
                                                                                    </p>
                                                                                    <div className="product-des">
                                                                                        <p>Nunc facilisis sagittis
                                                                                        ullamcorper. Proin lectus ipsum,
                                                                                        gravida et mattis vulputate,
                                                                                        tristique ut lectus. Sed et
                                                                                        lorem nunc. Vestibulum ante
                                                                                        ipsum primis in faucibus orci
                                                                                        luctus et ultrices posuere
                                                                                        cubilia Curae; Aenean eleifend
                                                          ..</p>
                                                                                    </div>
                                                                                </div>{/* end of product-caption */}
                                                                            </div>{/* end of product-inner */}
                                                                        </div>{/* end of product-thumb */}
                                                                    </article> {/* end of product-layout */}
                                                                    <article className="product-layout product-list">
                                                                        <div className="product-thumb">
                                                                            <div className="product-inner media align-items-center">
                                                                                <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                                                                                    <div className="label-product label-new">New
                                                      </div>
                                                                                    <a href="single-product.html">
                                                                                        <img src="/images/products/new/product-2.jpg" title="Fusion Backpack" alt="Fusion Backpack" />
                                                                                    </a>
                                                                                    <div className="action-links">
                                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                                    </div>
                                                                                </div> {/* end of product-image */}
                                                                                <div className="product-caption media-body">
                                                                                    <div className="product-manufacturer">
                                                                                        <a href="#">Graphic Corner</a>
                                                                                    </div>
                                                                                    <h4 className="product-name">
                                                                                        <a href="single-product.html">Fusion
                                                          Backpack</a>
                                                                                    </h4>
                                                                                    <div className="product-ratings">
                                                                                        <div className="rating-box">
                                                                                            <ul className="rating d-flex">
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline disabled" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline disabled" />
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="product-price">
                                                                                        <span className="price-new">$55.70</span>
                                                                                    </p>
                                                                                    <div className="product-des">
                                                                                        <p>Nunc facilisis sagittis
                                                                                        ullamcorper. Proin lectus ipsum,
                                                                                        gravida et mattis vulputate,
                                                                                        tristique ut lectus. Sed et
                                                                                        lorem nunc. Vestibulum ante
                                                                                        ipsum primis in faucibus orci
                                                                                        luctus et ultrices posuere
                                                                                        cubilia Curae; Aenean eleifend
                                                          ..</p>
                                                                                    </div>
                                                                                </div>{/* end of product-caption */}
                                                                            </div>{/* end of product-inner */}
                                                                        </div>{/* end of product-thumb */}
                                                                    </article> {/* end of product-layout */}
                                                                    <article className="product-layout product-list">
                                                                        <div className="product-thumb">
                                                                            <div className="product-inner media align-items-center">
                                                                                <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                                                                                    <div className="label-product label-sale">
                                                                                        -7%</div>
                                                                                    <div className="label-product label-new">New
                                                      </div>
                                                                                    <a href="single-product.html">
                                                                                        <img src="/images/products/new/product-10.jpg" title="Strive Shoulder Pack" alt="Strive Shoulder Pack" />
                                                                                    </a>
                                                                                    <div className="action-links">
                                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                                    </div>
                                                                                </div> {/* end of product-image */}
                                                                                <div className="product-caption media-body">
                                                                                    <div className="product-manufacturer">
                                                                                        <a href="#">Studio Design</a>
                                                                                    </div>
                                                                                    <h4 className="product-name">
                                                                                        <a href="single-product.html">Strive
                                                          Shoulder Pack</a>
                                                                                    </h4>
                                                                                    <div className="product-ratings">
                                                                                        <div className="rating-box">
                                                                                            <ul className="rating d-flex">
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="product-price">
                                                                                        <span className="price-old">$76.40</span>
                                                                                        <span className="price-new">$71.05</span>
                                                                                    </p>
                                                                                    <div className="product-des">
                                                                                        <p>Nunc facilisis sagittis
                                                                                        ullamcorper. Proin lectus ipsum,
                                                                                        gravida et mattis vulputate,
                                                                                        tristique ut lectus. Sed et
                                                                                        lorem nunc. Vestibulum ante
                                                                                        ipsum primis in faucibus orci
                                                                                        luctus et ultrices posuere
                                                                                        cubilia Curae; Aenean eleifend
                                                          ..</p>
                                                                                    </div>
                                                                                </div>{/* end of product-caption */}
                                                                            </div>{/* end of product-inner */}
                                                                        </div>{/* end of product-thumb */}
                                                                    </article> {/* end of product-layout */}
                                                                    <article className="product-layout product-list">
                                                                        <div className="product-thumb">
                                                                            <div className="product-inner media align-items-center">
                                                                                <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                                                                                    <div className="label-product label-new">New
                                                      </div>
                                                                                    <a href="single-product.html">
                                                                                        <img src="/images/products/new/product-3.jpg" title="Rival Field Messenger 6" alt="Rival Field Messenger 6" />
                                                                                    </a>
                                                                                    <div className="action-links">
                                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                                    </div>
                                                                                </div> {/* end of product-image */}
                                                                                <div className="product-caption media-body">
                                                                                    <div className="product-manufacturer">
                                                                                        <a href="#">Graphic Corner</a>
                                                                                    </div>
                                                                                    <h4 className="product-name">
                                                                                        <a href="single-product.html">Rival
                                                          Field Messenger 6</a>
                                                                                    </h4>
                                                                                    <div className="product-ratings">
                                                                                        <div className="rating-box">
                                                                                            <ul className="rating d-flex">
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="product-price">
                                                                                        <span className="price-new">$54.40</span>
                                                                                    </p>
                                                                                    <div className="product-des">
                                                                                        <p>Nunc facilisis sagittis
                                                                                        ullamcorper. Proin lectus ipsum,
                                                                                        gravida et mattis vulputate,
                                                                                        tristique ut lectus. Sed et
                                                                                        lorem nunc. Vestibulum ante
                                                                                        ipsum primis in faucibus orci
                                                                                        luctus et ultrices posuere
                                                                                        cubilia Curae; Aenean eleifend
                                                          ..</p>
                                                                                    </div>
                                                                                </div>{/* end of product-caption */}
                                                                            </div>{/* end of product-inner */}
                                                                        </div>{/* end of product-thumb */}
                                                                    </article> {/* end of product-layout */}
                                                                    <article className="product-layout product-list">
                                                                        <div className="product-thumb">
                                                                            <div className="product-inner media align-items-center">
                                                                                <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                                                                                    <div className="label-product label-new">New
                                                      </div>
                                                                                    <a href="single-product.html">
                                                                                        <img src="/images/products/new/product-11.jpg" title="Rival Field Messenger" alt="Rival Field Messenger" />
                                                                                    </a>
                                                                                    <div className="action-links">
                                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                                    </div>
                                                                                </div> {/* end of product-image */}
                                                                                <div className="product-caption media-body">
                                                                                    <div className="product-manufacturer">
                                                                                        <a href="#">Graphic Corner</a>
                                                                                    </div>
                                                                                    <h4 className="product-name">
                                                                                        <a href="single-product.html">Rival
                                                          Field Messenger</a>
                                                                                    </h4>
                                                                                    <div className="product-ratings">
                                                                                        <div className="rating-box">
                                                                                            <ul className="rating d-flex">
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline disabled" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline disabled" />
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="product-price">
                                                                                        <span className="price-new">$54.50</span>
                                                                                    </p>
                                                                                    <div className="product-des">
                                                                                        <p>Nunc facilisis sagittis
                                                                                        ullamcorper. Proin lectus ipsum,
                                                                                        gravida et mattis vulputate,
                                                                                        tristique ut lectus. Sed et
                                                                                        lorem nunc. Vestibulum ante
                                                                                        ipsum primis in faucibus orci
                                                                                        luctus et ultrices posuere
                                                                                        cubilia Curae; Aenean eleifend
                                                          ..</p>
                                                                                    </div>
                                                                                </div>{/* end of product-caption */}
                                                                            </div>{/* end of product-inner */}
                                                                        </div>{/* end of product-thumb */}
                                                                    </article> {/* end of product-layout */}
                                                                    <article className="product-layout product-list">
                                                                        <div className="product-thumb">
                                                                            <div className="product-inner media align-items-center">
                                                                                <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                                                                                    <div className="label-product label-new">New
                                                      </div>
                                                                                    <a href="single-product.html">
                                                                                        <img src="/images/products/new/product-4.jpg" title="Rival Field Messenger" alt="Rival Field Messenger" />
                                                                                    </a>
                                                                                    <div className="action-links">
                                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                                    </div>
                                                                                </div> {/* end of product-image */}
                                                                                <div className="product-caption media-body">
                                                                                    <div className="product-manufacturer">
                                                                                        <a href="#">Graphic Corner</a>
                                                                                    </div>
                                                                                    <h4 className="product-name">
                                                                                        <a href="single-product.html">Rival
                                                          Field Messenger</a>
                                                                                    </h4>
                                                                                    <div className="product-ratings">
                                                                                        <div className="rating-box">
                                                                                            <ul className="rating d-flex">
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline disabled" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline disabled" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline disabled" />
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="product-price">
                                                                                        <span className="price-new">$67.50</span>
                                                                                    </p>
                                                                                    <div className="product-des">
                                                                                        <p>Nunc facilisis sagittis
                                                                                        ullamcorper. Proin lectus ipsum,
                                                                                        gravida et mattis vulputate,
                                                                                        tristique ut lectus. Sed et
                                                                                        lorem nunc. Vestibulum ante
                                                                                        ipsum primis in faucibus orci
                                                                                        luctus et ultrices posuere
                                                                                        cubilia Curae; Aenean eleifend
                                                          ..</p>
                                                                                    </div>
                                                                                </div>{/* end of product-caption */}
                                                                            </div>{/* end of product-inner */}
                                                                        </div>{/* end of product-thumb */}
                                                                    </article> {/* end of product-layout */}
                                                                    <article className="product-layout product-list">
                                                                        <div className="product-thumb">
                                                                            <div className="product-inner media align-items-center">
                                                                                <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                                                                                    <div className="label-product label-new">New
                                                      </div>
                                                                                    <a href="single-product.html">
                                                                                        <img src="/images/products/new/product-12.jpg" title="Crown Summit Backpack" alt="Crown Summit Backpack" />
                                                                                    </a>
                                                                                    <div className="action-links">
                                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                                    </div>
                                                                                </div> {/* end of product-image */}
                                                                                <div className="product-caption media-body">
                                                                                    <div className="product-manufacturer">
                                                                                        <a href="#">Graphic Corner</a>
                                                                                    </div>
                                                                                    <h4 className="product-name">
                                                                                        <a href="single-product.html">Crown
                                                          Summit Backpack</a>
                                                                                    </h4>
                                                                                    <div className="product-ratings">
                                                                                        <div className="rating-box">
                                                                                            <ul className="rating d-flex">
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline disabled" />
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="product-price">
                                                                                        <span className="price-new">$78.90</span>
                                                                                    </p>
                                                                                    <div className="product-des">
                                                                                        <p>Nunc facilisis sagittis
                                                                                        ullamcorper. Proin lectus ipsum,
                                                                                        gravida et mattis vulputate,
                                                                                        tristique ut lectus. Sed et
                                                                                        lorem nunc. Vestibulum ante
                                                                                        ipsum primis in faucibus orci
                                                                                        luctus et ultrices posuere
                                                                                        cubilia Curae; Aenean eleifend
                                                          ..</p>
                                                                                    </div>
                                                                                </div>{/* end of product-caption */}
                                                                            </div>{/* end of product-inner */}
                                                                        </div>{/* end of product-thumb */}
                                                                    </article> {/* end of product-layout */}
                                                                    <article className="product-layout product-list">
                                                                        <div className="product-thumb">
                                                                            <div className="product-inner media align-items-center">
                                                                                <div className="product-image mb-4 mb-md-0 mr-md-4 mr-xl-5">
                                                                                    <div className="label-product label-new">New
                                                      </div>
                                                                                    <a href="single-product.html">
                                                                                        <img src="/images/products/new/product-5.jpg" title="Crown Summit Backpack" alt="Crown Summit Backpack" />
                                                                                    </a>
                                                                                    <div className="action-links">
                                                                                        <a className="action-btn btn-cart" href="#" title="Add to Cart"><i className="pe-7s-shopbag" /></a>
                                                                                        <a className="action-btn btn-wishlist" href="#" title="Add to Wishlist"><i className="pe-7s-like" /></a>
                                                                                        <a className="action-btn btn-compare" href="#" title="Add to Compare"><i className="pe-7s-refresh-2" /></a>
                                                                                        <a className="action-btn btn-quickview" data-toggle="modal" data-target="#product_quick_view" href="#" title="Quick View"><i className="pe-7s-search" /></a>
                                                                                    </div>
                                                                                </div> {/* end of product-image */}
                                                                                <div className="product-caption media-body">
                                                                                    <div className="product-manufacturer">
                                                                                        <a href="#">Graphic Corner</a>
                                                                                    </div>
                                                                                    <h4 className="product-name">
                                                                                        <a href="single-product.html">Crown
                                                          Summit Backpack</a>
                                                                                    </h4>
                                                                                    <div className="product-ratings">
                                                                                        <div className="rating-box">
                                                                                            <ul className="rating d-flex">
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline" />
                                                                                                </li>
                                                                                                <li><i className="ion ion-md-star-outline disabled" />
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p className="product-price">
                                                                                        <span className="price-new">$78.90</span>
                                                                                    </p>
                                                                                    <div className="product-des">
                                                                                        <p>Nunc facilisis sagittis
                                                                                        ullamcorper. Proin lectus ipsum,
                                                                                        gravida et mattis vulputate,
                                                                                        tristique ut lectus. Sed et
                                                                                        lorem nunc. Vestibulum ante
                                                                                        ipsum primis in faucibus orci
                                                                                        luctus et ultrices posuere
                                                                                        cubilia Curae; Aenean eleifend
                                                          ..</p>
                                                                                    </div>
                                                                                </div>{/* end of product-caption */}
                                                                            </div>{/* end of product-inner */}
                                                                        </div>{/* end of product-thumb */}
                                                                    </article> {/* end of product-layout */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> {/* end of shop-products-wrapper */}
                                                <div className="pagination-area">
                                                    <div className="row align-items-center">
                                                        <div className="col-12 order-2 col-sm-12 col-md-6 order-md-1 col-lg-6">
                                                            <div className="page-amount d-flex justify-content-center justify-content-md-start">
                                                                <p>Showing 10 to 18 of 27 (3 Pages)</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 order-1 col-sm-12 col-md-6 order-md-2 col-lg-6">
                                                            <ul className="pagination">
                                                                <li className="page-item"><a href="#" className="page-link"><i className="fa fa-angle-left" />
                                                                    <span>Previous</span></a></li>
                                                                <li className="page-item"><a href="#" className="page-link">1</a>
                                                                </li>
                                                                <li className="page-item active"><span className="page-link">2</span></li>
                                                                <li className="page-item"><a href="#" className="page-link">3</a>
                                                                </li>
                                                                <li className="page-item"><a href="#" className="page-link"><span>Next</span> <i className="fa fa-angle-right" /></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div> {/* end of pagination-area */}
                                            </div>
                                        </div> {/* end of row */}
                                    </div> {/* end of shop-wrapper */}
                                </main> {/* end of #primary */}
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-3 order-2 order-md-2 order-lg-1">
                                <aside id="secondary" className="widget-area">
                                    <div className="sidebar-widget list-categories-widget">
                                        <h2 className="widgettitle">Shop</h2>
                                        <div className="cat-accordion">
                                            <div className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h5 className="mb-0">
                                                        <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Art Gallery</button>
                                                    </h5>
                                                </div>
                                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne">
                                                    <div className="card-body">
                                                        <ul className="cat-sub-menu">
                                                            <li><a href="#">blandit vehicula</a></li>
                                                            <li><a href="#">Praesent molestie</a></li>
                                                            <li><a href="#">sagittis ipsum</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingTwo">
                                                    <h5 className="mb-0">
                                                        <button type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Rugs</button>
                                                    </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo">
                                                    <div className="card-body">
                                                        <ul className="cat-sub-menu">
                                                            <li><a href="#">Fire Pits</a></li>
                                                            <li><a href="#">Garden Accents</a></li>
                                                            <li><a href="#">Outdoor Fountains</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingThree">
                                                    <h5 className="mb-0">
                                                        <button type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Accessories</button>
                                                    </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree">
                                                    <div className="card-body">
                                                        <ul className="cat-sub-menu">
                                                            <li><a href="#">Quard Trousers</a></li>
                                                            <li><a href="#">Maroon Detail</a></li>
                                                            <li><a href="#">Check Trousers</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingFour">
                                                    <h5 className="mb-0">
                                                        <button type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Clothing</button>
                                                    </h5>
                                                </div>
                                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour">
                                                    <div className="card-body">
                                                        <ul className="cat-sub-menu">
                                                            <li><a href="#">Moleskin Blazers</a></li>
                                                            <li><a href="#">Wool Check Blazers</a></li>
                                                            <li><a href="#">Combined Jackets</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingFive">
                                                    <h5 className="mb-0">
                                                        <button type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Handbag</button>
                                                    </h5>
                                                </div>
                                                <div id="collapseFive" className="collapse" aria-labelledby="headingFive">
                                                    <div className="card-body">
                                                        <ul className="cat-sub-menu">
                                                            <li><a href="#">Moleskin Blazers</a></li>
                                                            <li><a href="#">Wool Check Blazers</a></li>
                                                            <li><a href="#">Biker Jackets</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-widget list-widget">
                                        <h2 className="widgettitle">Categories</h2>
                                        <div className="list-widget-wrapper">
                                            <div className="list-group">
                                                <a href="#">Shoes (198)</a>
                                                <a href="#">backpacks (70)</a>
                                                <a href="#">Accessories (14)</a>
                                                <a href="#">Dresses (10)</a>
                                            </div>
                                        </div>
                                    </div> {/* end of sidebar-widget */}
                                    <div className="sidebar-widget list-widget">
                                        <h2 className="widgettitle">Brands</h2>
                                        <div className="list-widget-wrapper">
                                            <div className="list-group">
                                                <a href="#">Graphic Corner (14)</a>
                                                <a href="#">Studio Design (14)</a>
                                                <a href="#">Tommy Hilfiger (14)</a>
                                                <a href="#">Versace (14)</a>
                                            </div>
                                        </div>
                                    </div> {/* end of sidebar-widget */}
                                    <div className="sidebar-widget list-widget">
                                        <h2 className="widgettitle">Price</h2>
                                        <div className="list-widget-wrapper">
                                            <div className="list-group">
                                                <a href="#">$43.00 - $45.00 (10)</a>
                                                <a href="#">$54.00 - $58.00 (4)</a>
                                                <a href="#">$62.00 - $70.00 (5)</a>
                                                <a href="#">$78.00 - $83.00 (10)</a>
                                                <a href="#">$85.00 - $89.00 (13)</a>
                                            </div>
                                        </div>
                                    </div> {/* end of sidebar-widget */}
                                    <div className="sidebar-widget color-widget">
                                        <h2 className="widgettitle">Color</h2>
                                        <div className="color-widget-wrapper">
                                            <ul className="color-options">
                                                <li>
                                                    <span className="white" />
                                                    <a href="#">white (4)</a>
                                                </li>
                                                <li>
                                                    <span className="orange" />
                                                    <a href="#">Orange (2)</a>
                                                </li>
                                                <li>
                                                    <span className="blue" />
                                                    <a href="#">Blue (6)</a>
                                                </li>
                                                <li>
                                                    <span className="yellow" />
                                                    <a href="#">Yellow (8)</a>
                                                </li>
                                                <li>
                                                    <span className="black" />
                                                    <a href="#">black (6)</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> {/* end of sidebar-widget */}
                                    <div className="sidebar-widget tag-cloud">
                                        <h2 className="widgettitle">Popular Tags</h2>
                                        <div className="tags-widget">
                                            <ul>
                                                <li><a href="#">Ecommerce</a></li>
                                                <li><a href="#">Shoes</a></li>
                                                <li><a href="#">bags</a></li>
                                                <li><a href="#">Accessories</a></li>
                                                <li><a href="#">Sunglasses</a></li>
                                                <li><a href="#">Trending</a></li>
                                                <li><a href="#">Clothing</a></li>
                                                <li><a href="#">Smart</a></li>
                                            </ul>
                                        </div>
                                    </div> {/* end of sidebar-widget */}
                                </aside> {/* end of #secondary */}
                            </div>
                        </div> {/* end of row */}
                    </div> {/* end of container */}
                </div>
                {/* End of Products Wrapper */}
            </div>
            {/* End of Main Content Wrapper */}
        </div>
    )
}

Products.propTypes = {

}

export default Products
