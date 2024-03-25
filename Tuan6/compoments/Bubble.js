import React from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';

export default function Bubble() {

    const marginBottonValue = React.useRef(new Animated.Value(0)).current

    const changeMarginBottom = Animated.loop(
        Animated.timing(marginBottonValue, {
            toValue: 140,
            duration: 5000,
        }),
    )
    return (
        <>
            <Animated.View
                style={{
                    opacity: marginBottonValue.interpolate({
                        inputRange: [0, 70, 100, 140],
                        outputRange: [1, 1, 0.5, 0]
                    }),
                    marginBottom: marginBottonValue.interpolate({
                        inputRange: [0, 140],
                        outputRange: ["0%", "140%"]
                    })
                }}>
                <Image style={{ height: 200, width: 150 }} source={require("../images/red.png")} />
            </Animated.View>
            <TouchableOpacity
                onPress={() => {
                    changeMarginBottom.start()
                }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Start</Text>
            </TouchableOpacity>
        </>
    );
}
