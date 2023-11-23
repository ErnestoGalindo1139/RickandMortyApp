import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const PersonajePage = () => {
    
    const {id} = useParams();
    const navigate = useNavigate();

    // console.log(id);
    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${id}`);

    if(!!data == false) return [];
    // console.log(data);

    const onNavigateBack = () => {
        navigate(-1);
    }

    return (
        <>
            <div className="personajeInfoContenedor">
                <img src={data.image} alt={data.name} />
                <div className="personajeInfoContenedor__info">
                    <p>Name: <span>{data.name}</span></p>
                    <hr />
                    <p>Gender: <span>{data.gender}</span></p>
                    <hr />
                    <p>Species: <span>{data.species}</span></p>
                    <hr />
                    <div className="contenedorStatus">
                    <p>Status:</p>
                    <span 
                        className={`material-symbols-outlined 
                        ${data.status == 'Alive' 
                        ? 'statusAlive' 
                        : (data.status == 'Dead' ? 'statusDead' : 'statusUnknown')}`}
                    > 
                        circle
                    </span>
                    <span>{data.status} </span> 

                    </div>

                    <hr />
                    <p>Origin: <span>{data.origin.name}</span></p>
                    <hr />
                    <p>Location: <span>{data.location.name}</span></p>
                    
                    <div className="botonRegresar">
                        <button 
                            className='botonRegresar'
                            onClick={onNavigateBack}
                        >
                            Regresar
                        </button>
                        
                    </div>


                </div>
            </div>
        </>
    )
}
