import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { mystyles } from '../../styles'

const HeaderBackBtnWithText = ({ navigation, marginn, colorr, text }) => {
    return (
        <View style={[mystyles.menuTextView, { marginVertical: 20 }]}>
            <View style={mystyles.menuView}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
                    <Icon name="chevron-back-outline" size={30} color={colorr} />
                </TouchableOpacity>
            </View>

            <View style={[mystyles.textView, { marginLeft: marginn, alignSelf: 'center' }]}>
                <Text style={[mystyles.DiarioSkinCareText, { color: colorr }]}>{text}</Text>
            </View>

        </View>
    )
}
export default HeaderBackBtnWithText