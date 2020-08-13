import React, { useState,useEffect } from 'react'
import TablaContacto from '../../components/tables/tablaContacto/tablaContacto';
import Loader from '../../components/Loader/Loader';
import Swal from 'sweetalert2';
import {API} from '../../config'
import {useUser} from 'reactfire'

const Contacto = (props) => {
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(undefined);
    const [formValues, setFormValues] = useState(undefined);

    useEffect(() => {
        fetchData();
    }, []);

    let user = useUser();
    if(!user) return window.location.assign('/auth');

    const fetchData = async()=>{
        try {
            await fetch(`${API}/contacto`).then(res=>res.json()).then(datos=>{
                setData(datos.data[0]);
                setFormValues(datos.data[0]);
                setloading(false);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateContact = async e=>{
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmitModal = e=>{
        e.preventDefault();
        if(validarForm(formValues)){
            setloading(true);
            fetch(`${API}/contacto/${formValues.idContacto}`,{
                method:'PUT',
                body:JSON.stringify(formValues),
                headers: { 'Content-Type': 'application/json' }
            }).then(res=>res.json()).then(response=>{
                setloading(false);
                Swal.fire(
                    'Listo!',
                    response.info,
                    'success'
                );
                setTimeout(() => {
                    window.location.assign('/contacto') 
                }, 1000);
            })
        };
    }

    const validarForm = state=>{
        if(state.telefonoPrincipal.trim() !== '' && state.telefonoSecundario.trim() !== '' && state.email.trim() !== '' && state.facebook.trim() !== '' && state.instagram.trim() !== '' && state.twitter.trim() !== '' && state.linkedin.trim() !== '' && state.email_personal.trim() !== ''){
            setError(false);
            return true;
        }
        setError(true)
        return false;
    }

    return ( 
        (loading)?<Loader/>:
            <div className="mt-5 container">
                <h2 className="mb-5">Adiminstración sección 'contacto'</h2>
                <TablaContacto 
                        data={data}
                        formValues={formValues}
                        handleChangeModal={handleUpdateContact}
                        handleSubmitModal={handleSubmitModal}
                        error={error}/>
            </div>
        );
}
 
export default Contacto;

