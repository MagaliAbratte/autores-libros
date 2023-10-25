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
import { Button } from 'react-bootstrap';

export const LibrosList = () => {

  const [inputValue, setInputValue] = useState('');
  const [libro, setLibro] = useState('')
  const [autores, setAutores] = useState([])
  const [existeLibro, setExisteLibro] = useState(false)

  const handleLibrosList = async (event) => {
    event.preventDefault();
    
    const url = `https://magaliabratte-001-site1.itempurl.com/api/libros/${inputValue}`;

    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        alert('Error en la respuesta del servidor, intente más tarde')
        console.error('Error en la respuesta del servidor', resp.status);
        return;
      }

      const data = await resp.json();
      console.log(data);

      const {nombre, autores} = data
      setLibro ({nombre})
      setAutores (autores) 
      setExisteLibro(true)

    } catch (error) {
      alert('No se encontró el libro, intente con otro id')
      console.error('Error al obtener los datos:', error);
    }
  };

  const handleInput = ({ target }) => {
    setInputValue(target.value);
  };

  const handleListComents = () =>{
    console.log('prueba');
    
   // return <ComentariosList/>;
}

  return (
    <>
      <form className='container justify-content-center' style={{display:'flex'}} onSubmit={handleLibrosList}>
        <input 
          type="text" 
          placeholder='Id del libro...'
          value={inputValue}
          onChange={handleInput}
          className='form-control mx-2' style={{width: 300}}
          name='buscador'
        />
        <button className='btn button text-white' variant="primary">Buscar</button>{' '}
      </form>

      {existeLibro
      ? <div >
        <hr />
          <h4 className='text-center'>Nombre del libro: {libro.nombre}</h4>
          {
            autores.map (autor => (
              <li key={autor.nombre} className='libreria text-center mt-4'>Autor: {autor.nombre}
              </li>
            ))
          }
          <div className='container justify-content-center text-center mt-5'>
            <Button className='button' variant="primary" onClick={ handleListComents }> Ver comentarios </Button>
          </div>
        </div>
        : ''
      }
    </>
  );
}
