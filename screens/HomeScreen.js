// HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, TextInput, Image, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { addWebsite, fetchWebsites, deleteWebsite } from '../database/db';
import ModalDialogue from '../components/ModalDialogue';
import styles from '../styles/master-style-sheet';

export default function HomeScreen() {
    // State variables to manage the form inputs, list of websites, modal visibility, and selected item
    const [keyword, setKeyword] = useState('');
    const [url, setUrl] = useState('');
    const [websites, setWebsites] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [sound, setSound] = useState();

    // Preloaded sound assets.
    const soundAssets = {
        add: require('../assets/sounds/ding.mp3'),
        delete: require('../assets/sounds/trash.mp3'),
    };

    // Cleanup function for the sound object to prevent memory leaks.
    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    // Effect hook to update the list of websites on component mount.
    useEffect(() => {
        updateList();
    }, []);

    // Function to play sound based on a given key (add or delete).
    async function playSound(soundKey) {
        const { sound } = await Audio.Sound.createAsync(soundAssets[soundKey]);
        setSound(sound);
        await sound.playAsync();
    }

    // Function to fetch websites from the database and update the state.
    const updateList = async () => {
        const fetchedWebsites = await fetchWebsites();
        setWebsites(fetchedWebsites);
    };

    // Function to handle adding a new website. It plays a sound upon successful addition.
    const handleAdd = async () => {
        if (keyword && url) {
            await addWebsite(keyword, url);
            setKeyword('');
            setUrl('');
            updateList();
            playSound('add');
        }
    };

    // Function to handle item selection from the list. Opens the modal dialogue.
    const handleSelectItem = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    // Render each item in the FlatList. Opens the modal dialogue on press.
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => handleSelectItem(item)}>
            <Text style={styles.itemText}>{item.keyword}</Text>
        </TouchableOpacity>
    );

    // Function to handle the deletion of a website. It plays a sound upon successful deletion.
    const handleDelete = async (id) => {
        await deleteWebsite(id);
        updateList();  // Refresh the list after deleting
        setModalVisible(false);  // Close the modal after deleting
        playSound('delete');
    };

    // Main component render method.
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Website Database</Text>
            <Image
                style={styles.titleImage}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/20/HelloAN.png' }}
            />
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
