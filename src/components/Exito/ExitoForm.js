import React from 'react';
import Error from '../Error/Error';
const ExitoForm = (props) => {
        if(props.add){
            return(
                <div className="container mt-3">
                    <h2 className="mb-3">Nuevo Caso</h2>
                    <form className="form-group" id="nuevoCaso" onSubmit={props.handleSubmit}>
                        {(props.error)?<Error message="Completar todos los campos"/>:null}
                        <div className="row">
                            <div className="col-12 col-sm-6 input-group my-4">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        Titulo
                                    </div>
                                </div>
                                <input className="form-control" name="titulo" value={props.formValues.titulo} onChange={props.handleChange}/>
                            </div>
                            <div className="col-12 col-sm-6 input-group my-4">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        Subtitulo
                                    </div>
                                </div>
                                <input type="text" className="form-control" name="subtitulo" value={props.formValues.subtitulo} onChange={props.handleChange}/>
                            </div>
                            <div className="col-12 my-4">
                                <textarea name="descripcion" rows="10" placeholder="Descripción del caso" onChange={props.handleChange} className="form-control">
    
                                </textarea>
                            </div>
                            <div className="col-12 col-sm-6 my-4">
                                <input type="file" className="form-control file" name="foto" onChange={props.handleChange}/>
                            </div>
                        </div>
                        <center><input type="submit" className="btn btn-warning mt-3" value="Agregar"/></center>
                    </form>
                </div>
            )
        }
        return (
            <div className="container mt-3">
                <h2 className="mb-3">Modificar Caso</h2>
                <form className="form-group" id="formModificarCaso" onSubmit={props.handleSubmit}>
                    {(props.error)?<Error message="Completar todos los campos"/>:null}
                    <div className="row">
                        <div className="col-12 col-sm-6 input-group my-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Titulo
                                </div>
                            </div>
                            <input className="form-control" name="titulo" value={props.formValues.titulo} onChange={props.handleChange}/>
                        </div>
                        <div className="col-12 col-sm-6 input-group my-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Subtitulo
                                </div>
                            </div>
                            <input type="text" className="form-control" name="subtitulo" value={props.formValues.subtitulo} onChange={props.handleChange}/>
                        </div>
                        <div className="col-12 my-4">
                            <textarea name="descripcion" rows="10" placeholder="Testimonio del autor" defaultValue={props.formValues.descripcion} onChange={props.handleChange} className="form-control">
    
                            </textarea>
                        </div>
                        <div className="col-12 col-sm-6 my-4">
                            <input type="file" className="form-control" name="foto" onChange={props.handleChange}/>
                        </div>
                        <div className="col-12 col-sm-6 my-4">
                            <label>Imagen del caso:</label>
                            <img src={`https://agrogane.com.ar/api/public/img/${props.formValues.foto}`} alt="imagen del caso de exito" className="img-fluid"/>
                        </div>
                    </div>
                    <center><input type="submit" className="btn btn-warning mt-3" value="Modificar"/></center>
                </form>
            </div>
        );
}
 
export default ExitoForm;