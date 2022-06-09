import Image from 'next/image';
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const limit = 151;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}?limit=${limit}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Next - Poke<span>API</span>
        </h1>
        <Image
          width='50'
          height='50'
          alt='Pokeball'
          src='/images/pokeball.png'
        />
      </div>
      <div className={styles.pokemon_container}>
        {
          pokemons.map(pokemon => (
            <p key={pokemon.id}>
              {pokemon.name}
            </p>
          ))
        }
      </div>
    </>

  )
}
