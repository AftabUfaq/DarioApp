import React from 'react'
import { Container, Content } from 'native-base';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import MenuCategories from '../../Components/MenuCategories';
import { mystyles } from '../../styles';

const Home = ({ navigation }) => {
    const RoutineHandler = () => {
        navigation.navigate('DailyRoutine', { myroute: 'AM' })
    }
    const ProductListHandler = () => {
        navigation.navigate('ProductList')
        // alert('Product')
    }
    const SkinCareDairyHandler = () => {
        navigation.navigate('DailyRoutine', { myroute: 'Diary' })
    }
    const BlogsHandler = () => {
        navigation.navigate('Blog')
        // alert('Blogs')
    }
    return (
        <Container style={{ backgroundColor: '#E5E5E5' }}>
            <Content contentContainerStyle={{ flex: 1, backgroundColor: '#E5E5E5' }}>


                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                    colors={['#6A11CB', '#2575FC']} style={mystyles.linearGradientLarge}>
                    <View style={mystyles.menuTextView}>

                        <View style={mystyles.menuView}>
                            <TouchableOpacity style={{}} onPress={() => navigation.openDrawer()}>
                                <Image source={require('../../assets/images/menu.png')} />
                                {/* <Icon name="menu-outline" size={30} color="#FFFF" /> */}
                            </TouchableOpacity>
                        </View>

                        <View style={mystyles.textView}>
                            <Text style={mystyles.DiarioSkinCareText}>Dairio Skincare</Text>
                        </View>

                    </View>

                </LinearGradient>


                <View style={{ flexDirection: 'row', top: 220, position: 'absolute', alignSelf: 'center' }}>


                    <MenuCategories text="Routine" img={require('../../assets/images/routine.png')} handler={RoutineHandler} />

                    <MenuCategories text="Product list" img={require('../../assets/images/list-text.png')} handler={ProductListHandler} />


                </View>


                <View style={{ flexDirection: 'row', top: 380, position: 'absolute', alignSelf: 'center' }}>


                    <MenuCategories text="Skincare diary" img={require('../../assets/images/beauty-treatment.png')}
                        handler={SkinCareDairyHandler}
                    />

                    <MenuCategories text="Blogs" img={require('../../assets/images/blogs.png')}
                        handler={BlogsHandler}
                    />



                </View>






            </Content>
            <View style={{ flexDirection: 'row', marginVertical: 10, alignSelf: 'center' }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Disclaimer:<Text style={{ color: '#878787' }}>All information in this app isn’t{'\n'}medical, this app was not developed as{'\n'}diagnosis.</Text></Text>
            </View>
        </Container>
    )
}

export default Home;

const styles = StyleSheet.create({


    boxMainView:
    {
        width: 130,
        height: 130,
        borderRadius: 10,
        backgroundColor: '#FFFF',
        borderColor: '#FFFF',
        borderWidth: 1,
        justifyContent: 'center'
    },
    iconMainView:
    {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#2575FC',
        alignSelf: 'center',
        marginVertical: 5,
        justifyContent: 'center',
        width: 40,
        height: 40
    }

})