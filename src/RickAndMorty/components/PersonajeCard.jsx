import { Link } from "react-router-dom";

export const PersonajeCard = ({dataInfo}) => {

    const {id, image, name, gender, origin, location, status} = dataInfo;

    return (
        <div className="personajeCard">
            <img src={image}></img>
            <div className="personajeCard__Contenedor">

                <div className="personajeCard__ContenedorInfo">

                    <p>Name: <span>{name}</span></p>
                    <p>Gender: <span>{gender}</span></p>
                    <div className="contenedorStatus">
                        <p>Status:</p>
                        <span 
                            className={`material-symbols-outlined 
                            ${status == 'Alive' 
                            ? 'statusAlive' 
                            : (status == 'Dead' ? 'statusDead' : 'statusUnknown')}`}
                        > 
                            circle
                        </span>
                        <span>{status} </span> 

                    </div>
                </div>
            
                <div className="botonInfo">
                    <Link to={`/personaje/${id}`}>
                        Más Información...
                    </Link>
                </div>
                
            </div>
        </div>
    )
}
