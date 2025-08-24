import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header  className="bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">{/* Logo */}
                <div className="text-xl font-bold text-blue-600">
              NewsApp
            </div>

         <nav className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/politics" className="text-gray-700 hover:text-blue-600">Politics</Link>
          <Link to="/technology" className="text-gray-700 hover:text-blue-600">Technology</Link>
          <Link to="/sports" className="text-gray-700 hover:text-blue-600">Sports</Link>
        </nav>

         <div>
         <input type="text"
          placeholder="Search news"
          className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"/>


          </div>

        </div>
        </header>
    )
}