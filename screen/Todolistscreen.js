import {Dimensions, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 

const Lodolistscreen = () => {
  const [dummydataw, setdummydataw] = useState([]);
  const [item, setitem] = useState('');

  const addmessage = (items)=>{
    if (items == 'add') {
      setdummydataw([...dummydataw,item])
      setitem('')
    } else {
      setdummydataw((dummydataw.filter((elem,index)=>{
        return index !== items
      })))
    }
  }
  
  const {width,height}= Dimensions.get('screen')
  return (
    <SafeAreaView style={{width:width,height:height}}>
    <View style={{marginHorizontal:16}}>
      <TextInput style={{borderWidth:2,borderColor:"#1e90ff",borderRadius:6,paddingVertical:12,paddingHorizontal:16,fontSize:16}} placeholder='Add a task' value={item} onChange={(e)=>{setitem(e.target.value)}}/>

      <TouchableOpacity onPress={()=>{addmessage('add')}} style={{backgroundColor:"#000",borderRadius:6,paddingVertical:8,alignItems:'center',marginTop:24}}>
        <Text style={{color:"#fff",fontWeight:"bold",fontSize:20}}>Add</Text>
      </TouchableOpacity>
    </View>

    <View style={{padding:50}}>
      <FlatList data={dummydataw} renderItem={(items)=>{
        return(
          <View style={{flexDirection:'row',backgroundColor:'#5f9ea0',fontSize:18,padding:10,margin:5,borderRadius:4}}>
            <Text style={{minWidth:240}}>{items.item}</Text>
            <AntDesign onPress={()=>{addmessage(items.index)}} style={{cursor: 'pointer'}} name="delete" size={24} color="black" />
          </View>
        )
      }}/>
    </View>
    </SafeAreaView>
  )
}

export default Lodolistscreen

const styles = StyleSheet.create({})