import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import { mystyles } from '../../styles';

const HeaderBackTextWithTime = ({ text, date, navigation, Edithandler }) => {
    return (
        <View>
            <View style={[mystyles.menuTextView, { margin: 8 }]}>

                <View style={mystyles.menuView}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{}}>
                        <Icon name="chevron-back-outline" size={30} color="#FFFF" />
                    </TouchableOpacity>
                </View>

                <View style={mystyles.textView}>
                    <Text style={mystyles.DiarioSkinCareText}>{text}</Text>
                </View>

            </View>

            <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                <Text style={{ alignSelf: 'center', fontSize: 14, color: '#FFFF' }}>{date.toString().substr(3, 12)}</Text>
                {Edithandler != '' ?
                    <TouchableOpacity onPress={() => Edithandler()} style={{ marginLeft: 10 }}>
                        <Image source={require('../../assets/images/edit.png')} />
                    </TouchableOpacity>
                    : null
                }
            </View>


        </View>
    )
}
export default HeaderBackTextWithTime

const styles = StyleSheet.create({
    linearGradient: {
        height: 100,
        // flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        // borderRadius: 5,
        borderBottomColor: '#6A11CB',
        // borderBottomWidth: 1,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
})