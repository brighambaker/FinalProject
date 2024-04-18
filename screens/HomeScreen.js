// HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { addWebsite, fetchWebsites, deleteWebsite } from '../database/db';
import ModalDialogue from '../components/ModalDialogue';
import styles from '../styles/master-style-sheet';

export default function HomeScreen() {
    const [keyword, setKeyword] = useState('');
    const [url, setUrl] = useState('');
    const [websites, setWebsites] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [sound, setSound] = useState();

    const soundAssets = {
        add: require('../assets/sounds/ding.mp3'),
        delete: require('../assets/sounds/trash.mp3'),
    };

    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    useEffect(() => {
        updateList();
    }, []);

    async function playSound(soundKey) {
        const { sound } = await Audio.Sound.createAsync(soundAssets[soundKey]);
        setSound(sound);
        await sound.playAsync();
    }

    const updateList = async () => {
        const fetchedWebsites = await fetchWebsites();
        setWebsites(fetchedWebsites);
    };

    const handleAdd = async () => {
        if (keyword && url) {
            await addWebsite(keyword, url);
            setKeyword('');
            setUrl('');
            updateList();
            playSound('add');
        }
    };

    const handleSelectItem = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => handleSelectItem(item)}>
            <Text style={styles.itemText}>{item.keyword}</Text>
        </TouchableOpacity>
    );
    const handleDelete = async (id) => {
        await deleteWebsite(id);
        updateList();  // Refresh the list after deleting
        setModalVisible(false);  // Close the modal after deleting
        playSound('delete');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Website Database</Text>
            <TextInput
                placeholder="Enter keyword"
                value={keyword}
                onChangeText={setKeyword}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter URL"
                value={url}
                onChangeText={setUrl}
                style={styles.input}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
                <Text style={styles.addButtonText}>Add Website</Text>
            </TouchableOpacity>
            <FlatList
                data={websites}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
            {selectedItem && (
                <ModalDialogue
                    item={selectedItem}
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    onDelete={handleDelete}
                />
            )}
        </View>
    );
}
