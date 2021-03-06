import React from 'react';
import { View, Image, Text, StyleProp, StyleSheet, TouchableOpacity } from 'react-native';
import BottomTabContext from './BottomTabContext';

type Props = {
    index: String,
    icon: String,
    iconStyle: StyleProp,
    text: String,
    textStyle: StyleProp,
    badge: String | Number,
    oFocused: Boolean,
    activeTintColor: String,
    inactiveTintColor: String,
    screen: String,
}

const DEFAULT_INACTIVE_TINT_COLOR = '#8E8E8F';

const TabItem = ({ icon, index, iconStyle, text, textStyle, badge, onFocused, activeTintColor, inactiveTintColor, screen }: Props) => {

    return (
        <BottomTabContext.Consumer>
            {context =>
                <TouchableOpacity style={styles.container} onPress={() => context.updateActiveIndex(index, screen)}>
                    {
                        badge && <View style={styles.badgeContainer}>
                            <Text style={styles.badgeText}>{badge}</Text>
                        </View>
                    }
                    <Image
                        source={icon}
                        resizeMode={'contain'}
                        style={[styles.iconStyle, iconStyle, { tintColor: onFocused ? activeTintColor : (inactiveTintColor || DEFAULT_INACTIVE_TINT_COLOR)}]}
                    />
                    <Text style={[styles.fontSize, textStyle, { color: onFocused ? activeTintColor : (inactiveTintColor || DEFAULT_INACTIVE_TINT_COLOR)}]}>
                        {text}
                    </Text>
                </TouchableOpacity>
            }
        </BottomTabContext.Consumer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    badgeContainer: {
        position: 'absolute',
        height: 20,
        width: 20,
        right: 10,
        borderRadius: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        zIndex: 2,
        marginTop: 3,
    },
    badgeText: {
        color: 'white',
        fontWeight: '500',
        alignContent: 'center',
    },
    iconStyle: {
        marginTop: 5,
        width: 30,
        height: 30,
        paddingBottom: 8,
    },
    text: {
        fontSize: 10,
        alignSelf: 'center',
    }
})

export default TabItem;
