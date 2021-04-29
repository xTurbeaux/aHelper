import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.back}>
          <View style={styles.bc}>
            <Text style={styles.text}>In Space, no one can hear you scream</Text>
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
