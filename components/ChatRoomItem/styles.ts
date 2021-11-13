import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      padding: 10,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 50,
      marginRight: 10,
    },
    badgeContainer: {
      backgroundColor: "#3872E9",
      width: 20,
      height: 20,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: "white",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      left: 45,
      top: 10,
    },
    badgeText: {
      color: "white",
    },
  
    text: {
      color: "grey",
      fontSize: 12,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    name: {
      fontWeight: "bold",
      fontSize: 18,
      marginBottom: 3,
    },
    rightContainer: {
      flex: 1,
      justifyContent: "center",
    },
  });

  export default Styles