import React, { useState } from "react";

const Currency = (props) => {
    const [setCurrency] = useState("usd");

    const handleChange = (e) => {
        // console.log(e.target.value)
        setCurrency(e.target.value)
    }

    return (
        <div className="border-gray-400 border text-sm font-mono">
            <select onChange={handleChange}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="rub">RUB</option>
                <option value="aud">AUD</option>
                <option value="sum">SUM</option>
                <option value="jpy">JPY</option>
            </select>
        </div>
    )
}
export default Currency;