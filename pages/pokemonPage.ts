import { APIRequestContext } from '@playwright/test';

export class PokemonPage {

  constructor(private request: APIRequestContext) {}

  async getPokemon(name: string) {
    return this.request.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
  }

  async getSpecies(url: string) {
    return this.request.get(url);
  }

  async getEvolutionChain(url: string) {
    return this.request.get(url);
  }

}
