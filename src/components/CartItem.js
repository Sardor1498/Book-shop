import React from 'react'
import formatCurrency from 'format-currency'

const CartItem = ({ item }) => {

    let opts = { format: "%s%v", symbol: "$" }

    return (
        <li>
            <img src={item.photo} alt="" />
            <div>
                {item.name} {formatCurrency(`${item.price}`, opts)}
            </div>
        </li>
    )
}

export default CartItem
