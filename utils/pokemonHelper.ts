import { expect } from '@playwright/test';
import { PokemonPage } from '../pages/pokemonPage';

export type Pokemon = {
  name: string;
  weight: number;
};

export function extractEvolutionNames(chain: any): string[] {

  const names: string[] = [];
  let current = chain;

  while (current) {
    names.push(current.species.name);
    current = current.evolves_to[0];
  }

  return names;
}

export function alphabeticalSort(pokemons: Pokemon[]): Pokemon[] {

  for (let i = 0; i < pokemons.length; i++) {

    for (let j = 0; j < pokemons.length - i - 1; j++) {

      if (pokemons[j].name > pokemons[j + 1].name) {

        const temp = pokemons[j];
        pokemons[j] = pokemons[j + 1];
        pokemons[j + 1] = temp;

      }
    }
  }

  return pokemons;
}

export async function getPokemonWeights(
  names: string[],
  pokemonPage: PokemonPage
): Promise<Pokemon[]> {

  const pokemons: Pokemon[] = [];

  for (const name of names) {

    const res = await pokemonPage.getPokemon(name);

    expect(res.status()).toBe(200);

    const data = await res.json();

    pokemons.push({
      name: data.name,
      weight: data.weight
    });

  }

  return pokemons;
}

export function printSortedPokemons(pokemons: Pokemon[]) {

  const sorted = alphabeticalSort(pokemons);

  console.log("Resultado final:");

  for (const p of sorted) {
    console.log(`${p.name} - weight: ${p.weight}`);
  }

}