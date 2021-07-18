import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import ToggleSwitch from 'toggle-switch-react-native'
import Realm from 'realm'
import DrawerBtnWithImgText from '../../Components/DrawerImgWithTextBtn';
import RNFetchBlob from 'rn-fetch-blob'
import {DATABASENAME} from '../../Database/schema'
import { createAlarm } from 'react-native-simple-alarm';
import moment from 'moment'
import PushNotification, {Importance}  from "react-native-push-notification";
let realm = null;
PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },
  
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
  
      // process the notification
  
      // (required) Called when a remote is received or opened, or local notification is opened
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
  
    // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    onAction: function (notification) {
      console.log("ACTION:", notification.action);
      console.log("NOTIFICATION:", notification);
  
      // process the action
    },
  
    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function(err) {
      console.error(err.message, err);
    },
  
    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
  
    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,
  
    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     * - if you are not using remote notification or do not have Firebase installed, use this:
     *     requestPermissions: Platform.OS === 'ios'
     */
    requestPermissions: true,
  });
const DrawerContentt = ({ navigation, props }) => {
    const [ToggleRoutineReminder, setToggleRoutineReminder] = useState(false)
    const [ToggleNoProduct, setToggleNoProduct] = useState(false)
    useEffect(() => {
        PushNotification.checkPermissions((permissions) => {
            console.log(permissions)
            if (!permissions.alert) {
              alert('Please enable push notifications for the alarm to work');
            }else{
                PushNotification.createChannel(
                    {
                      channelId: "mynotificationchannel1", // (required)
                      channelName: "My channel", // (required)
                      channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
                      playSound:true, // (optional) default: true
                      soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
                      importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
                      vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
                    },
                    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
                  );
            }
          });
    },[])
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
                console.log("BAckup Create successfully", data)
         })
        .catch((err) => { 
            console.log("Some Error", err)
         })
    }
    const RestoreDataHandler = () => {
        alert('Restore')
    }
    const RateUsHandler = () => {
        navigation.navigate('Reviews')
    }

    const setalaram = async (isOn) => {
        setToggleRoutineReminder(isOn)
        try {
            await createAlarm({
                active: true,
                date: moment().format(),
                message: 'message',
                snooze: 1,
              });
          } catch (e) {
              console.log(e)
          }
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
                                <Text style={{ color: '#FFFF' }}>08:0 Am and 08:00 PM</Text>
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