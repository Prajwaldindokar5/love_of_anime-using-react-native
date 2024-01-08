import { View, Text, Image } from "react-native";
import styles from "../styles/animeCard";
import { anime } from "../types/animeTypes";
import data from "../data";

const AnimeCard = ({ anime, index }: { anime: anime; index: number }) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.cardContainer,
          index === data.length - 1 && { marginBottom: 40 },
        ]}
      >
        <View style={styles.coverImage}>
          <Image
            source={{ uri: anime.animeCover }}
            style={{
              height: 200,
              width: 297.5,
              resizeMode: "cover",
            }}
          />
        </View>

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
    </View>
  );
};

export default AnimeCard;
