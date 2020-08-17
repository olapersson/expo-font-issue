import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
// import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

enableScreens();

// const { Navigator, Screen } = createStackNavigator();
const { Navigator, Screen } = createNativeStackNavigator();

const Home = () => <View style={styles.container}>
    <Text style={{fontFamily: 'Inter_900Black'}}>Open up App.tsx to start working on your app!</Text>
    <StatusBar style="auto" />
</View>;

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_900Black
    });

    if (!fontsLoaded) {
        return <View style={{flex: 1}}>
            <Text>Loading</Text>
        </View>;
    }

    return (
        <NavigationContainer>
            <Navigator initialRouteName="home">
                <Screen
                    options={{
                        headerTitleStyle: {
                            fontFamily: 'Inter_900Black'
                        }
                    }}
                    name="home"
                    component={Home}/>
            </Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
