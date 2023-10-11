import React from 'react'
import { Link } from 'react-router-dom'
import { AutoresList } from './AutoresList'
import { AutoresPost } from './AutoresPost'

export const Autores = () => {

  return (
      <>
      <Link to= '/'> Home </Link>
      <br />
      <h2>Listado de autores</h2>
      <div>
        <AutoresList/>
      </div>
      <div>
        <AutoresPost />
      </div>


    </>
  )
}
