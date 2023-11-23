import { useState } from "react";
import { useFetch } from "../../hooks/useFetch"
import { PersonajeCard } from "../components/PersonajeCard";

export const PersonajesPage = () => {

    const [page, setPage] = useState(1)

    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/?page=${page}`);

    // console.log({data, isLoading, hasError});

    const incrementar = () => {
        if (page == 42) return
        setPage( page + 1 )
    }
    
    const decrementar = () => {
        if (page == 1) return
        setPage( page - 1 )
    }
    
    
    return (
        <>
            <header className="headerPrincipal">
                <h1>Personajes</h1>

            </header>
            <div className="botonesPersonajes">
                <button onClick={ decrementar }> Página Anterior </button>
                <button onClick={ incrementar }> Página Siguiente </button>
            </div>

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
