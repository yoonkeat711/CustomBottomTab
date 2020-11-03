/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import BottomTab from './src/BottomTab';
import TabItem from './src/BottomTab/TabItem';
import ChatIcon from './src/assets/chat.png';
import CameraIcon from './src/assets/camera.png';
import { NavigationContainer } from '@react-navigation/native';
import Status from './src/screens/Status';
import Calls from './src/screens/Calls';
import Camera from './src/screens/Camera';
import Chats from './src/screens/Chats';
import Settings from './src/screens/Settings';

import { navigationRef, isReadyRef } from './src/navigation/RootNavigation';

const App = () => {
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false
    };
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer ref={navigationRef}
          onReady={
            () => {
              isReadyRef.current = true;
            }
          }
        >
          <BottomTab
            activeTintColor={'blue'}
            inactiveTintColor={'grey'}
            initialRouteIndex={0}
          >
            <TabItem
              icon={ChatIcon}
              text={'Status'}
              screen={Status}
            />
            <TabItem
              icon={ChatIcon}
              text={'Calls'}
              badge={3}
              screen={Calls}
            />
            <TabItem
              icon={CameraIcon}
              text={'Camera'}
              screen={Camera}
            />
            <TabItem
              icon={ChatIcon}
              text={'Chats'}
              screen={Chats}
            />
            <TabItem
              icon={ChatIcon}
              text={'Settings'}
              screen={Settings}
            />
          </BottomTab>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
