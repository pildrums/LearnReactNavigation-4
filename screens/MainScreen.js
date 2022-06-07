import React, { useCallback } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const OpenDetailButton = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Detail 1 열기"
      onPress={() => navigation.push('Detail', { id: 1 })}
    />
  );
};

const HomeScreen = () => {
  useFocusEffect(
    useCallback(() => {
      console.log('이 화면을 보고 있어요.');
      return () => {
        console.log('다른 화면으로 넘어갔어요.');
      };
    }, []),
  );

  return (
    <View>
      <Text>Home</Text>
      <OpenDetailButton />
    </View>
  );
};

const SearchScreen = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

const NotificationScreen = () => {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
};

const MessageScreen = () => {
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
};

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showIcon: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={24} />
          ),
          tabBarColor: 'black',
          tabBarBadge: 'new',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={24} />
          ),
          tabBarColor: 'gray',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: '알림',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" color={color} size={24} />
          ),
          tabBarColor: 'green',
          tabBarBadge: 30,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: '메시지',
          tabBarIcon: ({ color }) => (
            <Icon name="message" color={color} size={24} />
          ),
          tabBarColor: 'blue',
          tabBarBadge: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
