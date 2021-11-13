import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Chats from "../assets/data/Chats";
import Message from "../components/Message";
import MessageInput from "../components/MessageInput";

export default function ChatRoomScreen() {

    const route=useRoute();
    const navigation =useNavigation();

    navigation.setOptions({title:'ElonMusk'})
  return (
      <SafeAreaView style={styles.page}>
         <FlatList 
         style={{backgroundColor:'black'}}
         data={Chats.messages}
         renderItem={({item})=><Message message={item}/>}
         inverted
         />
         <MessageInput />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    page:{
        backgroundColor:'white',
        flex:1
    }
})

