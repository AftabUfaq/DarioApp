import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const TextInputWithCheck = ({ state, placeholder, textHandler, toggleModal }) => {
    return (
        <TouchableOpacity style={styles.textInputWithCheckView} onPress={() => toggleModal()} >
            <TextInput
                value={state}
                onChangeText={(val) => textHandler(val)}
                style={styles.textInput}
                placeholder={placeholder}
                placeholderTextColor="#878787"
            />
            <View style={styles.circleCheckView}>
                {state != '' ? <Icon style={{ alignSelf: 'center' }} name="checkmark-outline"
                    size={20} color="#2575FC" /> : null}
            </View>
        </TouchableOpacity>
    )
}
export default TextInputWithCheck

const styles = StyleSheet.create({
    textInputWithCheckView:
    {
        marginVertical: 14,
        marginHorizontal: 20,
        borderWidth: 1,
        flexDirection: 'row',
        padding: 5,
        borderColor: '#C4C4C4',
        borderRadius: 10
    },
    textInput: { color: "#878787", flex: 1, },
    circleCheckView:
    {
        width: 30, height: 30, borderWidth: 1,
        alignSelf: 'center', borderColor: '#C4C4C4',
        justifyContent: 'center',
        borderRadius: 25
    }
})