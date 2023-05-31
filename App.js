import Mapbox from "@rnmapbox/maps";
import { StyleSheet, View } from "react-native";

Mapbox.setWellKnownTileServer('Mapbox');
Mapbox.setAccessToken("pk.eyJ1Ijoic2FuaWNoMTIzIiwiYSI6ImNsaWFkNmptaDAyaTczcm11NHF0cmp3d2sifQ.ZKH9THateIfnZ7zC23f3-g");

const App = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1,
  },
});
