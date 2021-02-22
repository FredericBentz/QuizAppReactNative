import React from "react";
import { ScrollView, StatusBar, Image, Button, Text, TextInput, View } from "react-native";

import questionQuestions from "../data/question";
// import spaceQuestions from "../data/space";
// import westernsQuestions from "../data/westerns";
// import computerQuestions from "../data/computers";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <View>
      <Text>Prénom: </Text>
      <TextInput
        placeholder='mon prénom'
      />
    </View>

    <RowItem
      name="Valider"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Question",
          questions: questionQuestions,
          color: "#36b1f0"
        })
      }
    />
  </ScrollView>
);
