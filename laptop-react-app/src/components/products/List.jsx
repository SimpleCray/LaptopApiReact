import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/product.action'



function List({ match }) {
    const dispatch = useDispatch()
    const { path } = match;
    //useSelector is the replacement for mapStateToProps to use state in redux store (can use in function only)
    const products = useSelector(state => state.product.list);//get from root reducer
    //const loading = useSelector(state => state.productAction.loading)


    useEffect(() => {
        dispatch(actions.fetchAll())
    }, []);

    function deleteProduct(id) {
        
    }

    return (
        <div>
            <h1>Products</h1>
            <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2">Add Product</Link>
            <div className="container">
                <div className="row">
                    {products && products.map(product =>
                    <div className="col-md-3" key={product.id} style={{justifyContent: 'center'}}>
                        <img src={product.imgUrl} width='100%'style={{margin:'15px 0'}}/>
                        <h4>{product.name}</h4>
                        <div>Supplier: {product.supplier}</div>
                        <div>Price: {product.price}</div>
                        <hr></hr>
                        <Link to={`${path}/edit/${product.id}`} className="btn btn-sm btn-primary mr-1" style={{width: '100px'}}>Edit</Link>
                        <button onClick={() => deleteProduct(product.id)} style={{width: '100px'}} className="btn btn-sm btn-danger btn-delete-product" disabled={product.isDeleting}>
                            {product.isDeleting 
                                ? <span className="spinner-border spinner-border-sm"></span>
                                : <span>Delete</span>
                            }
                        </button>
                        <p></p>
                    </div>
                    )}
                    {!products &&
                        <div className="spinner-border spinner-border-lg align-center"></div>
                    }
                    {products && !products.length &&
                        <div className="p-2">No Products To Display</div>
                    }
                </div>
            </div>
        </div>
    );
}

export { List };