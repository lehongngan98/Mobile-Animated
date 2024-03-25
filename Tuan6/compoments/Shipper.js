import React from 'react'
import { Animated, Easing, Text, TouchableOpacity } from 'react-native'

function Shipper() {
    const scaleValue = React.useRef(new Animated.Value(1)).current
    const marginLeftValue = React.useRef(new Animated.Value(0)).current
    const opacityValue = React.useRef(new Animated.Value(0)).current
    
    const runstart = Animated.loop(
        Animated.parallel([
            Animated.timing(marginLeftValue, {
                toValue: 200,
                duration: 2000,
                // easing: Easing.back(1),
                // easing: Easing.bounce,
            }),
            Animated.timing(scaleValue, {
                toValue: 2,
                duration: 2000,
            }),
            Animated.timing(opacityValue, {
                toValue: 1,
                duration: 2000,
            }),
            
        ])
    )
    

    const color = opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgb(0,200,200)', 'rgb(255, 0, 0)']
    })
    return (
        <>
            <Animated.Text
                style={{
                    marginBottom: "50%",
                    fontSize: 40,
                    fontWeight: "bold",
                    // color: "orange",
                    transform: [{ scale: scaleValue }],
                    opacity: opacityValue,
                    color: color,
                    
                }}
            >
                SHOPPE
            </Animated.Text>
            <Animated.Image
                source={require("../images/shipper.png")}
                style={{
                    width: 150,
                    height: 150,
                    marginBottom: 20,
                    opacity: opacityValue,
                    alignSelf: 'flex-start',
                    marginLeft: marginLeftValue,
                    transform: [{ scale: scaleValue }]
                }}>
            </Animated.Image>

            <TouchableOpacity onPress={() => { runstart.start()}}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Start</Text>
            </TouchableOpacity>
        </>
    )
}

export default Shipper