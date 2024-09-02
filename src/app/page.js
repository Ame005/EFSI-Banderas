import React from 'react';
import './page.module.css';
import Link from 'next/link';
import AnimatedTitle from './components/animated'; // Importa el componente personalizado

export default function Home() {
  return (
    <div style={{width:'100%', height:'100%',display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
      <AnimatedTitle />
      <p>¡Pon a prueba tu conocimiento de banderas del mundo!</p>
      <Link href="/Banderas">
        <b><u>Comenzar el Juego</u></b>
      </Link>
    </div>
  );
}