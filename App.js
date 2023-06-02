import "expo-dev-client";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Mapbox, { PointAnnotation, Callout, MapView, Camera } from "@rnmapbox/maps";

Mapbox.setWellKnownTileServer("Mapbox");
Mapbox.setAccessToken("pk.eyJ1Ijoic2FuaWNoMTIzIiwiYSI6ImNsaWFkNmptaDAyaTczcm11NHF0cmp3d2sifQ.ZKH9THateIfnZ7zC23f3-g");

export default function App() {
  const [calloutVisible, setCalloutVisible] = useState(false);
  const [coordinates] = useState([-5, 55]);
  const onMarkerPress = () => {
    setCalloutVisible(true);
  };

  const loadAnnotationUK = () => {
    return (
      <PointAnnotation key="annotationUK" id="annotationUK" coordinate={[0.1, 51.5]} onSelected={onMarkerPress}>
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: "green",
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 50,
          }}
        ></View>

        <Callout title="Welcome to London!" contentStyle={{ borderRadius: 5 }}></Callout>
      </PointAnnotation>
    );
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapView style={styles.map}>
          <Camera zoomLevel={4} centerCoordinate={coordinates} />
          <PointAnnotation id="uk" coordinate={coordinates} />
          <View>{loadAnnotationUK()}</View>
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    height: "100%",
    width: "100%",
  },

  map: {
    flex: 1,
  },
});
