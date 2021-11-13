import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Styles from "./styles";

export default function ChatRoomItem({ chatRoom }) {
  const user = chatRoom.users[1];

  const navigation=useNavigation();
  const onPress=()=>{
    navigation.navigate('ChatRoom',{id:chatRoom.id});
  }
  return (
    <Pressable onPress={onPress} style={Styles.container}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={Styles.image}
      />
      {chatRoom.newMessages && (
        <View style={Styles.badgeContainer}>
          <Text style={Styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )}
      <View style={Styles.rightContainer}>
        <View style={Styles.row}>
          <Text style={Styles.name}>{user.name}</Text>
          <Text style={Styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={Styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
}
