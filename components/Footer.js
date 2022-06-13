import React from 'react'

import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span>
          Next - PokéAPI
        </span>
        &copy; 2022
      </p>
      <p className={styles.inspired_by}>
        inspired by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href='https://www.youtube.com/watch?v=XHrbg2iYNCg&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft'
        >
          Hora de codar
        </a>
      </p>
    </footer>
  )
}
