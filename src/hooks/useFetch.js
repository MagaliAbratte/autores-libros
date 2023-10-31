import { useState, useEffect} from 'react'

export const useFetch = () => {

    const [autores, setAutores] = useState([])
    const [loading, setLoading] = useState(true)

    const getAutores = async () => {
      try {
       const token = localStorage.getItem("token");
       const headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });

        const url = "https://magaliabratte-001-site1.itempurl.com/api/autores"
        const resp = await fetch(url, { headers: headers });
        const data = await resp.json();
      
      const autoresData = data.map ( autor => ({
        nombre: autor.nombre,
        id: autor.id
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
  
  return {
    autores,
    loading,
    getAutores,
  }
}
