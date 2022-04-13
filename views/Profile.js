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

const Profile = () => {

    return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.content}>
        <View style={styles.profilePhoto}>
            <Image
            style={styles.profileLogo}
            source={require('../assets/profile.png')}
            />
        </View>
      </View>

    <View style= {styles.personal}> 
        <View style={styles.action}>
            <Text style={styles.userText}>Gökhan</Text>
            <Text style={styles.userText}>Yıldız</Text>
            <Text style={styles.userText}>+905416878244</Text>
            <Text style={styles.userText}>Adress</Text>
            <Text style={styles.userText}>Social Media</Text>
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

export default Profile;