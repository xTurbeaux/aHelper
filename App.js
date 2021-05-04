import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Animated } from 'react-native';

export default function App() {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.back}>
          <View style={styles.bc}>

            <Animated.View
              style={[
                styles.fadingContainer,
                {
                  // Bind opacity to animated value
                  opacity: this.state.fadeAnim
                }
              ]}
            >
                <Text style={styles.text}>In Space, no one can hear you scream</Text>
            </Animated.View>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  view: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    color: 'white'
  },
  bc: {
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#41b3eb'
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  text: {
    fontFamily: "Helvetica Neue",
    color: '#a4caeb',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadowColor: '#044ce6',
    textShadowRadius: 14.5,
  }
});
