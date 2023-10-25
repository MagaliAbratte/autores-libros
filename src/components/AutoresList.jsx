import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { useFetch } from '../hooks/useFetch';

export const AutoresList = ({autor}) => {

  const { loading } = useFetch ()
/*  const [autores, setAutores] = useState([])
 const [loading, setLoading] = useState(true)

    const getAutores = async () => {
      try {
        const url = "https://magaliabratte-001-site1.itempurl.com/api/autores"
        const resp = await fetch(url);
        const data = await resp.json();
      
      const autoresData = data.map ( autor => ({
        nombre: autor.nombre
      }))

      return setAutores(autoresData)

      } catch (error) {
        alert('Problema de conexion con el servidor, intente nuevamente');
      } finally{
        setLoading (false)
      }
  }

  useEffect(() => {
    setLoading(true)
    getAutores();
  }, [])
   */

  if (loading){
    return (
      <div className='spinner text-center'>
        <Spinner animation="border" />;
      </div>
    )
  } 

  return (
    <>
      <div className='container' style={{marginBottom: 50}}>
        <Row xs={1} md={3} className="g-4 justify-content-center">
          {autor.map (autor =>(
            <Col className='text-center' key={autor.nombre}>
              <Card className='card-grid-colum'>
                <Card.Body>
                  <Card.Title className='text-center'>{autor.nombre}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}
