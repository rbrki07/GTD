import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { GTDList } from "./../components/GTDList"

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
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
});

export { HomeScreen };
