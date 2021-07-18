import React, { useState } from 'react'
import { View, Text, Image, TextInput, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import { Container, Content } from 'native-base'
import HeaderBackBtnWithText from '../../Components/HeaderBackBtnWithText'
import StarRating from 'react-native-star-rating';
import BottomLargeBtn from '../../Components/BottomLargeBtn';
const Reviews = ({ navigation }) => {
    const SubmitFeedbackHandler = () => {
        alert('Hi')
    }
    const [UserRating, setUserRating] = useState(1)
    return (
        <Container>
            <Content contentContainerStyle={{
                // flex: 1,
            }}>

                <HeaderBackBtnWithText colorr="#5A5A5A" navigation={navigation}
                    text="Help us improve" marginn={10} />

                <View>
                    <Text style={styles.TakeaMomentText}>
                        Please take a moment and let us{'\n'}know what we can improve
                       </Text>
                </View>

                <View style={{ alignSelf: 'center' }}>
                    <Image source={require('../../assets/images/product1.png')} />
                </View>

                <View style={styles.blueRoundedView}>

                    <View style={styles.YourExperienceView}>
                        <Text style={styles.YourExperienceText}>How was your experience?</Text>
                    </View>

                    <View style={styles.innerLargeView}>

                        <View style={styles.circularImageView}>
                            <Image style={{ alignSelf: 'center' }} resizeMode="contain" source={require('../../assets/images/happy.png')} />

                        </View>
                        <View style={{ marginTop: -25, }}>
                            <TextInput
                                textAlignVertical="top"
                                style={{ flex: 1, textAlign: 'center' }}
                                placeholderTextColor="#AFAFAF"
                                placeholder={"Please provide your feedback about your experience\nwhile using this procust Please rovide your ack\nabout your experience while using this procust\nPlease provide your feedback about your ence\nwhile using this product"}
                            />
                        </View>
                        <View style={{ marginVertical: 15 }}>
                            <Text style={{ textAlign: 'center', color: '#AFAFAF' }}>213/300</Text>
                        </View>

                        <View style={{ alignSelf: 'center' }}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                animation="rotate"
                                emptyStarColor="#DADADA"
                                fullStarColor="#FC257F"
                                rating={UserRating}
                                selectedStar={(rating) => setUserRating(rating)}
                            />
                        </View>

                        <View style={{ marginVertical: 25 }}>
                            <BottomLargeBtn text="Submit feedback" handler={SubmitFeedbackHandler} />
                        </View>

                    </View>

                </View>

            </Content>
        </Container >

    )
}

export default Reviews;

const styles = StyleSheet.create({
    TakeaMomentText: {
        color: '#5A5A5A', opacity: 0.4, textAlign: 'center'
    },
    blueRoundedView: {
        bottom: 10,
        // height: height / 1.8,
        // borderColor: '#2575FC',
        // borderWidth: 1,
        width: '100%', borderTopLeftRadius: 25,
        borderTopRightRadius: 25, backgroundColor: '#2575FC'
    },
    YourExperienceView: {
        marginVertical: 15,
        alignSelf: 'center'
    },
    YourExperienceText: {
        fontSize: 22, color: '#FFFF'
    },
    circularImageView: {
        bottom: 45,
        alignSelf: 'center', height: 90, width: 90, borderWidth: 1,
        backgroundColor: '#FFFF',
        borderColor: '#FFFF', justifyContent: 'center',
        borderRadius: 45,
    },
    innerLargeView: {
        borderTopLeftRadius: 25, borderTopRightRadius: 25,
        borderColor: '#FFFF',
        //  height: height / 1,
        marginTop: 40,
        borderWidth: 1, backgroundColor: '#FFFF'
    }
})