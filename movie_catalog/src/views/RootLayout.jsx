import { Link, Outlet } from "react-router-dom";
import SignInButton from '../components/SignInButton'
import CreateAccountButton from '../components/CreateAccountButton'


export default function RootLayout() {
    return(
        <>
            <header>
                <Link to="/home">Home</Link>
                <nav>
                    <SignInButton/>
                    <CreateAccountButton/>
                    <Link to="/movies">Movies</Link>
                </nav>
            </header> 

            <Outlet/>

            <footer>
                Este é o Footer    
            </footer> 

        </>
    )
}