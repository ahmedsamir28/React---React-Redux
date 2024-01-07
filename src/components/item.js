import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const Item = (props) => {
    const {items,showButton} = props

    const dispatch = useDispatch();
    const addProduct = (product) => {
    dispatch(addCart(product));
    };
    return (
        <>
            <div >
                <Link to={`/item/${items.id}`}> <img src={items.image} className="card-img-top" alt={items.title} height="250px" /></Link>  
                <div className="card-body">
                    <h5 className="card-title mb-0">{items.title.substring(0, 12)}</h5>
                    <p className="card-text lead fw-bold"> $ {items.price} </p>

                    <button  className='btn btn-outline-dark px-4 py-2 mb-3' onClick={() => addProduct(items)}> Add To Cart </button>                    
                    <Link to={`/item/${items.id}`} className='btn btn-outline-dark px-4 py-2'> Details </Link>
                </div>
            </div>
        </>
    );
}

export default Item;
