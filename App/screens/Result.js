import React from "react";
import { ScrollView, StatusBar, Text } from "react-native";

import SelectAllUser from "../components/SelectAllUser";
import {Button} from "../components/Button";


console.log(SelectAllUser())
export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <Text>Toto</Text>
    <Button
      label="Valider"
      color="#36b1f0"
      onPress={() =>
                navigation.navigate("Quiz", {})
      }
    />
  </ScrollView>
);
