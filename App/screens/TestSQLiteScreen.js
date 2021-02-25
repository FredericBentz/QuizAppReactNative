import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import * as SQLite from 'expo-sqlite';

export default class QuizzScreen extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            name: '',
            score: 0,
        };
    }

    render(){

        const db = SQLite.openDatabase("quiz.db");
        db.transaction(tx => {
            tx.executeSql("CREATE TABLE if not exists user (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT, score INTEGER);");
        });

        db.transaction(tx => {
            tx.executeSql("INSERT INTO user (name, score) values ('Frédéric',7);");
            tx.executeSql("INSERT INTO user (name, score) values ('Toto',4);");
            tx.executeSql("INSERT INTO user (name, score) values ('Titi',3);");
        });

                db.transaction(
                    tx => {

                            console.log('Résultat');
                            tx.executeSql("select * from user", [], (tx, results) => {
                                const dataLenght = results.rows.length;
                                const answers = [];
                                for (let i = 0; i < dataLenght; i++) {
                                    answers.push(results.rows.item(i));
                                    }
                                let responseJson = (JSON.stringify(answers));
                                console.log(JSON.stringify(responseJson));

                                });
                        }

                        );

        return (
          <ScrollView>

            <View>
              <Text>Question: </Text>
              <Text>Toto: </Text>
              <Text>Toto: </Text>
            </View>
          </ScrollView>
        );


    }
}


