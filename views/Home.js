import React from "react";
import {View, Text, SafeAreaView, TouchableOpacity,StyleSheet} from 'react-native';

const Home = () => {
    return (
        <SafeAreaView>
            <View>
            <TouchableOpacity style={styles.row}>
                <Text style={styles.name}>Helloooo</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    name: {
        fontSize: 20,
        color: 'red',
    },
    background: {
        backgroundColor: 'blue',
    },
})

export default Home;