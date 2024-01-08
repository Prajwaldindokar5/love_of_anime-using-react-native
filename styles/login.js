import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginForm: {
    margin: 38,
    marginTop: 100,
    borderWidth: 1.5,
    height: 340,
    width: 320,
    borderRadius: 5,
    borderColor: "gray",
  },
  label: {
    fontWeight: "500",
    padding: 12,
    fontSize: 17,
  },
  input: {
    margin: 10,
    borderWidth: 1,
    maxWidth: 290,
    padding: 10,
    borderColor: "#dedede",
  },
  loginBtn: {
    textAlign: "center",
    borderColor: "#dedede",
    width: 110,
    padding: 8,
    position: "relative",
    top: 40,
    left: 100,
    fontWeight: "bold",
    borderRadius: 3,
    backgroundColor: "rgb(33 150 226)",
  },
});

export default styles;
