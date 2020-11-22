import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import ThongTinTruyenScreen from './screens/ThongTinTruyenScreen';
import TheoDoiScreen from './screens/TheoDoiScreen';
import TheLoaiScreen from './screens/TheLoaiScreen';
import CaNhanScreen from './screens/CaNhanScreen';
import ChapterScreen from './screens/ChapterScreen';
import RankingScreen from './screens/RankingScreen';
import DailyyyScreen from './screens/DailyyyScreen';

const Stack = createStackNavigator();
function HomeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Trang Chủ" component={Home} />
      <Stack.Screen name="Ranking" component={RankingScreen} />
      <Stack.Screen name="Daily" component={DailyyyScreen} />
      <Stack.Screen name="Thông Tin Truyện" component={ThongTinTruyenScreen} />
      <Stack.Screen name="Chapter" component={ChapterScreen} />
    </Stack.Navigator>
  );
}

function TheoDoiTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Theo Dõi" component={TheoDoiScreen} />
      <Stack.Screen name="Thông Tin Truyện" component={ThongTinTruyenScreen} />
      <Stack.Screen name="Chapter" component={ChapterScreen} />
    </Stack.Navigator>
  );
}
function TheLoaiTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Thể Loại" component={TheLoaiScreen} />
      <Stack.Screen name="Thông Tin Truyện" component={ThongTinTruyenScreen} />
      <Stack.Screen name="Chapter" component={ChapterScreen} />
    </Stack.Navigator>
  );
}

function CaNhanTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cá Nhân" component={CaNhanScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Trang Chủ" component={HomeTab} />
        <Tab.Screen name="Theo Dõi" component={TheoDoiTab} />
        <Tab.Screen name="Thể Loại" component={TheLoaiTab} />
        <Tab.Screen name="Cá Nhân" component={CaNhanTab} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

export default App;