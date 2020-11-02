import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import BottomTabContext from './BottomTabContext';

type Props = {
    children: ?TabItem;
    initialRouteIndex: Number,
    activeTintColor: String,
    inactiveTintColor: String,
}

const TAB_BAR_HEIGHT = 150;

const BottomTab = ({ children, initialRouteIndex = 0, activeTintColor, inactiveTintColor }: Props) => {
    const [activeIndex, setActiveIndex] = useState(initialRouteIndex);

    return (
        <BottomTabContext.Provider
            value={{
                activeIndex: activeIndex,
                updateActiveIndex: setActiveIndex,
            }}
        >
            <View style={{ backgroundColor: 'transparent', height: TAB_BAR_HEIGHT, flexDirection: 'row', borderTopColor: 'grey', borderWidth: 0.5, borderColor: 'transparent' }}>
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

export default BottomTab;
