import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PuntajesAltos() {
  const [puntajesAltos, setPuntajesAltos] = useState([]);

  useEffect(() => {
    const puntajesAlmacenados = JSON.parse(localStorage.getItem('puntajesAltos') || '[]');
    setPuntajesAltos(puntajesAlmacenados);
  }, []);

  return (
    <div>
      <h1>Puntuaciones Altas</h1>
      <ul>
        {puntajesAltos.map((puntaje, indice) => (
          <li key={indice}>{puntaje.nombre}: {puntaje.puntaje}</li>
        ))}
      </ul>
      <Link href="/">Volver al juego</Link>
    </div>
  );
}