import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
class StoryItemHome extends Component {
    render() {
        const {story, onPressXayDung} = this.props;
        return (
          <TouchableOpacity onPress={onPressXayDung}>
            <View style={styles.container}>
              <Image style={styles.ImageStyle} source={{uri: 'https://sachvui.com/cover/2019/truyen-doraemon-plus.jpg'}} />
              <View>
                 <Text style={styles.TextStyle}>{story.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom :10,
      marginLeft :12,
      marginRight :5,
    },
    TextStyle : {
      alignItems :'center',
      color:'black',
    },
    ImageStyle: {
        width: 75, 
        height:120,
        
    }
  });
export default StoryItemHome;