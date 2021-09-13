import React from "react";
import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
import { GTDList } from "../components/GTDList";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Details') } title={"Go to Details"} />
      <GTDList/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#f1faee"
  }
});

export { HomeScreen };
