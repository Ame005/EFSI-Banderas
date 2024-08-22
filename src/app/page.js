import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Bienvenido al Juego de Banderas</h1>
      <p>¡Pon a prueba tu conocimiento de banderas del mundo!</p>
      <Link href="/Banderas">
        Comenzar el Juego
      </Link>
    </div>
  );
}
