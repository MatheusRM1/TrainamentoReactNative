import { width } from "@/constants/Dimensions";
import { ReactNode } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

interface BotaoProps {
  name: string;
  children?: ReactNode;
}

export default function BotaoNavigation(props: BotaoProps) {
  return (
    <Pressable
  style={({ pressed }) => [
    {
      width: width * 0.18,
      height: width * 0.2,
      backgroundColor: pressed ? "#533d8b" : "#6a6b83",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      paddingHorizontal: 5,
      paddingVertical: 20,
      borderColor: "white",
      borderWidth: 0.3,

    },
  ]}
>
        {props.children}
        <Text style={{color: "white", fontWeight: "600", fontSize: width * 0.03, paddingTop: 5}}>{props.name}</Text>
    </Pressable>
  );
}
