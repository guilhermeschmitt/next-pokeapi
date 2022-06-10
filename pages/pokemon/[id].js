import React from 'react'

import Image from 'next/image';

import styles from '../../styles/Pokemon.module.css'
import DataLabel from '../../components/DataLabel';

export async function getStaticPaths() {
  const limit = 151;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}?limit=${limit}`);
  const data = await res.json();

  const paths = data.results.map((pkmn, index) => {
    return {
      params: { id: (index + 1).toString() }
    }
  });

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return {
    props: {
      pokemon: data
    }
  }
}

export default function Pokemon({ pokemon }) {
  return (
    <div className={styles.pokemon_container}>
      <div className={styles.title_container}>
        <div className={styles.pokemon_info}>
          <p className={styles.number}>
            #{pokemon.id}
          </p>
          <h3 className={styles.name}>
            {pokemon.name}
          </h3>
        </div>
        <div className={styles.types_container}>
          {
            pokemon.types.map(({ type }, index) => (
              <span
                key={index}
                className={`${styles.type} ${styles[`type_${type.name}`]}`}
              >
                {type.name}
              </span>
            ))
          }
        </div>
      </div>
      <Image
        width='300'
        height='300'
        alt={pokemon.name}
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
      />
      <div className={styles.data_container}>
        <DataLabel
          label='Altura:'
          className={styles.data_height}
          data={`${pokemon.height * 10} cm`}
        />
        <DataLabel
          label='Peso:'
          data={`${pokemon.weight / 10} kg`}
        />
      </div>
    </div>
  )
}
