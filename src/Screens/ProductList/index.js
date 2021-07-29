import React, { useEffect, useCallback, useState } from 'react'
import { Container, Content } from 'native-base';
import { View, Text, TouchableOpacity, FlatList, Dimensions, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ToggleSwitch from 'toggle-switch-react-native'
import HeaderWithBelowText from '../../Components/BackBtnTextBelowText';
import LinearGradient from 'react-native-linear-gradient';
import Realm from 'realm'
import { PRODUCTS_SCHEMA, DATABASENAME, ProductsSchema } from '../../Database/schema'

const { width, height } = Dimensions.get('window')
let realm = null;
import { useIsFocused, useFocusEffect } from '@react-navigation/native';

const ProductList = ({ navigation }) => {
    const isFocused = useIsFocused()
    const [Product, setProduct] = useState([])


    const AddProductHandler = () => {
        navigation.navigate('AddProduct')
    }
    useFocusEffect(
        useCallback(() => {
            realm = new Realm({
                path: DATABASENAME,
                schema: [ProductsSchema]
            });
            try {
                var productsdetalils = realm.objects(PRODUCTS_SCHEMA);
                setProduct(productsdetalils)
            } catch (err) {
                console.log(err)
            }
        }, [isFocused])
    );
    const [Toggle, setToggle] = useState(false)

    const renderItem = ({ item }) => {

        return (

            <View style={{ width: width - 100, alignSelf: "center" }}>
                <View style={styles.productView}>
                    <Image style={{
                        width: wp('60%'), height: wp("60%"),
                        overflow: "hidden", borderTopLeftRadius: 20, borderTopRightRadius: 20
                    }}
                        resizeMode="cover" source={{ uri: item.ProductImage }} />
                    <TouchableOpacity style={{
                        position: 'absolute',
                        top: 10, right: 10
                    }}>
                        <Image source={require('../../assets/images/circledelete.png')} />
                    </TouchableOpacity>

                    <View style={styles.productTextToggleView}>
                        <Text style={{ color: '#474747', fontSize: 18 }}>{item.ProductStep}</Text>
                        <ToggleSwitch
                            isOn={Toggle}
                            onColor="#2575FC"
                            offColor="black"
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="small"
                            onToggle={isOn => setToggle(isOn)}
                        />
                    </View>
                </View>
            </View>
        )
    }

    return (
        <Container>
            <Content contentContainerStyle={{ flex: 1 }}>

                <HeaderWithBelowText navigation={navigation} title="Product "
                    description={"Buy from our referal links and support us"}
                    iconTitleColor="#474747"
                    descriptionColor="#474747"
                />


                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                    colors={['#6A11CB', '#2575FC']} style={styles.ProductLinearGradientView}>

                    {Product.length ?
                        <FlatList
                            data={Product}
                            horizontal
                            renderItem={renderItem}

                            keyExtractor={item => item.ProductID.toString()}
                        />
                        :
                        <Text style={{ color: "#fff", alignSelf: "center", fontSize: 20 }}>No Products</Text>
                    }
                </LinearGradient>

                <View style={{ position: 'absolute', bottom: 30, }}>
                    <Image source={require('../../assets/images/circle.png')} />
                </View>

                <TouchableOpacity onPress={() => AddProductHandler()} style={{ position: 'absolute', bottom: 40, left: 140 }}>
                    <Image source={require('../../assets/images/addBtn.png')} />
                </TouchableOpacity>


            </Content>

        </Container>
    )
}
export default ProductList;

const styles = StyleSheet.create({
    productView: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#FFFF',
        width: wp('60%'),
        backgroundColor: '#FFFF',
        // height: height / 2.4,
        alignSelf: 'center',
    },
    productTextToggleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20, marginVertical: 10
    },
    ProductLinearGradientView: {
        height: height / 1.3,
        // paddingLeft: 15,
        marginVertical: 20,
        justifyContent: 'center',
        // paddingRight: 15,
        transform: [{ scaleX: 1 }],
        overflow: 'hidden',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
    }
})