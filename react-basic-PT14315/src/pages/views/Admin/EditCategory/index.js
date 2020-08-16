import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, useParams } from 'react-router-dom'
import firebase from '../../../../firebase'
import PropTypes from 'prop-types'

const EditCategory = ({ categories, onEdit }) => {
    const { register, handleSubmit, errors } = useForm();
    let { id } = useParams();
    let redirect = useHistory();

    const category = categories.find(category => category.id === id);

    const onHandleEdit = (data) => {
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`categories/${file.name}`);

        storageRef.put(file).then(() => {
            storageRef.getDownloadURL()
                .then((url) => {
                    const newData = {
                        id,
                        ...data,
                        image: url
                    }
                    onEdit(newData);
                    redirect.push("/admin/categories");
                });
        })

    }
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Edit-Categories</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more
            information about DataTables, please visit theofficial
        DataTables documentation.</p>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3 clearfix">
                    <h6 className="mt-2 font-weight-bold text-primary float-left">Categories</h6>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onHandleEdit)}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text" className="form-control" placeholder="Enter name"
                                        name="name"
                                        defaultValue={category.name}
                                        ref={register({ required: true })}
                                    />
                                    {errors.name && errors.name.type === "required" && <div className="alert alert-danger mt-3">Bạn chưa nhập tên</div>}
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                        className="form-control" rows="2"
                                        name="desc"
                                        defaultValue={category.desc}
                                        ref={register}
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Image</label>
                                    <img src={category.image} width="50" height="50" />
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
        </div>
    )
}

EditCategory.propTypes = {

}

export default EditCategory
