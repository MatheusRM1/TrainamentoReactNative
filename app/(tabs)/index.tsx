import Activies from "@/components/Activies";
import BotaoNavigation from "@/components/Botao";
import { height, width } from "@/constants/Dimensions";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ArrowRight, BarChart, Hexagon, Plus, RotateCw } from "react-native-feather";

export default function HomeScreen() {
  const size = Math.min(width * 0.1, height * 0.05); 
  return (
      <ScrollView style={style.containerScroll}>
        <View
          style={{ display: "flex", width: "100%", alignItems: "flex-start" }}
        >
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
            <BarChart color={"#46c001"} />
            <Text style={{ color: "#46c001", fontSize: width * 0.03 }}>$2,52 today</Text>
          </View>
          <Text
            style={{
              color: "white",
              fontSize: width * 0.07,
              fontWeight: "700",
            }}
          >
            $1.697,28
          </Text>
          <TouchableOpacity
            style={{ display: "flex", alignItems: "flex-end", width: "70%" }}
          >
            <Plus
              width={size}
              height={size}
              color={"#967cd7"}
              style={{ backgroundColor: "white", borderRadius: 100 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: width * 0.05,
              fontWeight: "500",
            }}
          >
            Quick Actions
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <BotaoNavigation name={"Tranfer"}>
              <RotateCw color={"white"} width={20} />
            </BotaoNavigation>
            <BotaoNavigation name={"Receive"}>
              <RotateCw color={"white"} />
            </BotaoNavigation>
            <BotaoNavigation name={"Swap"}>
              <RotateCw color={"white"} />
            </BotaoNavigation>
            <BotaoNavigation name={"Earn"}>
              <RotateCw color={"white"} />
            </BotaoNavigation>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: width * 0.05,
              color: "white",
              fontWeight: "500",
            }}
          >
            My Activies
          </Text>
          <Activies data="Dom, 12 de Jan" name="Matheus" valor={"1.240,25"} />
          <Activies data="Dom, 12 de Jan" name="Matheus" valor={"1.240,25"} />
          <Activies data="Dom, 12 de Jan" name="Matheus" valor={"1.240,25"} />
          <Activies data="Dom, 12 de Jan" name="Matheus" valor={"1.240,25"} />
          <Activies data="Dom, 12 de Jan" name="Matheus" valor={"1.240,25"} />
          <Activies data="Dom, 12 de Jan" name="Matheus" valor={"1.240,25"} />
        </View>
      </ScrollView>
  );
}

const style = StyleSheet.create({
  containerScroll: {
    flexGrow: 1,
    padding: width * 0.05,
    
    backgroundColor: "#17194a",
  },
  card: {
    backgroundColor: "#7a62dd",
    width: "100%",
    borderRadius: 20,
    height: height * 0.2,
    justifyContent: "center",
    display: "flex",
    paddingLeft: 20,
    gap: 4,
  },
});
