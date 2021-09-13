import React, { useLayoutEffect } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DetailsScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "",
      headerRight: () => (
        <TouchableOpacity onPress={() => console.log('on press')}>
          <Ionicons name={"trash"} size={30} color={"#f1faee"} />
        </TouchableOpacity>
      )
    })
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Detail Screen</Text>
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

export { DetailsScreen };
