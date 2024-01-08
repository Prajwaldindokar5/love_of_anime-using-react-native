import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  animeContainer: {},
  imageCover: {
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: "#dedede",
  },
  containerHead: {
    display: "flex",
    alignItems: "center",

    flexDirection: "row",
    margin: 10,
  },
  nameAndStatus: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
  },
  animeName: {
    fontWeight: "500",
    position: "relative",
    left: 5,
  },

  animeStatus: {
    position: "relative",
    bottom: 3,
    fontWeight: "400",
    fontSize: 12,
    left: 5,
  },
  likeIcon: {
    // fontWeight: "500",
    position: "relative",
    // maxWidth: 100,
    left: 200,
    height: 26,
    width: 26,
  },
  containerMid: {
    margin: 17,
  },
  midtext: { fontWeight: "500", padding: 5 },
  containerFoot: {
    margin: 17,
  },
});

export default styles;
