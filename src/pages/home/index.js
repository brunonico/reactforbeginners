import React from "react";
import { Link } from 'react-router-dom';

export default ({history}) => {
    const pulsado = _ => {
        history.replace('/contacto');
    }

    return <div>Home
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/producto/1">Producto 1</Link></li>
            <li><Link to="/ajksdfkjhasdk">Error en la url</Link></li>
        </ul>
        <button onClick={pulsado}>Pulsame</button>
    </div>
}