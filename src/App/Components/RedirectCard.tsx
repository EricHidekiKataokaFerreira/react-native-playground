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
    <TouchableOpacity
      onPress={onPress}
      style={styles.redirectCard}
    >
      {image && <View style={styles.imageContainer}>{image}</View>}
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  redirectCard: {
    backgroundColor: '#ffffff',
    width: '46.5%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    height: 40,
    width: 40
  }
})