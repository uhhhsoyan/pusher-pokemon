import { PokemonList } from "app/components/pokemon/PokemonList"
import { AppStackScreenProps } from "app/navigators"
import { useLooseSnapshot } from "app/valtio"
import { teamState } from "app/valtio/TeamState"
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from "react-native"
import {
  Pusher,
  PusherMember,
  PusherChannel,
  PusherEvent,
  PusherAuthorizerResult,
} from "@pusher/pusher-websocket-react-native"
import { movesData } from "app/data/movesData"
import { shuffleArray, uniqid } from "app/utils/helpers"
const pusher = Pusher.getInstance()

interface TeamSelectionScreenProps extends AppStackScreenProps<"TeamSelect"> {}

const authEndpoint = "https://pusher-pokemon.ngrok.io/pusher/auth"

export function TeamSelectionScreen(props: TeamSelectionScreenProps) {
  // async componentDidMount() {
  //     try {
  //       this.backgroundSound = new Audio.Sound();
  //       await this.backgroundSound.loadAsync(
  //         require("../assets/sounds/background/opening.mp3")
  //       );
  //       await this.backgroundSound.setIsLoopingAsync(true);
  //       await this.backgroundSound.playAsync();
  //     } catch (error) {
  //       console.log("error loading background sound: ", error);
  //     }
  //   }

  const { username } = props.route.params

  const teamSnap = useLooseSnapshot(teamState)
  const { pokemon, selectedPokemon } = teamSnap
  const [isLoading, setIsLoading] = React.useState(false)
  const confirmTeam = async () => {
    let team = [...selectedPokemon]
    const pokemonIds = []
    const teamMemberIds = []
    team = team.map((item) => {
      const hp = 500

      const shuffledMoves = shuffleArray(item.moves)
      const selectedMoves = shuffledMoves.slice(0, 4)

      // TODO: Rename moves on pokemonData to moveIds, and change this back to moves
      const movesFull = movesData.filter((item) => {
        return selectedMoves.indexOf(item.id) !== -1
      })

      const memberId = uniqid()

      pokemonIds.push(item.id)
      teamMemberIds.push(memberId)

      return {
        ...item,
        teamMemberId: memberId,
        currentHp: hp,
        totalHp: hp,
        movesFull,
        isSelected: false,
      }
    })

    // battle state
    // setTeam(team);
    // setPokemon(team[0]);

    setIsLoading(true)

    const onAuthorizer = async (channelName: string, socketId: string) => {
      console.log(`calling onAuthorizer. channelName=${channelName}, socketId=${socketId}`)

      const response = await fetch(authEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          socket_id: socketId,
          channel_name: channelName,
          username,
          pokemonIds,
          teamMemberIds,
        }),
      })

      const body = (await response.json()) as PusherAuthorizerResult

      console.log(`response: ${JSON.stringify(body)}`)
      return body
    }

    await pusher.init({
      onAuthorizer,
      // authEndpoint: "https://pusher-pokemon.ngrok.io/pusher/auth",
      apiKey: "fa1423396f944965696a",
      cluster: "us3",
      // onAuthorizer(channelName, socketId) {
      //   return {
      //     auth: `Bearer ${username}`,
      //   }
      // },
    })
    // await pusher.init({
    //   apiKey: "fa1423396f944965696a",
    //   cluster: "us3"
    // });

    await pusher.connect()
    const myChannel = await pusher.subscribe({
      channelName: `private-user-${username}`,

      onEvent: (event: PusherEvent) => {
        console.log(`Event received: ${event}`)
        if (event.eventName === "opponent-found") {
          console.log("opponent found:")
          console.log(event)
        }
        if (event.eventName === "pusher:subscription_error") {
          Alert.alert(`pusher:subscription_error`)
          setIsLoading(false)
        }
      },
      onMemberAdded: (member: PusherMember) => {
        console.log(`Member added: ${member}`)
      },
      onMemberRemoved: (member: PusherMember) => {
        console.log(`Member removed: ${member}`)
      },
      onSubscriptionError(channelName, message, e) {
        Alert.alert(`Error subscribing to ${channelName}`, `${JSON.stringify(message)}`)
        setIsLoading(false)
      },
      onSubscriptionSucceeded(data) {
        console.log(`Successfully subscribed to channel`, data)
      },
    })

    const publicChannel = await pusher.subscribe({
      channelName: "public-battle",
      onEvent: (event: PusherEvent) => {
        console.log(`Event received: ${event}`)
        Alert.alert(`Event received: ${event.eventName}`)
      },
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select your team</Text>
      <TouchableOpacity style={styles.confirmButton} onPress={() => props.navigation.goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>

      {selectedPokemon.length === 6 && (
        <View>
          {isLoading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#ffbf5a" />
              <Text style={styles.messageText}>Waiting for opponent..</Text>
            </View>
          )}

          {!isLoading && (
            <TouchableOpacity style={styles.confirmButton} onPress={confirmTeam}>
              <Text>Confirm Selection</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      <PokemonList data={pokemon} numColumns={1} actionType={"select-pokemon"} />
    </View>
  )
}

const styles = StyleSheet.create({
  confirmButton: {
    alignSelf: "center",
    backgroundColor: "#95ff84",
    marginBottom: 10,
    padding: 10,
  },
  container: {
    flex: 1,
  },
  headerText: {
    alignSelf: "center",
    fontSize: 20,
    marginBottom: 10,
    marginTop: 50,
  },
  loadingContainer: {
    alignItems: "center",
  },
  messageText: {
    color: "#676767",
    fontSize: 13,
  },
})
