import React, { useRef } from 'react';
import { View, Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const BellApp = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: -1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const animatedStyles = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [-1, 1],
          outputRange: ['-25deg', '25deg'],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.Image
          source={require('../images/bell.png')}
          style={[styles.bell, animatedStyles]}
          resizeMode="contain"
        />
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  bell: {
    width: 100,
    height: 100,
  },
});

export default BellApp;
