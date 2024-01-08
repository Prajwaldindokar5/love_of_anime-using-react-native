import { Stack, useRouter } from "expo-router";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AnimeCard from "../components/AnimeCard";
import { useEffect, useState } from "react";
import icon from "../constants/icon";
import { useAppDispatch, useAppSelector } from "../state/hook";
import { setAnimes } from "../state/slice/appSlice";
import { anime } from "../types/animeTypes";
import { useGetAllAnimesQuery } from "../state/slice/apiSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearUserState, setToken, setUser } from "../state/slice/userSlice";
import { useRoute } from "@react-navigation/native";

const Home = () => {
  const dispatch = useAppDispatch();
  const { animes } = useAppSelector((state) => state.app);
  const { user, token, isLogin, updateUser } = useAppSelector(
    (state) => state.user
  );
  const { data, isLoading, error } = useGetAllAnimesQuery("");
  const router = useRouter();

  useEffect(() => {
    const getUserData = async () => {
      const userDetails = (await AsyncStorage.getItem("animehub_user"))
        ? await AsyncStorage.getItem("animehub_user")
        : null;
      const tokenDetails = await AsyncStorage.getItem("animehub_token");
      dispatch(setUser(JSON.parse(userDetails as string)));
      dispatch(setToken(JSON.parse(tokenDetails as string)));
    };

    getUserData();
  }, [isLogin, data, updateUser]);

  useEffect(() => {
    if (data) {
      dispatch(setAnimes(data.animes));
    }
  }, [data]);

  const logoutUser = async () => {
    await AsyncStorage.removeItem("animehub_user");
    await AsyncStorage.removeItem("animehub_token");
    dispatch(clearUserState());
  };
  const handleOnPress = (anime: string) => {
    router.push(`/anime/${anime}`);
  };

  return (
    <SafeAreaView style={{ marginTop: 20 }}>
      <Stack.Screen
        options={{
          headerTitle: "ANIME HUB",
          headerTitleStyle: { fontSize: 15, fontWeight: "500" },
          headerTitleAlign: "center",
          headerLeft: () =>
            user ? (
              <TouchableOpacity onPress={async () => await logoutUser()}>
                <Text
                  style={{
                    textAlign: "center",
                    borderColor: "#dedede",
                    width: 50,
                    padding: 4,
                    color: "#fff",
                    fontWeight: "500",
                    fontSize: 8.5,
                    borderRadius: 3,
                    backgroundColor: "rgb(226 0 0)",
                  }}
                >
                  Logout
                </Text>
              </TouchableOpacity>
            ) : (
              <></>
            ),
          headerRight: () =>
            user ? (
              <TouchableOpacity onPress={() => router.push(`/profile`)}>
                <Image source={icon.profil} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => router.push("/login")}>
                <Text
                  style={{
                    textAlign: "center",
                    borderColor: "#dedede",
                    width: 50,
                    padding: 4,
                    color: "black",
                    fontWeight: "bold",
                    fontSize: 10,
                    borderRadius: 3,
                    backgroundColor: "lightgreen",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            ),
        }}
      />
      <View>
        {/* <Text style={styles.appTitle}>ANIME HUB</Text> */}
        {isLoading ? (
          <ActivityIndicator size={"large"} style={{ margin: 50 }} />
        ) : error ? (
          <Text>Something Went Wrong</Text>
        ) : (
          <FlatList
            data={animes}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => handleOnPress(item.slug)}>
                <AnimeCard anime={item} index={index} />
              </TouchableOpacity>
            )}
            keyExtractor={(item: anime) => item?._id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
