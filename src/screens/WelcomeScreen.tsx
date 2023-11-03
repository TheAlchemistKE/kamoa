import React from "react";
import {Button, Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Image } from "expo-image";
export default function WelcomeScreen({ navigation }: any) {
  const handleRegisterPress = () => {
    navigation.navigate("Register");
  };
  const handleLoginPress = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome To Kamoa Todo</Text>
      <Image source={require('../../assets/todo.png')} contentFit={'fill'} contentPosition={'center'} transition={5} style={styles.image}/>
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleRegisterPress}
        >
            <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 15,
    },
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 40,
        backgroundColor: '#fff'
    },
    buttonContainer: {
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        width: Dimensions.get("window").width - 20,
        height: 44,
        borderRadius: 5,
        backgroundColor: "#343434",
    },
    buttonText: {
        fontSize: 18,
        color: "#ffffff",
    },

    image: {
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: "center"
    }
});
