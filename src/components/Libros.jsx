import React from 'react'
import { Link } from 'react-router-dom'
import { LibrosList } from './LibrosList'
import { ComentariosList } from './ComentariosList'

export const Libros = () => {

    const handleListComents = () =>{
        console.log('prueba');
       // return <ComentariosList/>;
    }

    const handleListLibros = () =>{
        console.log ('lista de libros')
    }

    return (
    <>
    <Link to= '/'> Home </Link>
    <br />
      <h2>Encuentra sus libros y sus autores...</h2>

      <form action="">
        <input 
          type="text" 
          name="" 
          placeholder='Nombre del libro...'
          id="" />
      </form>
      <button onClick={ handleListLibros }>Buscar</button>

      <div>
        <LibrosList></LibrosList>
      </div>

      <button onClick={ handleListComents }> Ver comentarios </button>

    </>
  )
}
