import React, { useEffect, useState } from 'react'

export const AutoresList = () => {

const [autores, setAutores] = useState([])

    const getAutores = async () => {
      const url = "https://magaliabratte-001-site1.itempurl.com/api/autores"
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

   <div class="container text-center">
     <div class="row">
       <div class="col">
         Column
       </div>
       <div class="col">
         Column
        </div>
       <div class="col">
         Column
       </div>
     </div>
   </div>

       <ul className='list-group list-group-horizontal'>
        {
          autores.map (autor =>(
            <li key={autor.nombre} className='list-group-item text-wrap' >
              {autor.nombre}
            </li>
          ))
        }
       </ul>
    </>
  )
}
