import { StatusBar } from "react-native";
import { StyleSheet, Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/Ionicons";
import Icons1 from "react-native-vector-icons/Feather";
import Icons2 from "react-native-vector-icons/Octicons";
import Icons3 from "react-native-vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image
          style={styles.images}
          source={require("./src/ins.jpg")}
          resizeMode="stretch" // static image
        />
        <View style={styles.heads}></View>
        
        <Image
          style={styles.imag}
          source={require("./src/top.jpg")}
          resizeMode="stretch" 
        />
      </View>
      <View style={styles.story}>
        <Image
          style={styles.image}
          source={require("./src/story.jpg")} // static image
        />
       
      </View>
      <View style={styles.post}>
       
        <Image
          style={styles.image1}
          source={require("./src/posts.jpg")}
          resizeMode="stretch" // static image
        />
        <View style={styles.foot}>
        <Icon name="home" size={30} color="white" />
        <Icons1 name="search" size={30} color="white" />
        <Icons2 name="diff-added" size={30} color="white" />

        <Image style={styles.images1} source={require("./src/play.jpg")} />
        <Icons3 name="account-circle-outline" size={30} color="white" />
      </View>
      </View>
      
      
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="black"
        translucent={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingTop: 40,
    gap: 10,
    paddingBottom: 10,
  },
  story: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 4,
  },
  post: {
    flex: 1
  },
  foot: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopColor: "black",
    borderTopWidth: 0.3,
    paddingTop: 10,
    backgroundColor: 'black',
    paddingBottom: 10,
  },
  image: {
    height: 110,
    width: 353,
  },
  images: {
    height: 40,
    width: 150,
  },
  images1: {
    height: 30,
    width: 30,
  },
  heads: {
    flex: 1,
  },
  image1: {
    height: 400,
    width: 360,
  },
  posts: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
    alignItems: "center",
    borderTopColor: "black",
    borderTopWidth: 0.3,
  },
  text: {
    flex: 1,
  },
  postline: {
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 10,
    paddingVertical: 5,
  },
  line: {
    flex: 1,
  },
  imag:{
    height: 35,
    width: 95
  }
});
