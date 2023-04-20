import React from 'react'
import './CheckoutProduct.css'
function CheckoutProduct() {
    return (
        <div className='checkoutProduct'>
            <img src="https://www.barbopoulos.gr/wp-content/uploads/2022/06/16143-0125-1.jpg" alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct_title">
                    Levi's Tshirt with white color
                </p>
                <p className="checkoutProduct__price">
                    <small >₹</small>
                    <strong>1999</strong>
                </p>
                <div className="checkoutProduct__rating">
                    ⭐⭐
                </div>
                <button>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct