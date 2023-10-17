import React, { useState, useEffect } from 'react'

export const AutoresPost = () => {

    const [inputValue, setInputValue] = useState('')

    const onAddAutor = () =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"nombre": inputValue})
        };

        console.log (requestOptions.body)

        fetch('https://magaliabratte-001-site1.itempurl.com/api/autores', requestOptions)
           /* .then(response => response.json())
            .then(data => console.log(data))
            .catch (error =>{
                console.log(error);
            })  */
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
    }
/* 
    useEffect(() => {
      handleSubmit()
    }, [])
     */
  return (
    <>
     <h3>Agrega un nuevo autor a la lista</h3>
     <form onSubmit={ handleSubmit } >
        <input 
          type="text" 
          placeholder='Nombre del autor...'
          value={ inputValue }
          onChange={ handleInput }
          />
       <button onClick={ onAddAutor }> Agregar </button>
      </form>
    </>
  )
}
