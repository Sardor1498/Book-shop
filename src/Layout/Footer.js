import React from 'react';
import { ROUTES2 } from "../routes/routes2";
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useForm } from 'react-hook-form';
import styles from "./Layout.module.css"

const Footer = (props) => {

    const {
        register,
        handleSubmit,
    } = useForm({ mode: 'onChange' });

  
    const onEnter = data => console.log('Отправлено:', data);
        // axios.get("home/my", data)
    

    return (
        <div>
            <div className={styles.footer + " grid grid-cols-12 text-left"}>
                <div className="col-span-4 m-10">
                    <i className="font-serif">B O O K / S H O P</i>
                    <div>
                        <br />
                        <div className="text-sm font-mono">
                            <span className="font-bold">BOOK / SHOP</span>
                            is a
                            design-minded concept shop offering
                            objects, events, and experiences related to books and the reading experience.
                        </div>
                        <br />
                        <div className="text-sm font-mono">
                            4268 Broadway, Oakland, CA 94611.
                        </div>
                        <br />
                        <div className="text-sm font-mono">
                            Tues-Sat; 11am-5pm.
                        </div>
                        <br />
                        <div className="text-sm font-mono">
                            Powered by Shopify
                        </div>
                    </div>
                </div>
                <div className="col-span-4 mt-4">
                    <br />
                    <br />
                    <br />
                    {
                        ROUTES2.map((route, index) => {
                            return (
                                <div key={index + route}>
                                    <Link to={route.url}>
                                        <span className="text-sm font-mono h-96">
                                            {route.name}
                                        </span>
                                    </Link>
                                </div>
                            )
                        })}
                </div>
                <div className="col-span-4 m-10">
                    <i className="font-serif">SUBSCRIBE</i>
                    <br />
                    <div className="text-sm font-mono">
                        Stay informed about events and product launches
                    </div>
                    <br />
                    <div>
                        <form onSubmit={handleSubmit(onEnter)}>
                            <input
                                className="p-2 text-xs tracking-widest border-black"
                                placeholder="Your Email"
                                type="text"
                                {...register("email")}
                            />

                            <button type="submit" className="bg-black text-white p-2 text-xs ml-3">OK</button>
                        </form>
                    </div>
                    <br />
                    <div className="flex justify-start text-black">
                        <FacebookIcon />
                        <InstagramIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;