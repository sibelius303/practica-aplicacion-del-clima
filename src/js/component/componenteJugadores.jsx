import React, { useState } from "react";

const ComponenteJugadores = ()=> {
    const [inputValue, setInputValue]= useState('');
    const [jugadores, setJugadores] = useState([]);

    const handleChange = (e)=>{

        const value = e.target.value;
        setInputValue(value);
    };

    const handleKey = (e) =>{
        if (e.key === 'Enter'){
            let copia = [...jugadores];
            copia.push(inputValue);
            setJugadores(copia);
            setInputValue('')

        }

    };

    return (
        <div className="containerJugadores">
            <form className="formInput">
                <input type="text" placeholder="Agregar Jugadores" value={inputValue} onChange={handleChange} onKeyDown={handleKey}/>
            </form>
            <ul className="panelJugadores">
                {
                    jugadores.map((jugador,id)=>{
                        return (
                            <div key={id}>
                                {jugador}
                            </div>

                        );
                    })
                }
            </ul>
            <h1>Cesar</h1>
        </div>
    );
};

export default ComponenteJugadores;