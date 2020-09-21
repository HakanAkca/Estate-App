import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import DetailScreen from '../screens/DetailScreen';
import FavScreen from '../screens/FavScreen';

const Home = createStackNavigator();
function HomeStackScreen() {
  return (
    <Home.Navigator>
      <Home.Screen
        name="Accueil"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Home.Screen name="Details" component={DetailScreen} />
    </Home.Navigator>
  );
}

const Search = createStackNavigator();
function SearchStackScreen() {
  return (
    <Search.Navigator>
      <Search.Screen
        name="Recherche"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Search.Screen name="Details" component={DetailScreen} />
    </Search.Navigator>
  );
}

const Fav = createStackNavigator();
function FavStackScreen() {
  return (
    <Fav.Navigator>
      <Fav.Screen
        name="Favoris"
        component={FavScreen}
        options={{headerShown: false}}
      />
    </Fav.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabsScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#121212',
        },
        activeTintColor: '#FFFFFF',
        tabBarIcon: {},
      }}>
      <Tab.Screen
        name="Accueil"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon name={'home'} type={'material-community'} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Recherche"
        component={SearchStackScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name={'magnify'}
                type={'material-community'}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favoris"
        component={FavStackScreen}
        options={{
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name={'heart-outline'}
                type={'material-community'}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App({navigation}) {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Board" component={TabsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
