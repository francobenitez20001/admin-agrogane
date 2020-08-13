import React, { useState } from 'react';
import Loader from '../../components/Loader/Loader';
import ExitoForm from '../../components/Exito/ExitoForm';
import Swal from 'sweetalert2';
import {API} from '../../config';
import {useUser} from 'reactfire';

const NewCaso = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formValues, setformValues] = useState({
        titulo:"",
        subtitulo:"",
        descripcion:"",
        foto:""
    });

    let user = useUser();
    if(!user) return window.location.assign('/auth');

    const handleChange = event=>{
        if(event.target.name === 'foto'){
            setformValues({
                ...formValues,
                [event.target.name]: event.target.files[0]
            })
        }else{
            setformValues({
                ...formValues,
                [event.target.name]: event.target.value
            })
        }
    }

    const handleSubmit = event=>{
        event.preventDefault();
        if(validarForm(formValues)){
            setLoading(true);
            let dataForm = new FormData(document.getElementById('nuevoCaso'));//lo envio con formData porque sino no pude lograr mandar la imagen
            fetch(`${API}/caso-exito`,{
                method:'POST',
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
                console.log(err);
            })
        }
    }

    const validarForm = state=>{
        if(state.titulo.trim() !== '' && state.subtitulo.trim() !== '' && 
        state.descripcion.trim() !== '' && state.foto !== ''){
            setError(false);
            return true;
        }
        setError(true);
        return false;
    }

    return (
        (loading)?<Loader/>: 
            <ExitoForm
                add={true}
                error={error}
                formValues={formValues}
                handleChange={handleChange}
                handleSubmit={handleSubmit}/>
    );
}
 
export default NewCaso;
