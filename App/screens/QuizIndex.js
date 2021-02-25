import React from "react";
import { StatusBar,TouchableOpacity, Image, Text, TextInput, View, StyleSheet} from "react-native";
import questionQuestions from "../data/question";
import userJson from "../data/user.json";

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: "#36B1F0",
        marginBottom: 1
    },
    text: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "600"
    }
});

class QuizIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userScore: 0
        }
    }

    render() {
        const state = this.state;
        // this.setState({username: 'myValue'}, () => {
        //     userJson.users[state.userName] = state.userScore
        // }));  TODO ne fonctionne pas !!! et je n'arrive pas à le placé dans le OnPress...

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
                label="test"

                value={this.state.userName}
                placeholder='mon prénom'
                onChangeText={text => this.setState({userName: text })}
              />
            </View>

            <TouchableOpacity
              onPress={() =>
                    this.props.navigation.navigate("Quiz", {
                        title: "Question",
                        questions: questionQuestions,
                        color: "#36b1f0",
                        userName:this.state.userName
                    })}
              activeOpacity={0.8}
            >
              <View style={[styles.row, { backgroundColor: "#36b1f0" }]}>
                <Text style={styles.text}>Jouer</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
    }
}

export default QuizIndex;

