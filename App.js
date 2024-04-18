// App.js

import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Platform, StyleSheet } from 'react-native';
import { initDB } from './database/db';
import HomeScreen from './screens/HomeScreen';
import styles from './styles/master-style-sheet';

export default function App() {
    useEffect(() => {
        if (Platform.OS !== 'web') {
            initDB().catch(err => console.error("Failed to initialize DB: ", err));
        }
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <HomeScreen />
        </View>
    );
}


