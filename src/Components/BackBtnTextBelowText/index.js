import React from 'react'
import { Container, Content } from 'native-base';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'
import { mystyles } from '../../styles';

const HeaderWithBelowText = ({ title, navigation, description, iconTitleColor, descriptionColor }) => {
    return (
        <View>
            <View style={[mystyles.menuTextView, { marginVertical: 20 }]}>
                <View style={mystyles.menuView}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
                        <Icon name="chevron-back-outline" size={30} color={iconTitleColor} />
                    </TouchableOpacity>
                </View>

                <View style={[mystyles.textView, { alignSelf: 'center' }]}>
                    <Text style={[mystyles.DiarioSkinCareText, { color: iconTitleColor }]}>{title}</Text>
                </View>

            </View>

            <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                <Text style={[mystyles.dateText, { color: descriptionColor }]}>{description}</Text>
            </View>
        </View>
    )
}
export default HeaderWithBelowText