import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/product.action'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";


function AddEdit(match) {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.list);//get from root reducer
    const { register, handleSubmit, setValue, errors } = useForm(); // initialize the react hook form
    const { id } = match.match.params;
    const isAddMode = !id;

    const products2 = [
        {
            "id": 1,
            "name": "Alienware Area 51",
            "supplier": "Dell",
            "price": 4000,
            "imgUrl": "http://loremflickr.com/250/300"
        },
        {
            "id": 2,
            "name": "Alienware Area 51",
            "supplier": "Dell",
            "price": 4000,
            "imgUrl": "http://loremflickr.com/250/300"
        },
        {
            "id": 3,
            "name": "Alienware Area 51",
            "supplier": "Dell",
            "price": 4000,
            "imgUrl": "http://loremflickr.com/250/300"
        },
        {
            "id": 4,
            "name": "Alienware Area 51",
            "supplier": "Dell",
            "price": 4000,
            "imgUrl": "http://loremflickr.com/250/300"
        },
      ]

    function onSubmit(data) {
        return 
    }

    function createProduct(data) {
    }

    function updateProduct(id, data) {
    }

    useEffect(() => {
        let product = {}
        if (!isAddMode) {
            for (let item of products2){
                if (item.id == id) product = item
            }
            const fields = ['name', 'supplier', 'price', 'image'];
            console.log(product)
            fields.forEach(field => setValue(field, product[field]));
        }
    }, []);

    return (
        <form onSubmit={(onSubmit)}>
            <h1>{isAddMode ? 'Add Product' : 'Edit Product'}</h1>
            <div className="form-row">
                <div className="form-group col-4">
                    <label>Name</label>
                    <input name="name" type="text" ref={register({ required: true })} className="form-control"/>
                </div>
                <div className="form-group col-4">
                    <label>Supplier</label>
                    <input name="supplier" ref={register({ required: true })} className="form-control"/>
                </div>
                <div className="form-group col-4">
                    <label>Price</label>
                    <input name="price" type="number" ref={register({ required: true })} className="form-control"/>
                </div>
                <div className="form-group col-12">
                    <label>Image</label>
                    <input name="image" type="file" ref={register({ required: true })} className="form-control" style={{height: '70px'}}/>
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