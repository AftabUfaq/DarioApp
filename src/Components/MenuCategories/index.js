import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const MenuCategories = ({ text, img, handler }) => {
    return (
        <TouchableOpacity onPress={() => handler()} style={styles.boxMainView}>
            <View style={styles.iconMainView}>
                <Image style={{ alignSelf: 'center' }} resizeMode="contain"
                    source={img} />
            </View>
            <Text style={{ color: '#878787', textAlign: 'center' }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default MenuCategories;

const styles = StyleSheet.create({
    boxMainView:
    {
        width: 140,
        height: 140,
        borderRadius: 10,
        marginHorizontal: 10,
        backgroundColor: '#FFFF',
        borderColor: '#FFFF',
        borderWidth: 1,
        justifyContent: 'center'
    },
    iconMainView:
    {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#2575FC',
        alignSelf: 'center',
        marginVertical: 5,
        justifyContent: 'center',
        width: 40,
        height: 40
    }
})