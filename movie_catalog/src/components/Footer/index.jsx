import { Link } from "react-router-dom";
import movie from "/movie.svg"


export default function Footer() {
    return(
        <footer className="bg-header_bg">
        <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between py-8 space-y-6 md:flex-row md:space-y-0">
            
            {/* <!-- Logo e Nome do Site --> */}
            <div className="flex items-center space-x-4">
                <img src={movie} alt="Logo" className="h-16 w-auto"/>
                <span className="text-gray-300 text-lg font-semibold">Your Company</span>
            </div>

            {/* <!-- Links de Navegação --> */}
            <div className="flex space-x-6">
                <Link to="/home" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" aria-current="page">Home</Link>
                <Link to="/movies" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Movies</Link>
            </div>

            {/* <!-- Redes Sociais --> */}
            <div className="flex space-x-6">

            {/* <!-- WhatsApp --> */}
            <a href="#" className="text-gray-300 hover:text-accent" aria-label="WhatsApp">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M16 2C8.82 2 3 7.82 3 15c0 2.64.77 5.11 2.1 7.2L2 30l7.79-2.07c2.1 1.33 4.6 2.07 7.21 2.07 7.18 0 13-5.82 13-13S23.18 2 16 2zm7.94 19.58c-.31.88-1.51 1.61-2.05 1.71-.55.1-1.22.14-2-.11a17.65 17.65 0 01-7.42-6.22 8.36 8.36 0 01-1.22-2.88c-.12-.68-.02-1.22.28-1.65.31-.44.88-1.09 1.38-1.24.5-.15.88-.06 1.17.08.3.14.81.55.89.73.08.17.08.34.03.52-.1.35-.2.65-.36.93-.16.28-.28.43-.44.66a7.5 7.5 0 00-.44.65c.17.24.38.52.62.79a15.3 15.3 0 006.72 5.94c.61.22 1.02.34 1.35.32.34-.02.58-.13.75-.22.2-.11.42-.26.62-.44.23-.22.42-.42.57-.68.19-.32.31-.67.42-1.08.09-.31.11-.59.03-.89z" />
                </svg>
            </a>

            {/* <!-- Twitter --> */}
            <a href="#" className="text-gray-300 hover:text-accent" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.43 2a4.48 4.48 0 00-4.48 4.48v1A10.66 10.66 0 013 4.1S-1 15 8 19a11.63 11.63 0 01-7 2c9 5.48 20 0 20-11.5a7.72 7.72 0 00-.17-1.53A7.72 7.72 0 0023 3z"/>
                </svg>
            </a>

            {/* <!-- Instagram --> */}
            <a href="#" className="text-gray-300 hover:text-accent" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 2a5 5 0 00-5 5v8a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5H7zm10 1.8a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm-5 3.2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
            </a>

                </div>
        </div>
            <div className="flex justify-center py-2 border-t border-secondary text-textPrimary text-xs">
            <p>© 2024 Your Company. All rights reserved.</p>
            </div>
        </div>
    </footer>
    )
}