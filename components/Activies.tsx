import { height, width } from "@/constants/Dimensions";
import { Text, View } from "react-native";
import { Plus } from "react-native-feather";

interface ActiviesProps{
  data: string,
  name: string,
  valor: string
}

export default function Activies(props : ActiviesProps) {
  return (
    <View
      style={{
        display: "flex",
        backgroundColor: "#787997",
        flexDirection: "row",
        borderRadius: 15,
        padding: 10,
        marginTop: 10,
        justifyContent: "space-between",
        alignItems: "center",
        opacity: 0.8,
        borderWidth: 0.4,
        borderColor: "white",
        marginBottom: 10,
        height: height * 0.08
      }}
    >
      <View style={{}}>
        <Text style={{color: "white", fontSize: width * 0.02, opacity: 0.5, fontWeight: "500"}}>{props.data}</Text>
        <Text style={{color: "white", fontSize: width * 0.03, fontWeight: "600"}}>{props.name}</Text>
      </View>
      <View style={{flexDirection: "row", gap: 10, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Plus color={"#50cf01"} width={width * 0.05} height={100}/>
        <Text style={{color: "#50cf01", fontWeight: "500", fontSize: width * 0.03}}>${props.valor}</Text>
      </View>
    </View>
  );
}
