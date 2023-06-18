import React from "react"
import { FlatList, StyleSheet } from "react-native"

import { PokemonOption } from "./PokemonOption"
import { Pokemon } from "app/valtio/TeamState"

interface PokemonListProps {
  data: Pokemon[]
  numColumns: number
  scrollEnabled?: boolean
  actionType: string
  opponentsChannel?: any
}

export function PokemonList({
  data,
  numColumns,
  scrollEnabled,
  actionType,
  opponentsChannel,
}: PokemonListProps) {
  return (
    <FlatList
      data={data}
      numColumns={numColumns}
      scrollEnabled={scrollEnabled}
      contentContainerStyle={styles.contentContainerStyle}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <PokemonOption
          pokemonData={item}
          isSelected={item.isSelected}
          actionType={actionType}
          opponentsChannel={opponentsChannel}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: "stretch",
    backgroundColor: "#fff",
  },
})
