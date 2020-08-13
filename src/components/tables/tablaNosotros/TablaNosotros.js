import React from 'react';
import Modal from '../../Modals/Modal';
import Error from '../../Error/Error';

const TablaNosotros = (props) => {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">Desripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {(props.data === null)?<tr><td>Sin resultados</td></tr>:
                        <tr>
                            <td className="text-left">{props.data.descripcion}</td>
                            <td className="text-center">
                                <button data-toggle="modal" data-target="#staticBackdrop" className="btn btn-warning mr-2">Modificar</button>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
            {(props.data != null)?
            <Modal>
                <form className="form-group" onSubmit={props.handleSubmitModal} id="modificarNosotros">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Datos de nosotros</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {(props.error)?<Error message="Completa todos los campos"/>:null}
                    <div className="modal-body">
                        <div className="col-12 input-group mb-2">
                            <textarea className="form-control" rows="10" name="descripcion" defaultValue={props.formValues.descripcion} onChange={props.handleChangeModal}>

                            </textarea>
                        </div>
                        <input type="checkbox" className="my-4" name="checkmodificarimagen" onChange={props.switchEstadoForm}/> Modifcar Imágen de sección
                        {(props.fileIsOpen)?<input type="file" name="header"/>:null}
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-warning">Modificar</button>
                    </div>
                </form>
            </Modal>
            :null}
        </>
    );
}
 
export default TablaNosotros;