import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bubble from './src/App/Creativity/Views/Bubble';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Creativity from './src/App/Creativity/Views/Creativity';
import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}