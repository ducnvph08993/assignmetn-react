import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import firebase from '../../../../firebase'
import PropTypes from 'prop-types'

const AddCategory = ({ onAdd }) => {
    const { register, handleSubmit, errors } = useForm();
    let redirect = useHistory();
    const onHandleAdd = (data) => {
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`categories/${file.name}`);

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
                    redirect.push("/admin/categories");
                });
        })

    }
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Add-Categories</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more
            information about DataTables, please visit theofficial
        DataTables documentation.</p>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3 clearfix">
                    <h6 className="mt-2 font-weight-bold text-primary float-left">Categories</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onHandleAdd)}>
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

                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                        className="form-control" rows="2"
                                        name="desc"
                                        ref={register}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="col-6">
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
                                        type="checkbox" value="1" className="form-check-input"
                                        name="show_menu"
                                        ref={register}
                                    />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Hiện thị danh mục ?</label>
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

AddCategory.propTypes = {

}

export default AddCategory
