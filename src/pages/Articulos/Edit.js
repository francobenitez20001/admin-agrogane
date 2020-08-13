import React, { useEffect,useState } from 'react';
import Loader from '../../components/Loader/Loader';
import ArticulosForm from '../../components/Articulos/ArticulosForm';
import {API} from '../../config';
import Swal from 'sweetalert2';
import {useUser} from 'reactfire';

const EditArticulo = (props) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(undefined);
    const [autores, setAutores] = useState(undefined);
    const [formValues, setFormValues] = useState(undefined);

    useEffect(() => {
        fetchData();
    }, []);

    let user = useUser();
    if(!user){
        return window.location.assign('/auth');
    }
    const fetchData = async ()=>{
        try {
            await fetch(`${API}/articulos/${props.match.params.id}`).then(res=>res.json()).then(articulo=>{
                setData(articulo.data);
                setFormValues(articulo.data[0])
            })
            await fetch(`${API}/autor`).then(res=>res.json()).then(autores=>{
                setAutores(autores.data);
            })
            setLoading(false);
        } catch (error) {
            setError(error);
        }
    }
    
    const handleChange = event=>{
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })
    };

    const handleSubmit = event=>{
        event.preventDefault();
        if(validarForm(formValues)){
            setLoading(true);
            let form = new FormData(document.getElementById('modificarArticulo')); 
            fetch(`${API}/articulos/${props.match.params.id}`,{
                method:'PUT',
                body:form
            }).then(res=>res.json()).then(res=>{
                setLoading(false);
                Swal.fire(
                    'Modificado!',
                    res.info,
                    'success'
                ).then(()=>window.location.assign('/articulos'));
            }).catch(err=>{
                console.log(err);
            })
        }
    }

    const validarForm=state=>{
        if(state.titulo.trim()!=='' && state.fecha.trim()!== '' && state.idAutor !== ''){
            setError(false);
            return true;
        }
        setError(true);
        return false;
    }


    return (
        (loading)?<Loader/>:
            <ArticulosForm
                error={error}
                autores={autores}
                formValues={formValues}
                data={data}
                handleChange={handleChange}
                handleSubmit={handleSubmit}/>
    );
}
 
export default EditArticulo;