import { Page } from "../../components/page";
import { Title } from "../../components/title";
// import { pokeApiResponse } from "../../utils/sampleResponse";
import { useState, useEffect } from 'react';
import PokemonsList from "./PokemonsList"
import axios from "axios";
import Pagination from "../../components/Pagination";

interface IPokemon {
  name: string,
  url: string
}

export function Pokemons() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  let limit = 20;
  let offset = 0;
  const [currentPageUrl, setCurrentPageUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const [nextPageUrl, setNextPageUrl] = useState('')
  const [previousPageUrl, setPreviousPageUrl] = useState('');
  
  useEffect(() => {
    let cancel: any;
    
    axios.get(currentPageUrl, {cancelToken: new axios.CancelToken(c => cancel = c)})
      .then(res => {
        // console.log(res.data)
        setPokemons(res.data.results)
        setNextPageUrl(res.data.next);
        setPreviousPageUrl(res.data.previous);
        setTotal(Math.ceil(res.data.count / 20))
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err)
        setError(true);
        setErrorMessage('Could not fetch the data :(')
        setIsLoading(false);
      })

      return () => cancel();
  }, [currentPageUrl]);

  const handleGoToNextPage: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentPageUrl(nextPageUrl);
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  const handleGoToPreviousPage: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentPageUrl(previousPageUrl)
    const prevPage = Math.max(page - 1, 0);
    setPage(prevPage);
  };

  return (
    <Page>
      <Title>Pokemons list</Title>
        { error ? (<p className="text-white poke-font py-6 text-center">{ errorMessage }</p>) : null }
        { isLoading && <p className="text-white poke-font py-6 text-center">Loading...</p> }
        <Pagination
          page={page + 1}
          totalPages={total}
          goToPrevPage={previousPageUrl ? handleGoToPreviousPage : null}
          goToNextPage={nextPageUrl ? handleGoToNextPage : null}
        />
        <ol className="pokemons-list-wrapper">
          { pokemons && pokemons.map((pokemon) =>
            <PokemonsList 
              key={`${pokemon.name} - ${pokemon.url.split('/')[6]}`} 
              pokemons={pokemon} 
              id={pokemon.url.split('/')[6]} 
            /> 
          )}
        </ol>
        
      {/* <p className="text-white py-6 text-center">
        Here will be list of pokemons from pokeapi
      </p>
      <ol className="text-white list-decimal">
        <p className="font-bold">What you need to do</p>
        <li>
          Call pokeapi inside useEffect (remember to not cause infinite loop
          because you'll break pokeapi!) and save the response in state
          (useState)
        </li>
        <li>
          Display list of pokemons (pokeapi uses pagination so keep that in
          mind) like example below
        </li>
        <li>
         [Extra] Add buttons PREVIOUS - NEXT at the bottom so I can load next batch of pokemons
        </li>
        <li>
          Handle states:
          <p>Initial</p>
          <p>Loading</p>
          <p>Loaded</p>
          <p>Error</p>
        </li>
        <li>
          Create pokemon profile page, so when I click on selected pokemon I go
          to the specific page where I can see more details about pokemon
          (pokemonId, name, types and avatar). Refer to Favourites, you'll see
          an example. Remember about react-router you have to create new route
          for this and create separate component and separate Route.
        </li>
        <li>
          In detailed view I want to have{" "}
          <span className="font-bold">ADD TO FAVOURITE </span>button which will
          save selected pokemon to{" "}
          <span className="font-bold">localStorage</span> so later I can display
          it in Favourite component.
          [Extra] Maximum of 6, meaning if I add 7th pokemon
          the first one gets removed from the localStorage
        </li>
      </ol>
      <p className="text-white py-2">
        Example of what I want to see here is something like this
      </p>
      <ol className="poke-font text-white grid grid-cols-2 grid-flow-row-dense gap-1">
        {pokeApiResponse.map((pokemon, index) => (
          <li
            key={pokemon - index}
            className={`hover:bg-red-700 cursor-pointer ${
              index < 10 ? "col-start-1" : "col-start-2"
            }`}
          >
            #{index + 1} - {pokemon.name}
          </li>
        ))}
      </ol> */}
    </Page>
  );
}
