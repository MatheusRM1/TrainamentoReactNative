import { height, width } from "@/constants/Dimensions";
import { StyleSheet, Text, View } from "react-native";
import { Plus } from "react-native-feather";

interface ActivitiesProps {
  data: string;
  name: string;
  valor: string;
}

export default function Activities(props: ActivitiesProps) {
  return (
    <View style={[style.activie, style.centro, {justifyContent: "space-between"}]}>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: width * 0.02,
            opacity: 0.5,
            fontFamily: "PoppinsMedium",
          }}
        >
          {props.data}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: width * 0.03,
            fontFamily: "PoppinsSemiBold",
          }}
        >
          {props.name}
        </Text>
      </View>
      <View style={[style.valor, style.centro]}>
        <Plus color={"#50cf01"} width={width * 0.05} height={100} />
        <Text
          style={{
            color: "#50cf01",
            fontFamily: "PoppinsMedium",
            fontSize: width * 0.03,
          }}
        >
          ${props.valor}
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  centro: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  activie: {
    backgroundColor: "#787997",
    flexDirection: "row",
    borderRadius: 40,
    padding: 10,
    marginTop: 10,
    justifyContent: "space-between",
    opacity: 0.8,
    borderWidth: 0.4,
    marginBottom: 10,
    borderColor: "white",
    height: height * 0.08,
  },
  valor: {
    flexDirection: "row",
    gap: 10,
    display: "flex",
  },
});
