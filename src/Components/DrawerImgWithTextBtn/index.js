import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const DrawerBtnWithImgText = ({ text, img, handler }) => {
    return (
        <TouchableOpacity onPress={() => handler()} style={styles.btnView}>
            <Image source={img} />
            <Text style={styles.textStyle}>{text}</Text>
        </TouchableOpacity>
    )
}
export default DrawerBtnWithImgText

const styles = StyleSheet.create({
    btnView: {
        marginVertical: 10, flexDirection: 'row'
    },
    textStyle: {
        marginLeft: 10, alignSelf: 'center', color: '#FFFF'
    }
})