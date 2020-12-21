import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function List({ match }) {
    const { path } = match;
    //const [products, setProducts] = useState(null);

    const products = [
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
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {products && !products.length &&
                        <tr>
                            <td colSpan="4" className="text-center">
                                <div className="p-2">No Products To Display</div>
                            </td>
                        </tr>
                    }
                </div>
            </div>
        </div>
    );
}

export { List };