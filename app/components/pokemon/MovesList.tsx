import { battleState, useLooseSnapshot } from "app/valtio"
import React from "react"
import { TouchableOpacity, FlatList } from "react-native"
import {
  setMove,
  setOpponentPokemonHealth,
  removePokemonFromOpponentTeam,
  setMessage,
} from "../../valtio/BattleState"
import { getMoveEffectivenessAndDamage } from "../../utils/helpers"

interface MovesListProps {
  moves: any
  opponentsChannel: any
}

export function MovesList({ moves, opponentsChannel }: MovesListProps) {
  const { pokemon, opponentPokemon } = useLooseSnapshot(battleState)

  const selectMove = async (item) => {
    const { effectiveness, damage } = getMoveEffectivenessAndDamage(item, opponentPokemon)
    const health = opponentPokemon.currentHp - damage

    const message = `${pokemon.label} used ${item.title}! ${effectiveness}`

    setMessage(message)

    opponentsChannel.trigger("client-pokemon-attacked", {
      teamMemberId: opponentPokemon.teamMemberId,
      message,
      health,
    })

    setOpponentPokemonHealth(opponentPokemon.teamMemberId, health)

    if (health < 1) {
      setOpponentPokemonHealth(opponentPokemon.teamMemberId, 0)
      removePokemonFromOpponentTeam(opponentPokemon.teamMemberId)

      // try {
      //   let crySound = new Audio.Sound();
      //   await crySound.loadAsync(opponentPokemon.cry);
      //   await crySound.playAsync();
      // } catch (error) {
      //   console.log("error loading cry: ", error);
      // }
    }

    setTimeout(() => {
      setMessage("Please wait for your turn...")
      setMove("wait-for-turn")
    }, 1500)
  }

  return (
    <FlatList
      data={moves}
      numColumns={2}
      scrollEnabled={false}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.container} onPress={() => selectMove(item)}>
          <Text style={styles.label}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  )
}

const styles = {
  container: {
    width: 130,
    marginLeft: 5,
    marginRight: 5,
    alignItems: "center",
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#ffd43b",
    marginBottom: 10,
  },

  label: {
    fontSize: 14,
  },
}

// const mapStateToProps = ({ battle }) => {
//   const { opponentPokemon, pokemon } = battle;

//   return {
//     opponentPokemon,
//     pokemon
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     backToMove: () => {
//       dispatch(setMove("select-move"));
//     },
//     setOpponentPokemonHealth: (teamMemberId, health) => {
//       dispatch(setOpponentPokemonHealth(teamMemberId, health));
//     },
//     removePokemonFromOpponentTeam: teamMemberId => {
//       dispatch(removePokemonFromOpponentTeam(teamMemberId));
//     },
//     setOpponentPokemon: () => {
//       dispatch(setOpponentPokemon());
//     },

//     setMessage: message => {
//       dispatch(setMessage(message));
//     },
//     setMove: move => {
//       dispatch(setMove(move));
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(MovesList);
