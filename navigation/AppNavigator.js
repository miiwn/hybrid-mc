import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './../screens/HomeScreen';
import DetailScreen from './../screens/DetailScreen';
import PrivilegesScreen from './../screens/PrivilegesScreen'
import LocationScreen from '../screens/LocationScreen';
import ProfileScreen from '../screens/ProfileScreen';
// import { Image } from 'native-base';



const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: 'Home',
        headerTintColor: '#FEC208',
        headerStyle: {
          backgroundColor: '#CF240A',
        },
        headerTitle: (
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Image
              style={styles.logo}
              source={require('../images/mclogo.png')}
            />
          </View>
        ),
      }),

    },
    Detail: {
      screen: DetailScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);
const ProfileNavigator = createStackNavigator(
  {
    Home: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        title: 'Home',
        headerTintColor: '#FEC208',
        headerStyle: {
          backgroundColor: '#CF240A',
          height: 80
        },
        headerTitle: (
          <View style={styles.profile}>
            <View style={styles.profileColumnName} >
              <Text style={styles.profileName}>Vipatip Thanunpraditkul</Text>
            </View>
            <View style={styles.profileColumnPic} >
              <Image
                style={styles.profilePic}
                source={require('../images/mclogo.png')}
              />
            </View>
          </View>
        ),
      }),

    },
    Detail: {
      screen: DetailScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: AppNavigator
    },
    Privileges: {
      screen: PrivilegesScreen
    },
    Location: {
      screen: LocationScreen
    },
    Profile: {
      screen: ProfileNavigator
    },
    // More:{
    //   screen: Mor
    // }

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Privileges') {
          iconName = `ios-card`;
        } else if (routeName === 'Location') {
          iconName = `ios-pin`;
        }
        else if (routeName === 'Profile') {
          iconName = `ios-person`;
        }
        //  else if (routeName === 'More') {
        //   iconName = `ios-pin`;
        // }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeBackgroundColor: '#FEC208',
      activeTintColor: '#FFFFFF',
      inactiveBackgroundColor: '#CF240A',
      inactiveTintColor: '#FEC208',
      labelStyle: {
        color: '#FFFFFF',
      },
    },
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
);

const AppContainer = createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 16
  },
  profileColumnName: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileColumnPic: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  profileName: {
    fontSize: 22,
    color: '#FEC208',
    fontWeight: '900'
  },
  profilePic: {
    width: 40,
    height: 40,
  }
});
export default AppContainer;
