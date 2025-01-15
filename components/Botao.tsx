import { width } from "@/constants/Dimensions";
import { Children, ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RotateCw } from "react-native-feather";

interface BotaoProps {
  name: string;
  children?: ReactNode;
}

export default function BotaoNavigation(props: BotaoProps) {
  return (
    <TouchableOpacity
      style={{
        width: "20%",
        height: "auto",
        backgroundColor: "#787994",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderColor: "white",
        borderWidth: 0.3,
      }}
    >
        {props.children}
        <Text style={{color: "white", fontWeight: "600", fontSize: width * 0.03}}>{props.name}</Text>
    </TouchableOpacity>
  );
}
