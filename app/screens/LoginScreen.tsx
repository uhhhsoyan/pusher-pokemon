import { AppStackScreenProps } from "app/navigators"
import React from "react"
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export function LoginScreen(props: LoginScreenProps) {
  const [username, setUsername] = React.useState("")

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
  const login = () => {
    if (username) {
      props.navigation.navigate("TeamSelect", {
        username,
      })

      //   backgroundSound.stopAsync();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={require("assets/images/pokemon/pikachu.gif")} />
        <Text style={styles.headerText}>Pokémon Battles</Text>
      </View>

      <View style={styles.main}>
        <Text style={styles.label}>Enter username</Text>
        <TextInput
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(username) => setUsername(username)}
          value={username}
        />

        <TouchableOpacity onPress={login} style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#05a5d1",
    fontSize: 18,
  },
  container: {
    backgroundColor: "#FFF",
    flex: 10,
    padding: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
  label: {
    fontSize: 16,
  },
  main: {
    flex: 6,
    justifyContent: "flex-start",
  },
  textInput: {
    backgroundColor: "#eaeaea",
    borderColor: "#ccc",
    borderWidth: 1,
    height: 40,
    marginBottom: 10,
    marginTop: 5,
    padding: 5,
  },
  top: {
    alignItems: "center",
    flex: 4,
    justifyContent: "center",
  },
})
