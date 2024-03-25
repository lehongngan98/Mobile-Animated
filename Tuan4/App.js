import { Text, StyleSheet, View, Animated, Button } from 'react-native';
import React, { useRef } from 'react';

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const color = fadeAnim.interpolate({
    inputRange: [0, 100, 200, 300, 400],
    outputRange: ['gray', 'black', 'red', 'blue', 'green'],
  });

  const changeColor = () => {
    Animated.timing(fadeAnim, {
      toValue: 400,
      duration: 5000,
      useNativeDriver: true,
    }).start(() => {
      fadeAnim.setValue(0);
      changeColor();
    });
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: 300,
          height: 300,
          borderWidth: 1,
          marginBottom: 10,
          backgroundColor: color,
        }}>
      </Animated.View>
      <View>
        <Button title={'Start'} onPress={() => { changeColor() }} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
});
