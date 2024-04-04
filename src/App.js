import './App.css';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movie from './pages/Movie';
import TVshows from './pages/TVshows';
import MovieDetails from './pages/MovieDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "/movies",
    Component: Movie
  },
  {
    path: "/tv-shows",
    Component: TVshows
  },
  {
    path:"/movies/:id",
    Component:MovieDetails
  }
])

function App() {
  return (
      <RouterProvider router={router}>
      </RouterProvider>
    
  );
}

export default App;
