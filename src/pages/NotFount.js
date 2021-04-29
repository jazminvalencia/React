import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import error from '../images/astronauta.jpg'
import '../components/style/NotFount.css'

function NotFount(props) {
    return (
        <React.Fragment>
            <div className="Nofound-back">
                <img className="img-fluid" src={error} alt="Logo"></img>
                <h1 className="title-noFount">404: Pagina no encontrada</h1>
            </div>
        </React.Fragment>
    )
}

export default NotFount;