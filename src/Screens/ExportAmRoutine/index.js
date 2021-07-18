import React, { useState, useRef } from 'react'
import { Container, Content } from 'native-base'
import { View, Text, ImageBackground,PermissionsAndroid, Alert,TextInput, FlatList, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'
import CameraRoll from '@react-native-community/cameraroll';
import BackBtnTextWithDate from '../../Components/BackBtnTextBelowDateHeader';
import { mystyles } from '../../styles';
import { useEffect } from 'react/cjs/react.development';
const { width, height } = Dimensions.get('window')
import Share from 'react-native-share';
import {captureRef} from 'react-native-view-shot';
const ExportToRoutine = ({ navigation, route }) => {
    const viewRef = useRef();

    const [showGrid, setShowGrid] = useState(true)
    const [UsedProduct, setUsedProduct] = useState([
        {
            id: 1,
            name: 'Product 1',
            img: require('../../assets/images/product1.png')
        },
        {
            id: 2,
            name: 'Product 2',
            img: require('../../assets/images/product2.png')
        },
        {
            id: 3,
            name: 'Product 3',
            img: require('../../assets/images/product1.png')
        },
    ])
    useEffect(() => {
        setUsedProduct(route.params.data);
    },)
    const [date, setDate] = useState(new Date())

    const getPermissionAndroid = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Image Download Permission',
              message: 'Your permission is required to save images to your device',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true;
          }
          Alert.alert(
            '',
            'Your permission is required to save images to your device',
            [{text: 'OK', onPress: () => {}}],
            {cancelable: false},
          );
        } catch (err) {
          // handle error as you please
          console.log('err', err);
        }
      };
    
      // download image
      const downloadImage = async () => {
        try {
          // react-native-view-shot caputures component
          const uri = await captureRef(viewRef, {
            format: 'png',
            quality: 0.8,
          });
    
          if (Platform.OS === 'android') {
            const granted = await getPermissionAndroid();
            if (!granted) {
              return;
            }
          }
    
          // cameraroll saves image
          const image = CameraRoll.save(uri, 'photo');
          if (image) {
            Alert.alert(
              '',
              'Image saved successfully.',
              [{text: 'OK', onPress: () => {}}],
              {cancelable: false},
            );
          }
        } catch (error) {
          console.log('error', error);
        }
      };
    
      const shareImage = async () => {
        try {
          const uri = await captureRef(viewRef, {
            format: 'png',
            quality: 0.8,
          });
    
          // share
          const shareResponse = await Share.open({url: uri});
        } catch (error) {
          console.log('error', error);
        }
      };
    return (
        <Container style={{ backgroundColor: '#FFFF' }} >
            <Content contentContainerStyle={{ backgroundColor: '#FFFF' }}>
                {/* <HeaderBackTextWithTime date={date} text="Export [AM] routine"
                    navigation={navigation} Edithandler="" /> */}
                <View  ref={viewRef} style={{backgroundColor:"#ffff"}}>
                        <BackBtnTextWithDate iconTitleColor="#474747"
                            dateColor="#878787"
                            text="Export [AM] routine" date={date} navigation={navigation} />

                        <View style={{
                            borderTopLeftRadius: 20, borderTopRightRadius: 20,
                            backgroundColor: '#6A11CB'
                        }}>

                    <ImageBackground resizeMode="cover"
                        source={require('../../assets/images/whiteCoatHand.png')}
                        imageStyle={{
                            borderTopLeftRadius: 20, borderTopRightRadius: 20,
                        }}
                        style={{
                            marginTop: 25, height: 220, width: '100%'

                        }}>
                        <View style={styles.smallImgWithTextView}>
                            <Image resizeMode="contain" source={require('../../assets/images/smallFace.png')} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.poweredByText}>Powered by</Text>
                                <Text style={styles.skinCareDiaryText}>Skincare Diary</Text>
                            </View>
                        </View>

                    </ImageBackground>
               
                <View style={{
                    bottom: 12,
                    borderTopLeftRadius: 20, borderTopRightRadius: 20,
                    backgroundColor: '#2575FC'
                }}>
                    <View style={styles.ProductLargeRoundedView}>
                        <View style={styles.UsedProductMenuBtnView}>
                            <Text style={{ fontSize: 14, color: '#5A5A5A' }}>Used products</Text>
                            <TouchableOpacity onPress={() => setShowGrid(!showGrid)}>
                                {showGrid ?
                                    <Icon name="grid" size={20} color="#C4C4C4" /> :
                                    <Image source={require('../../assets/images/menuu.png')} />
                                }
                            </TouchableOpacity>
                        </View>
                        {showGrid ?
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            data={UsedProduct}
                            renderItem={({ item, index }) => (
                                <View style={styles.addProductView}>
                                    <View style={styles.numberBoxView}>
                                        <Text style={styles.ProductNumText}>0{index+1}</Text>
                                    </View>
                                    <View style={styles.ProductNameView}>
                                        <Text style={{ color: '#878787' }}>{item.name}</Text>
                                    </View>
                                </View>
                            )}
                        />
                            
                            :
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                data={UsedProduct}
                                horizontal
                                renderItem={({ item, index }) =>
                                    <View style={{ marginHorizontal: 15 }}>
                                        <Image style={{ borderRadius: 10 }} source={item.img} />
                                        <Text style={{ textAlign: 'center', marginTop: 4, color: '#878787' }}>{item.name}</Text>
                                    </View>
                                }
                            />

                        }

                        </View>        
                    </View>
                </View>
                </View>
                <View style={{ marginTop: 20, flexDirection: 'row', alignSelf: 'center' }}>
                            <TouchableOpacity onPress={() => downloadImage()}>
                                <Image source={require('../../assets/images/downloadd.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => shareImage()} >
                                <Image source={require('../../assets/images/share.png')} />
                            </TouchableOpacity>
                        </View>
            </Content>
        </Container>
    )
}
export default ExportToRoutine

const styles = StyleSheet.create({
    smallImgWithTextView:
    {
        flexDirection: 'row', position: 'absolute', bottom: 20, marginLeft: 20
    },
    poweredByText: {
        color: '#FFFF',
        fontSize: 14,
        fontFamily: 'Roboto-Light'
    },
    skinCareDiaryText: {
        color: '#FFFF',
        fontSize: 18,
        fontFamily: 'Roboto-Regular'
    },
    ProductLargeRoundedView: {
        marginTop: 20,
        borderTopLeftRadius: 20, borderTopRightRadius: 20,
        backgroundColor: '#FFFF'
    },
    UsedProductMenuBtnView: {
        marginVertical: 15, marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addProductView: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderColor: '#C4C4C4',
        width: wp('90'), borderWidth: 1,
        borderRadius: 10, padding: 10, 
        marginTop:10,
    },
    numberBoxView: {
        width: 40,
        backgroundColor: '#E6E9F0',
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: '#E6E9F0',
        height: 40, borderWidth: 1,
    },
    ProductNumText: {
        textAlign: 'center', color: '#878787'
    },
    ProductNameView: {
        marginLeft: 20, justifyContent: 'center'
    }
})