import React from 'react';
import {Link} from 'react-router-dom';
const TablaAutores = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col" className="text-center">Nombre</th>
                    <th scope="col" className="text-center">Cargo</th>
                    <th scope="col" className="text-center">Titulo Profesional</th>
                    <th scope="col" className="text-center">
                        <Link to="/autor/add" className="btn btn-success">Nuevo</Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(autor=>(
                    <tr key={autor.idAutor}>
                        <td className="text-center">{autor.nombre}</td>
                        <td className="text-center">{autor.cargo}</td>
                        <td className="text-center">{autor.tituloProfesional}</td>
                        <td className="text-center">
                            <Link to={{pathname:`/autor/edit/${autor.idAutor}`}} className="btn btn-warning mr-2">Modificar</Link>
                            <button onClick={()=>props.handleDelete(autor.idAutor)} className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default TablaAutores;