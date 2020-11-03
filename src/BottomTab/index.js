import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomTabContext from './BottomTabContext';
import * as RootNavigation from './../navigation/RootNavigation';

type Props = {
    children: ?TabItem;
    initialRouteIndex: Number,
    activeTintColor: String,
    inactiveTintColor: String,
}

const TAB_BAR_HEIGHT = 50;

const BottomTab = ({ children, initialRouteIndex = 0, activeTintColor, inactiveTintColor }: Props) => {
    const [activeIndex, setActiveIndex] = useState(initialRouteIndex);

    const updateActiveIndex = (index, screen) => {
        setActiveIndex(index);
        // console.warn(navigationRef.current.getRootState());
        // RootNavigation.navigate('Camera');
    }
    return (
        <BottomTabContext.Provider
            value={{
                updateActiveIndex: updateActiveIndex,
            }}
        >
            <View style={[styles.container, { height: TAB_BAR_HEIGHT }]}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {
                        onFocused: index === activeIndex,
                        activeTintColor: activeTintColor,
                        inactiveTintColor: inactiveTintColor,
                        index: index,
                    })
                }
                )}
            </View>
        </BottomTabContext.Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderTopColor: 'grey',
        borderWidth: 0.5,
        borderColor: 'transparent',
        marginTop: 'auto',
    }
});

export default BottomTab;
