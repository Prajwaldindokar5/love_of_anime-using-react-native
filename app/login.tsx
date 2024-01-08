import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/login";
import { useState } from "react";
import { useLoginMutation } from "../state/slice/apiSlice";
import { User, loginResponse } from "../types/response";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "../state/slice/userSlice";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userLogin] = useLoginMutation();
  const router = useRouter();
  const dispatch = useDispatch();

  const storeUserData = async (user: User, token: string) => {
    await AsyncStorage.setItem("animehub_user", JSON.stringify(user));
    await AsyncStorage.setItem("animehub_token", JSON.stringify(token));
  };

  const handleLogin = async () => {
    const credentials = { email, password };
    const res: loginResponse = await userLogin(credentials);

    if (res.data?.status === "success") {
      await storeUserData(res.data.user, res.data.token);
      dispatch(setLoginStatus(true));
      router.push("/");
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.loginForm}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          onChangeText={setEmail}
          style={styles.input}
          placeholder="Enter your email"
          value={email}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry={true}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Enter your password"
          value={password}
        />
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginBtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
