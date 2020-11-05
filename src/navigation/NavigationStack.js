import React from 'react';
// import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calls from './../screens/Calls';
import Camera from './../screens/Camera';
import Chats from './../screens/Chats';
import Status from './../screens/Status';
import Settings from './../screens/Settings';

const Stack = createStackNavigator();

const NavigationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Status'} screenOptions={{headerShown: null}}>
            <Stack.Screen name={"Status"} component={Status} />
                <Stack.Screen name={"Calls"} component={Calls} />
                <Stack.Screen name={'Chats'} component={Chats} />
                <Stack.Screen name={"Camera"} component={Camera} />
                <Stack.Screen name={"Settings"} component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationStack;
