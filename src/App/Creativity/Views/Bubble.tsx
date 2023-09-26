import { Blur, Canvas, Circle, ColorMatrix, Group, Paint, SweepGradient, runSpring, useValue, vec } from '@shopify/react-native-skia';
import { StatusBar } from 'expo-status-bar';
import React, { useMemo } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Touchable, { useGestureHandler } from 'react-native-skia-gesture';

const RADIUS = 80

export default function Bubble() {
  const {width: windowWidth, height: windowHeight} = useWindowDimensions()
  const cx = useValue(windowWidth/2)
  const cy = useValue(windowHeight/2)

  const gestureHandler = useGestureHandler<{x: number, y: number}>({
    onStart: (_, context) => {
      context.x = cx.current
      context.y = cy.current
    },

    onActive: ({translationX, translationY}, context) => {
      cx.current = translationX + context.x
      cy.current = translationY + context.y
    },

    onEnd: ({}) => {
      runSpring(cx, windowWidth/2)
      runSpring(cy, windowHeight/2)
    }
  })

  const layer = useMemo(() => {
    return <Paint>
      <Blur blur={30}/>
      <ColorMatrix 
        matrix={[
          1, 0, 0, 0, 0,
          0, 1, 0, 0, 0,
          0, 0, 1, 0, 0,
          0, 0, 0, 60, -30,
        ]}
      />
    </Paint>
  }, [])

  return (
    <Touchable.Canvas style={styles.canvas}>

      <Group
        layer={layer}
      >
        <Touchable.Circle
          {...gestureHandler}
          cx={cx}
          cy={cy}
          r={RADIUS}
        
        />

        <Circle
          cx={windowWidth/2}
          cy={windowHeight/2}
          r={RADIUS}
        />

        <SweepGradient
          c={vec(0,0)}
          colors={['cyan', 'magenta', 'cyan']}
        />
      </Group>

    </Touchable.Canvas>
  );
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
