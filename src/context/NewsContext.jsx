import { useContext,createContext, useState, useEffect } from "react";

export const NewsContext = createContext()
const apiKey = import.meta.env.VITE_API_KEY;

export const APIContextProvider = ({children}) => {
    const [ articles, setArticles] = useState([])
    useEffect(()=>{
        async function fetchnews() {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=india&language=hi&from=2025-08-23&sortBy=publishedAt&apiKey=${apiKey}`)
                    const data = await response.json()
                    setArticles(data.articles)
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        }
        fetchnews()
    },[apiKey]);

    async function fetchByCategories(category) {
      try{
      const response = await fetch(
      `https://newsapi.org/v2/everything?q=${category}&language=hi&apiKey=${apiKey}`
  );
  
  const data = await response.json();
  console.log(data);
  
  setArticles(data.articles || []);
 } catch (error) {
    console.error("Error fetching category news:", error);
  }
};

async function fetchHomenews() {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=india&language=hi&from=2025-08-23&sortBy=publishedAt&apiKey=${apiKey}`)
                    const data = await response.json()
                    setArticles(data.articles)
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        }
   
    async function searchNews(query) {
      if(!query.trim()) return;
      try {
        const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&language=hi&apiKey=${apiKey}`
      );
      const data = await response.json();
      setArticles(data.articles || [])
      } catch (error) {
         console.error("Error searching news:", error);
      }
    }
  return (
    <NewsContext.Provider value={{ articles,searchNews,fetchByCategories ,fetchHomenews}}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  return useContext(NewsContext);
};
    