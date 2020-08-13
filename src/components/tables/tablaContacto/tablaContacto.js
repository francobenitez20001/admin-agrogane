import React from 'react';
import Modal from '../../Modals/Modal';
import Error from '../../Error/Error';

const TablaContacto = (props) => {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">Telefono Principal</th>
                        <th scope="col" className="text-center">Telefono Secundario</th>
                        <th scope="col" className="text-center">Email</th>
                        <th scope="col" className="text-center">Email Personal</th>
                        <th scope="col" className="text-center">Facebook</th>
                        <th scope="col" className="text-center">Instagram</th>
                        <th scope="col" className="text-center">Twitter</th>
                        <th scope="col" className="text-center">linkedin</th>
                    </tr>
                </thead>
                <tbody>
                    {(props.data === null)?<tr><td>Sin resultados</td></tr>:
                        <tr>
                            <td className="text-center">{props.data.telefonoPrincipal}</td>
                            <td className="text-center">{props.data.telefonoSecundario}</td>
                            <td className="text-center">{props.data.email}</td>
                            <td className="text-center">{props.data.email_personal}</td>
                            <td className="text-center">{props.data.facebook}</td>
                            <td className="text-center">{props.data.instagram}</td>
                            <td className="text-center">{props.data.twitter}</td>
                            <td className="text-center">{props.data.linkedin}</td>
                            <td className="text-center">
                                <button data-toggle="modal" data-target="#staticBackdrop" className="btn btn-warning mr-2">Modificar</button>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
            {(props.data !== null)?
            <Modal>
                <form className="form-group" onSubmit={props.handleSubmitModal}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Datos de contacto</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {(props.error)?<Error message="Completa todos los campos"/>:null}
                    <div className="modal-body">
                        <div className="col-12 input-group py-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Telefono Principal
                                </div>
                            </div>
                            <input className="form-control" value={props.formValues.telefonoPrincipal} onChange={props.handleChangeModal} name="telefonoPrincipal" required/>
                        </div>
                        <div className="col-12 input-group py-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Telefono Secundario
                                </div>
                            </div>
                            <input className="form-control col-12" value={props.formValues.telefonoSecundario} onChange={props.handleChangeModal} name="telefonoSecundario" required/>
                        </div>
                        <div className="col-12 input-group py-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Email
                                </div>
                            </div>
                            <input type="email" className="form-control col-12" value={props.formValues.email} onChange={props.handleChangeModal} name="email" required/>
                        </div>
                        <div className="col-12 input-group py-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Email Personal
                                </div>
                            </div>
                            <input type="email" className="form-control col-12" value={props.formValues.email_personal} onChange={props.handleChangeModal} name="email_personal" required/>
                        </div>
                        <div className="col-12 input-group py-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Facebook
                                </div>
                            </div>
                            <input className="form-control col-12" value={props.formValues.facebook} onChange={props.handleChangeModal} name="facebook" required/>
                        </div>
                        <div className="col-12 input-group py-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Instagram
                                </div>
                            </div>
                            <input className="form-control col-12" value={props.formValues.instagram} onChange={props.handleChangeModal} name="instagram" required/>
                        </div>
                        <div className="col-12 input-group py-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    Twitter
                                </div>
                            </div>
                            <input className="form-control col-12" value={props.formValues.twitter} onChange={props.handleChangeModal} name="twitter" required/>
                        </div>
                        <div className="col-12 input-group py-4">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    linkedin
                                </div>
                            </div>
                            <input className="form-control col-12" value={props.formValues.linkedin} onChange={props.handleChangeModal} name="linkedin" required/>
                        </div>
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
 
export default TablaContacto;