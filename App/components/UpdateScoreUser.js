import * as SQLite from 'expo-sqlite'


const UpdateScoreUser = (userName, userScore) => {
    const db = SQLite.openDatabase("quiz.sqlite");
    db.transaction(tx => {
        // tx.executeSql(`INSERT INTO user (name, score) values (${  this.state.userName  }, 0);`);
        tx.executeSql("UPDATE user SET score = ? WHERE name = ?", [userScore, userName]);
    });
}

export default UpdateScoreUser;
