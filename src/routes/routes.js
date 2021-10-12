import Sardor from "../pages/Sardor";
import Sirojiddin from "../pages/Sirojiddin";
import Register from "../pages/Register";
import AddBook from "../pages/AddBook/AddBook";
import Home from '../pages/Home';
import Books from "../pages/Books";
import Product from "../components/Product";
import Cart from "../components/Cart";

export const ROUTES = [
    {
        name: "HOME",
        url: "/",
        component: () => <Home />,
        exact: true
    },
    {
        name: "BOOKS",
        url: "/books",
        component: () => <Books />,
        exact: false
    },
    {
        name: "ART",
        url: "/sardor",
        component: () => <Sardor />,
        exact: false
    },
    {
        name: "FURNITURE",
        url: "/sirojiddin",
        component: () => <Sirojiddin />,
        exact: false
    },
    {
        name: "ACCESORIES",
        url: "/register",
        component: () => <Register />,
        exact: false
    },
    {
        name: "APPAREL",
        url: "/apparel",
        component: () => <AddBook />,
        exact: false
    },
    {
        name: "COLLABORATIONS",
        icon: "^",
        url: "/collaboration",
        urll: "/books",
        component: () => <AddBook />,
        name1: "LIBRAIRIE HAYDEE",
    },
    {
        name: "BLOG",
        url: "/blog",
        component: () => <AddBook />,
        exact: false
    },
    {
        name: "CART",
        id: 1,
        url: "/cart",
        component: () => <Cart />,
        exact: false
    },
    
    {
        url: "/product/:url?",
        component: () => <Product />,
        exact: false
    },
]