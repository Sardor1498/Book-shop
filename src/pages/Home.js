import React from 'react'
import CustomCard from '../components/CustomCard';
import { images } from '../routes/images';

const Home = () => {
    return (
        <div>
            <div>
                <img
                    className="w-full"
                    src="https://cdn.shopify.com/s/files/1/0880/2454/files/0_bda999bf-aeb8-4cec-8026-616365c35b8b_1500x.jpg?v=1622668580"
                    alt=""
                />
            </div>
            <br />
            <hr />
            <br />
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
                                doublePhoto={false}
                                id={item.id}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;