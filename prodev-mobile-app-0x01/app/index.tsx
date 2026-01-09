import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    // Requirement: Modify the Root View to use styles.container
    <View style={styles.container}>
      
      {/* Requirement: Change main text to "Entry Screen - Awesome" */}
      <Text style={styles.largeText}>Entry Screen - Awesome</Text>

      {/* Requirement: Add three additional Text components inside a View */}
      <View>
        <Text style={styles.largeText}>Typescript is great if you practice more</Text>
        <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
        <Text style={styles.smallText}>ALX is awesome</Text>
      </View>
      
    </View>
  );
}

// Requirement: Define Styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // Added to ensure the background covers the whole screen
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "#90caf9", // Light blue background
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"],
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "right",
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
  },
});