import React from 'react';
import {Link} from 'react-router-dom'
const TablaArticulos = (props) => {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className="text-center">Titulo</th>
                        <th scope="col" className="text-center">Fecha</th>
                        <th scope="col" className="text-center">Autor</th>
                        <th scope="col" className="text-center">
                            <Link to="/articulo/add" className="btn btn-success">Nuevo</Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(art=>(
                        <tr key={art.idArticulo}>
                            <td className="text-center">{art.titulo}</td>
                            <td className="text-center">{art.fecha}</td>
                            <td className="text-center">{art.nombre}</td>
                            <td className="text-center">
                                <Link to={{pathname: `/articulo/edit/${art.idArticulo}`}} className="btn btn-warning mr-2">Modificar</Link>
                                <button onClick={()=>props.handleDelete(art.idArticulo)} className="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
 
export default TablaArticulos;