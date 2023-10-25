import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';

export const AutoresPost = ( {newAutor} ) => {

    const [inputValue, setInputValue] = useState('')

    const onAddAutor = () =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"nombre": inputValue})
        };

        console.log (requestOptions.body)

        fetch('https://magaliabratte-001-site1.itempurl.com/api/autores', requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al añadir autor');
                }
                return response.json();
            })
            .then(data => {
                setInputValue(''); 
                console.log('Autor añadido:', data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleInput = ( {target} ) =>{
        setInputValue ( target.value)
    }

    const handleSubmit = (e) =>{ 
      e.preventDefault() 
        onAddAutor()
        newAutor (newAutor)
    }

    useEffect(() => {
      onAddAutor()
    }, [])
      

  return (
    <>
     <h3 className='fs-2 text-center my-5 text-primary'>Agrega un nuevo autor a la lista</h3>
     <form onSubmit={ handleSubmit } className='container justify-content-center' style={{display:'flex'}}>
        <input 
          type="text" 
          placeholder='Nombre del autor...'
          value={ inputValue }
          onChange={ handleInput }
          className='form-control mx-2' style={{width: 300}}
          />
        <Button variant="primary" onClick={ onAddAutor }>Agregar</Button>{' '}
      </form>
    </>
  )
}
