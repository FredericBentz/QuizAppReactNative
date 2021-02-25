
import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { Table, Row } from 'react-native-table-component';

import userJson from "../data/user.json";
import questionQuestions from "../data/question";


const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    textButton: { height: 50, textAlign: 'center', fontWeight: '200'},
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
});

export default class ResultScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerOfTable: ['Nom', 'Score'],
            widthArr: [200, 200]
        }

    }

    render(){
        const state = this.state;
        const tableData = [];

        // TEst  ======================================================================
        const obj = JSON.parse('{ "name":"John", "score":7, "city":"New York"}');

        console.log("Toto")
        console.log(userJson[0])
        console.log("Tata")
        console.log(obj.city)
        console.log("Test")
        console.log(Object.keys(userJson.users).length)
        console.log("Titi")

        // TestEnd =======================================================================

        // data construct pour le tableau
        for (let i = 0; i < Object.keys(userJson.users).length; i += 1) {
            const rowData = [];
            for (let j = 0; j < 2; j += 1) {
                rowData.push(userJson.users[i].name);
                rowData.push(userJson.users[i].score);
            }
            tableData.push(rowData);
        }

        return (
          <View style={styles.container}>
            <ScrollView horizontal>
              <View>
                <Text>SCORES</Text>
                <Table borderStyle={{borderColor: '#C1C0B9'}}>
                  <Row data={state.headerOfTable} widthArr={state.widthArr} style={styles.header} textStyle={styles.text} />
                </Table>
                <ScrollView style={styles.dataWrapper}>
                  <Table borderStyle={{borderColor: '#C1C0B9'}}>
                    {
                        tableData.map((rowData, index) =>(
                          <Row
                            key={index}
                            data={rowData}
                            widthArr={state.widthArr}
                            style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                            textStyle={styles.text}
                          />
                        ))
                    }
                  </Table>
                </ScrollView>
                <TouchableOpacity
                  onPress={() =>
                          this.props.navigation.navigate("QuizIndex", {
                              title: "Question",
                              questions: questionQuestions,
                              color: "#36b1f0"
                          })}
                  activeOpacity={0.8}
                >
                  <View style={[styles.row, { backgroundColor: "#799496" }]}>
                    <Text style={styles.textButton}>Acceuil</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                          this.props.navigation.navigate("Quiz", {
                              title: "Question",
                              questions: questionQuestions,
                              color: "#36b1f0"
                          })}
                  activeOpacity={0.8}
                >
                  <View style={[styles.row, { backgroundColor: "#36b1f0" }]}>
                    <Text style={styles.text}>Rejouer</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        );


    }
}
