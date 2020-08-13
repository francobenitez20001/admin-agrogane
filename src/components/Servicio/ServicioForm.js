import React from 'react';
import Error from '../Error/Error';
const ServicioForm = (props) => {
        if(props.add){
            return(
                <div className="container mt-3">
                    <h2 className="mb-3">Nuevo Servicio</h2>
                    <form className="form-group" onSubmit={props.handleSubmit}>
                        {(props.error)?<Error message="Completar todos los campos"/>:null}
                        <div className="row">
                            <div className="col-12 input-group my-4">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        Titulo
                                    </div>
                                </div>
                                <input className="form-control" name="titulo" value={props.formValues.titulo} onChange={props.handleChange}/>
                            </div>
                            <div className="col-12 my-4">
                                <textarea name="descripcion" rows="10" onChange={props.handleChange} className="form-control">
    
                                </textarea>
                            </div>
                        </div>
                        <center><input type="submit" className="btn btn-warning mt-3" value="Agregar"/></center>
                    </form>
                </div>
            )
        }
        return (
                <div className="container mt-3">
                    <h2 className="mb-3">Editar Servicio</h2>
                    <form className="form-group" onSubmit={props.handleSubmit}>
                        {(props.error)?<Error message="Completar todos los campos"/>:null}
                        <div className="row">
                            <div className="col-12 input-group my-4">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        Titulo
                                    </div>
                                </div>
                                <input className="form-control" name="titulo" value={props.formValues.titulo} onChange={props.handleChange}/>
                            </div>
                            <div className="col-12 my-4">
                                <textarea name="descripcion" rows="10" defaultValue={props.formValues.descripcion} onChange={props.handleChange} className="form-control">
    
                                </textarea>
                            </div>
                        </div>
                        <center><input type="submit" className="btn btn-warning mt-3" value="Modificar"/></center>
                    </form>
                </div>
        );
}
 
export default ServicioForm;