import React from "react"
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native"

import { Entypo } from "@expo/vector-icons"
import { addPokemon, removePokemon } from "app/valtio"
import { Icon } from "../Icon"

interface PokemonOptionProps {
  pokemonData: any
  isSelected: boolean
  actionType: string
  opponentsChannel: any
}

export function PokemonOption(props: PokemonOptionProps) {
  const { pokemonData, isSelected, actionType } = props

  const compact = actionType !== "select-pokemon"
  const marginTop = compact ? {} : { marginTop: 20 }
  const imageStyle = compact ? { width: 40 } : { width: 60 }

  const { label, sprite } = pokemonData

  const selectPokemon = () => {
    if (!isSelected) {
      addPokemon(pokemonData)
    } else {
      removePokemon(pokemonData)
    }
  }

  // selectPokemon = async () => {
  //   const {
  //     pokemonData,
  //     is_selected,
  //     actionType,
  //     togglePokemon,
  //     setPokemon,
  //     setMessage,
  //     setMove,
  //     backToMove,
  //     opponents_channel
  //   } = this.props;

  //   const { id, cry } = pokemonData;

  //   if (actionType == "select-pokemon") {
  //     togglePokemon(id, pokemonData, is_selected);
  //   } else if (actionType == "switch-pokemon") {
  //     setMessage(`You used ${pokemonData.label}`);
  //     setPokemon(pokemonData);

  //     opponents_channel.trigger("client-switched-pokemon", {
  //       team_member_id: pokemonData.team_member_id
  //     });

  //     try {
  //       let crySound = new Audio.Sound();
  //       await crySound.loadAsync(cry);
  //       await crySound.playAsync();
  //     } catch (error) {
  //       console.log("error loading cry: ", error);
  //     }

  //     setTimeout(() => {
  //       setMessage("Please wait for your turn...");
  //       setMove("wait-for-turn");
  //     }, 2000);
  //   }
  // };

  return (
    <TouchableOpacity onPress={selectPokemon}>
      <View style={[styles.container, marginTop]}>
        <Image source={sprite} resizeMode={"contain"} style={imageStyle} />
        <Text style={styles.text}>{label}</Text>
        <Icon icon="check" size={18} color={isSelected ? "#40c057" : "#FFF"} />
        {/* <Entypo name="check" size={18} color={isSelected ? "#40c057" : "#FFF"} /> */}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  label: {
    fontSize: 14,
  },
  text: {
    width: 100,
  },
})

// const mapDispatchToProps = dispatch => {
//   return {
//     backToMove: () => {
//       dispatch(setMove("select-move"));
//     },
//     togglePokemon: (id, pokemonData, is_selected) => {
//       dispatch(selectPokemon(id, pokemonData, is_selected));
//     },
//     setPokemon: pokemon => {
//       dispatch(setPokemon(pokemon));
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
//   null,
//   mapDispatchToProps
// )(PokemonOption);
