import React, { useState } from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import BottomTab from './../../BottomTab';
import TabItem from './../../BottomTab/TabItem';

import ChatIcon from './../../assets/chat.png';
import CameraIcon from './../../assets/camera.png';
import CallIcon from './../../assets/call.png';
import SettingsIcon from './../../assets/settings.png';
import StatusIcon from './../../assets/status.png';

const Camera = ({ navigation }) => {

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
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView onScroll={e => onScroll(e)} contentContainerStyle={{ height: 1000 }} >
                <Text>Camera</Text>
            </ScrollView>
            <BottomTab
                activeTintColor={'blue'}
                initialRouteIndex={3}
                tabBarVisible={tabBarVisible}
                navigation={navigation}
            >
                <TabItem
                    icon={StatusIcon}
                    text={'Status'}
                    screen={'Status'}
                />
                <TabItem
                    icon={CallIcon}
                    text={'Calls'}
                    screen={'Calls'}
                />
                <TabItem
                    icon={ChatIcon}
                    text={'Chats'}
                    badge={3}
                    screen={'Chats'}
                />
                <TabItem
                    icon={CameraIcon}
                    text={'Camera'}
                    screen={'Camera'}
                />
                <TabItem
                    icon={SettingsIcon}
                    text={'Settings'}
                    badge={2}
                    screen={'Settings'}
                />
            </BottomTab>
        </SafeAreaView>
    )
}

export default Camera;
