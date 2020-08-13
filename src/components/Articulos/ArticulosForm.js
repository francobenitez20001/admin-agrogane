import React from 'react';
import Error from '../../components/Error/Error';
const ArticulosForm = (props) => {
    if(props.add){
        return(
            <div className="container mt-3">
                <h2 className="mb-3">Nuevo articulo</h2>
                <form className="form-group" id="nuevoArticulo" onSubmit={props.handleSubmit}>
                    {(props.error)?<Error message="Completa todos los campos"/>:null}
                    <div className="row">
                        <div className="col-12 col-sm-6 input-group my-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Titulo
                                </div>
                            </div>
                            <input className="form-control" value={props.formValues.titulo} name="titulo" onChange={props.handleChange}/>
                        </div>
                        <div className="col-12 col-sm-6 input-group my-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Fecha
                                </div>
                            </div>
                            <input type="date" className="form-control" name="fecha" onChange={props.handleChange}/>
                        </div>
                        <div className="col-12 col-sm-6 input-group my-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Autor
                                </div>
                            </div>
                            <select className="form-control" name="idAutor" onChange={props.handleChange}>
                                <option value="">Seleccione un autor</option>
                                {props.autores.map(autor=>(
                                    <option key={autor.idAutor} value={autor.idAutor}>{autor.nombre}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-12 col-sm-6 input-group my-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Imagen
                                </div>
                            </div>
                            <input type="file" className="form-control" name="imagen" onChange={props.handleChange}/>
                        </div>
                        <div className="col-12 col-sm-6 input-group my-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Url del documento
                                </div>
                            </div>
                            <input type="text" className="form-control" name="archivo" onChange={props.handleChange}/>
                        </div>
                        <div className="col-12 my-4">
                            <label>Resumen del artículo:</label>
                            <textarea className="form-control" name="resumen" rows="50" onChange={props.handleChange}></textarea>
                        </div>
                    </div>
                    <center><input type="submit" className="btn btn-warning mt-3" value="Agregar"/></center>
                </form>
            </div>
        )
    }
    return (
        <div className="container mt-3">
            <h2 className="mb-3">Editar articulo</h2>
            <form className="form-group" id="modificarArticulo" onSubmit={props.handleSubmit}>
                <div className="row">
                    {(props.error)?<Error message="Completa todos los campos"/>:null}
                    <div className="col-12 alert alert-warning"><b>Atención</b>, en el caso de que quiera modificar la imagen de presentación, debe subir un archivo en el campo <b>foto</b>. De lo contrario puede dejar vacio ese campo.</div>
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
                                Fecha
                            </div>
                        </div>
                        <input className="form-control" name="fecha" value={props.formValues.fecha.substring(0,10)} onChange={props.handleChange}/>
                    </div>
                    <div className="col-12 col-sm-6 input-group my-4">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                Autor
                            </div>
                        </div>
                        <select className="form-control" name="idAutor" onChange={props.handleChange}>
                            <option value={props.data[0].idAutor}>{props.data[0].nombre}</option>
                            {props.autores.map(autor=>(
                                    <option key={autor.idAutor} value={autor.idAutor}>{autor.nombre}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-12 col-sm-6 input-group my-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Foto
                                </div>
                            </div>
                            <input type="file" className="form-control" name="imagen" onChange={props.handleChange}/>
                    </div>
                    <div className="col-12 input-group my-4">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                Url del Documento
                            </div>
                        </div>
                        <input type="text" className="form-control" name="archivo" value={props.formValues.archivo} onChange={props.handleChange}/>
                    </div>
                    <div className="col-12 my-4">
                        <label>Resumen del articulo</label>
                        <textarea className="form-control" rows="50" name="resumen" defaultValue={props.formValues.resumen} onChange={props.handleChange}></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 my-4">
                        <label className="d-block">Imagen de presentación:</label>
                        <img src={`https://agrogane.com.ar/api/public/img/${props.data[0].imagen}`} alt="header" style={{height:"300px"}} className="img-fluid"/>
                    </div>
                </div>
                <center><input type="submit" className="btn btn-warning mt-3" value="Modificar"/></center>
            </form>
        </div>
    );
}
 
export default ArticulosForm;