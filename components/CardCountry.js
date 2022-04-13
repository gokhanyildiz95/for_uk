import React, {Component} from 'react';  
import {     
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView} from 'react-native';  
    import { StatusBar } from "expo-status-bar";
    import { FontAwesome5 } from "@expo/vector-icons";
    import Constants from "expo-constants";
  
export default class CardCountry extends Component {  
    state = {  
        cardHeight: 100, 
        cardStatus:false,
    }  
    countryDetail = () => this.state.cardStatus == false ? this.setState({cardHeight: 500, cardStatus:true}) : this.setState({cardHeight: 100, cardStatus:false})
    render() {  

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
                height: this.state.cardHeight,
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
            headText: {
                ...TEXT,
                fontSize: 20,
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
        return (  
            <TouchableOpacity onPress={this.countryDetail}>
        <View style={styles.content}>
            <View style={styles.cardwrap}>
                <View style={styles.profilePhoto}>
                    <Image
                    style={styles.profileLogo}
                    source={require('../assets/profile.png')}
                    />
                </View>
                <View style={styles.textcontent}>
                    <Text style={styles.headText}>Türkiye</Text>
                    <Text style={styles.userText}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.

The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.</Text>
                </View>
            </View>
        </View>
      </TouchableOpacity> 
        );  
    }  
}  