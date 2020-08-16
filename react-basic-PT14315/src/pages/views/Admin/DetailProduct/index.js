import React from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

const DetailProductManager = ({ products }) => {
    console.log(products);
    let { id } = useParams();
    const product = products.find(product => product.id === id);
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
                    <h6 className="mt-2 font-weight-bold text-primary float-left">Detail-Products</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Short-Desc</th>
                                    <th scope="col">Desc</th>
                                    <th scope="col">Sale-Price</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.shortdesc}</td>
                                    <td>{product.desc}</td>
                                    <td>{product.saleprice} </td>
                                    <td>{product.show_menu == 1 ? <span class="badge badge-success">Còn hàng</span> : <span class="badge badge-dark">Hết hàng</span>}{}</td>
                                </tr>


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

DetailProductManager.propTypes = {

}

export default DetailProductManager
