import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Page } from "./page";
import { Title } from "./title";
import { pokemonTypesColors } from "../components/pokemonTypesColors";
import { useLocalStorage } from "../hooks/useLocalStorage";

const PokemonDetails = () => {
    const { index } = useParams();
    const history = useHistory();
    const [pokemonData, setPokemonData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [favourites, setFavourites] = useLocalStorage('favourite-pokemons', []);


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
            .then(res => {
                // console.log(res.data)
                setPokemonData(res.data);
                setIsLoading(false);
                setError(false);
            })
            .catch(err => {
                console.log(err);
                setError(true);
                setErrorMessage('Pokemon not found!');
                setIsLoading(false)
            })
    }, [index]);

    const handleAddToFavPokemons = (event) => {
        // to disable a button when a pokemon is added to favourites
        if (event.target.disabled = true) {
            event.target.style.color = 'grey';
            event.target.style.cursor = "not-allowed";
            event.target.textContent = "ADDED TO 🖤"
        };

        let favPokemonItem = {
            id: pokemonData.id,
            name: pokemonData.name,
            avatar: pokemonData.sprites.front_default,
            types: pokemonData.types
        };

        if (favourites.length > 5) {
            favourites.shift()
        };

        setFavourites([...favourites, favPokemonItem]);
    }

    return (
        <Page>
            <button className="poke-font bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" style={{textTransform: "uppercase"}} onClick={() => history.push('/pokemons')}>
                ◀️ Back to Pokemons List
            </button>
            <div className="pokemon-details-wrapper text-white poke-font">
                { error ? (<p className="poke-font py-6 text-center">{ errorMessage }</p>) : null }
                { isLoading && <p className="text-white poke-font py-6 text-center">Loading...</p> }
                {pokemonData && (
                    <div className="pokemon-details-card bg-red-700">
                        <div className="pokemon-details-title">
                            <Title>#{pokemonData.id}: {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</Title>
                            <button 
                                className="poke-font bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" 
                                style={{textTransform: "uppercase"}}
                                onClick={(event) => handleAddToFavPokemons(event)}
                            >
                                Add To ❤️
                            </button>
                        </div>
                        <div className="images">
                            <img src={pokemonData.sprites.front_default} alt="pokemon image" />
                        </div>
                        <div className="pokemon-details-card-text">
                            <h3>Pokemon Info</h3>
                            <p>Species: <span style={{color: 'lightskyblue'}}>{pokemonData.species.name}</span></p>
                            <p>Height: {Math.round(pokemonData.height) / 10} m</p>
                            <p>Weight: {Math.round(pokemonData.weight) / 10} kg</p>
                            <p>Types:</p>
                            <div className="pokemon-details-types-info">
                                {pokemonData.types.map(typeItem => {
                                    return <span style={{backgroundColor: pokemonTypesColors[typeItem.type.name]}} key={typeItem.type.name}>
                                            {`${typeItem.type.name}`}
                                        </span>
                                })} 
                            </div>
                            <p>Abilities:</p>
                            <div className="pokemon-details-abilities-info">
                                {pokemonData.abilities.map(abilityItem => {
                                    return <span key={abilityItem.ability.name}>
                                            {`${abilityItem.ability.name}`}
                                        </span>
                                })} 
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Page> 
     );
}
 
export default PokemonDetails;