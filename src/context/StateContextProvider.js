import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': 'e88e61e521msh3a6bd05119d0a96p1fa565jsn11ca715e2f18'
              },
            });
        
            const data = await res.json();
        
            setResults(data);
            setLoading(false);
          };
        
          return (
            <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
              {children}
            </StateContext.Provider>
          );
        };
        
        export const useStateContext = () => useContext(StateContext);