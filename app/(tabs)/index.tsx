import BotaoNavigation from "@/components/Botao";
import { height, width } from "@/constants/Dimensions";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ArrowRight, BarChart, Plus, RotateCw } from "react-native-feather";

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <View style={{ display: "flex", width: "90%", alignItems: "flex-start" }}>
        <Text
          style={{
            fontWeight: "600",
            fontSize: width * 0.05,
            color: "white",
            marginBottom: 20,
          }}
        >
          Hello Jane Doe!
        </Text>
      </View>
      <View style={style.card}>
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <BarChart color={"#eed1fb"} />
          <Text style={{ color: "white" }}>2,52 R$ hoje</Text>
        </View>
        <Text
          style={{ color: "white", fontSize: width * 0.07, fontWeight: "700" }}
        >
          $1.697,25
        </Text>
        <View style={{display:"flex", alignItems: "flex-end", width: "70%"}}>
          <Plus width={30} height={30} color={"#967cd7"} style={{backgroundColor: "white", borderRadius: 20}} />
        </View>
      </View>
      <View style={{display: "flex", justifyContent: "flex-start", alignItems: "flex-start", width: "90%", marginTop: 20}}>
        <Text style={{color: "white", fontSize: width * 0.05, fontWeight:"500"}}>Quick Actions</Text>
        <View style={{width:"100%", flexDirection: "row", display: "flex", justifyContent: "space-between", marginTop: 20}}>
        <BotaoNavigation name={"Tranfer"}><RotateCw color={"white"} width={20}/></BotaoNavigation>
        <BotaoNavigation name={"Receive"}><RotateCw color={"white"}/></BotaoNavigation>
        <BotaoNavigation name={"Swap"}><RotateCw color={"white"}/></BotaoNavigation>
        <BotaoNavigation name={"Earn"}><RotateCw color={"white"}/></BotaoNavigation>
        </View>
      </View>
      <View style={{width: "90%", marginTop: 20}}>
        <Text style={{fontSize: width * 0.05, color: "white", fontWeight: "500"}}>My Activies</Text>
        
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
  card: {
    backgroundColor: "#7a62dd",
    width: "90%",
    borderRadius: 20,
    height: "20%",
    justifyContent: "center",
    display: "flex",
    paddingLeft: 20,
    gap: 4,
  },
});
