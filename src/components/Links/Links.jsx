import React from "react";
import {NavLink} from "react-router-dom";

const topLinks = [
    {url: '/search', text: 'All 🕵🏽'},
    {url: '/news', text: 'News 📻'},
    {url: '/images', text: 'Images 🎞'},
    {url: '/videos', text: 'Videos 🎥'}
];

const Links = ()=>{
    return(
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {topLinks.map(({url, text})=>(
                <NavLink to={url} activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">
                    {text}
                </NavLink>
            ))}
        </div>
    )
}

export default Links;