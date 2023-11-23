import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RickAndMortyRoutes } from '../RickAndMorty/router/RickAndMortyRoutes'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/*' element={<RickAndMortyRoutes />} />
            </Routes>
        </>
    )
}

