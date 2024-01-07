import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Item1 from './Item1';


const ItemsDetails = () => {
    const id = useParams();
    const apiData = 'https://fakestoreapi.com/products';
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProduct = async () => {
        setLoading(true)
        const response = await fetch(`${apiData}/${id.productId}`)
        setProduct(await response.json())
        setLoading(false)
    }

    useEffect(() => {
        getProduct()
    }, []);

    const Loading = () => {
        return (
            <>
                ...Loading
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div key={product.id}>
                    <Item1 items={product}/>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className='container py-5'>
                <div className='row py-4'>
                    {loading? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    );
}

export default ItemsDetails;
