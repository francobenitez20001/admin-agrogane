import React, { useEffect,useState } from 'react';
import Loader from '../../components/Loader/Loader';
import ExitoForm from '../../components/Exito/ExitoForm';
import Swal from 'sweetalert2';
import {API} from '../../config';
import {useUser} from 'reactfire';

const EditCaso = (props) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(undefined);
    const [formValues, setformValues] = useState(undefined);

    useEffect(() => {
        fetchCaso();
    }, [])

    let user = useUser();
    if(!user) return window.location.assign('/auth');

    const fetchCaso = async()=>{
        try {
            await fetch(`${API}/caso-exito/${props.match.params.id}`).then(res=>res.json()).then(data=>{
                setData(data.data[0]);
                setformValues(data.data[0]);
                setLoading(false);
            })
        } catch (error) {
            console.log(error);
        }
    }

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
            let dataForm = new FormData(document.getElementById('formModificarCaso'));
            fetch(`${API}/caso-exito/${props.match.params.id}`,{
                method:'PUT',
                body:dataForm
            }).then(res=>res.json()).then(response=>{
                setLoading(false);
                Swal.fire(
                    'Listo!',
                    response.info,
                    'success'
                ).then(()=>{
                    window.location.assign('/exitos');
                });
            }).catch(err=>{
                console.error(err);
            })
        }
    }

    const validarForm = state=>{
        if(state.titulo.trim() !== '' && state.subtitulo.trim() !== '' && 
        state.descripcion.trim() !== ''){
            setError(false);
            return true;
        }
        setError(true);
        return false;
    }

    return (
        (loading)?<Loader/>: 
            <ExitoForm
                add={false}
                error={error}
                data={data}
                formValues={formValues}
                handleChange={handleChange}
                handleSubmit={handleSubmit}/>
    );
}
export default EditCaso;