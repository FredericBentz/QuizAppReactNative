import React from 'react';
import SQLite from 'react-native-sqlite-storage';


const InsertUser = (userName) => {
    const db = SQLite.openDatabase("quiz.db");
    db.transaction(tx => {
    // tx.executeSql(`INSERT INTO user (name, score) values (${  this.state.userName  }, 0);`);
        tx.executeSql("INSERT INTO user (name, score) values (?, ?)", [userName, 0]);
    });
}

export default InsertUser;
