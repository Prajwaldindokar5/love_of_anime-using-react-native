import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    marginTop: 35,
  },
  profileContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  ProfileName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  favouriteContainer: {
    padding :20
  },
  favouriteTitle: {
    textAlign: "center",
    marginTop:80,
    fontWeight: "bold",

  },
  listInstruction:{
textAlign : "center",
fontWeight:"500",
marginTop: 20,
color : "gray"
  }
});
export default style;
