import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/product.action'
import { Link } from 'react-router-dom';


function AddEdit(match) {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.list);//get from root reducer
    const [product, setProduct] = useState({});
    const { id } = match.match.params;
    const isAddMode = !id;

    function onSubmit(data) {
        return 
    }

    function createProduct(data) {
    }

    function updateProduct(id, data) {
    }

    useEffect(() => {
        if (isAddMode) {

        }
    }, []);

    return (
        <form onSubmit={(onSubmit)}>
            <h1>{isAddMode ? 'Add Product' : 'Edit Product'}</h1>
            <div className="form-row">
                <div className="form-group col-4">
                    <label>Name</label>
                    <input name="name" type="text" className="form-control"/>
                </div>
                <div className="form-group col-4">
                    <label>Supplier</label>
                    <select name="Supplier" className="form-control">
                        <option value=""></option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Ms">Ms</option>
                    </select>
                </div>
                <div className="form-group col-4">
                    <label>Price</label>
                    <input name="price" type="number" className="form-control"/>
                </div>
                <div className="form-group col-12">
                    <label>Image</label>
                    <input name="image" type="file" className="form-control" style={{height: '70px'}}/>
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
                <Link to={isAddMode ? '.' : '..'} className="btn btn-link">Cancel</Link>
            </div>
        </form>
    );
}

export { AddEdit };