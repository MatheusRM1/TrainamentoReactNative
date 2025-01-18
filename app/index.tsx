import Activies from "@/components/Activities";
import BotaoNavigation from "@/components/Botao";
import Card from "@/components/Card";
import { height, width } from "@/constants/Dimensions";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  CreditCard,
  Repeat,
  ShoppingBag,
  Smartphone,
} from "react-native-feather";

const activies = [
  { data: "Dom, 13 de Jan", name: "Matheus", valor: "1.240,36" },
  { data: "Dom, 14 de Jan", name: "Matheus", valor: "2.340,36" },
  { data: "Dom, 15 de Jan", name: "Matheus", valor: "3.440,36" },
  { data: "Dom, 16 de Jan", name: "Matheus", valor: "4.540,36" },
  { data: "Dom, 17 de Jan", name: "Matheus", valor: "5.640,36" },
  { data: "Dom, 18 de Jan", name: "Matheus", valor: "6.740,36" },
];

const botoes = [
  { name: "Transfer", icon: Repeat },
  { name: "Pay", icon: ShoppingBag },
  { name: "Recharge", icon: Smartphone },
  { name: "Card", icon: CreditCard },
];

export default function HomeScreen() {
  return (
    <ScrollView style={style.containerScroll}>
      <SafeAreaView>
        <View
          style={{ display: "flex", width: "100%", alignItems: "flex-start" }}
        >
          <Text style={[style.textoSessao, { marginBottom: 20 }]}>
            Hello Jane!
          </Text>
        </View>
        <View>
          <Card valor="1.697,25" atividade="2,52" />
        </View>
        <View style={style.sessaoBotao}>
          <Text style={style.textoSessao}>Quick Actions</Text>
          <View style={style.botoes}>
            {botoes.map(({ name, icon: Icon }, index) => (
              <BotaoNavigation name={name} key={index}>
                <Icon
                  color={"white"}
                  width={width * 0.05}
                  height={width * 0.05}
                />
              </BotaoNavigation>
            ))}
          </View>
        </View>
        <View style={{ marginTop: 20, marginBottom: 50 }}>
          <Text style={style.textoSessao}>My Activities</Text>
          {activies.map(({ name, data, valor }, index) => (
            <Activies name={name} data={data} valor={valor} key={index} />
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  containerScroll: {
    flex: 1,
    padding: width * 0.05,
    backgroundColor: "#17194a",
  },
  sessaoBotao: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginTop: 20,
  },
  botoes: {
    width: "100%",
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
  },
  textoSessao: {
    fontSize: width * 0.05,
    color: "white",
    fontFamily: "PoppinsMedium",
  },
});
