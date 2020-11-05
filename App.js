/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import BottomTab from './src/BottomTab';
import TabItem from './src/BottomTab/TabItem';
import ChatIcon from './src/assets/chat.png';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {

  const [tabBarVisible, setTabBarVisible] = useState(true);
  const [previousOffset, setPreviousOffset] = useState(0);

  const onScroll = e => {
    const currentOfffset = e.nativeEvent.contentOffset.y;
    if (currentOfffset > previousOffset) {
      setTabBarVisible(false);
    } else {
      setTabBarVisible(true);
    }
    setPreviousOffset(currentOfffset);
  }


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView onScroll={e => onScroll(e)} contentContainerStyle={{ height: 1000 }} />

        <BottomTab
          activeTintColor={'blue'}
          inactiveTintColor={'grey'}
          initialRouteIndex={0}
          tabBarVisible={tabBarVisible}
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
      </SafeAreaProvider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
