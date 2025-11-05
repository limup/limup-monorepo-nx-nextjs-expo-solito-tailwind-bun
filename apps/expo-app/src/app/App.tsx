/* eslint-disable jsx-a11y/accessible-emoji */
import '@expo/metro-runtime';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationProvider } from './navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationProvider />
      </SafeAreaView>
    </>
  );
};

export default App;
