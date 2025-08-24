import React, { useContext } from 'react'
import Card from "../components/Card"
import { useNews } from '../context/NewsContext';
function Home() {
    const {articles} = useNews()
   
    return (
        <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((item, index) => (
                    <Card
                        key={index}
                        image={item.urlToImage}
                        title={item.title}
                        url={item.url}
                    />
                ))}
            </div>
        </div>
    );
}


export default Home
