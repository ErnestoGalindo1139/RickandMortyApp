import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm";
import { PersonajeCard } from "../components/PersonajeCard"
import { getPersonajesByName } from "../helpers/getPersonajesByName";

export const SearchPage = () => {

    // const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/?page=1`);

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);
    const personajes = getPersonajesByName(q);
    
    const showSearch = (q.length === 0);
    const showSuccess = (personajes.length > 0);
    const showError = (q.length > 0) && (personajes.length === 0);
    // console.log(personajes.length );
    const {personaje, setFormState, onInputChange, onResetForm} = useForm({
        personaje: q
    })

    const onSearchSubmit = (event) => {
        event.preventDefault();

        navigate(`?q=${personaje}`);
        // onResetForm();

    }

    return (
        <>
            <header className="headerBusqueda">
                <h1> Encuentra tu personaje favorito!! </h1>
            </header>

            <form className="formBusqueda" onSubmit={onSearchSubmit}>

                <input 
                    type="text"
                    placeholder="Buscar Personaje"
                    onChange={onInputChange}
                    name="personaje"
                    value={personaje}
                />

                <div className="contenedorBoton">
                    <button type="submit">
                        Buscar
                    </button>
                </div>

            </form>
            <hr />

            <div className="alertas">
                <p 
                    className="alertaBuscando"
                    style={{display: showSearch ? '' : 'none'}}
                > 
                    Busque un Personaje
                </p>
                <p 
                    className="alertaExito"
                    style={{display: showSuccess ? '' : 'none'}}
                > 
                    Busqueda Correcta --&gt; "{personaje}"
                </p>
                <p 
                    className="alertaError"
                    style={{display: showError ? '' : 'none'}}
                > 
                    No se encuentra ningún personaje 
                </p>
            </div>

            <div className="contenedorSearch">
                {/* <p>{JSON.stringify(data.results)}</p> */}

                {
                    !!personajes && personajes.map( personaje => 
                        <PersonajeCard key={personaje.id} dataInfo={personaje} />
                        
                    ) 
                }

                

            </div>

        </>
    )
}
