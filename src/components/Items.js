import React, { useEffect, useState } from 'react';
import Item from './item';
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const Proudacts = () => {
    const apiData = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState([]);

    const componentMounted = true
    
    const dispatch = useDispatch();
    const addProduct = (product) => {
    dispatch(addCart(product));
    };


    const getProducts = async () => {
        setLoading(true)
        const response = await fetch(apiData)
        if (componentMounted) {
            setProducts(await response.clone().json())
            setFilter(await response.json())
            setLoading(false)
        }
        return () => {
            componentMounted = false
        }
    }

    const getCategories = async () => {
        setLoading(true)
        const response = await fetch(`${apiData}/categories`)
        setCategories(await response.json())
            setLoading(false)
    }

    const getProductInCategory = (catName) => {
        const updateItems = products.filter((el) => el.category === catName);
        setFilter(updateItems)
    }

    useEffect(() => {
        getProducts()
        getCategories()
    }, []);

    const Loading = () => {
        return (
            <>
                Loading ....
            </>
        )
    }

    const ShowItem = () => {
        return (
            <>
                <div className='row'>
                    {
                        filter.map((product) => {
                            return (
                                <div className="col-md-3 mb-4">
                                    <div className="card h-100 text-center p-4" key={product.id} >
                                        <Item items={product} showButton={true} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </>
        )
    }

    return (

        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">
                            Our products
                        </h1>
                        <hr />
                    </div>
                    
                    <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button className="btn btn-outline-dark me-2" onClick={() => { setFilter(products) }}> all </button>
                    {categories.map(category => {
                        return (
                            <button onClick={() =>{getProductInCategory (category)}} key={category} className="btn btn-outline-dark me-2"> {category} </button>
                        )
                    })}
                </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowItem />}
                </div>
            </div>
        </div>

    );
}

export default Proudacts;
