import React, {useEffect} from "react";
import {useLocation} from 'react-router-dom';
import ReactPlayer from "react-player";

import {useResultContext} from "../../contexts/ResultContextProvider";
import Loading from "../Loading/Loading";


const Results = () =>{
    const { results, isLoading, getResults, searchTerm} = useResultContext();
    const location = useLocation();

    if(isLoading) return <Loading/>;

    switch (location.pathname) {
        case '/search':
            return (

            );
        case '/images':
            return (

            );
        case '/videos':
            return (

            );
        case '/news':
            return (

            );
        default:
            return 'Error!';

    }
};

export default Results;