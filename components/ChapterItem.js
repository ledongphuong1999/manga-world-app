import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

class ChapterItem extends Component {
    render() {
        const {chapter, onPressXayDung} = this.props;
        return (
          <TouchableOpacity onPress={onPressXayDung}>
            <View style={styles.container}>
              <View>
                 <Text style={styles.TextStyle}>{chapter.name}</Text>
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
      justifyContent: 'center',
      marginBottom :10,
      marginLeft :15,
    },
    TextStyle : {
      alignItems :'center',
      color:'black',
    }
  });

export default ChapterItem;