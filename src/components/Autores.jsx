import React from 'react'
import { AutoresList } from './AutoresList'
import { AutoresPost } from './AutoresPost'
import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'


export const Autores = () => {

  const { autores } = useFetch ()
/*   const [autorNuevo, setAutorNuevo] = useState([]) */

  return (
      <>
       <div className='container-fluid'>
       <div>
         <AutoresPost />
       </div>
        <h2 className='fs-2 text-center my-5 text-primary'>Listado de autores</h2>
         <AutoresList autor = {autores}/>
       </div>
     </>
  )
}
