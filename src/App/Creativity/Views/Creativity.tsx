import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Button, Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { StackParamList, StackTypes } from '../routes/creativity.routes';
import RedirectCard from '../../Components/RedirectCard';
import { DribbbleLogo  } from "@phosphor-icons/react";
import { MaterialIcons } from '@expo/vector-icons';

type StackProps = NativeStackScreenProps<StackParamList, 'criativityList'>

export type CreativityProps = {
  routes: StackProps
}


export default function Creativity ({routes} : CreativityProps) {
  const navigation = useNavigation<StackTypes>()
  
  const handleButtonPress = (targetScreen: keyof StackParamList) => {
    navigation.navigate(targetScreen)
  }

  const data = [
    {
      title: 'Buble',
      image: <MaterialIcons name="circle" size={24} color="black" />,
      navigate: 'bubble'
    },
    {
      title: 'Buble',
      image: <MaterialIcons name="circle" size={24} color="black" />,
      navigate: 'bubble'
    },
    {
      title: 'Buble',
      image: <MaterialIcons name="circle" size={24} color="black" />,
      navigate: 'bubble'
    },
    {
      title: 'Buble',
      image: <MaterialIcons name="circle" size={24} color="black" />,
      navigate: 'bubble'
    },
    {
      title: 'Buble',
      image: <MaterialIcons name="circle" size={24} color="black" />,
      navigate: 'bubble'
    },
    {
      title: 'Buble',
      image: <MaterialIcons name="circle" size={24} color="black" />,
      navigate: 'bubble'
    },
    {
      title: 'Buble',
      image: <MaterialIcons name="circle" size={24} color="black" />,
      navigate: 'bubble'
    },
    {
      title: 'Buble',
      image: <MaterialIcons name="circle" size={24} color="black" />,
      navigate: 'bubble'
    },
    {
      title: 'Buble',
      image: <MaterialIcons name="circle" size={24} color="black" />,
      navigate: 'bubble'
    },{
      title: 'Buble',
      image: <MaterialIcons name="circle" size={24} color="black" />,
      navigate: 'bubble'
    },
    {
      title: 'Buble',
      image: <MaterialIcons name="circle" size={24} color="black" />,
      navigate: 'bubble'
    }
  ]
  
  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((item, index) => (
          <RedirectCard
            key={index} 
            title={item.title}
            image={item.image}
            onPress={() => handleButtonPress(item.navigate as keyof StackParamList )}
          />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { 
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-between',
    flex: 1
  },
})