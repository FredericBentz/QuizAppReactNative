import SQLite from 'react-native-sqlite-storage';


const SelectAllUser = () => {
    const db = SQLite.openDatabase("quiz.db");
    db.transaction(tx => {
        console.log('Résultat');
        tx.executeSql("SELECT * FROM user", [], (tx, results) => {
            return results.rows.length

        });
    });
}

export default SelectAllUser;
