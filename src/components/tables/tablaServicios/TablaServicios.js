import React from 'react';
import {Link} from 'react-router-dom'
const TablaServicios = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col" className="text-center">Titulo</th>
                    <th scope="col" className="text-center">
                        <Link to="/servicio/add" className="btn btn-success">Nuevo</Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(servicio=>(
                    <tr key={servicio.idServicio}>
                        <td className="text-center">{servicio.titulo}</td>
                        <td className="text-center">
                            <Link to={{pathname:`/servicio/edit/${servicio.idServicio}`}} className="btn btn-warning mr-2">Modificar</Link>
                            <button onClick={()=>props.eliminarServicio(servicio.idServicio)} className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default TablaServicios;