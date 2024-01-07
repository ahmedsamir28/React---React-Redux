import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const Item1 = (props) => {
    const { items, showButton } = props

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    };

    return (
        <div>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={items.image} alt={items.title} height="400px" width="400px" />
                    </div>
                    <div className="col-md-8" key={items.id}>
                        <div className="card-body" >
                            <h4 className='text-uppercase text-black-50'> {items.category} </h4>
                            <h1 className='display-5'> {items.title}</h1>
                            <p className='lead fw-bolder'>
                                rating {items.rating && items.rating.rate}
                                <i className='fa fa-star'></i>
                            </p>
                            <h3 className='display-6 fw-bold my-4'>$  {items.price}</h3>
                            <p className='lead'> {items.description}</p>
                            <button className='btn btn-outline-dark px-4 py-2' onClick={() => addProduct(items)}>Add to Cart</button>
                            <Link to="/cart" className='btn btn-outline-dark ms-2 px-3 py-2'>Go to Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item1;
