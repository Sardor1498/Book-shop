import React from "react";
import { Link } from 'react-router-dom';
import { ROUTES } from "../routes/routes";

const Sidebar = (props) => {
    return (
        <>
            <div>
                {
                    ROUTES.map((item, index) => (
                        <Link key={index} className="grid grid-cols-10 text-white" to={item.url}>
                            <span className="col-span-2" alt="" >{item.icon}</span>
                            <span className="col-span-8">{item.name}</span>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}
export default Sidebar;