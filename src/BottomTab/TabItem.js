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
}

const TabItem = ({ icon, index, iconStyle, text, textStyle, badge, onFocused, activeTintColor, inactiveTintColor }: Props) => {

    return (
        <BottomTabContext.Consumer>
            {context =>
                <TouchableOpacity style={styles.container} onPress={() => context.updateActiveIndex(index)}>
                    {
                        badge && <View style={styles.badgeContainer}>
                            <Text style={styles.badgeText}>{badge}</Text>
                        </View>
                    }
                    <Image
                        source={icon}
                        resizeMode={'contain'}
                        style={[styles.iconStyle, iconStyle, { tintColor: onFocused ? activeTintColor : inactiveTintColor }]}
                    />
                    <Text style={[styles.fontSize, textStyle, { color: onFocused ? activeTintColor : inactiveTintColor }]}>
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
    },
    badgeText: {
        color: 'white',
        fontWeight: '500',
        alignContent: 'center',
    },
    iconStyle: {
        width: 30,
        height: 30,
        paddingBottom: 12,
        tintColor: 'grey',
    },
    text: {
        fontSize: 12,
        alignSelf: 'center',
        color: 'grey',
    }
})

export default TabItem;
