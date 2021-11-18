import React, { createContext, useContext, useState} from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search1.p.rapidapi.com/google-search';



export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // /videos, /search, /images
    const getResults = async (type) => {
        setIsLoading( true);
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'Get',
            headers: {
                'x-rapidapi-host': 'google-search1.p.rapidapi.com',
                'x-rapidapi-key': '472f58a7edmsha4265f5d786161dp1b5e3djsn89d3add5c915'
            }
        });
        const data = await response.json();
        setResults(data);
        setIsLoading(false);
    }
}