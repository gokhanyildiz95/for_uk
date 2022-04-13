import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image
  } from "react-native";
  import { StatusBar } from "expo-status-bar";
  import { FontAwesome5 } from "@expo/vector-icons";import Constants from "expo-constants";

const Card = () => {

    return (
    <TouchableOpacity>
        <View style={styles.content}>
            <View style={styles.cardwrap}>
                <View style={styles.profilePhoto}>
                    <Image
                    style={styles.profileLogo}
                    source={require('../assets/profile.png')}
                    />
                </View>
                <View style={styles.textcontent}>
                    <Text style={styles.userText}>dejnslnflndslfnsdnflsndflnsldfjvjvhjvkhgcjhchgcgxfcgvhbjnkdsdfghjkjhgfdsdfghjkjhgf</Text>
                </View>
            </View>
        </View>
      </TouchableOpacity>
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

    content: {
      margin:5,
        justifyContent:"center",
        paddingLeft:10,
        paddingRight:10,
    },
    textcontent:{
        flex:3,
        padding:10,
        ...TEXT,
    },
    cardwrap: {
        borderRadius:15,
        borderColor: "white",
        borderWidth: 2,
      paddingHorizontal: 30,
      flexDirection:"row",
      padding:10,
    },
    textWrapper: {
      marginTop: 60,
      marginBottom: 30,
    },

    userText: {
      ...TEXT,
      fontSize: 15,
      lineHeight: 30,
    },
    action: {
        marginTop:50,
        justifyContent: "space-between",
    },
    profileLogo: {
        width:80,
        height:80,
    },
    profilePhoto:{
        flex:1,
        justifyContent:"center",
    }
  });

export default Card;