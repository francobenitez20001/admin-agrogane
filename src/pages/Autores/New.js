import React, { useState } from 'react';
import Loader from '../../components/Loader/Loader';
import AutoresForm from '../../components/Autores/AutoresForm';
import Swal from 'sweetalert2';
import {API} from '../../config';
import {useUser} from 'reactfire';

const NewAutor = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(undefined);
    const [formValues, setFormValues] = useState(undefined);

    const handleChange = event=>{
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })
    }

    let user = useUser();
    if(!user) return window.location.assign('/auth');

    const handleSubmit = event=>{
        event.preventDefault();
        if(validarForm(formValues)){
            setLoading(true);
            let form = new FormData(document.getElementById('nuevoAutor'));
            fetch(`${API}/autor`,{
                method:'POST',
                body:form
            }).then(res=>res.json()).then(res=>{
                setLoading(false);
                Swal.fire(
                    'Listo!',
                    res.info,
                    'success'
                ).then(()=>{
                    window.location.assign('/autores');
                });
            }).catch(err=>{
                setError(err);
            })
        }
    }

    const validarForm = state=>{
        if(state.cargo.trim() !== '' && state.descripcion.trim() !== '' && state.nombre.trim() !== '' 
        && state.testimonio.trim() !== '' && state.testimonio.tituloProfesional !== '' && state.foto !== ''){
            setError(false);
            return true;
        }
        setError(true);
        return false;
    }


    return (
        (loading)?<Loader/>: 
            <AutoresForm
                add={true}
                error={error}
                data={data}
                handleChange={handleChange}
                handleSubmit={handleSubmit}/>
    );
}
 
export default NewAutor;
