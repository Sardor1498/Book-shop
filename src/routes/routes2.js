import React from 'react';
import Contact from "../components/FooterPages/Contact";
import OnlineGiftCard from "../components/FooterPages/OnlineGiftCard";
import ShippingReturns from "../components/FooterPages/ShippingReturns";
import Blog from "../components/FooterPages/Blog";
import Search from "../components/FooterPages/Search";
import AboutUs from "../components/FooterPages/AboutUs";

export const ROUTES2 = [
    {
        name: "About Us",
        url: "/about",
        component: () => <AboutUs />,
    },
    {
        name: "Contact",
        url: "/contact",
        component: () => <Contact />,
        exact: false
    },
    {
        name: "Online Gift Card",
        url: "/onlinegiftcard",
        component: () => <OnlineGiftCard />,
        exact: false
    },
    {
        name: "Shipping / Returns",
        url: "/shipping_returns",
        component: () => <ShippingReturns />,
        exact: false
    },
    {
        name: "Blog",
        url: "/blog",
        component: () => <Blog />,
        exact: false
    },
    {
        name: "Search",
        url: "/search",
        component: () => <Search />,
        exact: false
    },
]

