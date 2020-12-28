import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FormGroup, FormControlLabel, Switch} from '@material-ui/core';
import * as actions from '../../actions/product.action'
import productFilter from '../../shared/filter.shared';
import inputSuggest from '../../shared/suggest.shared';

import testProduct from './testProduct.json'

//Autocomplete
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const initialFieldValues = {
    name: '',
    price: '',
    supplier: '',
}

function List({ match }) {
    const dispatch = useDispatch()
    const { path } = match;
    //const loading = useSelector(state => state.productAction.loading)
    let [products, setProducts] = useState(testProduct)
    const [values, setValues] = useState(initialFieldValues)

    //useSelector is the replacement for mapStateToProps to use state in redux store (can use in function only)
    //let allProducts = useSelector(state => state.product.list);//get from root reducer
    let allProducts = testProduct

    const [isAdvanceFilter, setIsAdvanceFilter] = useState(false)
    const { register, handleSubmit, setValue, errors } = useForm(); // initialize the react hook form
    
    useEffect(() => {
        //dispatch(actions.fetchAll())
        //setProducts(allProducts)
    }, [allProducts == products == [], ]); //second parameter use to inform useEffect run when this parameter changes
    
    function deleteProduct(id) {
        if (window.confirm("Are you sure ?")){
            dispatch(actions.Delete(id))
            setProducts(allProducts)
        }
    }

    function onSubmitFilter (data) {
        console.log(data);
        let filteredList = productFilter(data, allProducts)
        setProducts(filteredList)
    }

    function retriveSuggest (fieldName) {
        if (allProducts) {
            let suggestList = inputSuggest(fieldName, allProducts)
            console.log(suggestList)
            return suggestList
        }
        return []
    }

    const handleInputChange = (e, value) => {
        const name = e.target.id.split('-')[0];
        setValues({
            ...values,
            [name]: value
        })
        console.log(values)
    }

    return (
        <div>
            <h1>Products</h1>
            <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2">Add Product</Link>
            <FormGroup>
                <FormControlLabel control={<Switch onChange={e => setIsAdvanceFilter(!isAdvanceFilter)} />} label="Advance Filter"/>
            </FormGroup>
            <form onSubmit={handleSubmit(onSubmitFilter)} style={{boder: '1px solid grey'}}>
                {isAdvanceFilter ?
                <div className="form-row">
                    <div className="form-group col-6">
                    <Autocomplete
                        id="name"
                        options={(retriveSuggest('name'))}
                        getOptionLabel={(option) => option.name}
                        //style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Search by name" variant="outlined" />}
                        onChange={(handleInputChange)}
                    />
                        {/* {errors.name && <div className="alert alert-danger" style={{padding: '.25rem'}}>Name is required</div>} */}
                    </div>
                    <div className="form-group col-6">
                        <Autocomplete
                            id="supplier"
                            options={(retriveSuggest('supplier'))}
                            getOptionLabel={(option) => option.supplier}
                            //style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Search by suppier" variant="outlined" />}
                            onChange={(handleInputChange)}
                        />
                    </div>
                    <div className="form-group col-3">
                        <label>Min price</label>
                        <input id="min" onChange={(handleInputChange)} placeholder="Min price..." type="number" className="form-control"/>
                    </div>
                    <div className="form-group col-3">
                        <label>Max price</label>
                        <input id="max" onChange={(handleInputChange)} placeholder="Max price..." type="number" className="form-control"/>
                    </div>
                </div>:
                <div className="form-row">
                    <div className="form-group col-6">
                        <Autocomplete
                            id="name"
                            options={(retriveSuggest('name'))}
                            getOptionLabel={(option) => option.name}
                            //style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Search by name" variant="outlined" />}
                            onChange={(handleInputChange)}
                        />
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
                        
                        <img src={product.imageSrc} width='100%' height='35%' style={{margin:'15px 0', float: 'left',}} alt=''/>
                        <h4>{product.name}</h4>
                        <div>Supplier: {product.supplier}</div>
                        <div>Price: {product.price}</div>
                        <hr></hr>
                        <Link to={`${path}/edit/${product.id}`} className="btn btn-sm btn-primary mr-1" style={{width: '45%'}}>Edit</Link>
                        <button onClick={() => deleteProduct(product.id)} style={{width: '45%', float: 'right'}} className="btn btn-sm btn-danger btn-delete-product">
                           <span>Delete</span>
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