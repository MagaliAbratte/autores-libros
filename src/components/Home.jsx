import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='container back'>
        <h1 className='fs-1 text-center my-5 text-primary'>Bienvenidos al blog</h1>

        <div className='btn-group d-flex justify-content-center '>
         <Link to= '/autores' className='btn btn-primary mb-4'>Lista de autores</Link>
         <br />
         <Link to= '/libros' className='btn btn-primary mb-4'>Busqueda de libros y sus autores</Link>
        </div>

        
    </div>
  )
}
