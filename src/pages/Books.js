import React from 'react';
import CustomCard from '../components/CustomCard';
import { images } from '../routes/images';


const Books = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {
                images.map((item, index) => {
                    return (
                        <CustomCard
                            key={index}
                            img={item.photo}
                            img2={item.photo2}
                            title={item.name}
                            price={item.price}
                        />
                    )
                })
            }
        </div>
    )
}
export default Books;