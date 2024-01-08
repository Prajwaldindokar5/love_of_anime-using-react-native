import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  cardContainer: {
    borderColor: "gray",
    borderWidth: 1,
    width: 300,
    height: 370,
    margin: 10,
    borderRadius: 5,
    overflow: "hidden",
  },
  coverImage: { borderBottomWidth: 2, borderColor: "gray" },
  cardHeader: {
    display: "flex",
    flexDirection: "row",

    padding: 5,
    alignItems: "center",
  },
  animeName: {
    fontWeight: "500",
    position: "relative",
    left: 5,
  },
  animeStatus: {
    position: "relative",
    left: 30,
    fontWeight: "400",
  },
  cardMid: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    paddingLeft: 10,
    paddingBottom: 12,
    gap: 5,
  },
  cardText: { fontWeight: "500" },
  cardFooter: {
    maxWidth: 250,
    paddingLeft: 10,
  },
});
export default styles;
