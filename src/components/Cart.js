import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, clearCart, delCart, remCart } from "../redux/action";

const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const total = state.reduce((acc , items ) =>{
        acc+= items.price * items.qty
        return acc
    },0)

    const handleAdd = (item) => {
        dispatch(addCart(item));
    };

    const handleDel = (item) => {
        dispatch(delCart(item));
    };

    const handleRemove = (item) => {
        dispatch(remCart(item));
    };

    const handleClear = () => {
        dispatch(clearCart());
    };

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        );
    };

    const cartItems = (product) => {
        return (
            <>
                {/* <div className="px-4 my-5 bg-light rounded-3 py-5">
                    <div className="container py-4">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    height="200px"
                                    width="180px"
                                />
                            </div>
                            <div className="col-md-4">
                                <h3>{product.title}</h3>
                                <p className="lead fw-bold">
                                    {product.qty} X ${product.price} = $
                                    {product.qty * product.price}
                                </p>
                                <button
                                    className="btn btn-outline-dark me-4"
                                    onClick={() => handleDel(product)}
                                >
                                    <i className="fa fa-minus"></i>
                                </button>
                                <button
                                    className="btn btn-outline-dark"
                                    onClick={() => handleAdd(product)}
                                >
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <tbody>
                <tr  style={{textAlign : "center"}}>
                    <td> <img src={product.image} alt={product.title} height="100px" width="100px"/></td>
                    <td  >{product.title}</td>
                    <td>$ {product.price}</td>
                    <td>
                        <div className="quantity">
                            <button className="btn btn-outline-dark me-3"   onClick={() => handleAdd(product)}>+</button>
                            <span>{product.qty}</span>
                            <button className="btn btn-outline-dark ms-3"  onClick={() => handleDel(product)}>-</button>
                        </div>
                    </td>
                    <td>$ {product.qty * product.price}</td>
                    <td> 
                        <button className="btn btn-outline-danger" onClick={()=>handleRemove(product)}>Delete</button>
                    </td>
                </tr>
            </tbody>
            </>
        );
    };

    const buttons = () => {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <NavLink
                            to="/"
                            className="btn btn-outline-dark mb-5 w-25 mx-auto"
                        >
                            Back To Home
                        </NavLink>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && <>
                <div className="cart-box container mt-3">
                    <h1  style={{textAlign : "center" , textTransform:"uppercase"}}>shopping Cart</h1>
                    <div className="headCart">
                        <p className="lead" style={{textAlign : "center"}}>You have <label style={{color: "green" , fontSize:"25px" , fontWeight:"500"}}>"{state.length}"</label> item in your cart</p>
                        <div  className="btn btn-outline-danger my-2" onClick={()=>handleClear()}> Clear Shopping Cart </div>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr  style={{textAlign : "center"}}>
                                <th>Product</th>
                                <th >Name</th>
                                <th>Price</th>
                                <th  width="25%" >Qyentity</th>
                                <th>Total</th>
                                <th>Delete Item</th>
                            </tr>
                        </thead>
                        {state.map(cartItems)}
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Total : {total.toFixed(2)} LE</th>
                                <th> <button className="btn btn-outline-success">Order Now</button></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                </>}
            {state.length !== 0 && buttons()}
        </div>
    );
}

export default Cart;
