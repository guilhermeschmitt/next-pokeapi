import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Card.module.css';

export default function Card({ pokemon }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p className={styles.number}>
          #{pokemon.id}
        </p>
        <h3 className={styles.name}>
          {pokemon.name}
        </h3>
      </div>
      <Image
        width='150'
        height='150'
        alt={pokemon.name}
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
      />
      <Link href={`/pokemon/${pokemon.id}`}>
        <a className={styles.button}>
          Saiba mais
        </a>
      </Link>
    </div>
  )
}
