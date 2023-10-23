import React from 'react'
import { Link } from 'react-router-dom'
import { AutoresList } from './AutoresList'
import { AutoresPost } from './AutoresPost'


export const Autores = () => {

  return (
      <>
       <div className='container-fluid'>
        <h2 className='fs-2 text-center my-5 text-primary'>Listado de autores</h2>
        <AutoresList/>
       </div>
       <div>
        <AutoresPost />
       </div>
    </>
  )
}
