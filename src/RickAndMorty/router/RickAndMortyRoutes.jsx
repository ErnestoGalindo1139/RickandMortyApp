import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../../ui/components/NavBar"
import { PersonajePage, PersonajesPage, RickAndMortyPage, SearchPage } from "../pages"

export const RickAndMortyRoutes = () => {
    return (
        <>
            <NavBar />

            <Routes>

                <Route path="inicio" element={<RickAndMortyPage />}/>
                <Route path="personajes" element={<PersonajesPage />}/>
                <Route path="buscar" element={<SearchPage />}/>
                <Route path="personaje/:id" element={<PersonajePage />}/>

                <Route path="/*" element={<Navigate to="inicio"/>}/>
            </Routes>

        </>
    )
}
