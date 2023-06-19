import React from "react"
import { View, Animated, Text } from "react-native"

const availableWidth = 100

interface HealthBarProps {
  currentHealth: number
  totalHealth: number
  label: string
}

export function HealthBar(props: HealthBarProps) {
  const [currentHealth, setCurrentHealth] = React.useState(props.currentHealth)

  // constructor(props) {
  //   super(props);
  //   this.currentHealth = new Animated.Value(this.props.currentHealth);
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.currentHealth !== this.props.currentHealth) {
  //     this.currentHealth.addListener(progress => {
  //       this.setState({
  //         currentHealth: progress.value
  //       });
  //     });

  //     Animated.timing(this.currentHealth, {
  //       duration: 1500,
  //       toValue: this.props.currentHealth
  //     }).start();
  //   }
  // }

  // const getCurrentHealthStyles = () => {
  //   const animatedWidth = currentHealth.interpolate({
  //     inputRange: [0, 250, 500],
  //     outputRange: [0, availableWidth / 2, availableWidth],
  //   })

  //   // const color_animation = currentHealth.interpolate({
  //   //   inputRange: [0, 250, 500],
  //   //   outputRange: [
  //   //     "rgb(199, 45, 50)",
  //   //     "rgb(224, 150, 39)",
  //   //     "rgb(101, 203, 25)"
  //   //   ]
  //   // });

  //   return {
  //     width: animatedWidth,
  //     height: 8, // height of the health bar
  //     backgroundColor: color_animation,
  //   }
  // }

  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.container}>
        <View style={styles.rail}>
          {/* <Animated.View style={[this.getCurrentHealthStyles()]} /> */}
          <View style={{ width: 50 }} />
        </View>
        <View style={styles.percent}>
          <Text style={styles.percentText}>{currentHealth / 5}%</Text>
        </View>
      </View>
    </View>
  )
}

const styles = {
  container: {
    height: 10,
    width: 130,
    marginBottom: 15,
    flexDirection: "row",
    // flexDirection: "row",
  },
  label: {
    paddingBottom: 2,
    color: "#212121",
  },
  rail: {
    height: 10,
    width: 100,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#616161",
  },
  healthOK: {
    backgroundColor: "#5db56d",
  },
  healthWarning: {
    backgroundColor: "#fcc419",
  },
  healthCritical: {
    backgroundColor: "#fa5252",
  },
  percent: {
    paddingLeft: 3,
  },
  percentText: {
    fontSize: 10,
    color: "#212121",
  },
}
