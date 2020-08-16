import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from "react-router-dom"
import { Editor } from '@tinymce/tinymce-react'
import firebase from '../../../../firebase'
import PropTypes from 'prop-types'

const AddProduct = ({ onAdd, products, categories }) => {
    const { register, handleSubmit, errors } = useForm();
    let redirect = useHistory();
    const onHandleSubmit = (data) => {
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`products/${file.name}`);

        storageRef.put(file).then(() => {
            storageRef.getDownloadURL()
                .then((url) => {
                    console.log(url);
                    const newData = {
                        ...data,
                        image: url
                    }
                    console.log(newData);
                    onAdd(newData);
                    redirect.push("/admin/products");
                });
        });
    }
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Add-Products</h1>
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
                                        ref={register({ required: true, pattern: /^\d+$/ })}
                                    />
                                    {errors.price && errors.price.type === "required" && <div className="alert alert-danger mt-3">Bạn chưa nhập giá</div>}
                                    {errors.price && errors.price.type === "pattern" && <div className="alert alert-danger mt-3">Giá phải là số</div>}
                                </div>
                                <div className="form-group">
                                    <label>Sale-Price</label>
                                    <input
                                        type="number" className="form-control" placeholder="Enter sale-price"
                                        name="saleprice"
                                        ref={register}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Short-Desc</label>
                                    <textarea
                                        className="form-control" rows="2"
                                        name="shortdesc"
                                        ref={register}
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
                                    />
                                    {errors.desc && <div className="alert alert-danger mt-3">Bạn chưa nhập chi tiết sản phẩm</div>}
                                </div>
                                <div className="form-group">
                                    <label>Image</label>
                                    <input
                                        type="file" className="form-control-file"
                                        name="image"
                                        ref={register({ required: true })}
                                    />
                                    {errors.image && <div className="alert alert-danger mt-3">Bạn chưa chọn ảnh</div>}
                                </div>
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox" defaultValue={1} className="form-check-input"
                                        name="showmenu"
                                        ref={register}
                                    />
                                    <label className="form-check-label" for="exampleCheck1">Tình trạng hàng</label>
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

AddProduct.propTypes = {

}

export default AddProduct
