import { Link } from "react-router-dom";
 
const Navbar: React.FC = () => {
    return ( 
        <nav>
            <ul className="flex poke-font justify-between">
                <li className="mr-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="mr-4">
                    <Link to="/pokemons">Pokemons</Link>
                </li>
                <li className="mr-4 text-center">
                    <Link to="/favourites">Favourites❤️</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;