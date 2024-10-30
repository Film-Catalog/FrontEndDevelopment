import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './views/RootLayout';
import Home from './views/Home';
import Movies from './views/Movies';
import Movie from './views/Movie'; // Corrigido import de Movie

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "/", element: <Home />, index: true }, // Define Home como rota inicial
            { path: "/home", element: <Home /> },
            { path: "/movies", element: <Movies /> },
            { path: "/movies/:movieId", element: <Movie /> }

            // Optional paths in case to has much time left to deliver
            // { path: "/lists", element: <Lists/> },
            // { path: "/lists/:listId", element: <List/> }
        ]
    }
]);

export default router;
