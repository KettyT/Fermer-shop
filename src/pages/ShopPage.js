import Menu from "../Menu";
import React from "react";
import Slogan from "../utils/Slogan";
import {Link} from "react-router-dom";



function ShopPage (props) {
    const className = props.className;
    return (
        <div className={`app-shop ${className}`}>
            <div className="header-shadow">
                <Slogan compToRight={<Link to="/main">Главная</Link>}/>
            </div>
            <Menu />
        </div>
    );
}

export default ShopPage;