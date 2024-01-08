import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "../styles/profile";

import { anime } from "../types/animeTypes";
import FavouriteAnimeCard from "../components/FavouriteAnimeCard";
import data from "../data";
import { useRouter } from "expo-router";
import { User } from "../types/response";
import { useAppSelector } from "../state/hook";

const Profile = () => {
  const router = useRouter();
  const data = useAppSelector((state) => state.user.user);
  const user: User | null = data;

  const favouriteAnimeCount: number = user?.favourites
    ? user.favourites.length
    : 0;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: user?.photo }}
            style={{
              height: 200,
              width: 200,
              borderRadius: 100,
              resizeMode: "cover",
            }}
          />
          <Text style={styles.ProfileName}>{user?.name}</Text>
        </View>
        <View style={styles.favouriteContainer}>
          <Text style={styles.favouriteTitle}>Fovourite Animes</Text>
          <FlatList
            data={user?.favourites}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => router.push(`/anime/${item?.slug}`)}
              >
                <FavouriteAnimeCard anime={item} index={index} />
              </TouchableOpacity>
            )}
            keyExtractor={(item: anime) => item?._id}
            horizontal={true}
          />
          {favouriteAnimeCount > 1 && (
            <Text style={styles.listInstruction}>Swipe to see more</Text>
          )}
          {favouriteAnimeCount === 0 && (
            <Text style={styles.listInstruction}>No Favourite Anime</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
