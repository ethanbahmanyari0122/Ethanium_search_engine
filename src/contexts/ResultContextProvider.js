import React, { createContext, useContext, useState} from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search1.p.rapidapi.com/google-search';



export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState();
    const [isLoading, setIsLoading] = useState(false);
}