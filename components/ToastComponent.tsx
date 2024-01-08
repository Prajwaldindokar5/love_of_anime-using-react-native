import { View, Text } from "react-native";
import styles from "../styles/toast";

const ToastComponent = ({
  message,
  status,
  code,
}: {
  message: string;
  status: string;
  code?: number;
}) => {
  return (
    <View
      style={[
        styles.toast,
        { backgroundColor: status === "success" ? "green" : "red" },
      ]}
    >
      <Text style={styles.messageText}>{message}</Text>
      <Text style={styles.statusText}>{code}</Text>
    </View>
  );
};

export default ToastComponent;
