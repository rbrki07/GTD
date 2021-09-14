// @ts-check
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { GTDInput } from "../components/GTDInput";
import { GTDList } from "./../components/GTDList";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <GTDInput />
      <GTDList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
});

export { HomeScreen };
