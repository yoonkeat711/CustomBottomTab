import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import BottomTab from './../../BottomTab';
import TabItem from './../../BottomTab/TabItem';

import ChatIcon from './../../assets/chat.png';
import CameraIcon from './../../assets/camera.png';
import CallIcon from './../../assets/call.png';
import SettingsIcon from './../../assets/settings.png';
import StatusIcon from './../../assets/status.png';

const Status = ({ navigation }) => {
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
                <Text>Status</Text>
            </ScrollView>

            <BottomTab
                activeTintColor={'blue'}
                initialRouteIndex={0}
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
                    screen={'Settings'}
                />
            </BottomTab>
        </SafeAreaView>

    )
}

export default Status;
