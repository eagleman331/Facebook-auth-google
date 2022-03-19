import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { enableExpoCliLogging } from "expo/build/logs/Logs";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import useAuth from '../firehook/useAuth'
import ChatScreen from "../screens/ChatScreen";
const {user} = useAuth;

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Ant" component={RegisterScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
 
    </Stack.Navigator>
  );
};
export default StackNavigator;

// {!user ? (
//     <>
//       <Stack.Screen name="Login" component={LoginScreen} />
//     </>
//   ) : (
//     <>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Register" component={RegisterScreen} />
//       <Stack.Screen name="Ant" component={RegisterScreen} />
//     </>
//   )}