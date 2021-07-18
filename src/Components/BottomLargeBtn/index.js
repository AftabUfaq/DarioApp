import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BottomLargeBtn = ({ text, handler }) => {
    return (
        <TouchableOpacity onPress={() => handler()} style={styles.LargeBtn}>
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
    )
}
export default BottomLargeBtn;

const styles = StyleSheet.create({
    LargeBtn:
    {
        width: wp('90%'), borderWidth: 1,
        padding: 20, alignSelf: 'center',
        marginBottom: 20,
        borderColor: '#2575FC',
        backgroundColor: '#2575FC',
        borderRadius: 10
    },
    btnText: {
        color: '#FFFF',
        textAlign: 'center'
    }
})