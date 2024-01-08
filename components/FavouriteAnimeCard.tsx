import { View, Text, Image } from "react-native";
import { anime } from "../types/animeTypes";
import styles from "../styles/animeCard";

const FavouriteAnimeCard = ({
  anime,
  index,
}: {
  anime: anime;
  index: number;
}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        width: 300,
        height: 100,
        marginTop: 20,
        marginLeft: 16,
        marginRight: 16,
      }}
    >
      <View style={styles.cardHeader}>
        <Image
          source={{ uri: anime.animeProfile }}
          style={{
            height: 30,
            width: 30,
            borderRadius: 50,
            resizeMode: "cover",
          }}
        />
        <Text style={styles.animeName}>{anime.name}</Text>
        <Text style={styles.animeStatus}>
          Status:{" "}
          <Text
            style={[
              styles.animeStatus,
              { color: anime.status === "Complete" ? "green" : "red" },
            ]}
          >
            {anime.status}
          </Text>
        </Text>
      </View>
      <View style={styles.cardMid}>
        <Text style={styles.cardText}>Ratings: {anime.ratingsAverage}</Text>
        <Text style={styles.cardText}>Seasons: {anime.season}</Text>
      </View>
      <View style={styles.cardFooter}>
        <Text>{anime.description}</Text>
      </View>
    </View>
  );
};

export default FavouriteAnimeCard;
