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

const StackHome = createStackNavigator();
function HomeTab(){
  return(
    <StackHome.Navigator>
      <StackHome.Screen name="Trang Chủ" component={Home} />
      <StackHome.Screen name="Thông Tin Truyện" component={ThongTinTruyenScreen} />
      <StackHome.Screen name="Chapter" component={ChapterScreen} />
    </StackHome.Navigator>
  );
}

const StackTheoDoi = createStackNavigator();
function TheoDoiTab(){
  return(
    <StackTheoDoi.Navigator>
      <StackTheoDoi.Screen name="Theo Dõi" component={TheoDoiScreen} />
    </StackTheoDoi.Navigator>
  );
}
const StackTheLoai = createStackNavigator();
function TheLoaiTab(){
  return(
    <StackTheLoai.Navigator>
      <StackTheLoai.Screen name="Thể Loại" component={TheLoaiScreen} />
    </StackTheLoai.Navigator>
  );
}

const StackCaNhan = createStackNavigator();
function CaNhanTab(){
  return(
    <StackCaNhan.Navigator>
      <StackCaNhan.Screen name="Cá Nhân" component={CaNhanScreen} />
    </StackCaNhan.Navigator>
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