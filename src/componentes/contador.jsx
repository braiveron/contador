import React from "react";
import styles from '../hojas-de-estilo/Contador.module.css'

function Contador({ numClicks }) {
  return (
    <div className={styles.contador}>
      {numClicks}
    </div>
  );
}

export default Contador;