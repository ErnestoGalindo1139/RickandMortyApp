import { useFetch } from "../../hooks/useFetch"
import { PersonajeCard } from "../components/PersonajeCard";

const page = Math.random() * (42 - 1) + 1;

export const RickAndMortyPage = () => {

    const {data, isLoading, hasError} = useFetch('https://rickandmortyapi.com/api/character/?page=1');

    // console.log({data, isLoading, hasError});

    return (
        <>
            <header className="headerPrincipal">
                <h1>Bienvenido</h1>

            </header>


            <div className="contenedorPrincipal">
                {/* <p>{JSON.stringify(data.results)}</p> */}

                {
                    !!data && data.results.map( result => 
                        <PersonajeCard key={result.id} dataInfo={result} />
                        
                    ) 
                }

            </div>

        </>
    )
}
