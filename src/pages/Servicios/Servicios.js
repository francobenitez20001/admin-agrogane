import React, { useState,useEffect } from 'react'
import TablaServicios from '../../components/tables/tablaServicios/TablaServicios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loader from '../../components/Loader/Loader';
import {API} from '../../config';
import {useUser} from 'reactfire';
const MySwal = withReactContent(Swal);

const Servicios = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(undefined);

    useEffect(() => {
        fetchData();
    }, []);

    let user = useUser();
    if(!user) return window.location.assign('/auth');

    const fetchData = async()=>{
        try {
            fetch(`${API}/servicios?limit=10`).then(res=>res.json()).then(data=>{
                setData(data.data);
                setLoading(false);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const eliminarServicio = async id=>{
        try {
            await MySwal.fire({
                title: '¿Desea eliminar el servicio?',
                text: "Esta acción no se puede deshacer",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Eliminar!',
            }).then((result) => {
                if (result.value) {
                    fetch(`${API}/servicios/${id}`,{method:'DELETE'}).then(res=>res.json()).then(response=>{
                        Swal.fire(
                            'Eliminado!',
                            response.info,
                            'success'
                        ).then(()=>{
                            window.location.assign('/servicios');
                        })
                    })
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        (loading)?<Loader/>:
            <div className="mt-5 container">
                <h2 className="mb-5">Adiminstración de servicios</h2>
                <TablaServicios
                    data={data}
                    eliminarServicio={eliminarServicio}/>
            </div>
    );
}
 
export default Servicios;



