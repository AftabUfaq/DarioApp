import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import ToggleSwitch from 'toggle-switch-react-native'
import Realm from 'realm'
import DrawerBtnWithImgText from '../../Components/DrawerImgWithTextBtn';
import RNFetchBlob from 'rn-fetch-blob'
import {DATABASENAME, } from '../../Database/schema'
import AlarmClock from 'react-native-alarm-clock';
let realm = null;

const DrawerContentt = ({ navigation, props }) => {
    const [ToggleRoutineReminder, setToggleRoutineReminder] = useState(false)
    const [ToggleNoProduct, setToggleNoProduct] = useState(false)
    
    const pathToCopy = `${RNFetchBlob.fs.dirs.DownloadDir}/DiarioApp/`
    const BackupHandler = () => {
        realm = new Realm({ path: DATABASENAME });
         RNFetchBlob.fs.isDir(pathToCopy).then((data) => {
             if(!data){
                 RNFetchBlob.fs.mkdir(pathToCopy).then((data) => {
                     console.log("data", data)
                 }).catch((error) => {
                     console.log("error",error)
                 })
             }
         })

      
        RNFetchBlob.fs.cp(realm.path, `${pathToCopy}${DATABASENAME}`)
        .then((data) => { 
                console.log("BAckup Create successfully", `${pathToCopy}${DATABASENAME}`)
         })
        .catch((err) => { 
            console.log("Some Error", err)
         })
    }
    const RestoreDataHandler = () => {
        realm = new Realm({ path: DATABASENAME });
        realm.write(async () => {
            try{
             await realm.delete(realm.objects('Products'));
             alert("restored Successfully")
            }
            catch(err){
                console.log(err)
                alert("Error")
            }
        });
        
    }
    const RateUsHandler = () => {
        navigation.navigate('Reviews')
    }

    const setalaram = async (isOn) => {
        if(ToggleRoutineReminder){
            alert("already set the alarm");
            return;   
        }
        setToggleRoutineReminder(isOn)
        let dateam = new Date();
        dateam.setDate(dateam.getDate()+1);
        dateam.setHours(8,0);
        AlarmClock.createAlarm(dateam.toISOString(), 'Alaram set for next day at 8:00 Am');
        let datepm = new Date();
        datepm.setDate(datepm.getDate()+1);
        datepm.setHours(20,0);
        AlarmClock.createAlarm(datepm.toISOString(), 'Alaram set for next day at 8:00 PM');
    }

    return (
        <View style={styles.MainContent}>
            <DrawerContentScrollView {...props}
                borderTopRightRadius={20}
                borderBottomRightRadius={20}
                // endFillColor="#EE2326"
                backgroundColor="#2575FC">
                <View style={styles.drawercontent}>


                    <TouchableOpacity style={{ margin: 20 }}
                        onPress={() => navigation.closeDrawer()}>
                        <Icon name="close-outline" size={30} color="#FFFF" />
                    </TouchableOpacity>


                    <View style={{ margin: 20, flexDirection: 'row' }}>
                        <Image source={require('../../assets/images/settings.png')} />
                        <Text style={{ marginHorizontal: 20, fontSize: 20, color: '#FFFF' }}>Settings</Text>
                    </View>


                    <View style={styles.ItemsView}>

                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <Image source={require('../../assets/images/Iconfeather-bell.png')} />

                            <View style={{ marginHorizontal: 5, flex: 1 }}>
                                <Text style={{ color: '#FFFF', fontWeight: 'bold' }}>Routine reminders</Text>
                                <Text style={{ color: '#FFFF' }}>08:00 AM and 08:00 PM</Text>
                            </View>

                            <ToggleSwitch
                                isOn={ToggleRoutineReminder}
                                onColor="red"
                                offColor="black"
                                labelStyle={{ color: "black", fontWeight: "900" }}
                                size="small"
                                onToggle={isOn => setalaram(isOn)}
                            />

                        </View>

                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <Image source={require('../../assets/images/empty-box-open.png')} />

                            <View style={{ marginHorizontal: 5, flex: 1 }}>
                                <Text style={{ color: '#FFFF', fontWeight: 'bold' }}>Steps with no products</Text>
                                <Text style={{ color: '#FFFF' }}>Hide steps that have{'\n'}no product</Text>
                            </View>

                            <ToggleSwitch
                                isOn={ToggleNoProduct}
                                onColor="red"
                                offColor="black"
                                labelStyle={{ color: "black", fontWeight: "900" }}
                                size="small"
                                onToggle={isOn => setToggleNoProduct(isOn)}
                            />

                        </View>

                        <DrawerBtnWithImgText text="Backup data" img={require('../../assets/images/backup.png')} handler={BackupHandler} />

                        <DrawerBtnWithImgText text="Restore data" img={require('../../assets/images/restore.png')} handler={RestoreDataHandler} />

                        <DrawerBtnWithImgText text="Rate us" img={require('../../assets/images/star.png')} handler={RateUsHandler} />

                    </View>


                </View>

            </DrawerContentScrollView>




        </View >
    )
}
export default DrawerContentt;

const styles = StyleSheet.create(
    {
        MainContent:
        {
            flex: 1,
            borderTopRightRadius: 25,
            borderBottomRightRadius: 20,
            backgroundColor: '#2575FC'
        },
        drawercontent:
        {
            flex: 1,
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25,
            backgroundColor: '#2575FC'
        },
        ItemsView:
        {
            margin: 10,
            flexDirection: 'column',
            flex: 1,
            // backgroundColor: 'red',
            // height: 600,
            // padding: 0
        }


    }
);