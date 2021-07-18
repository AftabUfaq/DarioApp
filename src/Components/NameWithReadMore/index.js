import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const NameWithReadMore = ({ name, readMore }) => {
    return (
        <View style={styles.nameReadMoreView}>
            <Text style={styles.nameReadMoreText}>{name}</Text>
            <TouchableOpacity>
                <Text style={[styles.nameReadMoreText, { color: '#2575FC' }]}>
                    {readMore}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default NameWithReadMore

const styles = StyleSheet.create({
    nameReadMoreView:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    nameReadMoreText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#5A5A5A'
    },
})