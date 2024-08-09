import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import Login from './src/pages/Login'; // Importe a tela de Login

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ 
            headerTitle: () => (
              <View style={styles.headerContainer}>
                <Image 
                  source={require('./assets/favicon.png')} 
                  style={styles.logo} 
                />
              </View>
            ),
            headerTitleAlign: 'center',
          }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            headerTitle: () => (
              <View style={styles.headerContainer}>
                <Image 
                  source={require('./assets/favicon.png')} 
                  style={styles.logo} 
                />
              </View>
            ),
            headerTitleAlign: 'center',
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100, 
    height: 100, 
  },
});

export default App;
