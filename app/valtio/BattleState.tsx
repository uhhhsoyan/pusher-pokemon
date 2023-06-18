import { proxy } from "valtio"
import { pokemonData } from "../data/pokemonData"
import { Pokemon } from "./TeamState"

// SELECT_POKEMON = "select_pokemon";
// SET_TEAM = "set_team";
// SET_OPPONENT_TEAM = "set_opponent_team";
// SET_MOVE = "set_move";
// SET_POKEMON = "set_pokemon";
// SET_POKEMON_HEALTH = "set_pokemon_health";
// SET_OPPONENT_POKEMON = "set_opponent_pokemon";
// SET_OPPONENT_POKEMON_HEALTH = "set_opponent_pokemon_health";
// SET_MESSAGE = "set_message";
// REMOVE_POKEMON_FROM_TEAM = "remove_pokemon_from_team";
// REMOVE_POKEMON_FROM_OPPONENT_TEAM = "remove_pokemon_from_opponent_team";

type BattleState = {
  pokemon: Pokemon[]
  selectedPokemon: Pokemon[] // check if we need isSelected flag
}

export const battleState: BattleState = proxy({
  pokemon: pokemonData,
  selectedPokemon: [],
})

// export const addPokemon = (pokemon: Pokemon) => {
//   teamState.selectedPokemon.push(pokemon)
//   teamState.pokemon = teamState.pokemon.map((p) => {
//     if (p.id === pokemon.id) {
//       p.isSelected = true
//     }
//     return p
//   })
// }

// export const removePokemon = (pokemon: Pokemon) => {
//   teamState.selectedPokemon = teamState.selectedPokemon.filter((p) => p.id !== pokemon.id)
//   teamState.pokemon = teamState.pokemon.map((p) => {
//     if (p.id === pokemon.id) {
//       p.isSelected = false
//     }
//     return p
//   })
// }
