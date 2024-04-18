// ModalDialogue.js

import React from 'react';
import { Modal, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/master-style-sheet';

export default function ModalDialogue({ item, visible, onClose, onDelete }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Keyword: {item.keyword}</Text>
                    <Text style={styles.modalText}>URL: {item.url}</Text>
                    <Image
                        style={styles.modalImage}
                        source={{ uri: item.url }}
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.buttonClose}
                            onPress={onClose}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonDelete}
                            onPress={() => onDelete(item.id)}
                        >
                            <Text style={styles.textStyle}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
