import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'

//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import AddProduct from '../pages/views/Admin/AddProduct'
import EditProduct from '../pages/views/Admin/EditProduct'
import Categories from '../pages/views/Admin/Categories'
import DetailProductManager from '../pages/views/Admin/DetailProduct'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Contact from '../pages/views/Main/Contact'
import Products from '../pages/views/Main/Products'
import DetailProduct from '../pages/views/Main/DetailProduct'
import AddCategory from '../pages/views/Admin/AddCategory'
import EditCategory from '../pages/views/Admin/EditCategory'


const Routers = ({ products, onRemove, onAdd, onEdit, categories, onAddCate, onRemoveCate, onEditCate }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleAdd = (product) => {
        onAdd(product)
    }
    const onHandleAddCate = (category) => {
        onAddCate(category)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard products={products} categories={categories} />
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager products={products} onRemove={onHandleRemove} categories={categories} />
                            </Route>
                            <Route path='/admin/detail-product/:id'>
                                <DetailProductManager products={products} />
                            </Route>
                            <Route path='/admin/add-product'>
                                <AddProduct products={products} onAdd={onHandleAdd} categories={categories} />
                            </Route>
                            <Route path='/admin/edit-product/:id'>
                                <EditProduct products={products} onEdit={onEdit} categories={categories} />
                            </Route>
                            <Route path='/admin/categories'>
                                <Categories categories={categories} onRemove={onRemoveCate} />
                            </Route>
                            <Route path='/admin/add-category'>
                                <AddCategory categories={categories} onAdd={onHandleAddCate} />
                            </Route>
                            <Route path='/admin/edit-category/:id'>
                                <EditCategory categories={categories} onEdit={onEditCate} />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/collection">
                                <Products products={products} />
                            </Route>
                            <Route path="/product/:id">
                                <DetailProduct products={products} />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
