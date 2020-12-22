import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FormGroup, FormControlLabel, Switch} from '@material-ui/core';
import * as actions from '../../actions/product.action'



function List({ match }) {
    const dispatch = useDispatch()
    const { path } = match;
    //useSelector is the replacement for mapStateToProps to use state in redux store (can use in function only)
    //const products = useSelector(state => state.product.list);//get from root reducer
    //const loading = useSelector(state => state.productAction.loading)
    let [products, setProducts] = useState(null)
    const [isAdvanceFilter, setIsAdvanceFilter] = useState(false)
    const { register, handleSubmit, setValue, errors } = useForm(); // initialize the react hook form
    products = [
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
    useEffect(() => {
        //dispatch(actions.fetchAll())
    }, []);

    function deleteProduct(id) {
        
    }

    function onSubmitFilter (data) {
        console.log(data);
    }

    return (
        <div>
            <h1>Products</h1>
            <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2">Add Product</Link>
            <FormGroup>
                <FormControlLabel control={<Switch onChange={e => setIsAdvanceFilter(!isAdvanceFilter)} />} label={isAdvanceFilter ? "Advance Filter" : "Normal Filter"}/>
            </FormGroup>
            <form onSubmit={handleSubmit(onSubmitFilter)} style={{boder: '1px solid grey'}}>
                {isAdvanceFilter ?
                <div className="form-row">
                    <div className="form-group col-3">
                        <label>Name</label>
                        <input name="name" type="text" ref={register({ required: true })} className="form-control"/>
                        {errors.name && <div className="alert alert-danger" style={{padding: '.25rem'}}>Name is required</div>}
                    </div>
                    <div className="form-group col-3">
                        <label>Supplier</label>
                        <input name="Supplier" ref={register} className="form-control"/>
                    </div>
                    <div className="form-group col-3">
                        <label>Min price</label>
                        <input name="min" ref={register} type="number" className="form-control"/>
                    </div>
                    <div className="form-group col-3">
                        <label>Max price</label>
                        <input name="max" ref={register} type="number" className="form-control"/>
                    </div>
                </div>:
                <div className="form-row">
                    <div className="form-group col-3">
                        <label>Name</label>
                        <input name="name" type="text" ref={register({ required: true })} className="form-control"/>
                        {errors.name && <div className="alert alert-danger" style={{padding: '.25rem'}}>Name is required</div>}
                    </div>
                </div>}
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Filter Products
                    </button>
                </div>
            </form>
            
            
            <div className="container">
                <div className="row">
                    {products && products.map(product =>
                    <div className="col-md-3" key={product.id} style={{justifyContent: 'center'}}>
                        {/* <img src={product.imgUrl} width='100%'style={{margin:'15px 0'}}/> */}
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