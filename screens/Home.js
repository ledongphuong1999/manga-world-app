import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import StoryItem from '../components/StoryItem';
import dailyImage from '../assets/daily.png'
import rankImage from '../assets/rank.png'
import SearchBar from '../components/SearchBar';
class Home extends Component {
    constructor(props){
        super(props);
        this. state = {
          StoryArray : [
            {id : 1, name : 'Doremon 1'},
            {id : 2, name : 'Doremon 2'},
            {id : 3, name : 'Doremon 3'},
            {id : 4, name : 'Doremon 4'},

          ]
        }
      }
    render() {
      const {navigation} =this.props;
      const {StoryArray} = this.state;
      return (
          <View>
            <ScrollView>
              <SearchBar />
              <Image style={styles.WallpagerStyle} source ={{ uri : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/dc9a94d0-a984-4f3f-a134-66682b76ffc2/d6dx289-ebe7edf2-f46d-4c74-802c-a9b5b775c87f.png'} }/>
              <View style={styles.TextStyle}>
                <TouchableOpacity style={styles.StyleRankDaily}>
                  <Image style={styles.IconStyle} source={rankImage} />
                  <Text>Ranking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.StyleRankDaily}>
                  <Image style={styles.IconStyle} source={dailyImage} />
                  <Text>Daily</Text>
                </TouchableOpacity>
              </View>
              <View>
                <View style={styles.TextStyle}>
                    <Text style={styles.TextStyleMoiCapNhatvaDeXuat}>Mới Cập Nhật</Text>
                    <Text>Xem thêm</Text>
                </View>
                <FlatList
                numColumns={4} 
                style={styles}
                data={StoryArray}
                renderItem={({item})=><StoryItem story={item} keyExtractor={item=>`${item.id}`} 
                onPressXayDung={()=>navigation.navigate('Thông Tin Truyện')} />}
                />
              </View>
              <View style={styles.TextStyle}>
                <Text style={styles.TextStyleMoiCapNhatvaDeXuat}>Đề Xuất</Text>
                <Text>Xem thêm</Text>
              </View>
              <FlatList
                numColumns={4} 
                style={styles}
                data={StoryArray}
                renderItem={({item})=><StoryItem story={item} keyExtractor={item=>`${item.id}`}
                onPressXayDung={()=>navigation.navigate('Thông Tin Truyện')} />}  
                />
            </ScrollView>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      paddingRight :5,
      paddingLeft : 5,
      paddingTop :20,
      paddingBottom : 20,
    },
    WallpagerStyle : {
        height :150,
        width : 400,
    },
    IconStyle :{
      height : 50,
      width : 50,
    },
    TextStyle : {
        paddingTop :5,
        paddingBottom : 5,
        flexDirection :'row',
        alignItems :'center',
    },
    TextStyleMoiCapNhatvaDeXuat :{
        flex :1,
    },
    StyleRankDaily : {
      alignItems :'center',
      marginLeft :80,
      marginRight :20,
    }
  });
export default Home;