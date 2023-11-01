import React from "react";
import { Button, Text, View } from "react-native";
export default function WelcomeScreen({ navigation }: any) {
  const handleRegisterPress = () => {
    navigation.navigate("Register");
  };
  const handleLoginPress = () => {
    navigation.navigate("Login");
  };
  return (
    <View>
      <Text>Welcome Screen</Text>
      <Button title="Create Account" onPress={handleRegisterPress} />
      <Button title="Login" onPress={handleLoginPress} />
    </View>
  );
}
