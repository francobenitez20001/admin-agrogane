import React, { useEffect,useState } from 'react';
import Loader from '../../components/Loader/Loader';
import ArticulosForm from '../../components/Articulos/ArticulosForm';
import Swal from 'sweetalert2';
import {API} from '../../config';
import {useUser} from 'reactfire';

const NewArticulo = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [autores, setAutores] = useState(undefined);
    const [formValues, setFormValues] = useState({
        titulo:"",
        fecha:"",
        idAutor:"",
        imagen:"",
        archivo:"",
        resumen:""
    });

    useEffect(() => {
        fetchAutores();
    }, []);

    let user = useUser();
    if(!user){
        return window.location.assign('/auth');
    }

    const fetchAutores = async()=>{
        try {
            await fetch(`${API}/autor`).then(res=>res.json()).then(autores=>{
                setAutores(autores.data);
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
            let form = new FormData(document.getElementById('nuevoArticulo')); 
            fetch(`${API}/articulos`,{
                method:'POST',
                body:form
            }).then(res=>res.json()).then(res=>{
                setLoading(false);
                Swal.fire(
                    'Agregado!',
                    res.info,
                    'success'
                ).then(()=>window.location.assign('/articulos'));
            }).catch(err=>{
                console.log(err);
            })
        }
    }

    const validarForm=state=>{
        if(state.titulo.trim()!=='' && state.fecha.trim()!== '' && state.idAutor !== '' &&
        state.image !== '' && state.archivo !== ''){
            setError(false);
            return true;
        }
        setError(true);
        return false;
    }


    return (
        (loading)?<Loader/>:
            <ArticulosForm
                add={true}
                error={error}
                autores={autores}
                formValues={formValues}
                handleChange={handleChange}
                handleSubmit={handleSubmit}/>
    );
}

export default NewArticulo;