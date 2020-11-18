import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { color } from 'react-native-reanimated';
import TabBarOfThongTinTruyen from './../components/TabBarOfThongTinTruyen';



class ThongTinTruyenScreen extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {navigation} =this.props;
        return (

                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.Texttitle}>TÊN TRUYỆN</Text>
                    </View>
                    <View style={styles.InfoStyle}>
                        <Image style={styles.ImageStyle}  source={{uri: 'https://sachvui.com/cover/2019/truyen-doraemon-plus.jpg'}} />
                        <View>
                            <Text style={styles.InfoTextStyle}>Tên tác giả :</Text>
                            <Text style={styles.InfoTextStyle}>Trạng thái :</Text>
                            <Text style={styles.InfoTextStyle}>Thể loại :</Text>   
                            <Text style={styles.InfoTextStyle}>Lượt xem :</Text>
                            <Text style={styles.InfoTextStyle}>Yêu thích :</Text>          
                        </View>
                    </View>
                    <TabBarOfThongTinTruyen />
                    <TouchableOpacity onPress={()=>navigation.navigate("Chapter")}>
                        <View style={styles.containerDocTruyen}>
                            <Text style={styles.TextDocTruyenStyle}>
                                Đọc Truyện
                            </Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
        );

    }
}
const styles = StyleSheet.create({
    container :{
        alignItems : 'center',
    },
    containerDocTruyen :{
        alignItems : 'center',
        backgroundColor :'black',
        height :30,
    },
    Texttitle : {
        marginTop :5,
        textTransform :"uppercase",
        fontWeight:'700',
    },
    TextDocTruyenStyle :{
        marginTop :5,
        textTransform :"uppercase",
        fontWeight:'700',
        color : 'white'
    },
    ImageStyle: {
        width: 130, 
        height:210,
        marginTop :7,

    },
    InfoStyle :{
        flexDirection :'row',
        alignItems : 'center',
        marginLeft :10,
    },
    InfoTextStyle : {
        marginBottom :10,
        marginTop :10,
        marginLeft :10,

    }
})

export default ThongTinTruyenScreen;