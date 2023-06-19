import React from "react"
import { TouchableOpacity, FlatList, Text } from "react-native"
import { setMove } from "app/valtio"

export function ActionList() {
  const data = [
    {
      label: "Fight",
      action: () => {
        setMove("select-pokemon-move")
      },
    },
    {
      label: "Switch",
      action: () => {
        setMove("select-pokemon")
      },
    },
  ]

  return (
    <FlatList
      data={data}
      numColumns={2}
      scrollEnabled={false}
      keyExtractor={(item, index) => item.label}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.container} onPress={item.action}>
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      )}
    />
  )
}

const styles = {
  container: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#ffd43b",
    padding: 20,
  },
  label: {
    fontSize: 20,
  },
}

// const mapDispatchToProps = dispatch => {
//   return {
//     setMove: move => {
//       dispatch(setMove(move));
//     }
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(ActionList);
