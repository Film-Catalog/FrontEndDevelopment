import { Link } from "react-router-dom";
import movie from "/movie.svg"
import woman1 from "/woman1.jpg"

export default function Header() {
    return(
        <header>
                <nav className="bg-header_bg">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                    
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                        <img className="h-8 w-auto" src={movie} alt="Your Company"/>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                            <Link to="/home" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Home</Link>
                            <Link to="/movies" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Movies</Link>
                            {/* <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Login</a>
                            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Create Account</a> */}
                        </div>
                        </div>
                    </div>
                    
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        {/* <!-- Profile dropdown --> */}
                        <div className="relative ml-3">
                        <div>
                            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full object-cover" src={woman1} alt=""/>
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </header> 
    )
}