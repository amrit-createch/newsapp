import { useContext,createContext, useState, useEffect } from "react";

export const NewsContext = createContext()
const apiKey = import.meta.env.VITE_API_KEY;

export const APIContextProvider = ({children}) => {
    const [ articles, setArticles] = useState([])
    useEffect(()=>{
        async function fetchnews() {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=india&language=en&from=2025-08-23&sortBy=publishedAt&apiKey=${apiKey}`)
                    const data = await response.json()
                    setArticles(data.articles)
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        }
        fetchnews()
    },[apiKey]);
   
  return (
    <NewsContext.Provider value={{ articles }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  return useContext(NewsContext);
};
    