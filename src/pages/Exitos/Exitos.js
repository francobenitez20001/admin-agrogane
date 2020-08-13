import React, { useState,useEffect } from 'react'
import TablaExitos from '../../components/tables/tablaExitos/tablaExitos'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loader from '../../components/Loader/Loader';
import {API} from '../../config';
import {useUser} from 'reactfire';

const MySwal = withReactContent(Swal)

const Exitos = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(undefined);

    useEffect(() => {
        fetchData();
    }, []);

    let user = useUser();
    if(!user) return window.location.assign('/auth');
    
    const fetchData = async()=>{
        try {
            fetch(`${API}/caso-exito?limit=10`).then(res=>res.json()).then(data=>{
                setData(data.data);
                setLoading(false);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const eliminarCaso = id=>{
        MySwal.fire({
            title: '¿Desea eliminar el Caso?',
            text: "Esta acción no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar!',
          }).then((result) => {
            if (result.value) {
                fetch(`${API}/caso-exito/${id}`,{method:'DELETE'}).then(res=>res.json()).then(response=>{
                    Swal.fire(
                        'Eliminado!',
                        response.info,
                        'success'
                    ).then(()=>(window.location.assign('/exitos')))
                })
            }
        })
    }

    return (
        (loading)?<Loader/>:
            <div className="mt-5 container">
                <h2 className="mb-5">Adiminstración de casos de éxito</h2>
                <TablaExitos
                    data={data}
                    eliminarCaso={eliminarCaso}/>
            </div>
    );
}
 
export default Exitos;
