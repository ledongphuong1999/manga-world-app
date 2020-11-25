import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import ChapterItem from './../../components/ChapterItem';
class ListChapter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ChapterArray: [
                { id: 1, name: 'chapter 1' },
                { id: 2, name: 'chapter 2' },
                { id: 3, name: 'chapter 3' },
                { id: 4, name: 'chapter 4' },
                { id: 5, name: 'chapter 5' },
                { id: 6, name: 'chapter 6' },
                { id: 7, name: 'chapter 7' },
                { id: 8, name: 'chapter 8' },

            ]
        }
    }
    render() {
        const { navigation } = this.props;
        const { ChapterArray } = this.state;
        return (
            <View >
                <FlatList
                    numColumns={1}
                    data={ChapterArray}
                    renderItem={({ item }) => <ChapterItem chapter={item} keyExtractor={item => `${item.id}`}
                        onPressXayDung={() => navigation.navigate('Chapter')} />}
                />
            </View>
        );
    }
}


export default ListChapter;