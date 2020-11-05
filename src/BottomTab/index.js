import React, { useState } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import BottomTabContext from './BottomTabContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
    children: ?TabItem;
    initialRouteIndex: Number,
    activeTintColor: String,
    inactiveTintColor: String,
    tabBarVisible: Boolean,

}

const TAB_BAR_HEIGHT = 48;

const BottomTab = ({ children, initialRouteIndex = 0, activeTintColor, inactiveTintColor, tabBarVisible = true, navigation }: Props) => {
    const [activeIndex, setActiveIndex] = useState(initialRouteIndex);

    const [visible] = React.useState(() => new Animated.Value(tabBarVisible ? 1 : 0));
    const paddingBottom = useSafeAreaInsets().bottom;
    
    React.useEffect(() => {
        if (tabBarVisible) {
            const animation = Animated.timing;

            animation(visible, {
                toValue: 1,
                useNativeDriver: true,
                duration: 250,
            }).start();
        } else {
            const animation = Animated.timing;

            animation(visible, {
                toValue: 0,
                useNativeDriver: true,
                duration: 200,

            }).start();
        }
    }, [visible, tabBarVisible]);

    const [layout, setLayout] = React.useState({
        height: 0,
        width: Dimensions.get('window').width,
    });

    const handleLayout = e => {

        const { height, width } = e.nativeEvent.layout;

        setLayout((layout) => {
            if (height === layout.height && width === layout.width) {
                return layout;
            } else {
                return {
                    height,
                    width,
                }
            }
        })
    }

    const updateActiveIndex = (index, screen) => {
        setActiveIndex(index);
        navigation.replace(screen);
    }

    return (
        <BottomTabContext.Provider
            value={{
                updateActiveIndex: updateActiveIndex,
            }}
        >
            <Animated.View style={[styles.container, {
                transform: [
                    {
                        translateY: visible.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layout.height + paddingBottom, 0]
                        })
                    }
                ],
                height: TAB_BAR_HEIGHT,
            }]}>
                <View onLayout={handleLayout} style={{ flex: 1, flexDirection: 'row' }}>
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
            </Animated.View>
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
