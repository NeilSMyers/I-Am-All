import { createStackNavigator, createAppContainer } from "react-navigation";

import MainScreen from "../screens/MainScreen";
import SecondScreen from "../screens/SecondScreen";

const AppNavigator = createStackNavigator({
  MainScreen,
  SecondScreen
});

export default createAppContainer(AppNavigator);
