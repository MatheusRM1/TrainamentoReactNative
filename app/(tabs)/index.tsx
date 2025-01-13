import { height, width } from "@/constants/Dimensions";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {BarChart, Plus} from "react-native-feather"

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <View style={{display: "flex", width: "90%", alignItems: "flex-start", }}>
        <Text style={{fontWeight:"600", fontSize: width * 0.05, color: "white"}}>Hello Jane Doe!</Text>
      </View>
      <View style={{backgroundColor:"#7a62dd", width: "90%", borderRadius: 10, height: "20%", justifyContent: "center", display:"flex"}}>
        <BarChart color={"white"}/>
        <Text style={{color: "white", fontSize: width * 0.07}}>$1.697,25</Text>
        <Plus width={30} height={30}/>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#17194a",
  },
});
