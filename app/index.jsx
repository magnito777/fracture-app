import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import logo1 from '../assets/images/logo1.png';

export default function Page() {
  return (
    <LinearGradient
      colors={['darkblue', 'blue', 'pink', 'purple']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1.5, y: 1 }}
      style={styles.container}
    >
      <View style={styles.main}>
        <Image source={logo1} style={styles.logo} />
        <Text style={styles.title}>bonesApp</Text>
        <Text style={styles.subtitle}>bone fractures meet data science.</Text>
        
        <Link href="/(tabs)/form" style={styles.button}>
          <Text style={styles.buttonText}>Go to Form Page</Text>
        </Link>
        <Link href="/(tabs)/data" style={styles.button}>
          <Text style={styles.buttonText}>Go to Data Page</Text>
        </Link>
        <Link href="/(tabs)/about" style={styles.button}>
          <Text style={styles.buttonText}>Go to About Page</Text>
        </Link>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 24,
  },
  title: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    marginBottom: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25, // Rounded corners
    marginVertical: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
