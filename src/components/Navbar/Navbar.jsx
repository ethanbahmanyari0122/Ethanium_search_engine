import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({darkTheme,setDarkTheme})=>{
    return(
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to="/">
                    <p className="text-2xl bg-blue-300 font-bold text-white py-1 px-2 rounded dark:bg-gray-300 dark:text-gray-900">
                        Ethanium 👨🏻‍💻
                    </p>
                </Link>
                <button type="button" onClick={()=> setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-70 dark:text-gray-800 bg-blue-100 rounded-full px-2 py-1 hover:shadow-lg ">
                    {darkTheme? "Light 🌕": "Dark 🌑"}
                </button>
            </div>
            <Search/>
        </div>
    );
};

export default Navbar;