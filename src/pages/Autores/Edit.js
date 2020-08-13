import React, { useState,useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import AutoresForm from '../../components/Autores/AutoresForm';
import Swal from 'sweetalert2';
import {API} from '../../config';
import {useUser} from 'reactfire';

const EditAutor = (props) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(undefined);
    const [formValues, setFormValues] = useState(undefined);

    useEffect(() => {
        getAutor();
    }, []);

    let user = useUser();
    if(!user) return window.location.assign('/auth');

    const getAutor= async()=>{
        try {
            await fetch(`${API}/autor/${props.match.params.id}`).then(res=>res.json()).then(autor=>{
                setData(autor.data[0]);
                setFormValues(autor.data[0]);
                setLoading(false);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = event=>{
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = event=>{
        event.preventDefault();
        if(validarForm(formValues)){
            setLoading(true);
            let form = new FormData(document.getElementById('modificarAutor'));
            fetch(`${API}/autor/${props.match.params.id}`,{
                method:'PUT',
                body:form
            }).then(res=>res.json()).then(response=>{
                setLoading(false);
                Swal.fire(
                    'Listo!',
                    response.info,
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
        setError(true)
        return false;
    }

    return (
        (loading)?<Loader/>: 
            <AutoresForm
                error={error}
                data={data}
                formValues={formValues}
                handleChange={handleChange}
                handleSubmit={handleSubmit}/>
    );
}
 
export default EditAutor;
