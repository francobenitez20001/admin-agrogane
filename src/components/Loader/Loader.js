import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Loader.css';

const Loader = () => {
    return (
        <div id="LoaderFullWidth">
            <CircularProgress style={{color:"#2e7737"}} className="loader-full" />
            <p className="text-center">Obteniendo resultados...</p>
        </div>
    );
}
 
export default Loader;