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

const TAB_BAR_HEIGHT = 50;

const BottomTab = ({ children, initialRouteIndex = 0, activeTintColor, inactiveTintColor, tabBarVisible = true }: Props) => {
    const [activeIndex, setActiveIndex] = useState(initialRouteIndex);

    const shouldShowTabBar = tabBarVisible;
    const [isTabBarHidden, setIsTabBarHidden] = React.useState(!shouldShowTabBar);
    const [visible] = React.useState(() => new Animated.Value(shouldShowTabBar ? 1 : 0));
    const { bottom } = useSafeAreaInsets();

    React.useEffect(() => {
        if (shouldShowTabBar) {
            const animation = Animated.spring;

            animation(visible, {
                toValue: 1,
                useNativeDriver: true,
                duration: 250,
            }).start(({ finished }) => {
                if (finished) {
                    setIsTabBarHidden(false);
                }
            })
        } else {
            setIsTabBarHidden(true);

            const animation = Animated.timing;

            animation(visible, {
                toValue: 0,
                useNativeDriver: true,
                duration: 200,

            }).start();
        }
    }, [visible, shouldShowTabBar]);

    const [layout, setLayout] = React.useState({
        height: 0,
        width: Dimensions.get('window').width,
    });

    const handleLayout = (e) => {

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

    return (
        <BottomTabContext.Provider
            value={{
                updateActiveIndex: setActiveIndex,
            }}
        >
            <Animated.View style={[styles.container, {
                transform: [
                    {
                        translateY: visible.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layout.height + bottom, 0]
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
