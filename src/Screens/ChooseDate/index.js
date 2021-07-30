import React, { useState } from 'react'
import { Container, Content } from 'native-base';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import { mystyles } from '../../styles';
import HeaderBackTextWithTime from '../../Components/HeaderBackBtnWithTime';
import BottomLargeBtn from '../../Components/BottomLargeBtn';
import CalendarPicker from 'react-native-calendar-picker';
import BackBtnTextWithDate from '../../Components/BackBtnTextBelowDateHeader';
import Entypo from 'react-native-vector-icons/Entypo'

const ChooseDate = ({ navigation, route }) => {
    const [date, setDate] = useState(new Date())
    const onChange = (Date) => {
        setDate(Date)
    }
    const ChooseDateHandler = () => {
        route.params.onGoBack(date)
        navigation.goBack();
    }
    return (
        <Container style={{ backgroundColor: '#E5E5E5' }}>
            <Content contentContainerStyle={{ backgroundColor: '#E5E5E5' }}>

                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                    colors={['#6A11CB', '#2575FC']} style={mystyles.linearGradientLarge}>

                    <BackBtnTextWithDate text="Choose the date"
                        iconTitleColor="#FFFF"
                        dateColor="#FFFF"
                        date={date} navigation={navigation} />

                </LinearGradient>

                <View style={styles.calendarView}>
                    <Entypo name="chevron-small-down"  size={32} color={"#FC257F"} 
                        style={{position:"absolute",right:100, alignSelf:"center", top:7,}} />
                    <CalendarPicker
                        // nextTitle={{}}
                        // textStyle={{ fontWeight: 'bold', color: '#2575FC' }}


                        monthTitleStyle={{ color: '#FC257F' }}
                        yearTitleStyle={{ color: '#FC257F' }}
                        previousTitleStyle={{ color: '#FFFF' }}
                        nextTitleStyle={{ color: '#FFFF' }}
                        monthYearHeaderWrapperStyle={{ color: '#FC257F' }}
                        // customDayHeaderStyles={{ color: 'red' }}
                        weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
                        onDateChange={(date) => onChange(date)}
                        selectedDayColor="#FC257F"
                        selectedDayTextColor="#FFFF"
                        dayLabelsWrapper={{
                            borderTopWidth: 0,
                            color: '#2575FC',
                            borderBottomWidth: 0
                        }}

                    />
                </View>
                {/* <Text>{date.toString().substr(0, 15)}</Text> */}



            </Content>
            <BottomLargeBtn text="Choose the date" handler={ChooseDateHandler} />
        </Container>
    )
}

export default ChooseDate;

const styles = StyleSheet.create({
    calendarView:
    {
        width: wp('92%'), padding: 5,
        backgroundColor: '#FFFF',
        bottom: 150,
        borderColor: '#FFFF',
        borderWidth: 1, borderRadius: 10,
        alignSelf: 'center'
    }
})