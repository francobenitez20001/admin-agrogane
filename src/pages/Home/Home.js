import React from 'react';
import {Link} from 'react-router-dom';
import Menu from '../../menu.json';
const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                {Menu.map(item=>(
                    <div key={item.id} className="col-12 col-sm-6 col-md-4 my-3">
                        <div className="card">
                            <div className="card-header">
                                {item.titulo}
                            </div>
                            <div className="card-body">
                                <p className="card-text">{item.subtitulo}</p>
                                <Link to={item.url} className="btn btn-primary btn-block">{item.boton}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Home;