import React, { useState,useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import ServicioForm from '../../components/Servicio/ServicioForm';
import Swal from 'sweetalert2';
import {useUser} from 'reactfire';
import {API} from '../../config';

const EditServicio = (props) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(undefined);
    const [formValues, setformValues] = useState(undefined);

    useEffect(() => {
        fetchServicio();
    }, []);

    let user = useUser();
    if(!user) return window.location.assign('/auth');

    const fetchServicio = async()=>{
        try {
            fetch(`${API}/servicios/${props.match.params.id}`).then(res=>res.json()).then(data=>{
                setData(data.data[0]);
                setformValues(data.data[0]);
                setLoading(false);
            })
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = event=>{
        setformValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event=>{
        event.preventDefault();
        if(validarForm(formValues)){
            setLoading(true);
            fetch(`${API}/servicios/${props.match.params.id}`,{
                method:'PUT',
                body:JSON.stringify(formValues),
                headers:{'Content-Type':'application/json'}
            }).then(res=>res.json()).then(response=>{
                setLoading(false);
                Swal.fire(
                    'Listo!',
                    response.info,
                    'success'
                ).then(()=>{
                    window.location.assign('/servicios');
                })
            })
        }
    }

    const validarForm = state=>{
        if(state.titulo.trim() !== '' && state.descripcion.trim() !== ''){
            setError(false);
            return true;
        }
        setError(true);
        return false;
    }

    return (
        (loading)?<Loader/>: 
            <ServicioForm
                add={false}
                error={error}
                data={data}
                formValues={formValues}
                handleChange={handleChange}
                handleSubmit={handleSubmit}/>
    );
}
 
export default EditServicio;

