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

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
      <BottomTab 
      activeTintColor={'blue'}
      inactiveTintColor={'grey'}
      initialRouteIndex={0}
      >
        <TabItem 
         icon={ChatIcon}
         text={'Calls'}
        />
        <TabItem 
         icon={ChatIcon}
         text={'Chats'}
         badge={3}
        />
         <TabItem 
         icon={ChatIcon}
         text={'Calls'}
        />
        <TabItem 
         icon={ChatIcon}
         text={'Calls'}
        />
        <TabItem 
         icon={ChatIcon}
         text={'Calls'}
        />
        </BottomTab>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
