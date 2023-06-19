import { Icon } from "app/components"
import { ActionList } from "app/components/pokemon/ActionList"
import { HealthBar } from "app/components/pokemon/HealthBar"
import { MovesList } from "app/components/pokemon/MovesList"
import PokemonFullSprite from "app/components/pokemon/PokemonFullSprite"
import { PokemonList } from "app/components/pokemon/PokemonList"
import { movesData } from "app/data/movesData"
import { pokemonData } from "app/data/pokemonData"
import { AppStackScreenProps } from "app/navigators"
import { shuffleArray } from "app/utils/helpers"
import {
  battleState,
  removePokemonFromTeam,
  setMessage,
  setMove,
  setOpponentPokemon,
  setOpponentTeam,
  setPokemonHealth,
  useLooseSnapshot,
} from "app/valtio"
import React, { useEffect } from "react"
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native"
import { useSnapshot } from "valtio"

interface BattleScreenProps extends AppStackScreenProps<"Battle"> {}

export function BattleScreen({ navigation, route }: BattleScreenProps) {
  const [opponentsChannel, setOpponentsChannel] = React.useState(null)
  const [backgroundSound, setBackgroundSound] = React.useState(null)
  const { pusher, opponent, firstTurn, myChannel } = route.params
  const { move, moveDisplayText, pokemon, opponentPokemon, team, opponentTeam, message } =
    useLooseSnapshot(battleState)

  if (!pokemon) {
    navigation.goBack()
  }

  useEffect(() => {
    // const {
    //   setOpponentTeam,
    //   setOpponentPokemon,

    //   navigation,
    //   team,
    //   setMove,
    //   removePokemonFromOpposingTeam,
    //   setMessage,
    //   setPokemonHealth,
    //   removePokemonFromTeam
    // } = this.props;
    // const pusher = navigation.getParam("pusher");

    // const { username, pokemon_ids, teamMemberIds } = navigation.getParam(
    //   "opponent"
    // );

    const { username, pokemonIds, teamMemberIds } = opponent

    const opponentPokemonIds = pokemonIds
    // .split(",")
    const opponentTeamMemberIds = teamMemberIds
    // .split(",")

    let opponentTeamData = pokemonData.filter((item) => {
      return opponentPokemonIds.indexOf(item.id.toString()) !== -1
    })

    opponentTeamData = opponentTeamData.map((item, index) => {
      const hp = 500

      const shuffledMoves = shuffleArray(item.moves)
      const selectedMoves = shuffledMoves.slice(0, 4)

      const moves = movesData.filter((item) => {
        return selectedMoves.indexOf(item.id) !== -1
      })

      return {
        ...item,
        current_hp: hp,
        total_hp: hp,
        moves,
        is_selected: false,
      }
    })

    const sortedOpponentTeam = []
    opponentPokemonIds.forEach((id, index) => {
      const teamMember = opponentTeamData.find((item) => id == item.id.toString())
      teamMember.teamMemberId = opponentTeamMemberIds[index]
      sortedOpponentTeam.push(teamMember)
    })

    setOpponentTeam(sortedOpponentTeam)
    setOpponentPokemon(sortedOpponentTeam[0])

    // this.opponents_channel = pusher.subscribe(`private-user-${username}`);
    // this.opponents_channel.bind("pusher:subscription_error", status => {
    //   Alert.alert(
    //     "Error",
    //     "Subscription error occurred. Please restart the app"
    //   );
    // });

    // this.opponents_channel.bind("pusher:subscription_succeeded", data => {
    //   const first_turn = navigation.getParam("first_turn");

    //   if (first_turn != "you") {
    //     setMessage("Please wait for you turn...");
    //     setMove("wait-for-turn");
    //   }
    // });

    // const my_channel = navigation.getParam("my_channel");

    // my_channel.bind("client-switched-pokemon", async ({ teamMemberId }) => {
    //   const pokemon = sortedOpponentTeam.find((item) => {
    //     return item.teamMemberId == teamMemberId
    //   })

    //   setMessage(`Opponent changed Pokemon to ${pokemon.label}`)
    //   setOpponentPokemon(pokemon)

    //   try {
    //     const crySound = new Audio.Sound()
    //     await crySound.loadAsync(pokemon.cry)
    //     await crySound.playAsync()
    //   } catch (error) {
    //     console.log("error loading cry: ", error)
    //   }

    //   setTimeout(() => {
    //     setMove("select-move")
    //   }, 1500)
    // })

    // my_channel.bind("client-pokemon-attacked", (data) => {
    //   setPokemonHealth(data.teamMemberId, data.health)
    //   setMessage(data.message)

    //   setTimeout(() => {
    //     setMove("select-move")
    //   }, 1500)

    //   if (data.health < 1) {
    //     const fainted_pokemon = team.find((item) => {
    //       return item.teamMemberId == data.teamMemberId
    //     })

    //     setTimeout(async () => {
    //       setPokemonHealth(data.teamMemberId, 0)

    //       setMessage(`${fainted_pokemon.label} fainted`)
    //       removePokemonFromTeam(data.teamMemberId)

    //       try {
    //         const crySound = new Audio.Sound()
    //         await crySound.loadAsync(fainted_pokemon.cry)
    //         await crySound.playAsync()
    //       } catch (error) {
    //         console.log("error loading cry: ", error)
    //       }
    //     }, 1000)

    //     setTimeout(() => {
    //       setMove("select-pokemon")
    //     }, 2000)
    //   }
    // })

    // try {
    //   this.backgroundSound = new Audio.Sound();
    //   await this.backgroundSound.loadAsync(
    //     require("../assets/sounds/background/rival.mp3")
    //   );
    //   await this.backgroundSound.setIsLoopingAsync(true);
    //   await this.backgroundSound.playAsync();
    // } catch (error) {
    //   console.log("error loading background sound: ", error);
    // }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Fight!</Text>

      <View style={styles.battleGround}>
        {opponentPokemon && (
          <View style={styles.opponent}>
            <HealthBar
              currentHealth={opponentPokemon.currentHp}
              totalHealth={opponentPokemon.totalHp}
              label={opponentPokemon.label}
            />
            <PokemonFullSprite
              pokemon={opponentPokemon.label}
              spriteFront={opponentPokemon.front}
              spriteBack={opponentPokemon.back}
              orientation={"front"}
              isAlive={opponentPokemon.currentHp > 0}
              currentHealth={opponentPokemon.currentHp}
            />
          </View>
        )}

        {pokemon && (
          <View style={styles.currentPlayer}>
            <HealthBar
              currentHealth={pokemon.currentHp}
              totalHealth={pokemon.totalHp}
              label={pokemon.label}
            />

            <PokemonFullSprite
              pokemon={pokemon.label}
              spriteFront={pokemon.front}
              spriteBack={pokemon.back}
              orientation={"back"}
              isAlive={pokemon.currentHp > 0}
              currentHealth={pokemon.currentHp}
            />
          </View>
        )}
      </View>

      <View style={styles.controls}>
        <View style={styles.controlsHeader}>
          {(move === "select-pokemon" || move === "select-pokemon-move") && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                setMove("select-move")
                // backToMove()
              }}
            >
              {/* <Ionicons name="md-arrow-round-back" size={20} color="#333" /> */}
              <Icon icon="back" size={20} color="#333" />
            </TouchableOpacity>
          )}

          {move !== "wait-for-turn" && (
            <Text style={styles.controlsHeaderText}>{moveDisplayText}</Text>
          )}

          {move === "wait-for-turn" && <Text style={styles.message}>{message}</Text>}
        </View>

        {move === "select-move" && <ActionList />}

        {move === "select-pokemon" && opponentsChannel && (
          <PokemonList
            data={team}
            scrollEnabled={false}
            numColumns={2}
            actionType={"switch-pokemon"}
            opponentsChannel={opponentsChannel}
          />
        )}

        {pokemon && opponentsChannel && move === "select-pokemon-move" && (
          <MovesList moves={pokemon.movesFull} opponentsChannel={opponentsChannel} />
        )}
      </View>
    </View>
  )
}

// const mapStateToProps = ({ battle }) => {
//     const {
//       team,
//       move,
//       move_display_text,
//       pokemon,
//       opponent_team,
//       opponentPokemon,

//       message
//     } = battle;
//     return {
//       team,
//       move,
//       move_display_text,
//       pokemon,
//       opponent_team,
//       opponentPokemon,

//       message
//     };
//   };

const styles = StyleSheet.create({
  backButton: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  battleGround: {
    flex: 8,
    flexDirection: "column",
    padding: 12,
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  controls: {
    alignItems: "center",
    backgroundColor: "#e6e6e6",
    borderColor: "#404040",
    borderTopWidth: 1,
    flex: 3,
    justifyContent: "center",
    padding: 10,
  },
  controlsHeader: {
    alignSelf: "flex-start",
    flexDirection: "row",
    marginBottom: 10,
  },
  controlsHeaderText: {
    paddingTop: 5,
  },
  currentPlayer: {
    alignItems: "center",
    alignSelf: "flex-start",
  },
  headerText: {
    alignSelf: "center",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 50,
  },
  message: {
    fontSize: 15,
  },
  opponent: {
    alignItems: "center",
    alignSelf: "flex-end",
  },
})
