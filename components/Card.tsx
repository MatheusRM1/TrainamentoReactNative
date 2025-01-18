import { height, width } from "@/constants/Dimensions";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BarChart, Plus, TrendingUp } from "react-native-feather";


interface CardProps{
    valor: string,
    atividade:string
}

export default function Card(props : CardProps) {
  const size = width * 0.09;
  return (
    <View style={styles.card}>
      <View style={styles.activitiesContainer}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
        }}
      >
        <TrendingUp color={"#46c001"} />
        <Text
          style={{
            color: "#46c001",
            fontSize: width * 0.03,
            fontFamily: "PoppinsMedium",
          }}
        >
          ${props.atividade} today
        </Text>
      </View>
      <Text
        style={{
          color: "white",
          fontSize: width * 0.07,
          fontFamily: "PoppinsSemiBold",
        }}
      >
        ${props.valor}
      </Text>
      </View>
      <TouchableOpacity
        style={{ display: "flex", flex: 1, alignItems: "flex-end", width: "90%"}}
      >
        <Plus
          width={size}
          height={size}
          color={"#967cd7"}
          style={{ backgroundColor: "white", borderRadius: 100, top: '100%', transform: [{translateY: "-50%"}] }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#7a62dd",
    width: "100%",
    borderRadius: 20,
    height: height * 0.2,
    justifyContent: "center",
    display: "flex",
    paddingLeft: 20,
    //gap: 4,
  },
  activitiesContainer: {
    flex: 1,
    position: 'absolute',
    left: '4%'
  }
});
