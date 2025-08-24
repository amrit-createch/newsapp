import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <footer className="bg-gray-100 border-t mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
        
        {/* Left side - App Name + Rights */}
        <p className="text-sm text-gray-600">
          © 2025 <span className="font-semibold">NewsApp</span>. All rights reserved.
        </p>
        
        <div className="flex space-x-4 mt-3 md:mt-0">
          <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy</Link>
          <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms</Link>
          <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link>
      
        </div>
            </div>
        </footer>
    )
}