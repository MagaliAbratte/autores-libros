import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <h1>Bienvenidos al blog</h1>
        <Link to= '/autores'>Autores</Link>
        <br />
        <Link to= '/libros'>Libros</Link>
    </div>
  )
}
