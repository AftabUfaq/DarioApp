
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text,AppState,Alert,PermissionsAndroid } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Screens/Home';
import Splash from './src/Screens/Splash';
import DailyRoutine from './src/Screens/DailyRoutine';
import ChooseDate from './src/Screens/ChooseDate';
import ExportToRoutine from './src/Screens/ExportAmRoutine';
import ProductList from './src/Screens/ProductList';
import AddProduct from './src/Screens/AddProduct';
import Blog from './src/Screens/Blog';
import Reviews from './src/Screens/ReviewScreen';
import HomeStack from './src/Navigations/homeStack';
import Drawerr from './src/Navigations/Drawer';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Drawerr" component={Drawerr}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="HomeStack" component={HomeStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Home}
          options={{ headerShown: false }} />

        <Stack.Screen name="DailyRoutine" component={DailyRoutine}
          initialParams={{ myroute: "AM" }}
          options={{ headerShown: false }} />


        <Stack.Screen name="ChooseDate" component={ChooseDate}
          options={{ headerShown: false }} />

        <Stack.Screen name="ExportToRoutine" component={ExportToRoutine}
          options={{ headerShown: false }} />

        <Stack.Screen name="ProductList" component={ProductList}
          options={{ headerShown: false }} />

        <Stack.Screen name="AddProduct" component={AddProduct}
          options={{ headerShown: false }} />

        <Stack.Screen name="Blog" component={Blog}
          options={{ headerShown: false }} />

        <Stack.Screen name="Reviews" component={Reviews}
          options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
