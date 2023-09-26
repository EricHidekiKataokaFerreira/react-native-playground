import React, { ReactElement, ReactNode } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DribbbleLogo  } from "@phosphor-icons/react";

type Props = {
  title: string
  image: ReactElement
  onPress: () => void;
}

export default function RedirectCard ({title, image, onPress}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.redirectCard}
      >
        {image && <View style={styles.imageContainer}>{image}</View>}
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 150,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redirectCard: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    height: 40,
    width: 40
  }
})