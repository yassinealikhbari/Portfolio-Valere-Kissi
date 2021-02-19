import React from "react";
import './NotFound.css'
import Gif from './../../assets/images/404.gif'

const NotFound = () => {
    return (
        <div className="vk-flex-container txt-center notfound-container">
            <div className="notfound-image">
                <img src={Gif} alt="404 not found" />
            </div>
            <h1>Page not found</h1>
            <a href="/">Back to homepage</a>
        </div>)
};

export default NotFound;