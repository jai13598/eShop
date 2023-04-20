import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, tittle, price, rating, image }) {
    const [state, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div>
            <div className="product">
                <div className="product__info">
                    <p>{tittle}</p>

                    <p className="product__price">
                        <small >₹</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p>
                            ))
                        }
                    </div>
                </div>
                <img src={image} alt="" />
                <button onClick={addToBasket}>Add to basket</button>
            </div>
        </div>
    )
}

export default Product