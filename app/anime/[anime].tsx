import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import styles from "../../styles/anime";
import { anime } from "../../types/animeTypes";
import { useAppDispatch, useAppSelector } from "../../state/hook";
import icon from "../../constants/icon";
import { TouchableOpacity, ToastAndroid } from "react-native";
import { useHandleFavouriteMutation } from "../../state/slice/apiSlice";
import { HandleFavouriteResponse } from "../../types/response";
import { useEffect, useState } from "react";
import ToastComponent from "../../components/ToastComponent";
import { setUpdateUser, setUser } from "../../state/slice/userSlice";

const Anime = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { anime: slug } = useGlobalSearchParams();
  const [status, setStatus] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [statusCode, setStatusCode] = useState<number>();

  const router = useRouter();
  const [handleFavourite] = useHandleFavouriteMutation();
  const [showToast, setShowToast] = useState<boolean>(false);

  const { animes } = useAppSelector((state) => state.app);
  const { updateUser } = useAppSelector((state) => state.user);

  const foundAnime: anime | undefined = animes.find(
    (item: anime) => item?.slug === slug
  );

  const handleFavClick = async (slug: string) => {
    const res: HandleFavouriteResponse = await handleFavourite(slug);

    if (res.data?.status === "success") {
      await AsyncStorage.setItem(
        "animehub_user",
        JSON.stringify(res?.data?.user)
      );
      dispatch(setUpdateUser(true));
      setStatus("success");
      setMessage(res.data.message);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        dispatch(setUpdateUser(false));
      }, 2000);
    } else if (res.error) {
      setStatus("error");
      setMessage(res.error?.data.message);
      setStatusCode(res.error.status);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  };

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: foundAnime?.name ? foundAnime?.name : "...loading",
          headerTitleStyle: { fontSize: 15, fontWeight: "bold" },
        }}
      />

      {foundAnime ? (
        <View style={styles.animeContainer}>
          <View style={styles.imageCover}>
            <Image
              style={{ height: 300, width: 400, resizeMode: "cover" }}
              source={{ uri: foundAnime?.animeCover }}
            />
          </View>
          <View style={styles.containerHead}>
            <Image
              style={{
                height: 35,
                width: 35,
                resizeMode: "cover",
                borderRadius: 50,
              }}
              source={{ uri: foundAnime?.animeProfile }}
            />
            <View style={styles.nameAndStatus}>
              <Text style={styles.animeName}>{foundAnime?.name}</Text>
              <Text
                style={[
                  styles.animeStatus,
                  {
                    color: foundAnime?.status === "Complete" ? "green" : "red",
                  },
                ]}
              >
                {foundAnime?.status}
              </Text>
            </View>
            <TouchableOpacity onPress={() => handleFavClick(foundAnime.slug)}>
              <Image
                style={styles.likeIcon}
                source={
                  user?.favourites?.some(
                    (fav: anime) => fav._id === foundAnime?._id
                  )
                    ? icon.activeLikeIcon
                    : icon.likeIcon
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.containerMid}>
            <Text style={styles.midtext}>Season: {foundAnime?.season}</Text>
            <Text style={styles.midtext}>
              Fav Character: {foundAnime?.favouriteCharacter}
            </Text>
            <Text style={styles.midtext}>
              Earnings: {foundAnime?.earnings}M $
            </Text>

            <Text style={styles.midtext}>
              Ratings: {foundAnime?.ratingsAverage}/5
            </Text>
            <Text style={styles.midtext}>{foundAnime?.type.join(",")}</Text>
          </View>
          <View style={styles.containerFoot}>
            <Text>{foundAnime?.description}</Text>
          </View>
        </View>
      ) : (
        <Text style={{ padding: 40, textAlign: "center", fontWeight: "bold" }}>
          <Text style={{ color: "red" }}>404</Text> Anime not found
        </Text>
      )}
      {showToast && (
        <ToastComponent message={message} status={status} code={statusCode} />
      )}
    </SafeAreaView>
  );
};

export default Anime;
