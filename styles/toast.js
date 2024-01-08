import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  toast: {
    marginTop:30,
    maxWidth: 250,
    maxHeight: 150,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 75,
    gap: 4,
    borderRadius: 10,
    elevation: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderColor: "white",
  },
  messageText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  statusText: {
    fontWeight: "bold",
    color: "white",
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff", // White background color
    padding: 5,
    borderRadius: 5,
    marginTop: 5, // Adjust as needed
  },
});
export default styles;
