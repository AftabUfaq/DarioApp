import React, { useState } from 'react'
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Container, Content } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import { mystyles } from '../../styles';
import HeaderBackBtnWithText from '../../Components/HeaderBackBtnWithText';
const Blog = ({ navigation }) => {
    const [blogDetails, setBlogDetails] = useState([
        {
            id: 1,
            img: require('../../assets/images/blog1.png'),
            text: "More you know more beautiful you become"
        },
        {
            id: 2,
            img: require('../../assets/images/blog2.png'),
            text: "Top benefits or lotus herbals beauty cream"
        },
        {
            id: 3,
            img: require('../../assets/images/blog3.png'),
            text: "More you know more beautiful you become"
        },
    ])
    return (
        <Container>
            <Content>
                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                    colors={['#6A11CB', '#2575FC']} style={mystyles.linearGradient}>
                    <HeaderBackBtnWithText navigation={navigation}
                        colorr="#FFFF"
                        text="Blog" marginn={40} />
                </LinearGradient>

                <FlatList
                    data={blogDetails}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity style={styles.ImageWithTextBtnView}>
                            <Image style={{ marginVertical: 15 }} source={item.img} />
                            <Text style={styles.text}>{item.text} </Text>
                            <TouchableOpacity style={{ marginVertical: 5 }}>
                                <Text style={{ alignSelf: 'center', color: '#2575FC' }}>
                                    Click here to read more
   </Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    } />

            </Content>
        </Container>
    )
}

export default Blog

const styles = StyleSheet.create({
    ImageWithTextBtnView: {
        width: wp('93%'), borderRadius: 10, marginVertical: 10,
        borderWidth: 1, alignSelf: 'center', borderColor: '#C4C4C4'
    },
    text: {
        color: '#4F4F4F', marginVertical: 5, textAlign: 'center'
    }
})