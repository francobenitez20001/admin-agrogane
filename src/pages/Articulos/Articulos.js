import React, { useEffect,useState } from 'react'
import TablaArticulos from '../../components/tables/tablaArticulos/TablaArticulos';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loader from '../../components/Loader/Loader';
import {API} from '../../config';
import {useUser} from 'reactfire';

const MySwal = withReactContent(Swal);
const Articulos = () => {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetchData();
  }, []);

  let user = useUser();
  if(!user){
    return window.location.assign('/auth');
  }

  const fetchData = async()=>{
    try {
      await fetch(`${API}/articulos?limit=3`).then(res=>res.json()).then(articulos=>{
        let articulosApi = articulos.data;
        setData(articulosApi);
        setloading(false);
      })
    } catch (error) {
      setError(error);
    }
  }

  const deleteArticulo = id=>{
    console.log(id);
    MySwal.fire({
        title: '¿Desea eliminar el articulo?',
        text: "Esta acción no se puede deshacer",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar!',
      }).then((result) => {
        if (result.value) {
          fetch(`http://localhost:3001/api/articulos/${id}`,{method:'DELETE'}).then(res=>res.json()).then(response=>{
            Swal.fire(
              'Eliminado!',
              'Se ha eliminado con éxito',
              'success'
            ).then(()=>{window.location.assign('/articulos')})
          })
        }
    })
  }

  if(loading || error){
    return <Loader/>
  }

  return (
    (loading || error)?<Loader/>:
    <div className="mt-5 container">
        <h2 className="mb-5">Adiminstración de artículos</h2>
        <TablaArticulos
            data={data}
            handleDelete={deleteArticulo}/>
    </div>
  );
}
 
export default Articulos;
