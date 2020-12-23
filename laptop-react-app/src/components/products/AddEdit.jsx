import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/product.action'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';


function AddEdit(match) {
    let product = useSelector(state => state.product.product)
    const dispatch = useDispatch()
    const { register, handleSubmit, setValue, errors } = useForm(); // initialize the react hook form
    const { id } = match.match.params;
    const isAddMode = !id;
    const [alert, setAlert] = useState(null)

    function onSubmit(data) {
        isAddMode ? createProduct(data) : updateProduct(product.id, data)
    }

    function createProduct(data) {
        dispatch(actions.create(data))
        setAlert("Insert Product success")
    }

    function updateProduct(id, data) {
        dispatch(actions.update(id, data))
        setAlert("Update Product success")
    }

    useEffect(() => {
        if (!isAddMode) {
            dispatch(actions.fetchById(id))
        }
    }, []);
    if (product) {
        const fields = ['id', 'name', 'supplier', 'price', 'imgUrl'];
        
        fields.forEach(field => setValue(field, product[field]));
    }

    //Alert style
    const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
        marginTop: theme.spacing(2),
        },
    },
    }));
    const classes = useStyles();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>{isAddMode ? 'Add Product' : 'Edit Product'}</h1>
            { alert && 
                <div className={'alert alert-success'}>
                    {alert}
                </div>
            }
            <div className="form-row">
                {/* <input name="id" type="text" ref={register} hidden/> */}
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
                    <label>Image Url</label><br></br>
                    <input name="imgUrl" type="text" ref={register} className="form-control" style={{height: '70px'}}/>
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
                <Link to={isAddMode ? '.' : '..'} className="btn btn-link">Back to list</Link>
            </div>
        </form>
    );
}

export { AddEdit };