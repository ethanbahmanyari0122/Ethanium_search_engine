import React , { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Routes from "./components/Routes/Routes";



const App = ()=>{
    const [darkTheme, setDarkTheme] = useState(false);

    return(
        <div className={darkTheme ? 'dark' : ''}>
            <div className="bg-gray-100">
                <h1>App</h1>
            </div>
        </div>
    );
};

export default App;