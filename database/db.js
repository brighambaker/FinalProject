// db.js

import * as SQLite from 'expo-sqlite';

// Define the database name.
const dbName = 'websitesDB';

// Open a database connection. If the database does not exist, it will create one.
const db = SQLite.openDatabase(dbName);

// Initializes the database by creating a 'websites' table if it does not already exist.
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

// Adds a new website to the database.
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

// Retrieves all websites from the database.
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

// Updates a website's keyword and URL in the database based on its ID.
const updateWebsite = async (id, keyword, url) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "update websites set keyword = ?, url = ? where id = ?;",
                [keyword, url, id],
                () => resolve(), // Called when the transaction is successful.
                (_, error) => reject(error) // Called if there's an error.
            );
        });
    });
};

// Deletes a website from the database based on its ID.
const deleteWebsite = async (id) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "delete from websites where id = ?;",
                [id],
                () => resolve(), // Called when the transaction is successful.
                (_, error) => reject(error) // Called if there's an error.
            );
        });
    });
};

// Export the database functions to be used in other parts of the app
export { initDB, addWebsite, fetchWebsites, updateWebsite, deleteWebsite };
