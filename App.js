import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native";

// Componente de Navegación Simple
const TabNavigation = ({ currentTab, onTabChange }) => {
  const tabs = [
    { id: "home", name: "🏠 Inicio", icon: "🏠" },
    { id: "characters", name: "👥 Personajes", icon: "👥" },
    { id: "moments", name: "🎬 Momentos", icon: "🎬" },
    { id: "about", name: "📖 Acerca de", icon: "📖" },
    { id: "personal", name: "❤️ Mi Historia", icon: "❤️" },
    { id: "contact", name: "💼 Contrátame", icon: "💼" },
  ];

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[styles.tabButton, currentTab === tab.id && styles.activeTab]}
          onPress={() => onTabChange(tab.id)}
        >
          <Text
            style={[
              styles.tabText,
              currentTab === tab.id && styles.activeTabText,
            ]}
          >
            {tab.icon} {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Pantalla de Inicio
const HomeScreen = () => (
  <ScrollView style={styles.container}>
    <View style={styles.heroSection}>
      <Text style={styles.mainTitle}>🐉 GAME OF THRONES</Text>
      <Text style={styles.subtitle}>"Winter Is Coming"</Text>
    </View>

    <Image
      source={{
        uri: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=2059&q=80",
      }}
      style={styles.heroImage}
    />

    <View style={styles.content}>
      <Text style={styles.sectionTitle}>Bienvenido a Westeros</Text>
      <Text style={styles.description}>
        Una épica serie de fantasía que combina política, traición, honor y
        dragones en una batalla por el control del Trono de Hierro de los Siete
        Reinos.
      </Text>

      <View style={styles.housesGrid}>
        <Text style={styles.gridTitle}>Casas Principales:</Text>
        <View style={styles.houseRow}>
          <Text style={styles.houseItem}>🐺 Stark</Text>
          <Text style={styles.houseItem}>🦁 Lannister</Text>
          <Text style={styles.houseItem}>🦌 Baratheon</Text>
        </View>
        <View style={styles.houseRow}>
          <Text style={styles.houseItem}>🌹 Tyrell</Text>
          <Text style={styles.houseItem}>🐙 Greyjoy</Text>
          <Text style={styles.houseItem}>🐉 Targaryen</Text>
        </View>
      </View>
    </View>
  </ScrollView>
);

// Pantalla de Personajes
const CharactersScreen = () => {
  const characters = [
    {
      id: 1,
      name: "Daenerys Targaryen",
      title: "La Madre de Dragones",
      image:
        "https://images.hdqwalls.com/wallpapers/dragon-daenerys-targaryen-1e.jpg",
      house: "🐉 Casa Targaryen",
      status: "💀 Fallecida",
      description:
        "Última descendiente de la Casa Targaryen, reclamó el Trono de Hierro como su derecho de nacimiento.",
    },
    {
      id: 2,
      name: "Jon Snow",
      title: "El Rey en el Norte",
      image:
        "https://img.europapress.es/fotoweb/fotonoticia_20160420125836_1280.jpg",
      house: "🐺 Casa Stark",
      status: "❤️ Vivo",
      description:
        "Hijo bastardo de Ned Stark, descubrió que es Aegon Targaryen, heredero legítimo al Trono de Hierro.",
    },
    {
      id: 3,
      name: "Tyrion Lannister",
      title: "El Gnomo",
      image:
        "https://www.neostuff.net/wp-content/uploads/2019/11/analisis-de-tyrion-lannister.png",
      house: "🦁 Casa Lannister",
      status: "❤️ Vivo",
      description:
        "Conocido por su inteligencia y sarcasmo, demostró ser uno de los estrategas más brillantes de Westeros.",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Personajes Principales</Text>

      {characters.map((character) => (
        <View key={character.id} style={styles.characterCard}>
          <Image
            source={{ uri: character.image }}
            style={styles.characterImage}
          />
          <View style={styles.characterInfo}>
            <Text style={styles.characterName}>{character.name}</Text>
            <Text style={styles.characterTitle}>{character.title}</Text>
            <Text style={styles.characterHouse}>{character.house}</Text>
            <Text
              style={[
                styles.characterStatus,
                character.status === "❤️ Vivo" ? styles.alive : styles.dead,
              ]}
            >
              {character.status}
            </Text>
            <Text style={styles.characterDescription}>
              {character.description}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

// Pantalla de Momentos
const MomentsScreen = () => {
  const moments = [
    {
      id: 1,
      title: "La Boda Roja",
      image:
        "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80",
      description:
        "La traición de Walder Frey durante la boda resultó en la masacre de Robb Stark y su ejército.",
      season: "Temporada 3, Episodio 9",
    },
    {
      id: 2,
      title: "Batalla de los Bastardos",
      image:
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      description:
        "La épica batalla entre Jon Snow y Ramsay Bolton por el control de Winterfell.",
      season: "Temporada 6, Episodio 9",
    },
    {
      id: 3,
      title: "Destrucción de Desembarco del Rey",
      image:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=2094&q=80",
      description:
        "Daenerys Targaryen incendia Desembarco del Rey con Drogon, matando a miles de civiles.",
      season: "Temporada 8, Episodio 5",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Momentos Épicos</Text>

      {moments.map((moment) => (
        <View key={moment.id} style={styles.momentCard}>
          <Image source={{ uri: moment.image }} style={styles.momentImage} />
          <View style={styles.momentInfo}>
            <Text style={styles.momentTitle}>{moment.title}</Text>
            <Text style={styles.momentSeason}>{moment.season}</Text>
            <Text style={styles.momentDescription}>{moment.description}</Text>
            <TouchableOpacity
              style={styles.videoButton}
              onPress={() =>
                Linking.openURL("https://www.youtube.com/watch?v=ZV8-RwsURkI")
              }
            >
              <Text style={styles.videoButtonText}>🎬 Ver Escena</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

// Pantalla Acerca de
const AboutScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.screenTitle}>Acerca de Game of Thrones</Text>

    <View style={styles.infoCard}>
      <Text style={styles.infoTitle}>Información General</Text>
      <Text style={styles.infoText}>• 8 Temporadas</Text>
      <Text style={styles.infoText}>• 73 Episodios</Text>
      <Text style={styles.infoText}>• Años: 2011-2019</Text>
      <Text style={styles.infoText}>
        • Creadores: David Benioff & D.B. Weiss
      </Text>
      <Text style={styles.infoText}>
        • Basado en los libros de George R.R. Martin
      </Text>
    </View>

    <View style={styles.infoCard}>
      <Text style={styles.infoTitle}>Sinopsis</Text>
      <Text style={styles.paragraph}>
        Game of Thrones sigue las violentas luchas dinásticas entre familias
        nobles por el control del Trono de Hierro de los Siete Reinos, mientras
        otras fuerzas amenazan el reino desde más allá de sus fronteras.
      </Text>
    </View>

    <View style={styles.infoCard}>
      <Text style={styles.infoTitle}>Premios</Text>
      <Text style={styles.infoText}>• 59 Premios Emmy</Text>
      <Text style={styles.infoText}>
        • Mejor Serie Dramática (2015, 2016, 2018, 2019)
      </Text>
      <Text style={styles.infoText}>• Récord de serie más pirateada</Text>
    </View>
  </ScrollView>
);

// Pantalla Personal
const PersonalScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.screenTitle}>Mi Historia con GoT</Text>

    <View style={styles.infoCard}>
      <Text style={styles.paragraph}>
        Game of Thrones transformó mi forma de ver la televisión. Desde el
        primer episodio quedé enganchado con su narrativa compleja y personajes
        multidimensionales.
      </Text>
    </View>

    <View style={styles.infoCard}>
      <Text style={styles.infoTitle}>Por qué es especial para mí:</Text>
      <Text style={styles.infoText}>
        • Personajes con profundidad psicológica
      </Text>
      <Text style={styles.infoText}>• Narrativa impredecible</Text>
      <Text style={styles.infoText}>• Producción cinematográfica</Text>
      <Text style={styles.infoText}>• Mundo rico y detallado</Text>
    </View>

    <TouchableOpacity
      style={styles.videoButton}
      onPress={() => Linking.openURL("https://www.youtube.com")}
    >
      <Text style={styles.videoButtonText}>🎥 Ver Mi Video Personal</Text>
    </TouchableOpacity>
  </ScrollView>
);

// Pantalla de Contacto
const ContactScreen = () => {
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  );

  const changeProfileImage = () => {
    Alert.prompt(
      "Cambiar Foto de Perfil",
      "Ingresa la URL de tu nueva foto:",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Cambiar",
          onPress: (url) => {
            if (url && url.trim() !== "") {
              setProfileImage(url.trim());
            } else {
              Alert.alert("Error", "Por favor ingresa una URL válida");
            }
          },
        },
      ],
      "plain-text",
      profileImage
    );
  };

  const presetImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
  ];

  const selectPresetImage = (imageUrl) => {
    setProfileImage(imageUrl);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.screenTitle}>Contrátame</Text>

      <TouchableOpacity onPress={changeProfileImage}>
        <Image
          source={{ uri: profileImage }}
          style={styles.profileImage}
        />
        <View style={styles.changePhotoOverlay}>
          <Text style={styles.changePhotoText}>📷 Cambiar Foto</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.profileName}>Carlos Valerio Feliz</Text>
      <Text style={styles.profileTitle}>Desarrollador Mobile</Text>

      {/* Fotos predefinidas */}
      <View style={styles.presetImagesContainer}>
        <Text style={styles.presetImagesTitle}>Fotos Predefinidas:</Text>
        <View style={styles.presetImagesGrid}>
          {presetImages.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => selectPresetImage(image)}
            >
              <Image
                source={{ uri: image }}
                style={styles.presetImage}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.contactCard}>
        <Text style={styles.contactTitle}>Información de Contacto</Text>

        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => Linking.openURL("mailto:carlosfeliz1986@gmail.com")}
        >
          <Text style={styles.contactText}>📧 carlosfeliz1986@gmail.com</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => Linking.openURL("https://www.linkedin.com/in/carlos-valerio-feliz-8b325a225/")}
        >
          <Text style={styles.contactText}>💼 LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => Linking.openURL("https://github.com/Carlosfeliz1986")}
        >
          <Text style={styles.contactText}>🐱 GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => Linking.openURL("tel:+18097122050")}
        >
          <Text style={styles.contactText}>📱 +1 809 712 2050</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.skillsCard}>
        <Text style={styles.skillsTitle}>Habilidades</Text>
        <View style={styles.skillsGrid}>
          <Text style={styles.skill}>React Native</Text>
          <Text style={styles.skill}>JavaScript</Text>
          <Text style={styles.skill}>TypeScript</Text>
          <Text style={styles.skill}>Firebase</Text>
          <Text style={styles.skill}>React</Text>
          <Text style={styles.skill}>Node.js</Text>
        </View>
      </View>
    </ScrollView>
  );
};

// App Principal
export default function App() {
  const [currentTab, setCurrentTab] = useState("home");

  const renderScreen = () => {
    switch (currentTab) {
      case "home":
        return <HomeScreen />;
      case "characters":
        return <CharactersScreen />;
      case "moments":
        return <MomentsScreen />;
      case "about":
        return <AboutScreen />;
      case "personal":
        return <PersonalScreen />;
      case "contact":
        return <ContactScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#1a1a1a" />
      <View style={styles.appContainer}>
        <TabNavigation currentTab={currentTab} onTabChange={setCurrentTab} />
        <View style={styles.screenContainer}>{renderScreen()}</View>
      </View>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0f0f0f",
  },
  appContainer: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#1a1a1a",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#8B0000",
  },
  tabButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 2,
    borderRadius: 20,
    backgroundColor: "#2a2a2a",
  },
  activeTab: {
    backgroundColor: "#8B0000",
  },
  tabText: {
    color: "#ccc",
    fontSize: 12,
    fontWeight: "bold",
  },
  activeTabText: {
    color: "#fff",
  },
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#0f0f0f",
    padding: 15,
  },
  heroSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#D4AF37",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: "#ccc",
    fontStyle: "italic",
    textAlign: "center",
  },
  heroImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  content: {
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#ccc",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 20,
  },
  housesGrid: {
    width: "100%",
    backgroundColor: "#1a1a1a",
    padding: 20,
    borderRadius: 10,
  },
  gridTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#D4AF37",
    marginBottom: 15,
    textAlign: "center",
  },
  houseRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  houseItem: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#D4AF37",
    textAlign: "center",
    marginBottom: 20,
  },
  characterCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    borderLeftWidth: 4,
    borderLeftColor: "#8B0000",
  },
  characterImage: {
    width: "100%",
    height: 200,
  },
  characterInfo: {
    padding: 15,
  },
  characterName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  characterTitle: {
    fontSize: 16,
    color: "#D4AF37",
    marginBottom: 5,
    fontStyle: "italic",
  },
  characterHouse: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 5,
  },
  characterStatus: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  alive: {
    color: "#00ff00",
  },
  dead: {
    color: "#ff4444",
  },
  characterDescription: {
    fontSize: 14,
    color: "#ccc",
    lineHeight: 20,
  },
  momentCard: {
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
  },
  momentImage: {
    width: "100%",
    height: 150,
  },
  momentInfo: {
    padding: 15,
  },
  momentTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  momentSeason: {
    fontSize: 14,
    color: "#D4AF37",
    marginBottom: 10,
  },
  momentDescription: {
    fontSize: 14,
    color: "#ccc",
    lineHeight: 20,
    marginBottom: 10,
  },
  videoButton: {
    backgroundColor: "#8B0000",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  videoButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  infoCard: {
    backgroundColor: "#1a1a1a",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: "#8B0000",
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#D4AF37",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    color: "#ccc",
    lineHeight: 22,
    textAlign: "justify",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 15,
  },
  changePhotoOverlay: {
    position: "absolute",
    bottom: 15,
    left: "50%",
    marginLeft: -60,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 5,
    borderRadius: 15,
    width: 120,
    alignItems: "center",
  },
  changePhotoText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },
  profileTitle: {
    fontSize: 16,
    color: "#D4AF37",
    textAlign: "center",
    marginBottom: 20,
  },
  presetImagesContainer: {
    backgroundColor: "#1a1a1a",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  presetImagesTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D4AF37",
    marginBottom: 10,
    textAlign: "center",
  },
  presetImagesGrid: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  presetImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#8B0000",
  },
  contactCard: {
    backgroundColor: "#1a1a1a",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#D4AF37",
    marginBottom: 15,
    textAlign: "center",
  },
  contactButton: {
    backgroundColor: "#2a2a2a",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  contactText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  skillsCard: {
    backgroundColor: "#1a1a1a",
    padding: 20,
    borderRadius: 10,
  },
  skillsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#D4AF37",
    marginBottom: 15,
    textAlign: "center",
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  skill: {
    backgroundColor: "#8B0000",
    color: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    margin: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
});
