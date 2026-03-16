import { test, expect, request } from '@playwright/test';
import { PokemonPage } from '../pages/pokemonPage';
import {
  extractEvolutionNames,
  getPokemonWeights,
  printSortedPokemons
} from '../utils/pokemonHelper';

test('Obtener cadena evolutiva de Squirtle', async () => {

  const apiContext = await request.newContext();
  const pokemonPage = new PokemonPage(apiContext);

  // Obtener pokemon
  const pokemonResponse = await pokemonPage.getPokemon('squirtle');

  expect(pokemonResponse.status()).toBe(200);

  const pokemonData = await pokemonResponse.json();

  // Obtener species
  const speciesResponse = await pokemonPage.getSpecies(
    pokemonData.species.url
  );

  expect(speciesResponse.status()).toBe(200);

  const speciesData = await speciesResponse.json();

  // Obtener cadena evolutiva
  const evolutionResponse = await pokemonPage.getEvolutionChain(
    speciesData.evolution_chain.url
  );

  expect(evolutionResponse.status()).toBe(200);

  const evolutionData = await evolutionResponse.json();

  const names = extractEvolutionNames(evolutionData.chain);

  const pokemons = await getPokemonWeights(names, pokemonPage);

  printSortedPokemons(pokemons);

});