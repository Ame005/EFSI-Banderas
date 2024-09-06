import React from 'react';
import Link from 'next/link';
import AnimatedTitle from './components/animated'; // Importa el componente personalizado

export default function Home() {
  return (
    <div>
      
      <Link href="/Banderas">
        <AnimatedTitle />
      </Link>
    </div>
  );
}