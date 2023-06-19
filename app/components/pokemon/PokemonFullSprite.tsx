import React, { Component, useEffect, useRef } from "react"
import { View, Image, Animated, Easing } from "react-native"

interface PokemonFullSpriteProps {
  pokemon: string // pokemon.label
  spriteFront: string
  spriteBack: string
  orientation: string
  isAlive: boolean
  currentHealth: number
}

export function PokemonFullSprite({
  pokemon,
  spriteFront,
  spriteBack,
  orientation,
  isAlive,
  currentHealth,
}: PokemonFullSpriteProps) {
  const pokeballYTranslate = useRef(new Animated.Value(0)).current
  const pokeballOpacity = useRef(new Animated.Value(0)).current
  const spriteTranslateY = useRef(new Animated.Value(0)).current
  const spriteScale = useRef(new Animated.Value(0)).current
  const pokemonOpacity = useRef(new Animated.Value(0)).current
  const punchOpacity = useRef(new Animated.Value(0)).current
  const punchTranslateY = useRef(new Animated.Value(0)).current

  // constructor(props) {
  //   super(props);
  //   this.pokeballYTranslate = new Animated.Value(0);
  //   this.pokeballOpacity = new Animated.Value(0);

  //   this.spriteTranslateY = new Animated.Value(0);
  //   this.spriteScale = new Animated.Value(0);

  //   this.pokemonOpacity = new Animated.Value(0);
  //   this.punchOpacity = new Animated.Value(0);
  //   this.punchTranslateY = new Animated.Value(0);
  // }

  // componentDidMount() {
  //   this.animateSwitchPokemon();
  // }

  useEffect(() => {
    animateSwitchPokemon()
  }, [])

  const animateSwitchPokemon = () => {
    spriteTranslateY.setValue(0)
    pokeballOpacity.setValue(0)
    pokeballYTranslate.setValue(0)
    spriteScale.setValue(0)

    Animated.sequence([
      Animated.timing(pokeballYTranslate, {
        toValue: 1,
        easing: Easing.bounce,
        duration: 1000,
        useNativeDriver: true,
      }),

      Animated.timing(pokeballOpacity, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }),

      Animated.timing(spriteScale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start()
  }

  const animateDamagePokemon = () => {
    punchOpacity.setValue(0)
    punchTranslateY.setValue(0)
    pokemonOpacity.setValue(0)

    Animated.sequence([
      Animated.timing(punchOpacity, {
        toValue: 1,
        duration: 10,
        // easing: Easing.in,
        useNativeDriver: true,
      }),
      Animated.timing(punchTranslateY, {
        toValue: 1,
        duration: 300,
        // easing: Easing.in,
        useNativeDriver: true,
      }),
      Animated.timing(punchOpacity, {
        toValue: 0,
        duration: 200,
        // easing: Easing.in,
        useNativeDriver: true,
      }),
      Animated.timing(pokemonOpacity, {
        toValue: 1,
        duration: 850,
        // easing: Easing.in,
        useNativeDriver: true,
      }),
    ]).start()
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevProps.pokemon === this.props.pokemon &&
  //     prevProps.currentHealth !== this.props.currentHealth
  //   ) {
  //     this.animateDamagePokemon();
  //   }

  //   if (prevProps.isAlive !== this.props.isAlive && !this.props.isAlive) {
  //     Animated.timing(this.spriteTranslateY, {
  //       duration: 900,
  //       toValue: 1
  //     }).start();
  //   } else if (prevProps.pokemon !== this.props.pokemon && this.props.isAlive) {
  //     this.animateSwitchPokemon();
  //   }
  // }

  // render() {
  // const { spriteFront, spriteBack, orientation } = this.props

  const sprite = orientation === "front" ? spriteFront : spriteBack

  const pokemonMoveY = spriteTranslateY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1000],
  })

  const pokemonScale = spriteScale.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.5, 1],
  })

  const pokeballMoveY = pokeballYTranslate.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 50, 25],
  })

  // const pokeballOpacity = pokeballOpacity.interpolate({
  //   inputRange: [0, 0.5, 1],
  //   outputRange: [1, 0.5, 0]
  // });

  // const punchOpacity = punchOpacity.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, 1]
  // });

  // const punch_moveY = punchTranslateY.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, -130]
  // });

  // const pokemonOpacity = pokemonOpacity.interpolate({
  //   inputRange: [0, 0.5, 1],
  //   outputRange: [1, 0.2, 1]
  // });

  console.log("sprite", sprite)

  return (
    <View>
      {/* <Animated.Image
          source={require("../../assets/images/things/pokeball.png")}
          style={{
            transform: [
              {
                translateY: pokeball_moveY
              }
            ],

            opacity: pokeballOpacity
          }}
        /> */}

      {sprite ? (
        <Animated.Image source={require("")} resizeMode={"contain"} style={styles.image} />
      ) : null}

      {/* <Animated.Image
          source={require("../../assets/images/things/fist.png")}
          style={[
            styles.punch,
            {
              transform: [
                {
                  translateY: punch_moveY
                }
              ],
              opacity: punchOpacity
            }
          ]}
        /> */}
    </View>
  )
  // }
}

const styles = {
  container: {
    paddingBottom: 20,
  },
  image: {
    width: 150,
  },
  punch: {
    position: "absolute",
    bottom: -40,
    left: 50,
  },
}

export default PokemonFullSprite
