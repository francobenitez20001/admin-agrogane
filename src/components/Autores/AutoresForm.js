import React from 'react';
import Error from '../Error/Error';
const AutoresForm = (props) => {
    if(props.add){
        return(
            <div className="container mt-3">
                <h2 className="mb-3">Nuevo autor</h2>
                <form className="form-group" id="nuevoAutor" onSubmit={props.handleSubmit}>
                    <div className="row">
                        <div className="col-12 col-sm-6 input-group my-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Nombre
                                </div>
                            </div>
                            <input className="form-control" name="nombre" onChange={props.handleChange}/>
                        </div>
                        <div className="col-12 col-sm-6 input-group my-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Cargo
                                </div>
                            </div>
                            <input type="text" className="form-control" name="cargo" onChange={props.handleChange}/>
                        </div>
                        <div className="col-12 col-sm-6 input-group my-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Titulo Profesional
                                </div>
                            </div>
                            <input type="text" className="form-control" name="tituloProfesional" onChange={props.handleChange}/>
                        </div>
                        <div className="col-12 my-4">
                            <textarea name="testimonio" rows="10" placeholder="Testimonio del autor" onChange={props.handleChange} className="form-control">

                            </textarea>
                        </div>
                        <div className="col-12 my-4">
                            <textarea name="descripcion" rows="10" placeholder="Descripción del autor" onChange={props.handleChange} className="form-control">

                            </textarea>
                        </div>
                        <div className="col-12 col-sm-6 my-4">
                            <input type="file" className="form-control" name="foto" onChange={props.handleChange}/>
                        </div>
                    </div>
                    {(props.error)?<Error message="Completa todos los campos"/>:null}
                    <center><input type="submit" className="btn btn-warning mt-3" value="Agregar"/></center>
                </form>
            </div>
        )
    }
    return (
        <div className="container mt-3">
            <h2 className="mb-3">Modificación de autor</h2>
            <form className="form-group" id="modificarAutor" onSubmit={props.handleSubmit}>
                <div className="row">
                    <div className="col-12 col-sm-6 input-group my-4">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                Nombre
                            </div>
                        </div>
                        <input className="form-control" name="nombre" value={props.formValues.nombre} onChange={props.handleChange}/>
                    </div>
                    <div className="col-12 col-sm-6 input-group my-4">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                Cargo
                            </div>
                        </div>
                        <input type="text" className="form-control" name="cargo" value={props.formValues.cargo} onChange={props.handleChange}/>
                    </div>
                    <div className="col-12 col-sm-6 input-group my-4">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                Titulo Profesional
                            </div>
                        </div>
                        <input type="text" className="form-control" name="tituloProfesional" value={props.formValues.tituloProfesional} onChange={props.handleChange}/>
                    </div>
                    <div className="col-12 my-4">
                        <label>Testimonio</label>
                        <textarea name="testimonio" cols="30" rows="10" defaultValue={props.formValues.testimonio} onChange={props.handleChange} className="form-control">
                            
                        </textarea>
                    </div>
                    <div className="col-12 my-4">
                        <label>Descripción</label>
                        <textarea name="descripcion" defaultValue={props.formValues.descripcion} cols="30" rows="10" onChange={props.handleChange} className="form-control">
        
                        </textarea>
                    </div>
                    <div className="col-12 col-sm-6 my-4">
                        <input type="file" className="form-control"  name="foto" onChange={props.handleChange}/>
                    </div>
                    <div className="col-12 col-sm-6 my-4">
                        <img src={`https://agrogane.com.ar/api/public/img/${props.data.foto}`} alt="avatar" className="img-fluid" style={{width:"100px",borderRadius:"50%",float:"right"}}/>
                    </div>
                </div>
                {(props.error)?<Error message="Completa todos los campos"/>:null}
                <center><input type="submit" className="btn btn-warning mt-3" value="Modificar"/></center>
            </form>
        </div>
    );
}
 
export default AutoresForm;