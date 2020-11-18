import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

class ChapterScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.ImageStyle} source={{ uri : 'https://img4.sachvui.com/images/doremon-plus/chap-1-2.jpg'}} />
                    <Image style={styles.ImageStyle} source={{ uri : 'https://img4.sachvui.com/images/doremon-plus/chap-1-3.jpg'}} />
                    <Image style={styles.ImageStyle} source={{ uri : 'https://img4.sachvui.com/images/doremon-plus/chap-1-4.jpg'}} />
                    <Image style={styles.ImageStyle} source={{ uri : 'https://img4.sachvui.com/images/doremon-plus/chap-1-5.jpg'}} />
                    <Image style={styles.ImageStyle} source={{ uri : 'https://img4.sachvui.com/images/doremon-plus/chap-1-6.jpg'}} />
                    <Image style={styles.ImageStyle} source={{ uri : 'https://img4.sachvui.com/images/doremon-plus/chap-1-7.jpg'}} />
                    <Image style={styles.ImageStyle} source={{ uri : 'https://img4.sachvui.com/images/doremon-plus/chap-1-8.jpg'}} />
                    <Image style={styles.ImageStyle} source={{ uri : 'https://img4.sachvui.com/images/doremon-plus/chap-1-9.jpg'}} />
                    <Image style={styles.ImageStyle} source={{ uri : 'https://img4.sachvui.com/images/doremon-plus/chap-1-10.jpg'}} />
                    <Image style={styles.ImageStyle} source={{ uri : 'https://img4.sachvui.com/images/doremon-plus/chap-1-11.jpg'}} />
                    <Image style={styles.ImageStyle} source={{ uri : 'https://img4.sachvui.com/images/doremon-plus/chap-1-12.jpg'}} />                    
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        flexDirection: 'column',
   },
    ImageStyle: {
        width: 350, 
        height:480  ,
        marginTop :7,

    },
})

export default ChapterScreen;