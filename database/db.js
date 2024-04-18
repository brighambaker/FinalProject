// db.js

import * as SQLite from 'expo-sqlite';

const dbName = 'websitesDB';

const db = SQLite.openDatabase(dbName);

const initDB = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "create table if not exists websites (id integer primary key not null, keyword text, url text);",
                [],
                () => resolve(),
                (_, error) => reject(error)
            );
        });
    });
};

const addWebsite = async (keyword, url) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "insert into websites (keyword, url) values (?, ?);",
                [keyword, url],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            );
        });
    });
};

const fetchWebsites = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "select * from websites;",
                [],
                (_, result) => resolve(result.rows._array),
                (_, error) => reject(error)
            );
        });
    });
};

const updateWebsite = async (id, keyword, url) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "update websites set keyword = ?, url = ? where id = ?;",
                [keyword, url, id],
                () => resolve(),
                (_, error) => reject(error)
            );
        });
    });
};

const deleteWebsite = async (id) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "delete from websites where id = ?;",
                [id],
                () => resolve(),
                (_, error) => reject(error)
            );
        });
    });
};

export { initDB, addWebsite, fetchWebsites, updateWebsite, deleteWebsite };
