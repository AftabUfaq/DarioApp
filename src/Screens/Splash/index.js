import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { Container, Content } from 'native-base'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { LinearTextGradient } from "react-native-text-gradient";



const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
            navigation.navigate('Drawerr')
        }, 3000)
    }, [])

    return (
        <Container>
            <Content contentContainerStyle={{
                flex: 1,
                justifyContent: 'center'
            }}>
                <View style={styles.middleView}>
                    <Image
                        resizeMode="contain"
                        source={require('../../assets/images/DiarioLogo.png')} />
                    <LinearTextGradient
                        style={{ fontWeight: "bold", }}
                        locations={[0, 1]}
                        colors={["#2575FC", "#6A11CB"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ fontSize: 35 }} >D I A R I O</Text>

                    </LinearTextGradient>

                </View>
                <LinearTextGradient
                    style={{ alignSelf: 'center', fontWeight: "bold", }}
                    locations={[0, 1]}
                    colors={["#2575FC", "#6A11CB"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}  >
                    <Text style={{ fontSize: 16 }} >S K I N C A R E</Text>

                </LinearTextGradient>
            </Content>
        </Container>
    )
}

export default Splash;

const styles = StyleSheet.create({
    middleView:
    {
        alignSelf: 'center',
        marginTop: '-30%'
    }
})