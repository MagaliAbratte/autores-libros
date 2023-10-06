import React from 'react'
import { Link } from 'react-router-dom'
import { AutoresList } from './AutoresList'


export const Autores = () => {

  const handleListAutores = () =>{
    console.log('Lista de autores y libros');
  }

  return (
      <>
      <Link to= '/'> Home </Link>
      <br />
      <h2>Encuentra el autor y sus libros...</h2>
      <form action="">
        <input 
          type="text" 
          name="" 
          placeholder='Nombre del autor...'
          id="" />
      </form>
      <button onClick={ handleListAutores }>Buscar</button>

      <div>
        <AutoresList></AutoresList>
      </div>


    </>
  )
}
