import { useRouter } from "expo-router"; // Importamos useRouter
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from "react-native";

const WelcomeScreen = () => {
  const router = useRouter(); // Usamos el hook useRouter para navegación

  const handleGetStarted = () => {
    router.push("/login"); // Navegamos programáticamente a la pantalla de login
  };

  return (
    <TouchableWithoutFeedback>
      <View style={style.container}>
        <Image source={require('@assets/images/image.png')} style={style.img} />
        <Text style={style.h1}>
          RecipeSaver
        </Text>
        <Text style={style.p}>
          Organize your recipes easily
        </Text>

        <View style={style.btnContainer}>
          <TouchableOpacity style={style.btn} onPress={handleGetStarted}>
            <Text style={style.p}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#161616",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },

  img: {
    width: 300,
    height: 300,
    marginBottom: 50
  },
  h1: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10
  },
  p: {
    fontSize: 20,
    color: "white"
  },
  btnContainer: {
    backgroundColor: "#ff9c2a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 230,
    borderRadius: 20,
    marginTop: 50
  },

  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: 189,
    height: 52
  }
});

export default WelcomeScreen;
