import React from "react";
import ComponenteJuego from "./componenteJuego.jsx"
import ComponenteJugadores from "./componenteJugadores.jsx";


//create your first component
const Home = () => {
	return (
		<div className="fondo">
			<div className="fondoJuego">
				<ComponenteJuego/>
				<ComponenteJugadores/>
			</div>
		</div>
	);
};

export default Home;
