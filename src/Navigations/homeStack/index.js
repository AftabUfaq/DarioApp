import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Drawerr from '../Drawer';
import Home from '../../Screens/Home';

const Homee = createStackNavigator()

const HomeStack = ({ navigation }) => {
    return (
        <Homee.Navigator initialRouteName="Home">
            <Homee.Screen name="Home" component={Home}
                options={{ headerShown: false }} />
            <Homee.Screen name="Drawerr" component={Drawerr}
                options={{ headerShown: false }} />
        </Homee.Navigator>

    )
}
export default HomeStack;