import React, { useEffect, useState } from 'react'
import { Container, Content } from 'native-base';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import { mystyles } from '../../styles';
import NameWithReadMore from '../../Components/NameWithReadMore';
import TextInputWithCheck from '../../Components/TextInputWithCheck';
import BottomLargeBtn from '../../Components/BottomLargeBtn';
import HeaderBackTextWithTime from '../../Components/HeaderBackBtnWithTime';
import StarRating from 'react-native-star-rating';
import BackBtnTextWithDate from '../../Components/BackBtnTextBelowDateHeader';


const DailyRoutine = ({ route, navigation }) => {
    const { myroute } = route.params;
    console.log("Route :      " + myroute)



    const [UploadedImg, setUploadedImg] = useState([
        {
            id: 1,
            img: require('../../assets/images/pic1.png')
        },
        {
            id: 2,
            img: require('../../assets/images/pic2.png')
        },
        {
            id: 3,
            img: require('../../assets/images/pic3.png')
        },
    ])
    const [cleansingOil, setCleansingOil] = useState('')
    const [foamingCleanser, setFoamingCleanser] = useState('');
    const [GreenTea, setGreenTea] = useState('');
    const [EssenceToner, setEssenceToner] = useState('')
    const [RoutineBtn, setRoutineBtn] = useState('AM')
    const [RatingSkin, setSkinRating] = useState('1')
    const [RatingIssues, setRatingIssues] = useState('3')
    const [showImages, setShowImages] = useState(false)
    const [date, setDate] = useState('11 Feb,2021')
    console.log(RoutineBtn)
    const foamingCleanserHandler = (val) => {
        setFoamingCleanser(val)
    }
    const cleansingOilHandler = (val) => {
        setCleansingOil(val)
    }
    const GreenTeaHandler = (val) => {
        setGreenTea(val)
    }
    const EssenceTonerHandler = (val) => {
        setEssenceToner(val)
    }
    const EditBtnHandler = () => {
        navigation.navigate('ChooseDate')
    }
    const ExportToPictureHandler = () => {
        let data = [
            {id:"cleansingOil", name: cleansingOil , img:require('../../assets/images/product1.png')},
            {id:"foamingCleanser", name: foamingCleanser,img:require('../../assets/images/product2.png')},
            {id:"GreenTea", name: GreenTea, img:require('../../assets/images/product1.png')},
            {id:"EssenceToner", name: EssenceToner,img:require('../../assets/images/product2.png')}
        ]
        navigation.navigate('ExportToRoutine' ,{data})
    }
    const SubmitFeedbackHandler = () => {
        navigation.navigate('Home')
    }
    useEffect(() => {
        myroute === 'AM' ? setRoutineBtn('AM') :
            myroute === 'PM' ? setRoutineBtn('PM')
                : myroute === 'Diary' ? setRoutineBtn('Diary') : null
    }, [])
    return (
        <Container style={{ backgroundColor: '#FFFF' }}>
            <Content contentContainerStyle={{ backgroundColor: '#FFFF' }}>


                {RoutineBtn === 'AM' || RoutineBtn === 'PM' ?
                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                        colors={['#6A11CB', '#2575FC']} style={mystyles.linearGradient}>
                        <HeaderBackTextWithTime date={date} text="Daily Routine" navigation={navigation} Edithandler={EditBtnHandler} />
                    </LinearGradient>
                    : null
                }

                {
                    RoutineBtn === 'Diary' ?
                        <LinearGradient
                            start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                            colors={['#6A11CB', '#2575FC']} style={mystyles.linearGradient}>
                            <HeaderBackTextWithTime date={date} text="Daily Routine" navigation={navigation} Edithandler="" />
                        </LinearGradient>
                        // <BackBtnTextWithDate iconTitleColor="#474747"
                        // dateColor="#878787"
                        // text="Export [AM] routine" date={date} navigation={navigation} />
                        : null
                }

                <View style={styles.routineBtnsView}>
                    <TouchableOpacity onPress={() => setRoutineBtn('AM')}
                        style={[styles.routineBtn, {
                            backgroundColor: RoutineBtn === 'AM' ? '#2575FC' : '#FFFF'
                        }]}>
                        <Text style={[styles.routineText, {
                            color: RoutineBtn === 'AM' ? '#FFFF' : '#AFAFAF'
                        }]}> AM routine</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setRoutineBtn('PM')}
                        style={[styles.routineBtn, {
                            backgroundColor: RoutineBtn === 'PM' ? '#2575FC' : '#FFFF'
                        }]}>
                        <Text style={[styles.routineText, {
                            color: RoutineBtn === 'PM' ? '#FFFF' : '#AFAFAF'
                        }]}> PM routine</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setRoutineBtn('Diary')}
                        style={[styles.routineBtn, {
                            backgroundColor: RoutineBtn === 'Diary' ? '#2575FC' : '#FFFF'
                        }]}>
                        <Text style={[styles.routineText, {
                            color: RoutineBtn === 'Diary' ? '#FFFF' : '#AFAFAF'
                        }]}>Diary</Text>
                    </TouchableOpacity>
                </View>

                {RoutineBtn === 'AM' || RoutineBtn === 'PM' ?
                    <View>
                        <NameWithReadMore name="Detersione"
                            readMore="Read more about cleansing oil"
                        />



                        <TextInputWithCheck state={cleansingOil}
                            textHandler={cleansingOilHandler}
                        />

                        <TextInputWithCheck state={foamingCleanser}
                            textHandler={foamingCleanserHandler}
                        />

                        <NameWithReadMore name="Tonico"
                            readMore="Read more about green tea" />


                        <TextInputWithCheck state={GreenTea}
                            textHandler={GreenTeaHandler}
                        />


                        <NameWithReadMore name="Essense"
                            readMore="Read more about toners" />

                        <TextInputWithCheck state={EssenceToner}
                            textHandler={EssenceTonerHandler}
                        />
                    </View>
                    : null

                }

                {RoutineBtn == 'Diary' ?
                    <View>
                        <View style={styles.RatingLargeView}>
                            <Image style={{ alignSelf: 'center' }}
                                source={require('../../assets/images/circleLargeStar.png')} />
                            <Text style={styles.skinTodayIssuesText}>
                                How was your skind today?
                            </Text>
                            <View style={{
                                alignSelf: 'center'
                            }}>
                                < StarRating
                                    disabled={false}
                                    maxStars={5}
                                    emptyStarColor="#DADADA"
                                    animation="rotate"
                                    fullStarColor="#FC257F"
                                    rating={RatingSkin}
                                    selectedStar={(rating) => setSkinRating(rating)}
                                />
                            </View>

                            <Text style={styles.skinTodayIssuesText}>
                                How was your skind today?
                            </Text>
                            <View style={{
                                alignSelf: 'center'
                            }}>
                                < StarRating
                                    disabled={false}
                                    maxStars={5}
                                    animation="rotate"
                                    emptyStarColor="#DADADA"
                                    fullStarColor="#FC257F"
                                    rating={RatingIssues}
                                    selectedStar={(rating) => setRatingIssues(rating)}
                                />
                            </View>

                        </View>

                        <View style={[styles.RatingLargeView, { marginVertical: 15 }]}>
                            <Image style={{ alignSelf: 'center' }}
                                source={require('../../assets/images/circleMessage.png')} />
                            <Text style={styles.skinTodayIssuesText}>
                                Your feedback in particular words?
                            </Text>

                            <TextInput
                                style={{ textAlign: 'center' }}
                                multiline
                                numberOfLines={5}
                                placeholder="lorem ipsum dollar set amet lorem ipsum dollar set amet lorem ipsum dollar set\namet lorem ipsum dollar set amet lorem ipsum\ndollar set amet" />

                            <Text style={{ textAlign: 'center', color: '#AFAFAF', fontSize: 14 }}>Max 300 characters</Text>
                        </View>

                        <View style={{ marginHorizontal: 20 }}>
                            <Text style={styles.uploadPhotosText}>Upload photos</Text>
                        </View>

                        {showImages ?
                            <FlatList
                                data={UploadedImg}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) =>
                                    <View style={{}}>
                                        <Image resizeMode="contain" source={item.img} />
                                        {/* <Image resizeMode="contain" source={require('../../assets/images/pic2.png')} /> */}
                                        {/* <Image resizeMode="contain" source={require('../../assets/images/pic3.png')} /> */}
                                    </View>
                                } /> :
                            <View style={{ height: 140, justifyContent: 'center' }}>
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 14,
                                    color: '#5A5A5A'
                                }}>No photos attached yet</Text>
                            </View>
                        }


                        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <TouchableOpacity onPress={() => setShowImages(!showImages)}>
                                <Image source={require('../../assets/images/download.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setShowImages(true)}>
                                <Image source={require('../../assets/images/camera.png')} />
                            </TouchableOpacity>
                        </View>

                        <BottomLargeBtn text="Submit feedback" handler={SubmitFeedbackHandler} />


                    </View>
                    :
                    null
                }





            </Content>
            {
                RoutineBtn === 'AM' || RoutineBtn === 'PM' ?
                    <BottomLargeBtn text="Export to picture" handler={ExportToPictureHandler} /> : null
            }
        </Container >
    )
}

export default DailyRoutine;
const styles = StyleSheet.create({
    linearGradient: {
        height: 100,
        // flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        // borderRadius: 5,
        borderBottomColor: '#6A11CB',
        // borderBottomWidth: 1,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    routineBtnsView:
    {
        flexDirection: 'row',
        marginVertical: 15,
        justifyContent: 'space-around'
    },
    routineBtn:
    {
        padding: 10,
        borderWidth: 1,
        width: 100,
        borderColor: '#C4C4C4',
        borderRadius: 25,
    },
    routineText:
    {
        color: '#AFAFAF', textAlign: 'center'
    },
    RatingLargeView:
    {
        width: wp('90%'),
        alignSelf: 'center',
        padding: 15,
        borderColor: '#C4C4C4',
        borderWidth: 1,
        borderRadius: 10
    },
    skinTodayIssuesText:
    {
        textAlign: 'center',
        fontSize: 20,
        color: '#878787'
    },
    uploadPhotosText:
    {
        fontSize: 14,
        color: '#5A5A5A'
    }




})