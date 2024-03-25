import React, { useState, useEffect } from 'react';
import { View, Animated, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const CatAndMouse = () => {
    const [object1Position] = useState(new Animated.ValueXY({
        x: Math.random() * (SCREEN_WIDTH - 50),
        y: Math.random() * (SCREEN_HEIGHT - 50),
    }));
    const [object2Position] = useState(new Animated.ValueXY({
        x: Math.random() * (SCREEN_WIDTH - 50),
        y: Math.random() * (SCREEN_HEIGHT - 50),
    }));
    const [collisionDetected, setCollisionDetected] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!collisionDetected) { // Chỉ di chuyển nếu không có va chạm
                moveRandom(object1Position);
                moveRandom(object2Position);
            }
        }, 500);

        return () => clearInterval(interval);
    }, [collisionDetected]); // Khi collisionDetected thay đổi, chạy lại useEffect

    const moveRandom = (position) => {
        Animated.spring(position, {
            toValue: {
                x: Math.random() * (SCREEN_WIDTH - 50),
                y: Math.random() * (SCREEN_HEIGHT - 50),
            },
            useNativeDriver: false,
        }).start();
    };

    const checkCollision = () => {
        const obj1X = object1Position.x._value;
        const obj1Y = object1Position.y._value;
        const obj2X = object2Position.x._value;
        const obj2Y = object2Position.y._value;

        const distance = Math.sqrt((obj2X - obj1X) ** 2 + (obj2Y - obj1Y) ** 2);
        const collisionRadius = 50; // Đặt bán kính va chạm
        if (distance <= collisionRadius * 2) {
            setCollisionDetected(true);
        } else {
            setCollisionDetected(false);
        }
    };

    useEffect(() => {
        checkCollision();
    }, [object1Position, object2Position]); // Chạy lại khi vị trí các đối tượng thay đổi

    return (
        <>
            <Animated.View
                style={[
                    {
                        width: 50,
                        height: 50,
                        backgroundColor: 'red',
                        position: 'absolute',
                    },
                    object1Position.getLayout(),
                ]}
            />
            <Animated.View
                style={[
                    {
                        width: 50,
                        height: 50,
                        backgroundColor: 'blue',
                        position: 'absolute',
                    },
                    object2Position.getLayout(),
                ]}
            />
        </>
    );
};

export default CatAndMouse;
