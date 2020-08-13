import React from 'react';
import {Route,Switch, BrowserRouter} from 'react-router-dom';
import '../App.css';
import Layout from './Layout/Layout';

import Home from '../pages/Home/Home';
import Articulos from '../pages/Articulos/Articulos';
import Nosotros from '../pages/Nosotros/Nosotros';
import Contacto from '../pages/Contacto/Contacto';
import Autores from '../pages/Autores/Autores';
import Exitos from '../pages/Exitos/Exitos';
import Servicios from '../pages/Servicios/Servicios';

import Auth from './Auth/Auth.js';

import EditArticulo from '../pages/Articulos/Edit';
import NewArticulo from '../pages/Articulos/New';

import NewAutor from '../pages/Autores/New';
import EditAutor from '../pages/Autores/Edit';

import NewExito from '../pages/Exitos/New';
import EditCaso from '../pages/Exitos/Edit';

import NewServicio from '../pages/Servicios/New';
import EditServicio from '../pages/Servicios/Edit';

function App() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/articulos' component={Articulos}/>
            <Route exact path='/nosotros' component={Nosotros}/>
            <Route exact path='/contacto' component={Contacto}/>
            <Route exact path='/autores' component={Autores}/>
            <Route exact path='/exitos' component={Exitos}/>
            <Route exact path='/servicios' component={Servicios}/>
            <Route exact path='/articulo/edit/:id' component={EditArticulo}/>
            <Route exact path='/articulo/add/' component={NewArticulo}/>
            <Route exact path='/autor/edit/:id' component={EditAutor}/>
            <Route exact path='/autor/add/' component={NewAutor}/>
            <Route exact path='/exito/add/' component={NewExito}/>
            <Route exact path='/exito/edit/:id' component={EditCaso}/>
            <Route exact path='/servicio/add/' component={NewServicio}/>
            <Route exact path='/servicio/edit/:id' component={EditServicio}/>
            <Route exact path='/auth' component={Auth}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
}

export default App;
<App/>