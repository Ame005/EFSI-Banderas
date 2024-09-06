import React, { useState, useEffect } from 'react';
import style from './style'

export default function JuegoBanderas() {
    const [paises, setPaises] = useState([]);
    const [paisesRestantes, setPaisesRestantes] = useState([]);
    const [paisSeleccionado, setPaisSeleccionado] = useState(null);
    const [puntaje, setPuntaje] = useState(0);
    const [respuesta, setRespuesta] = useState('');
    const [jugador, setJugador] = useState('Jugador 1');

    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
            .then(response => response.json())
            .then(data => {
                setPaises(data.data);
                setPaisesRestantes(data.data);
                seleccionPaisAleatorio(data.data); // Se pasa la lista de países a la función
            });
    }, []);

    const seleccionPaisAleatorio = (paisesRestantes) => {
        if (paisesRestantes.length > 0) {
            const randomIndex = Math.floor(Math.random() * paisesRestantes.length);
            const paisSeleccionado = paisesRestantes[randomIndex];
            setPaisSeleccionado(paisSeleccionado);
            setPaisesRestantes(paisesRestantes.filter(pais => pais !== paisSeleccionado));
        }
    };

    const inputUser = (event) => {
        setRespuesta(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (respuesta.toLowerCase() === paisSeleccionado.name.toLowerCase()) {
            setPuntaje(puntaje + 10);
            alert('¡Correcto! Sumaste 10 puntos');
        } else {
            setPuntaje(Math.max(0, puntaje - 1));
            alert('Incorrecto. -1 punto. El país era ' + paisSeleccionado.name);
        }
        setRespuesta('');
        seleccionPaisAleatorio(paisesRestantes); // Selecciona un nuevo país después de adivinar
    };

    
  return (
    <div style={style.container}>
      <h1>Bienvenido al juego de las banderas</h1>
      <p>Jugador: {jugador}</p>
      <p>Puntuación: {puntaje}</p>
      {paisSeleccionado ? (
        <div>
          <h3>Adivina el nombre del país</h3>
          <img src={paisSeleccionado.flag} alt="Bandera del país" style={style.imagen} />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={respuesta}
              onChange={inputUser}
              placeholder="Nombre del País"
              /*style={styles.input}*/
            />
            <button type="submit">Adivinar</button>
          </form>
        </div>
      ) : (
        <p>No hay más países para mostrar</p>
      )}
    </div>
  );
}