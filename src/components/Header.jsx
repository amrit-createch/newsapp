import { NavLink } from "react-router-dom";
import { NewsContext } from "../context/NewsContext";
import { useState,useContext } from "react";
export default function Header(){
  const {searchNews,fetchByCategories} = useContext(NewsContext)
  const [searchTerm,setSearchTerm] = useState('')

  const handleSearch = () => {
    searchNews(searchTerm);
     setSearchTerm("");
  }
    return(
        <header  className="bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">{/* Logo */}
                <div className="text-xl font-bold text-blue-600">
              NewsApp
            </div>

         <nav className="flex space-x-6">
          <button  className="text-gray-700 hover:text-blue-600">Home</button>
          <button onClick={() => fetchByCategories("politics")} className="text-gray-700 hover:text-blue-600">Politics</button>
          <button onClick={()=> fetchByCategories("technology")} className="text-gray-700 hover:text-blue-600">Technology</button>
          <button onClick={()=> fetchByCategories("sports")} className="text-gray-700 hover:text-blue-600">Sports</button>
        </nav>

         <div>
         <input type="text"
          placeholder="Search news"
          className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          
          />
            <button onClick={handleSearch} className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700">search</button>

          </div>

        </div>
        </header>
    )
}