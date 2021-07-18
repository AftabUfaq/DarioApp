import { StyleSheet } from 'react-native'

export const mystyles = StyleSheet.create({
    menuTextView:
    {
        margin: 15, flexDirection: 'row'
    },
    menuView:
    {
        justifyContent: 'center', flex: 1
    },
    textView:
    {
        justifyContent: 'center', flex: 2
    },
    DiarioSkinCareText:
    {
        fontSize: 25,
        fontFamily: 'Roboto-Regular',
        color: '#FFFF'
    },
    linearGradientLarge: {
        height: 300,
        // flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        // borderRadius: 5,
        borderBottomColor: '#6A11CB',
        // borderBottomWidth: 1,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
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
    dateText: {
        alignSelf: 'center', fontSize: 14, color: '#FFFF'
    }

})