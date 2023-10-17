/* import React from 'react'
import { useState } from 'react'

export const LibrosList = () => {

  const [inputValue, setInputValue] = useState('')

  const handleLibrosList = async () =>{

    const url = `https://localhost:7294/api/libros/${inputValue}`
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);

  }

  const handleInput = ( {target} ) =>{
    setInputValue ( target.value)
}

  return (
    <>
    <form onSubmit={ handleLibrosList }>
        <input 
          type="text" 
          placeholder='Nombre del libro...'
          value={inputValue}
          onChange={ handleInput }
          />
       <button> Buscar </button>
      </form>
    </>
  )
}
 */

import React, { useState } from 'react';

export const LibrosList = () => {

  const [inputValue, setInputValue] = useState('');
  const [libro, setLibro] = useState('')
  const [autores, setAutores] = useState([])

  const handleLibrosList = async (event) => {
    event.preventDefault();
    
    const url = `https://magaliabratte-001-site1.itempurl.com/api/libros/${inputValue}`;

    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        console.error('Error en la respuesta del servidor', resp.status);
        return;
      }

      const data = await resp.json();
      console.log(data);

      const {nombre, autores} = data
      setLibro ({nombre})
      setAutores (autores) 

    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const handleInput = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <>
      <form onSubmit={handleLibrosList}>
        <input 
          type="text" 
          placeholder='Id del libro...'
          value={inputValue}
          onChange={handleInput}
        />
        <button>Buscar</button>
      </form>

      <h3>Nombre del libro y sus autores</h3>
      <p>{libro.nombre}</p>
      {
        autores.map (autor => (
          <li key={autor.nombre}>
            {autor.nombre}
          </li>
        ))
      }
    </>
  );
}
