import * as React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import ChatRoom from "../assets/data/ChatRoom";
import ChatRoomItem from "../components/ChatRoomItem";


export default function HomeScreen() {
  return (
    <View style={styles.page}>
      
      <FlatList
      data={ChatRoom}
      renderItem={({item})=> <ChatRoomItem chatRoom={item} />}
      showsVerticalScrollIndicator={false}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
});
