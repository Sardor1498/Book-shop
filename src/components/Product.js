import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../Context/Cart/CartContext";
 
const Product = () => {
    const { url } = useParams();
    const [count, setCount] = useState(1);
    // const url = id.replace(/\-/g, "/");
    const { addToCart } = useContext(CartContext);
    
    return (
        <div className="grid grid-cols-12 m-5">
            <div className="col-span-3 text-left">
                <br />
                <hr />
                <i className="font-semibold text-3xl">
                    BUDDHIST IMPRESSIONS: A PICTORIAL INTRODUCTION TO THE DOCTRINE
                </i>
                <div className="text-xl font-semibold mt-2">$ 40.00 USD </div>
                <p>Quantity</p>
                <div className="grid grid-cols-5">
                    <div className="col-span-1">
                        <input
                            type="number"
                            value={count}
                            min="1"
                            className="w-3/4 h-10 border-2 text-center border-black" 
                            onChange={(e) => setCount(e.target.value)}
                            // onChange={() => count < 20 ? setCount(count + 1) : setCount(20)}
                        />
                    </div>
                    <div className="col-span-3">
                        <button
                            type="button"
                            className="bg-black text-sm h-10 text-white px-10"
                            onClick={() => addToCart(count)}
                        >
                            Add to cart
                        </button>
                    </div>
                    <div className="col-span-1"></div>
                </div>
                <br />
                <div className="grid grid-cols-4 mr-4">
                    <div><img src={url.replace(/\|/g, "/")} alt="img" /></div>
                    <div><img src={url.replace(/\|/g, "/")} alt="img" /></div>
                    <div><img src={url.replace(/\|/g, "/")} alt="img" /></div>
                    <div><img src={url.replace(/\|/g, "/")} alt="img" /></div>
                    <div><img src={url.replace(/\|/g, "/")} alt="img" /></div>
                </div>
            </div>
            <div className="col-span-6">
                <br />
                <br />
                <img className="h-screen w-full" src={url.replace(/\|/g, "/")} alt="img" />
            </div>
            <div className="col-span-3">
                <br />
                <hr />
            </div>
        </div>
    )
}

export default Product;