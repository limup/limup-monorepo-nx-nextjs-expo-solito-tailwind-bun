import React from 'react';
import { NavigationContainer, NavigationContainerRef, LinkingOptions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './index';
import UserPage from './users/[id]';

export type RootStackParamList = {
  index: undefined;
  'users/[id]': { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const navigationRef = React.createRef<NavigationContainerRef<RootStackParamList>>();

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['/'],
  config: {
    screens: {
      index: '',
      'users/[id]': 'users/:id',
    },
  },
};

export function NavigationProvider() {
  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" component={Home} />
        <Stack.Screen name="users/[id]" component={UserPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
