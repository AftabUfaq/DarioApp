import React, { useState } from 'react'
import { View, Text, Image, Linking, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Container, Content } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import { mystyles } from '../../styles';
import HeaderBackBtnWithText from '../../Components/HeaderBackBtnWithText';
const Blog = ({ navigation }) => {

    let data = [
        {
            id:"1",
            link:"https://www.didiskincareasiatica.com/detergenti",
            img: require('../../assets/images/blog1.png'),
            text: "More you know more beautiful you become",
            name:"Cleansers"
        },

        {
            id:"2",
            link:"https://www.didiskincareasiatica.com/esfolianti",
            img: require('../../assets/images/blog2.png'),
            text: "Top benefits or lotus herbals beauty cream",
            name:"Exfoliants"
        },
        {
            id:"3",
            link:"https://www.didiskincareasiatica.com/tonici",
            img: require('../../assets/images/blog3.png'),
            text: "More you know more beautiful you become",
            name:"Toners"
        },
        {
            id:"4",
            link:"https://www.didiskincareasiatica.com/essenze",
            img: require('../../assets/images/blog1.png'),
            text: "More you know more beautiful you become",
            name:"Essences"
        },
        {
            id:"5",
            link:"https://www.didiskincareasiatica.com/sieri",
            img: require('../../assets/images/blog2.png'),
            text: "Top benefits or lotus herbals beauty cream",
            name:"Serums"
        },
        {
            id:"6",
            link:"https://www.didiskincareasiatica.com/maschere",
            img: require('../../assets/images/blog3.png'),
            text: "More you know more beautiful you become",
            name:"Masks"
        },
        {
            id:"7",
            link:"https://www.didiskincareasiatica.com/trattamenti-occhi",
            img: require('../../assets/images/blog2.png'),
            text: "Top benefits or lotus herbals beauty cream",
            name:"Eye Treatment"
        },
        {
            id:"8",
            link:"https://www.didiskincareasiatica.com/creme-idratanti",
            img: require('../../assets/images/blog1.png'),
            text: "More you know more beautiful you become",
            name:"Moisturizers"
        },
        {
            id:"9",
            link:"https://www.didiskincareasiatica.com/creme-solari",
            img: require('../../assets/images/blog2.png'),
            text: "Top benefits or lotus herbals beauty cream",
            name:"Sunscreens"
        },
        {
            id:"10",
            link:"https://www.didiskincareasiatica.com/maschere-notturne",
            img: require('../../assets/images/blog3.png'),
            text: "More you know more beautiful you become",
            name:"Night Masks"
        },
        {
            id:"11",
            link:"https://www.didiskincareasiatica.com/make-up",
            img: require('../../assets/images/blog3.png'),
            text: "More you know more beautiful you become",
            name:"Makeup"
        },
      
    ]
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
                    data={data}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity style={styles.ImageWithTextBtnView}>
                            <Image style={{ marginVertical: 15 }} source={item.img} />
                            <Text style={styles.text}>{item.text} </Text>
                            <TouchableOpacity style={{ marginVertical: 5 }} onPress={()=>{ Linking.openURL(item.link)}}>
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




// 
//  
// 
//   //
