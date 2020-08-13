import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import 'firebase/auth';
import {useFirebaseApp,useUser} from 'reactfire';
const Navbar = () => {

    const firebase = useFirebaseApp();
    const user = useUser();

    const logout = async()=>{
        await firebase.auth().signOut();
        window.location.assign('/auth');
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">Agrogane</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/articulos">Articulos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/nosotros">Nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contacto">Contacto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/autores">Autor</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/exitos">Casos de éxito</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/servicios">Servicios</Link>
                    </li>
                    {(user)?<button className="btn btn-danger" onClick={logout}>Salir</button>:null}
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;