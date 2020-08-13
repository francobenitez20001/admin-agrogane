import React, { useEffect,useState } from 'react'
import TablaAutores from '../../components/tables/tablaAutores/TablaAutores';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loader from '../../components/Loader/Loader';
import {API} from '../../config';
import {useUser} from 'reactfire';

const MySwal = withReactContent(Swal)

const Autores = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(undefined);
    useEffect(() => {
        getAutores();
    }, [])

    let user = useUser();
    if(!user) return window.location.assign('/auth');

    const getAutores = async()=>{
        try {
            await fetch(`${API}/autor`).then(res=>res.json()).then(autores=>{
                setData(autores.data);
                setLoading(false);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const deleteAutor = id=>{
        MySwal.fire({
            title: '¿Desea eliminar el autor?',
            text: "Esta acción no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar!',
          }).then((result) => {
            if (result.value) {
                fetch(`${API}/autor/${id}`,{method:'DELETE'}).then(res=>res.json()).then(response=>{
                    Swal.fire(
                        'Eliminado!',
                        response.info,
                        'success'
                    ).then(()=>window.location.assign('/autores'));
                })   
            }
        })
    };

    return (
        (loading)?<Loader/>:
        <div className="mt-5 container">
            <h2 className="mb-5">Adiminstración de autores</h2>
            <TablaAutores
                data={data}
                handleDelete={deleteAutor}/>
        </div>
    );
}
 
export default Autores;

