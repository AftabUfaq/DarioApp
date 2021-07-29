import React, { useState } from 'react'
import { Container, Content } from 'native-base';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'
import { mystyles } from '../../styles';


const BackBtnTextWithDate = ({ date, text, dateColor, iconTitleColor, navigation }) => {
    return (
        <View style={{}}>
            <View style={[mystyles.menuTextView, { marginVertical: 20 }]}>

                <View style={mystyles.menuView}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
                        <Icon name="chevron-back-outline" size={30} color={iconTitleColor} />
                    </TouchableOpacity>
                </View>

                <View style={[mystyles.textView, { marginRight: 30, alignSelf: 'center' }]}>
                    <Text style={[mystyles.DiarioSkinCareText, { color: iconTitleColor }]}>{text} </Text>
                </View>

            </View>

            <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                <Text style={[mystyles.dateText, { color: dateColor }]}>{date.toString().substr(3, 12)}</Text>
            </View>
        </View>
    )
}
export default BackBtnTextWithDate;

const styles = StyleSheet.create({
    // dateText: {
    //     alignSelf: 'center', fontSize: 14, color: '#FFFF'
    // }
})