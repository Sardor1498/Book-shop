import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { ROUTES } from "../routes/routes";
import "./main.css";
import Currency from "../components/Currency";
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import CartContext from "../Context/Cart/CartContext";

const Header = (props) => {
    const [hidden, setHidden] = useState("");
    const [hidden2, setHidden2] = useState("hidden");
    const [hidden3, setHidden3] = useState("hidden");

    const { cartItem } = useContext(CartContext)

    const toggleInput = () => {
        setHidden("invisible");
        setHidden2("");
    }
    const toggleAccount = () => {
        setHidden("invisible");
        setHidden3("");
    }
    const toggleX = () => {
        setHidden("");
        setHidden2("hidden");
    }
    const toggleX2 = () => {
        setHidden("");
        setHidden3("hidden");
    }

    return (
        <div className="h-64">
            <br />
            <div className="grid grid-cols-12 place-items-center">
                <div className="col-span-3 justify-items-start">
                    <Currency />
                </div>
                <div className="col-span-6">
                    <img className="w-24" src="//cdn.shopify.com/s/files/1/0880/2454/files/BookShop_Flat_x360.jpg?v=1534218298" alt="" />
                </div>
                <div className="col-span-3">
                    <SearchIcon onClick={toggleInput} id="searchIcon1" className={"mr-6 cursor-pointer " + hidden} />
                    <PersonIcon onClick={toggleAccount} id="personIcon1" className={"cursor-pointer " + hidden} />
                    <input id="searchInput1" className={"border border-black " + hidden2} type="search"  />
                    <div className={hidden3 + " inline"}>
                        <Link className="text-bold" to="login">Log in </ Link>
                        or
                        <Link className="text-bold" to="register"> Sign up</Link>
                    </div>
                    <span onClick={toggleX} className={"text-3xl cursor-pointer " + hidden2}>&times; </span>
                    <span onClick={toggleX2} className={"text-2xl cursor-pointer " + hidden3}>&times; </span>
                </div>
            </div>
            <br />
            <br />
            <div className="flex justify-center my-auto">

                <div className="grid grid-cols-9 gap-2 cursor-pointer text-sm font-mono">
                    {
                        ROUTES.map((route, index) => {
                            return (
                                <div key={index + route} className={route.icon ? "myClass2" : ""}>
                                    <Link
                                        to={route.url}>
                                        <span
                                            className="no-underline text-sm">
                                            {route.name}
                                            {
                                                route.id ? (
                                                    cartItem.length > 0 && <span>({cartItem.slice(-1)})</span>
                                                ) : null
                                            }
                                            {route.icon ?
                                                <span><ExpandLessIcon fontSize="small" className="myClass3" /></span> : ""
                                            }
                                        </span>
                                    </Link>
                                    {
                                        route.icon ?
                                            (
                                                <div className="relative myClass">
                                                    <div className="absolute p-3 shadow-2xl">
                                                        <Link to={route.urll}>
                                                            <div>{route.name1}</div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                            : null
                                    }
                                </div>
                            )
                        })
                    }
                    {/* <span>
                        <Link to='/cart'>
                            cart
                            {
                                cartItem.length > 0 && <div>{cartItem.length}</div>
                            }
                        </Link>
                    </span> */}
                </div>
            </div>
            <br />
            <br />
            <hr />
        </div>
        

        // <div className="grid grid-cols-12 h-20">
        //     <div className="col-span-7">
        //         <div className="grid grid-cols-7 mt-5">
        //             <div className="col-span-2">
        //                 <div className="flex justify-around">
        //                     <a className="hover:text-yellow-400 font-bold text-xl" href="https://suusb.com">Store</a>
        //                 </div>
        //             </div>
        //             <a className="hover:text-yellow-400 font-bold text-xl" href="https://suusb.com">Catalog</a>
        //             <a className="hover:text-yellow-400 font-bold text-xl" href="https://suusb.com">Library</a>
        //             <a className="hover:text-yellow-400 font-bold text-xl" href="https://suusb.com">Market</a>
        //             <a className="hover:text-yellow-400 font-bold text-xl" href="https://suusb.com">Community</a>
        //         </div>
        //     </div>
        //     <div className="col-span-5">
        //         <div className="grid grid-cols-12">
        //             <div className="col-span-5">

        //             </div>
        //             <div className="col-span-7">
        //                 <div className="flex justify-around mt-5">
        //                     <SearchIcon className="hover:text-yellow-400 cursor-pointer" />
        //                     <HelpIcon className="hover:text-yellow-400 cursor-pointer" />
        //                     <NotificationsIcon className="hover:text-yellow-400 cursor-pointer" />
        //                     <ChatIcon className="hover:text-yellow-400 cursor-pointer" />
        //                     <AccountCircleIcon className="hover:text-yellow-400 cursor-pointer" />
        //                     <Link to="/">
        //                         <span className="font-bold hover:text-yellow-400 cursor-pointer">
        //                             Войти
        //                         </span>
        //                     </Link>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
export default Header;