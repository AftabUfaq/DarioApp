import React, {useState} from 'react';
import {Button,FlatList, Text,Dimensions,StyleSheet,StatusBar, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import BottomLargeBtn from "../BottomLargeBtn/index"
const { width, height } = Dimensions.get('window')
const Item = ({ name,EssenceTonerHandler,toggleModal }) => (
    <TouchableOpacity style={styles.item} onPress={() => {toggleModal(), EssenceTonerHandler(name)}}>
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );

function ProductsModal({products,isModalVisible, toggleModal,EssenceTonerHandler}) {
    const renderItem = ({ item }) => (
        <Item name={item.ProductName} EssenceTonerHandler={EssenceTonerHandler} toggleModal={toggleModal} />
      );
  return (
    
       <Modal 
        isVisible={isModalVisible}
        backdropOpacity={.8}
        style={{
            margin:0,
        }}
        >
      
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
         
        
      </Modal>
   
  );
}

export default ProductsModal;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#EEEEEE',
      paddingHorizontal: 20,
      paddingVertical:10,
      borderRadius:10,
      marginVertical: 4,
      marginHorizontal: 8,
    },
    title: {
      fontSize: 16,
    },
  });