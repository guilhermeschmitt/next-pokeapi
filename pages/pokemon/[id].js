import React from 'react'

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
    <div>{pokemon.name}</div>
  )
}
