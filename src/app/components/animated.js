import React from 'react';
import './style.css'

const Titulo = () => {
  // Lista de letras específicas en el orden deseado
  const letters = 'Q-BANDERAS'.split(''); // Divide la cadena en un array de caracteres

  return (
    <div>
      {/* Lista ordenada con las letras de "Q-BANDERAS" */}
      <ol className="snow-bros">
        {letters.map((letter, index) => (
          // `letter` es el carácter actual del array
          // `index` es la posición de ese carácter en el array
          <li className={index}>{letter}</li>
        ))}
      </ol>
    </div>
  );
};

export default Titulo;