import React, { useEffect, useState } from 'react'

export const AutoresList = () => {

const [autores, setAutores] = useState([])

    const getAutores = async () => {
      const url = "http://magaliabratte-001-site1.itempurl.com/api/autores"
      const resp = await fetch(url);
      const data = await resp.json();
      const autoresData = data.map ( autor => ({
        nombre: autor.nombre
      }))

      setAutores(autoresData)
  }

  useEffect(() => {
    getAutores();
  }, [])
  
  return (
    <>
       <ol>
        {
          autores.map (autor =>(
            <li key={autor.nombre}>
              {autor.nombre}
            </li>
          ))
        }
       </ol>
    </>
  )
}
