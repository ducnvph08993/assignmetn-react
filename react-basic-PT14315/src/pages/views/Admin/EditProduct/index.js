import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, useParams } from "react-router-dom"
import { Editor } from '@tinymce/tinymce-react'
import firebase from '../../../../firebase'
import PropTypes from 'prop-types'
import Products from '../../Main/Products'

const EditProduct = ({ products, onEdit, categories }) => {
    const { register, handleSubmit, errors } = useForm();
    let { id } = useParams();
    let redirect = useHistory();

    const product = products.find(product => product.id === id);

    const onHandleSubmit = (data) => {
        let file = data.image[0];
        // console.log(file);
        let storageRef = firebase.storage().ref(`products/${file.name}`);
        storageRef.put(file).then(() => {
            storageRef.getDownloadURL()
                .then((url) => {
                    const newData = {
                        id,
                        ...data,
                        image: url
                    }
                    console.log(newData);
                    onEdit(newData);
                    redirect.push('/admin/products');
                })
        })
    }

    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Edit-Products</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more
          information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official
            DataTables documentation</a>.</p>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3 clearfix">
                    <h6 className="mt-2 font-weight-bold text-primary float-left">Products</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text" className="form-control" placeholder="Enter name"
                                        name="name"
                                        defaultValue={product.name}
                                        ref={register({ required: true })}
                                    />
                                    {errors.name && errors.name.type === "required" && <div className="alert alert-danger mt-3">Bạn chưa nhập tên</div>}
                                </div>
                                <div class="form-group">
                                    <label>Danh mục</label>
                                    <select className="form-control" name="cate_id" ref={register}>
                                        {categories.map(({ id, name }, index) => (
                                            <option value={id} key={index} >{name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Price</label>
                                    <input
                                        type="text" className="form-control" placeholder="Enter price"
                                        name="price"
                                        defaultValue={product.price}
                                        ref={register}
                                    />
                                    {errors.price && errors.price.type === "required" && <div className="alert alert-danger mt-3">Bạn chưa nhập giá</div>}
                                    {errors.price && errors.price.type === "pattern" && <div className="alert alert-danger mt-3">Giá phải là số</div>}
                                </div>
                                <div className="form-group">
                                    <label>Sale-Price</label>
                                    <input
                                        type="number" className="form-control" placeholder="Enter sale-price"
                                        name="saleprice"
                                        defaultValue={product.saleprice}
                                        ref={register}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Short-Desc</label>
                                    <textarea
                                        className="form-control" rows="2"
                                        name="shortdesc"
                                        ref={register}
                                        defaultValue={product.shortdesc}
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                        className="form-control" rows="5"
                                        name="desc"
                                        ref={register({ required: true })}
                                        defaultValue={product.desc}
                                    />
                                    {errors.desc && <div className="alert alert-danger mt-3">Bạn chưa nhập chi tiết sản phẩm</div>}
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                                    <img src={product.image} width="50px" height="50px" />
                                    <input
                                        type="file" className="form-control-file"
                                        name="image"
                                        ref={register({ required: true })}
                                    />
                                    {errors.image && errors.image.type === "required" && <div className="alert alert-danger mt-3">Bạn chưa chọn ảnh</div>}
                                </div>
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox" defaultValue={1} className="form-check-input"
                                        name="showmenu"
                                        ref={register}
                                    />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Tình trạng hàng</label>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

EditProduct.propTypes = {

}

export default EditProduct
