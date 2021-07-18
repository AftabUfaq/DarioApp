import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Reviews from '../../Screens/ReviewScreen';
import Home from '../../Screens/Home';
import DrawerContentt from './DrawerContent';

const DrawerStack = createDrawerNavigator()

const Drawerr = ({ navigation }) => {
    return (
        <DrawerStack.Navigator drawerPosition={'left'}
            drawerStyle={{
                backgroundColor: '#2575FC',
                borderTopRightRadius: 25,
                borderBottomRightRadius: 25
            }}

            drawerContent={props => <DrawerContentt {...props}

            />} >
            <DrawerStack.Screen name="Home" component={Home}
                options={{ headerShown: false }} />
            <DrawerStack.Screen name="Reviews" component={Reviews} />

        </DrawerStack.Navigator>

    )
}
export default Drawerr