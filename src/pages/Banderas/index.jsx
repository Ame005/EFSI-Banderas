import React, {useState, UseEffect, useEffect} from 'react';


export default function JuegoBanderas (){
    const [paises, setPaises] = useState([]);
    const [paisesRestantes, setPaisesRestantes] = useState([]);
    const [paisSeleccionado, setPaisSeleccionado] = useState([]);
    const [puntaje, setPuntaje] = useState([]);
    const [respuesta, setRespuesta] = useState([]);
    const [jugador, setJugador] = useState([]);
    
    useEffect(()=> {
        fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
            .then(response => response.json())
            .then(data =>{
                setPaises(data.data);
                setPaisesRestantes(data.data)
                seleccionPaisAleatorio(data.data)
            });
    }, [])

    const seleccionPaisAleatorio = () =>{
        if(paisesRestantes.length > 0){
            const randomIndex = Math.floor(Math.random() * paisesRestantes.length);
            setPaisSeleccionado(paisesRestantes[randomIndex]);
            setPaisesRestantes(restantes => restantes.filter(pais => pais !== paisesRestantes[randomIndex]))
        }
    }
    
    const inicioJuego = () => {
        if(paisesRestantes.length > 0){
            seleccionPaisAleatorio();
        }
    }

    useEffect(() => {
        const handleSubmit = () => {
            if (respuesta.toLowerCase() === paisSeleccionado.name.toLowerCase()) {
                setPuntaje(puntaje => puntaje + 10);
                alert('¡Correcto! Sumaste 10 puntos');
            } else {
                setPuntaje(puntaje => Math.max(0, puntaje - 1));
                alert('Incorrecto. -1 punto. El país era ' + paisSeleccionado.name);
            }
            setRespuesta('');

        }

    }, [])

    
    return(
        <div>
            <h1>Bienvenido al juego de las banderas</h1>
            <p>Jugador: {jugador}</p>
            <p>Puntuacion: {puntaje}</p>
            
            <input type="text"
                value ={adivina}
                onChange ={ponerAlgo}
                placeholder='Nombre del País' 
            />
            <button>Adivinar</button>
        </div>
    )
}