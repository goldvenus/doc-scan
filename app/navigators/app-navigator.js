/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { Image } from 'react-native';

import HomeNavigator from './home-navigator';
import DocumentNavigator from './document-navigator';
import Page3Navigator from './Page3Navigator';
import Page4Navigator from './Page4Navigator';
import ScanPassportNavigator from './scan-document-navigator';

import navDashBoardIcon from '@images/bottom_nav_bar/nav_dashboard.png';
import navDashBoardIconActive from '@images/bottom_nav_bar/nav_dashboard_selected.png';
import navDocIcon from '@images/bottom_nav_bar/nav_documents.png';
import navDocIconActive from '@images/bottom_nav_bar/nav_documents_selected.png';
import navSetting from '@images/bottom_nav_bar/nav_setting.png';
import navSettingActive from '@images/bottom_nav_bar/nav_setting_selected.png';
import navSource from '@images/bottom_nav_bar/nav_sources.png';
import navSourceActive from '@images/bottom_nav_bar/nav_sources_selected.png';
import navCam from '@images/bottom_nav_bar/nav_cam.png';
import navCamActive from '@images/bottom_nav_bar/nav_cam_selected.png';


import GlobalColor from '@theme/colors';
import FontStyle from '@theme/font';
import { fontSize, tabBarHeight, normalizeSize } from '@theme/layout';

const SwitchNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeNavigator },
    Documents: { screen: DocumentNavigator },
    Cam: { screen: ScanPassportNavigator,
      navigationOptions: {
        tabBarLabel: () => null,
        tabBarVisible: false
      } },
    Sources: { screen: Page3Navigator },
    Settings: { screen: Page4Navigator },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line consistent-return
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={
                focused
                  ? navDashBoardIcon
                  : navDashBoardIconActive
              }
              style={{
                width: normalizeSize(40),
                height: normalizeSize(40)
              }}
            />
          );
        } if (routeName === 'Documents') {
          return (
            <Image
            source={
                focused
                  ? navDocIcon
                  : navDocIconActive
              }
              style={{
                width: normalizeSize(40),
                height: normalizeSize(40)
              }}
            />
          );
        } if (routeName === 'Cam') {
          return (
            <Image
            source={
                focused
                  ? navCam
                  : navCamActive
              }
              style={{
                width: normalizeSize(65),
                height: normalizeSize(65),
                marginBottom: normalizeSize(25)
              }}
            />
          );
        } if (routeName === 'Sources') {
          return (
            <Image
            source={
                focused
                  ? navSource
                  : navSourceActive
              }
              style={{
                width: normalizeSize(40),
                height: normalizeSize(40)
              }}
            />
          );
        } if (routeName === 'Settings') {
          return (
            <Image
            source={
                focused
                  ? navSetting
                  : navSettingActive
              }
              style={{
                width: normalizeSize(40),
                height: normalizeSize(40)
              }}
            />
          );
        }
      },
    }),
      tabBarOptions: {
          activeTintColor: GlobalColor.primaryColor,
          inactiveTintColor: GlobalColor.inactiveTextColor,
          tabBarPosition: 'bottom',
          labelStyle: {
              fontSize: fontSize.xsmall,
              fontFamily: FontStyle.medium,
              paddingBottom: normalizeSize(12)
          },
          style: {
              height: tabBarHeight,
              paddingTop: normalizeSize(25)
          }
      },
  },
    {
        initialRouteName: 'Home',
        // barStyle: {
        //   backgroundColor: 'white',
        //   borderTopLeftRadius: 20,
        //   borderTopRightRadius: 20,
        //   borderColor: 'transparent',
        //   overflow: 'hidden',
        //   shadowRadius: 3,
        //   shadowOffset: {
        //     width: 2,
        //     height: -3,
        //   },
        //   shadowOpacity: 1.0,
        //   shadowColor: '#ff0000',
        //   elevation: 0
        // },
    },
);

const RootNavigator = createAppContainer(SwitchNavigator);

const middleware = createReactNavigationReduxMiddleware(
  'root',
  (state) => state.navigation,
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = (state) => ({
  state: state.navigation,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);


export { RootNavigator, AppNavigator, middleware };
