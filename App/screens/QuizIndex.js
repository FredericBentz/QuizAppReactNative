import React from "react";
import { ScrollView, StatusBar, Image, Button, Text, TextInput, View } from "react-native";
import SQLite from 'react-native-sqlite-storage';
import questionQuestions from "../data/question";


import { RowItem } from "../components/RowItem";


class QuizIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        };
    }




    render() {
        // const db = SQLite.openDatabase("quiz.db");
        //
        // db.transaction(tx => {
        // // tx.executeSql(`INSERT INTO user (name, score) values (${  this.state.userName  }, 0);`);
        //     tx.executeSql("INSERT INTO user (name, score) values (?, ?)", [this.state.userName, 0]);
        // });

        return  (
          <View
            style={[
                    // styles.container,
                    { backgroundColor: this.props.navigation.getParam("color") }
                ]}
          >
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
                        this.props.navigation.navigate("Quiz", {
                            title: "Question",
                            questions: questionQuestions,
                            color: "#36b1f0"
                        })
                    }
            />
          </View>
        );
    }
}

export default QuizIndex;






// export default ({ navigation }) => (
//   <ScrollView>
//     <StatusBar barStyle="dark-content" />
//     <View>
//       <Text>Prénom: </Text>
//       <TextInput
//         placeholder='mon prénom'
//       />
//     </View>
//
//     <RowItem
//       name="Valider"
//       color="#36b1f0"
//       onPress={() =>
//         navigation.navigate("Quiz", {
//           title: "Question",
//           questions: questionQuestions,
//           color: "#36b1f0"
//         })
//       }
//     />
//   </ScrollView>
// );
