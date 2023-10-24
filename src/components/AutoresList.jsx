import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
      <div className='container' style={{marginBottom: 50}}>
        <Row xs={1} md={3} className="g-4 justify-content-center">
          {autores.map (autor =>(
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
