import { proxy } from "valtio"
import { pokemonData } from "../data/pokemonData"
import { movesData } from "app/data/movesData"

export type PokemonRawData = (typeof pokemonData)[0]
export type MovesRawData = (typeof movesData)[0]
export interface Pokemon extends PokemonRawData {
  isSelected?: boolean
  teamMemberId?: string
  currentHp?: number
  totalHp?: number
  movesFull?: MovesRawData[]
}

type TeamState = {
  pokemon: Pokemon[]
  selectedPokemon: Pokemon[] // check if we need isSelected flag
}

export const teamState: TeamState = proxy({
  pokemon: pokemonData,
  selectedPokemon: [],
})

export const addPokemon = (pokemon: Pokemon) => {
  teamState.selectedPokemon.push(pokemon)
  teamState.pokemon = teamState.pokemon.map((p) => {
    if (p.id === pokemon.id) {
      p.isSelected = true
    }
    return p
  })
}

export const removePokemon = (pokemon: Pokemon) => {
  teamState.selectedPokemon = teamState.selectedPokemon.filter((p) => p.id !== pokemon.id)
  teamState.pokemon = teamState.pokemon.map((p) => {
    if (p.id === pokemon.id) {
      p.isSelected = false
    }
    return p
  })
}
