import * as SQLite from 'expo-sqlite'


const SelectAllUser = () => {
    const db = SQLite.openDatabase("quiz.sqlite");
    const test = "tata"
    db.transaction(tx => {
        tx.executeSql("SELECT * FROM user", [], (tx, results) => {
        });
        return test
    });
}

export default SelectAllUser;
