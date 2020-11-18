import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
class TheLoaiScreen extends Component {
    render() {
        return (
            <ScrollView>
                <SearchBar />
            </ScrollView>
        );
    }
}

export default TheLoaiScreen;