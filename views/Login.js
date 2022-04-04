import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
  } from "react-native";
  import { StatusBar } from "expo-status-bar";
  import { FontAwesome5 } from "@expo/vector-icons";import Constants from "expo-constants";

const Login = () => {

    return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={styles.hiText}>Helping for Ukraine!</Text>
        </View>

        <View style={styles.form}>

          <TextInput
            style={styles.inputUsername}
            secureTextEntry={false}
            autoFocus={true}
            placeholder="Kullanıcı Adı"
            placeholderTextColor="#929292"
          />

          <TextInput
            style={styles.inputPassword}
            keyboardType="numeric"
            secureTextEntry={true}
            autoFocus={true}
            placeholder="Parola"
            placeholderTextColor="#929292"
          />

          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonLoginText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.action}>
          <TouchableOpacity>
            <Text style={styles.userText}>Şifremi unuttum</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
    )
}

const TEXT = {
    color: "#fff",
    textAlign: "center",
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#0158b5",
      paddingTop: Constants.statusBarHeight,
    },
    content: {
      paddingHorizontal: 30,
    },
    textWrapper: {
      marginTop: 60,
      marginBottom: 30,
    },
    hiText: {
      ...TEXT,
      fontSize: 20,
      lineHeight: 50,
      fontWeight: "bold",
    },
    userText: {
      ...TEXT,
      fontSize: 15,
      lineHeight: 30,
    },
    form: {
      marginBottom: 30,
    },
    iconLock: {
      color: "#929292",
      position: "absolute",
      fontSize: 16,
      top: 22,
      left: 22,
      zIndex: 10,
    },
    inputUsername: {
        height: 60,
        borderRadius: 30,
        paddingHorizontal: 30,
        fontSize: 20,
        color: "#929292",
        backgroundColor: "#fff",
        textAlign: "center",
        textAlignVertical: "center",
        marginBottom: 15
    },
    inputPassword: {
      height: 60,
      borderRadius: 30,
      paddingHorizontal: 30,
      fontSize: 20,
      color: "#929292",
      backgroundColor: "#fff",
      textAlign: "center",
      textAlignVertical: "center",
    },
    buttonLogin: {
      height: 50,
      borderRadius: 25,
      backgroundColor: "#fed500",
      justifyContent: "center",
      marginTop: 15,
    },
    buttonLoginText: {
      ...TEXT,
      color: "#0158b5"
    },
    action: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });

export default Login;