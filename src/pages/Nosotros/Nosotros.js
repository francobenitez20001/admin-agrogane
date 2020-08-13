import React, { useEffect,useState } from 'react'
import TablaNosotros from '../../components/tables/tablaNosotros/TablaNosotros'
import Swal from 'sweetalert2';
import Loader from '../../components/Loader/Loader';
import {API} from '../../config';
import {useUser} from 'reactfire';

const Nosotros = (props) => {
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(undefined);
    const [formValues, setFormValues] = useState(undefined);

    const [fileIsOpen, setFileIsOpen] = useState(false);//estado que controla que se vea o no el input file.

    useEffect(() => {
        getNosotros();
    }, []);

    let user = useUser();
    if (!user) return window.location.assign('/auth');

    const validarForm = state=>{
        if(state.descripcion.trim() !== ''){
            setError(false);
            return true;
        }
        setError(false);
        return false;
    }
    const handleSubmitModal = e=>{
        e.preventDefault();
        if(validarForm(formValues)){
            setloading(true);
            fetch(`${API}/nosotros/${formValues.id}`,{
                method:'PUT',
                body:new FormData(document.getElementById('modificarNosotros'))
            }).then(res=>res.json()).then(response=>{
                setloading(false);
                Swal.fire(
                    'Listo!',
                    response.info,
                    'success'
                );
                setTimeout(() => {
                    window.location.assign('/nosotros') 
                }, 1000);
            })
        };
    }
    const handleUpdateNosotros = async e=>{
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    }

    const getNosotros = async()=>{
        try {
            await fetch(`${API}/nosotros`).then(res=>res.json()).then(info=>{
                setData(info.data[0]);
                setFormValues(info.data[0]);
                setloading(false);
            })
        } catch (error) {
            console.error(error);
        }
    }

    const switchEstadoForm = event=>{
        if(fileIsOpen) return setFileIsOpen(false);
        return setFileIsOpen(true);
    }

    return (
        (loading)?<Loader/>:
            <div className="mt-5 container">
                <h2 className="mb-5">Adiminstración sección 'nosotros'</h2>
                <TablaNosotros
                    data={data}
                    formValues={formValues}
                    handleChangeModal={handleUpdateNosotros}
                    getNosotros={getNosotros}
                    handleSubmitModal={handleSubmitModal}
                    error={error}
                    fileIsOpen={fileIsOpen}
                    switchEstadoForm={switchEstadoForm}/>
            </div>
    );
}
 
export default Nosotros;
