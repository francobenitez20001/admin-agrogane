import React from 'react';
import {Link} from 'react-router-dom'
const TablaExitos = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col" className="text-center">Titulo</th>
                    <th scope="col" className="text-center">
                        <Link to="/exito/add" className="btn btn-success">Nuevo</Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(caso=>(
                    <tr key={caso.idCaso}>
                        <td className="text-center">{caso.titulo}</td>
                        <td className="text-center">
                            <Link to={{pathname:`/exito/edit/${caso.idCaso}`}} className="btn btn-warning mr-2">Modificar</Link>
                            <button onClick={()=>props.eliminarCaso(caso.idCaso)} className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default TablaExitos;