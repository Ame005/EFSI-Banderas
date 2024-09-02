import React from 'react';
import Image from 'next/image';
import styles from './page.module.css'; // Assuming your original styles are here
import Link from 'next/link';
import AnimatedText from './components/AnimatedText'; // Import the newly created component

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <AnimatedText /> {/* Add the AnimatedText component */}

      <h1>Bienvenido al Juego de Banderas</h1>
      <p>¡Pon a prueba tu conocimiento de banderas del mundo!</p>
      <Link href="/Banderas">
        Comenzar el Juego
      </Link>
    </div>
  );
}