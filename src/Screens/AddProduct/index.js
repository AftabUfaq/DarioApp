import { Container, Content } from 'native-base';
import React, { useState, useEffect } from 'react'
import { View, Text, Image,Alert, StyleSheet,PermissionsAndroid, Dimensions, TouchableOpacity, TextInput, FlatList, Platform, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import ProgressCircle from 'react-native-progress-circle'
//import {checkMultiple,requestMultiple,request,RESULTS, PERMISSIONS} from 'react-native-permissions';
import Realm from 'realm'
import HeaderWithBelowText from '../../Components/BackBtnTextBelowText';
import { mystyles } from '../../styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomLargeBtn from '../../Components/BottomLargeBtn';
const { width, height } = Dimensions.get('window')
import {PRODUCTS_SCHEMA, ProductsSchema,DATABASENAME} from '../../Database/schema'
let realm = null;
const AddProduct = ({ navigation }) => {
    const [showImgs, setShowImgs] = useState(false)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [image, setImage] = useState(null)
    const [items, setItems] = useState([
        { label: 'Cleanser', value: 'Cleanser' },
        { label: 'Toner', value: 'Toner' },
        { label: 'Essence', value: 'Essence' },
        { label: 'Serum', value: 'Serum' },
        { label: 'Mask', value: 'Mask' },
        { label: 'Eye', value: 'Eye' },
        { label: 'Cream', value: 'Cream' },
        { label: 'Sunscreen', value: 'Sunscreen' },
        { label: 'Night mask', value: 'Night mask' },
        { label: 'Make up', value: 'Make up' },
    ]);
    const [AMTimechecked, setAMTimeChecked] = useState(false);
    const [productName, setProductName] = useState('')
    const [ProductImg, setProductImg] = useState([
        {
            id: 1,
            name:"gallery",
            img: require('../../assets/images/productitem1.png')
        },
        {
            id: 2,
            name:"camera",
            img: require('../../assets/images/productitem2.png')
        },
        // {
        //     id: 3,
        //     img: require('../../assets/images/productitem3.png')
        // },
    ])
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
  
   

    useEffect(() => {
        realm = new Realm({
            path: DATABASENAME,
            schema:[ProductsSchema]
        });
      
    },[])

    const FinishAddingHandler = () => {
        //navigation.navigate('ProductList')
        realm.write(() => {
            var ID = realm.objects(PRODUCTS_SCHEMA).length + 1;
             realm.create(PRODUCTS_SCHEMA, {
                ProductID:ID, 
                ProductName:productName, 
                ProductStep:value,
                ProductTime:`${AMTimechecked}`, 
                ProductImage:image,
                ProductDate: `${+ new Date()}`
              });
          })
          Alert.alert("Product Details Added Successfully.")
    }

    const openGallery =( ) => {
        if(Platform.OS === "android"){
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
                title: "Cool Photo App Camera Permission",
                message:
                  "Cool Photo App needs access to your camera " +
                  "so you can take awesome pictures.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
              }).then(() => {
                if(PermissionsAndroid.RESULTS.GRANTED){
                    ImagePicker.openPicker({
                        width: 300,
                        height: 400,
                      
                        cropping: true
                      }).then(async (image) => {
                        setUploading(true);
                        setTransferred(0);
                        const { path } = image;
                       // const filename = path.substring(uri.lastIndexOf('/') + 1);
                        const uploadUri = Platform.OS === 'ios' ? path.replace('file://', '') : path;
                        const name = + new Date();
                        const task = storage()
                            .ref(`images/${name}`)
                            .putFile(uploadUri);
                        // set progress state
                        task.on('state_changed', snapshot => {
                            setTransferred(Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                           
                        });
                        try {
                            await task;
                        } catch (e) {
                            console.error(e);
                        }
                        setUploading(false);
                        const url = await storage().ref(`images/${name}`).getDownloadURL();
                        setImage(url)
                      }).catch((error) => {
                        console.log(error)
                    });                   
                }else{
                    alert("Please Grant Permission")
                }
                
            });
        }
    }
    const openCamera =() => {
        if(Platform.OS === "android"){
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
                title: "Cool Photo App Camera Permission",
                message:
                  "Cool Photo App needs access to your camera " +
                  "so you can take awesome pictures.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
              }).then(() => {
                if(PermissionsAndroid.RESULTS.GRANTED){
                    ImagePicker.openCamera({
                        width: 300,
                        height: 400,
                        includeBase64:true,
                        cropping: true,
                      }).then(async (image) => {
                        setUploading(true);
                        setTransferred(0);
                        const { path } = image;
                       // const filename = path.substring(uri.lastIndexOf('/') + 1);
                        const uploadUri = Platform.OS === 'ios' ? path.replace('file://', '') : path;
                        const name = + new Date();
                        const task = storage()
                            .ref(`images/${name}`)
                            .putFile(uploadUri);
                        // set progress state
                        task.on('state_changed', snapshot => {
                            setTransferred(Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                           
                        });
                        try {
                            await task;
                        } catch (e) {
                            console.error(e);
                        }
                        setUploading(false);
                        const url = await storage().ref(`images/${name}`).getDownloadURL();
                        setImage(url)
                      }).catch((error) => {
                        console.log(error)
                    });      
                }else{
                    alert("Please Grant Permission")
                }
              });
        }
    }
    
    return (
        <Container>
            <Content nestedScrollEnabled={true} >
                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                    colors={['#6A11CB', '#2575FC']} style={mystyles.linearGradient}>
                    <HeaderWithBelowText navigation={navigation} title="Add product"
                        description={"Choose a product to add to the list"}
                        iconTitleColor="#FFFF"
                        descriptionColor="#FFFF" />
                </LinearGradient>

                <View style={styles.largeView}>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.ChooseProductText}>Choose a product</Text>
                    </View>

                    <View style={styles.chooseProductTextInputView}>
                        <TextInput
                            value={productName}
                            onChangeText={(val) => setProductName(val)}
                            style={{ flex: 1, textAlign: 'center' }}
                            placeholder="Type product name here" placeholderTextColor="#878787" />
                    </View>

                    <View style={styles.chooseProductTextInputView}>
                        <ScrollView style={{flexDirection:"row"}}>
                            <DropDownPicker
                                dropDownContainerStyle={{
                                    backgroundColor: '#000',
                                    color: '#2575FC',
                                }}

                                onClose={() => setOpen(false)}
                                open={open}
                                style={{ borderColor: '#FFFFFF', color: '#2575FC' }}
                                containerStyle={{
                                    width: wp('40%'),
                                    // flex: 1,
                                    height: 300,
                                    color: '#2575FC',
                                    borderColor: '#FFFF',
                                    alignSelf: 'center'
                                }}
                                mode="SIMPLE"
                                max={15}
                                iconContainerStyle={{ color: '#2575FC' }}
                                arrowIconStyle={{  }}
                                placeholder="Choose the steps"
                                // labelProps={}
                                textStyle={{ color: '#2575FC' }}
                                value={value}
                                items={items}

                                onChangeValue={(val) => setValue(val)}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                            />
                        </ScrollView>
                    </View>

                    <View style={styles.AmPMCheckBoxMainView}>
                        <View style={styles.AmPmCheckBoxView}>
                            <Text style={styles.AmPmText}>AM</Text>
                            <TouchableOpacity onPress={() => setAMTimeChecked(!AMTimechecked)} style={styles.AMPMcheckboxBtn}>
                                {AMTimechecked ?
                                    <Image style={{ alignSelf: 'center' }} source={require('../../assets/images/tick.png')} />
                                    : null}

                            </TouchableOpacity>

                        </View>

                        <View style={[styles.AmPmCheckBoxView, { marginHorizontal: 10, }]}>
                            <Text style={styles.AmPmText}>PM</Text>
                            <TouchableOpacity onPress={() => setAMTimeChecked(!AMTimechecked)} style={styles.AMPMcheckboxBtn}>
                                {!AMTimechecked ?
                                    <Image style={{ alignSelf: 'center' }} source={require('../../assets/images/tick.png')} />
                                    : null}

                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.noPhotoAttachView}>
                        
                        {uploading?
                        <View style={{alignSelf:"center"}}>
                            <ProgressCircle
                                percent={transferred}
                                radius={50}        
                                borderWidth={8}
                                color="#3399FF"
                                shadowColor="#999"
                                bgColor="#fff"
                        >
                            <Text style={{ fontSize: 18 }}>{transferred}%</Text>
                        </ProgressCircle>
                        
                        </View>
                        :image!==null?
                        <Image source={{uri:image}} style={{resizeMode:"cover", width:100,height:100,backgroundColor:"red", borderRadius:10, alignSelf:"center"}} />
                        : showImgs ?
                        <ScrollView style={{flexDirection:"row"}}>
                            <FlatList
                                data={ProductImg}
                                numColumns={2}
                                contentContainerStyle={{alignItems:"center",width:width, justifyContent:"space-evenly"}}
                                renderItem={({ item, index }) =>
                                    (
                                        <TouchableOpacity 
                                        onPress={() => item.name === "gallery"?openGallery():openCamera()}
                                            style={{
                                                backgroundColor:"#eee",
                                                borderRadius:20, 
                                                width:100,
                                                height:100,
                                                marginHorizontal:10,
                                                justifyContent:"center",
                                                alignItems:"center"
                                            }}>
                                            <Text>{item.name}</Text>
                                        </TouchableOpacity>
                                    )

                                }
                            />
                            </ScrollView>
                            :
                            <Text style={styles.noPhotoAttachText}>No photos attached yet</Text>
                        }
                    </View>

                    <TouchableOpacity onPress={() => { setShowImgs(!showImgs), setUploading(false), setImage(null)}} style={styles.attachPhotosBtn}>
                        <Icon name="link-outline" size={20} color="#2575FC" />
                        <Text style={styles.attachPhotoText}>Attach photos(Optional)</Text>
                    </TouchableOpacity>

                    <View style={{ marginVertical: 15 }}>
                        <BottomLargeBtn text="Finish Adding" handler={FinishAddingHandler} />
                    </View>
                </View>

            </Content>
        </Container>
    )
}
export default AddProduct;

const styles = StyleSheet.create({
    largeView:
    {
        width: wp('100%'),
        marginTop: 20,
        borderWidth: 1,
        shadowColor: '#000',
        elevation: 1, shadowOffset: { height: 10, width: 10 },
        justifyContent: 'center',
        shadowOpacity: 0.2,
        borderColor: '#0000',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    ChooseProductText: {
        fontSize: 20,
        color: '#5A5A5A',
        alignSelf: 'center'
    },
    AmPMCheckBoxMainView: {
        flexDirection: 'row', marginVertical: 15, alignSelf: 'center'
    },
    AmPmCheckBoxView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    AmPmText: {
        alignSelf: 'center',
        marginRight: 5
    },
    AMPMcheckboxBtn: {
        justifyContent: 'center',
        borderRadius: 10,
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#E6E9F0'
    },
    chooseProductTextInputView: {
        width: wp('90%'),
        borderColor: '#C4C4C4',
        marginVertical: 5,
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 5
    },
    noPhotoAttachView: {
        height: height / 4.4,
        justifyContent: 'center',
    },
    noPhotoAttachText: {
        color: '#5A5A5A',
        textAlign: 'center'
    },
    attachPhotosBtn: {
        padding: 15,
        flexDirection: 'row',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        width: width / 1.1,
        borderWidth: 1,
        borderColor: '#2575FC'
    },
    attachPhotoText: {
        marginLeft: 10,
        color: '#2575FC'
    }
})