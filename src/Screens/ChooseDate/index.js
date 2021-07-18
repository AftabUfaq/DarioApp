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



const ChooseDate = ({ navigation }) => {
    const [date, setDate] = useState(new Date())
    const onChange = (Date) => {
        setDate(Date)
    }
    const ChooseDateHandler = () => {
        navigation.navigate('DailyRoutine')
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
                    {/* <View style={[mystyles.menuTextView, { marginVertical: 20 }]}>
                        <View style={mystyles.menuView}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
                                <Icon name="chevron-back-outline" size={30} color="#FFFF" />
                            </TouchableOpacity>
                        </View>

                        <View style={[mystyles.textView, { alignSelf: 'center' }]}>
                            <Text style={mystyles.DiarioSkinCareText}>Choose the date </Text>
                        </View>

                    </View>

                    <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                        <Text style={{ alignSelf: 'center', fontSize: 14, color: '#FFFF' }}>11 Feb,2021</Text>
                    </View> */}

                </LinearGradient>

                <View style={styles.calendarView}>
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