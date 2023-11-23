import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="navBar">
            <Link to="/">Inicio</Link>
            <Link to="personajes">Personajes</Link>
            <Link to="buscar">Buscar</Link>
        </nav>
    )
}
