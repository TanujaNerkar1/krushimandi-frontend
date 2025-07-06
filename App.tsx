import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import { Fruit } from './src/types';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import ContactScreen from './src/screens/ProfileScreen/ContactScreen';
import SettingsScreen from './src/screens/ProfileScreen/SettingsScreen';
import EditProfileScreen from './src/screens/ProfileScreen/EditProfileScreen';
import ChangePasswordScreen from './src/screens/ProfileScreen/ChangePasswordScreen';
import LanguagesScreen from './src/screens/ProfileScreen/LanguagesScreen';
import AboutKrushimandiScreen from './src/screens/ProfileScreen/AboutKrushimandiScreen';
import PrivacyPolicyScreen from './src/screens/ProfileScreen/PrivacyPolicyScreen';




export type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: { fruit: Fruit };
  ProfileScreen: undefined;
  Contact: undefined;
  Settings: undefined;
  EditProfile: undefined;
  ChangePassword: undefined;
  Languages: undefined;
  AboutKrushimandi: undefined;
  PrivacyPolicy: undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Contact" component={ContactScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Languages" component={LanguagesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AboutKrushimandi" component={AboutKrushimandiScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} options={{ headerShown: false }}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;