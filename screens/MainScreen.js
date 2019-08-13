import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MainScreen = props => {
  return (
    <View>
      <Text>MAIN SCREEN</Text>
      <Button
        title="Go to Second Screen"
        onPress={() => props.navigation.navigate("SecondScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
