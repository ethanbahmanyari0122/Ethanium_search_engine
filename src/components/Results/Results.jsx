import React, {useEffect} from "react";
import {useLocation} from 'react-router-dom';
import ReactPlayer from "react-player";

import {useResultContext} from "../../contexts/ResultContextProvider";
import Loading from "../Loading/Loading";


const Results = () =>{
    const { results, isLoading, getResults, searchTerm} = useResultContext();
    const location = useLocation();

    useEffect(()=>{
        getResults('q=elon musk&num=40')
    },[])

    if(isLoading) return <Loading/>;

    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {results?.results?.map(({link, title}, index)=>(
                        <div key={index} className="md:w-2/5 w-full">
                            <a href={link} target="_blank" rel="noreferrer">
                                <p className="text-sm">
                                    {link.length > 30 ? link.substring(0,30) : link}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            );
        case '/images':
            return (
                <div>

                </div>
            );
        case '/videos':
            return (
                <div>

                </div>
            );
        case '/news':
            return (
                <div>

                </div>
            );
        default:
            return 'Error!';

    }
};

export default Results;