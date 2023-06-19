import { proxy } from "valtio"
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
  move: string
  moveDisplayText: string
  pokemon: Pokemon | null // currently selected pokemon by user
  opponentPokemon: Pokemon | null // currently selected pokemon by opponent
  team: Pokemon[]
  opponentTeam: Pokemon[]
  message: string
}

const moveDisplayText = {
  "wait-for-turn": "",
  "select-move": "Select your move",
  "select-pokemon": "Which Pokemon will you use?",
  "select-pokemon-move": "Which attack will you use?",
}

const defaultMove = "select-move"

export const battleState: BattleState = proxy({
  move: defaultMove,
  moveDisplayText: moveDisplayText[defaultMove],
  pokemon: null, // currently selected pokemon by user
  opponentPokemon: null, // currently selected pokemon by opponent
  team: [],
  opponentTeam: [],
  message: "",
})

export const setTeam = (team: Pokemon[]) => {
  battleState.team = team
}

export const setOpponentTeam = (team: Pokemon[]) => {
  battleState.opponentTeam = team
}

export const setMove = (move: string) => {
  battleState.move = move
  battleState.moveDisplayText = moveDisplayText[move]
}

export const setPokemon = (pokemon: Pokemon) => {
  console.log("in setPokemon", pokemon)
  battleState.pokemon = pokemon
}

export const setOpponentPokemon = (pokemon: Pokemon) => {
  battleState.opponentPokemon = pokemon
}

export const setPokemonHealth = (teamMemberId: string, health: number) => {
  battleState.team = battleState.team.map((p) => {
    if (p.teamMemberId === teamMemberId) {
      p.currentHp = health
    }
    return p
  })
}

export const setOpponentPokemonHealth = (teamMemberId: string, health: number) => {
  battleState.opponentTeam = battleState.opponentTeam.map((p) => {
    if (p.teamMemberId === teamMemberId) {
      p.currentHp = health
    }
    return p
  })
}

export const setMessage = (message: string) => {
  battleState.message = message
  battleState.move = "wait-for-turn"
}

export const removePokemonFromTeam = (teamMemberId: string) => {
  battleState.team = battleState.team.filter((p) => p.teamMemberId !== teamMemberId)
}

export const removePokemonFromOpponentTeam = (teamMemberId: string) => {
  battleState.opponentTeam = battleState.opponentTeam.filter((p) => p.teamMemberId !== teamMemberId)
}
