import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/product.action'
import { Link } from 'react-router-dom';

const defaultImageSrc = "https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg"

const initialFieldValues = {
    name: '',
    price: '',
    supplier: '',
    imageSrc: defaultImageSrc,
    imageFile: null
}

const AddEdit = (match) => {
    let product = useSelector(state => state.product.product)
    const [values, setValues] = useState(initialFieldValues)
    const dispatch = useDispatch()
    const { id } = match.match.params;
    const isAddMode = !id;
    const [alert, setAlert] = useState(null)

    function onSubmit(e) {
        e.preventDefault()
        let formData = new FormData()
            formData.append('name', values.name)
            formData.append('price', values.price)
            formData.append('supplier', values.supplier)
            formData.append('imgName', values.imgName)
            formData.append('imageFile', values.imageFile)
            if (isAddMode) {
                createProduct(formData)
            } else {
                formData.append('id', product.id)
                updateProduct(product.id, formData)
            }
        
    }

    function createProduct(data) {
        dispatch(actions.create(data))
        //setAlert("Insert Product success")
    }

    function updateProduct(id, data) {
        dispatch(actions.update(id, data))
        //setAlert("Update Product success")
    }

    useEffect(() => {
        if (!isAddMode) {
            dispatch(actions.fetchById(id))
            product && setValues(product)
            console.log(product)
        }
    }, [product == null, isAddMode, product && (id != product.id)])

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc
            })
        }
    }

    return (
        <form onSubmit={(onSubmit)}>
            <h1>{isAddMode ? 'Add Product' : 'Edit Product'}</h1>
            { alert && 
                <div className={'alert alert-success'}>
                    {alert}
                </div>
            }
            <div className="form-row">
                <div className="form-group col-4">
                    <label>Name</label>
                    <input name="name" value={values && values.name} type="text" className="form-control" onChange={handleInputChange}/>
                </div>
                <div className="form-group col-4">
                    <label>Supplier</label>
                    <input name="supplier" value={values && values.supplier} className="form-control" onChange={handleInputChange}/>
                </div>
                <div className="form-group col-4">
                    <label>Price</label>
                    <input name="price" value={values && values.price} type="number" className="form-control" onChange={handleInputChange}/>
                </div>
                {values &&
                    <div className="form-group col-4">
                        <img src={values.imageSrc} className="card-img-top" alt=""/>
                    </div>
                }
                <div className="form-group col-8">
                    <label>Choose image</label><br></br>
                    <input type="file" accept="image/*" className="form-control-file" onChange={showPreview} id="image-uploader" />
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

export default ( AddEdit );