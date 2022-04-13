import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView
  } from "react-native";
  import { StatusBar } from "expo-status-bar";
  import { FontAwesome5 } from "@expo/vector-icons";import Constants from "expo-constants";
  import CardCountry from '../components/CardCountry'

const AboutCountry = () => {

    return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
      <StatusBar style="light" />
        <View>
            <CardCountry/>
            <CardCountry/>
            <CardCountry/>
            <CardCountry/>
            <CardCountry/>
            <CardCountry/>
            <CardCountry/>
            <CardCountry/>
            <CardCountry/>
        </View>
        </ScrollView>
    </SafeAreaView>
    )
}

const TEXT = {
    color: "#fff",
    textAlign: "center",
  };
  
  const styles = StyleSheet.create({
      personal: {
        flexDirection:"row",
        justifyContent:"center",
      },
    container: {
      flex: 1,
      backgroundColor: "#0158b5",
      paddingTop: Constants.statusBarHeight,
    },
    content: {
        marginTop:100,
      paddingHorizontal: 30,
      flexDirection:"row",
      justifyContent:"center",
    },
    textWrapper: {
      marginTop: 60,
      marginBottom: 30,
    },

    userText: {
      ...TEXT,
      fontSize: 20,
      lineHeight: 30,
    },
    action: {
        marginTop:50,
        justifyContent: "space-between",
    },
    profileLogo: {
        width:200,
        height:200,
    },
    profilePhoto:{
        justifyContent:"center",
    }
  });

export default AboutCountry;