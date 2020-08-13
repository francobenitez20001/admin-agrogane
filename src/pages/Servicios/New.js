import React, { useState } from 'react';
import Loader from '../../components/Loader/Loader';
import ServicioForm from '../../components/Servicio/ServicioForm';
import Swal from 'sweetalert2';
import {useUser} from 'reactfire';
import {API} from '../../config';

const NewServicio = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formValues, setformValues] = useState({
        titulo:"",
        descripcion:""
    });

    let user = useUser();
    if(!user) return window.location.assign('/auth');

    const handleChange = event=>{
        setformValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = event=>{
        event.preventDefault();
        if(validarForm(formValues)){
            setLoading(true);
            fetch(`${API}/servicios`,{
                method:'POST',
                body:JSON.stringify(formValues),
                headers: {'Content-Type': 'application/json'}
            }).then(res=>res.json()).then(response=>{
                setLoading(false);
                Swal.fire(
                    'Listo!',
                    response.info,
                    'success'
                ).then(()=>{
                    window.location.assign('/servicios');
                });
            }).catch(err=>{
                console.log(err);
            })
        }
    }

    const validarForm = state=>{
        if(state.titulo.trim() !== '' && state.descripcion.trim() !== ''){
            setError(true);
            return true;
        }
        setError(false);
        return false;
    }

    return (
        (loading)?<Loader/>: 
            <ServicioForm
                add={true}
                error={error}
                formValues={formValues}
                handleChange={handleChange}
                handleSubmit={handleSubmit}/>
    );
}
 
export default NewServicio;


