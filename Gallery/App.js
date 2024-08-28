import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar as RNStatusBar,
} from "react-native";
import Zenitsu from "./Components/Zenitsu";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.TextTitle}>Zenitsu Agatsuma</Text>
        <Zenitsu
          name="Zenitsu comiendo"
          image={require("./Images/ZenitsuComiendo.jpeg")}
        ></Zenitsu>
        <Zenitsu
          name="Zenitsu Durmiendo"
          image={require("./Images/Durmiendo.jpeg")}
        ></Zenitsu>
        <Zenitsu
          name="Zenitsu Riendo"
          image={require("./Images/ZenitsuRiendo.jpeg")}
        ></Zenitsu>
        <Zenitsu
          name="Zenitsu Respiración"
          image={require("./Images/Respiracion.jpeg")}
        ></Zenitsu>
        <Zenitsu
          name="Zenitsu Quieto"
          image={require("./Images/Quieto.jpeg")}
        ></Zenitsu>
        <Zenitsu
          name="Zenitsu Serio"
          image={require("./Images/Serio.jpeg")}
        ></Zenitsu>
        <Zenitsu
          name="Zenitsu con sombrero"
          image={require("./Images/SombreroZenitsu.jpeg")}
        ></Zenitsu>
        <Zenitsu
          name="Zenitsu Suspirando"
          image={require("./Images/SuspiroZenitsu.jpeg")}
        ></Zenitsu>
        <Zenitsu
          name="Zenitsu Agatsuma"
          image={require("./Images/Zenitsu Agatsuma.jpeg")}
        ></Zenitsu>
        <Zenitsu
          name="Zenitsu Alegre"
          image={require("./Images/Zenitsu icon.jpeg")}
        ></Zenitsu>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0, // Ajuste para StatusBar en Android
  },
  TextTitle: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center", // Centra el texto horizontalmente
    marginVertical: 10, // Agrega un margen vertical para separar del contenido superior e inferior
  },
});
