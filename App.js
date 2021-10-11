// @ts-check
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { DetailsScreen } from "./screens/DetailsScreen";
import { store, persistor } from "./store/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Stack = createNativeStackNavigator();

// https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557
const GTDTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#f1faee",
    background: "#457b9d",
    card: "#457b9d",
    text: "#f1faee",
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={GTDTheme}>
          <Stack.Navigator initialRouteName={"Home"}>
            <Stack.Screen
              name={"Home"}
              component={HomeScreen}
              options={{ title: "Getting Things Done!" }}
            />
            <Stack.Screen name={"Details"} component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style={"light"} />
      </PersistGate>
    </Provider>
  );
};

export default App;
