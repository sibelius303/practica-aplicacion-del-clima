import React, { useState } from "react";

const ComponenteJuego = ()=> {
    const [pantalla, setPantalla] = useState ('');
    const verdades = ['me llamo cesar', 'me gusta fumar', 'quiero ser un gran programador'];
    const retos = ['ve a hacer algo', 'esto es un reto', 'esto es otro reto'];


    const handleVerdad = () => {
        let random = Math.floor(Math.random()*verdades.length);
        setPantalla(verdades[random]);
    }

    const handleReto = ()=> {
        let random = Math.floor(Math.random()*retos.length);
        setPantalla(retos[random]);
    };

    const handleSiguiente = ()=> {
        setPantalla('');

    };

    return (
        <div className="containerJuego">
            <div className="pantallaJuego">
                <p>{pantalla}</p>
                <button onClick={handleSiguiente}>Siguiente Jugador</button>
            </div>
            <div className="botonesJuego">
                <button className="verdad" onClick={handleVerdad}>Verdad</button>
                <button className="reto" onClick={handleReto}>Reto</button>
            </div>
        </div>
    );
};

export default ComponenteJuego;