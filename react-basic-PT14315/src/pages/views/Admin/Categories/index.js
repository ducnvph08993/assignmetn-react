import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Categories = ({ categories, onRemove }) => {
    const removeHandle = (id) => {
        onRemove(id)
    }
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Products</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more
          information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official
            DataTables documentation</a>.</p>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3 clearfix">
                    <h6 className="mt-2 font-weight-bold text-primary float-left">Categories</h6>
                    <Link to="/admin/add-category" className="btn btn-success float-right">Add</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map(({ id, name, desc, image }, index) => (
                                    <tr key={index}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" width="50" height="50" /></td>
                                        <td>{desc}</td>
                                        <td>
                                            <Link to={`/admin/edit-category/${id}`}>
                                                <button className="btn btn-success">Update</button>
                                            </Link>
                                            <button className="btn btn-danger ml-2" onClick={() => { if (window.confirm('Delete this item?')) { removeHandle(id) }; }}>Delete</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div >
    )
}

Categories.propTypes = {

}

export default Categories
