import * as SQLite from 'expo-sqlite'


const InsertUser = (userName) => {
    const db = SQLite.openDatabase("quiz.sqlite");
    db.transaction(tx => {
        tx.executeSql("INSERT INTO user (name, score) values (?, ?)", [userName, 0]);
    });
}

export default InsertUser;
