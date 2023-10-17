import React from 'react'
import { Link } from 'react-router-dom'
import { LibrosList } from './LibrosList'
/* import { ComentariosList } from './ComentariosList' */

export const Libros = () => {

    const handleListComents = () =>{
        console.log('prueba');
       // return <ComentariosList/>;
    }

    return (
    <>
    <Link to= '/'> Home </Link>
    <br />
      <h2>Encuentra sus libros y sus autores...</h2>

      <LibrosList />

      <button onClick={ handleListComents }> Ver comentarios </button>

    </>
  )
}
