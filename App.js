import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {
  AsyncStorage,
  NativeModules,
  Text,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {
  logIn,
  registerForPushNotificationsAsync,
  storeObjectInDatabase,
  getUserInfo,
} from './src/Firebase';
import LogIn from './src/Components/LogIn';
import LetsGetStarted from './src/Components/LetsGetStarted';
import SignUpInfo from './src/Components/SignUpInfo';
import SignUpYesorNo from './src/Components/SignUpYesorNo';
import MustLiveInMiami from './src/Components/MustLiveInMiami';
import Homepage from './src/Components/Homepage';
import SettingsScreen from './src/Components/SettingsScreen';
import ForgotPasswordPage from './src/Components/ForgotPasswordPage';
import ResourcesPage from './src/Components/ResourcesPage';
import Learn from './src/Components/Learn';
import STDSelection from './src/Components/STDSelection';
import {
  FemaleCondomMainScreen,
  FemaleCondomDoDont,
  FemaleCondomSteps,
} from './src/Components/FemaleCondom';
import WICScreen from './src/Components/WICScreen';
import MedicaidScreen from './src/Components/MedicaidScreen';
import Appointment from './src/Components/Appointment';
import NewAppointment from './src/Components/NewAppointment';
import Documents from './src/Components/Documents';
import ReferenceNames from './src/Components/ReferenceNames';
import AddReferenceNames from './src/Components/AddReferenceNames';
import STDInfo from './src/Components/STDInfo';
import appStyles from './src/Components/AppStyles';

// import * as firebase from "firebase";

const Stack = createStackNavigator();

AsyncAlert = () => {
  return new Promise((resolve, reject) => {
    Alert.alert(
      translate('logout'),
      translate('WantToLogout'),
      [
        {text: translate('Yes'), onPress: () => resolve(true)},
        {text: translate('No'), onPress: () => resolve(false)},
      ],
      {cancelable: false}
    );
  });
};

let saveCookie = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value).then();
  } catch (e) {
    console.log(`Error storeData: ${e}`);
  }
};

let logout = ({navigation}) => {
  console.log('From settings');
  saveCookie('email', '');
  saveCookie('password', '');
  saveCookie('uid', '');
  saveCookie('fullName', '');
  navigation.navigate('LogIn');
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{header: () => null}}
        />
        <Stack.Screen name="LetsGetStarted" component={LetsGetStarted} />
        <Stack.Screen name="SignUpInfo" component={SignUpInfo} />
        <Stack.Screen name="SignUpYesorNoMiami" component={SignUpYesorNo} />
        <Stack.Screen name="MustLiveInMiami" component={MustLiveInMiami} />
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            headerRight: () => (
              <View style={styles.logOutButton}>
                <AntDesign
                  name="logout"
                  size={28}
                  color={appStyles.pinkColor}
                  onPress={() => {
                    logout();
                  }}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="ForgotPasswordPage"
          component={ForgotPasswordPage}
        />
        <Stack.Screen name="ResourcesPage" component={ResourcesPage} />
        <Stack.Screen name="Learn" component={Learn} />
        <Stack.Screen name="STDSelection" component={STDSelection} />
        <Stack.Screen
          name="FemaleCondomMainScreen"
          component={FemaleCondomMainScreen}
        />
        <Stack.Screen
          name="FemaleCondomDoDont"
          component={FemaleCondomDoDont}
        />
        <Stack.Screen name="FemaleCondomSteps" component={FemaleCondomSteps} />
        <Stack.Screen name="WICScreen" component={WICScreen} />
        <Stack.Screen name="MedicaidScreen" component={MedicaidScreen} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="NewAppointment" component={NewAppointment} />
        <Stack.Screen name="Documents" component={Documents} />
        <Stack.Screen name="ReferenceNames" component={ReferenceNames} />
        <Stack.Screen name="AddReferenceNames" component={AddReferenceNames} />
        <Stack.Screen name="STDInfo" component={STDInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  logOutButton: {
    position: 'absolute',
    right: appStyles.win.height * 0.03,
    top: appStyles.win.width * 0.045,
  },
});
